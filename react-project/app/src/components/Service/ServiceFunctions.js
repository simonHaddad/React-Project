import axios from 'axios';
import * as ServiceDefinitions from './ServiceDefinitions';
import { stringIsNullOrEmpty } from '../Utils/Tools';

const TIMEOUT = 15000;

function makeUrl(methodUrl) {
    return 'http://localhost:8000' + methodUrl;
}

export async function getLaunchPadNames() {
    const result = {
        status: -1,
        launchPads: [{
            key: "",
            label: "Any"
        }]
    };
    try {
        const response = await axios.get(makeUrl(ServiceDefinitions.GET_LAUNCHPADS), {
            validateStatus: (status) => true,
            timeout: TIMEOUT
        });
        switch (response.status) {
            case 200:
                result.status = 1;
                response.data.forEach((el) => {
                    result.launchPads.push({
                        key: el.id,
                        label: el.full_name
                    })
                });
                break;
            default:
                result.status = -1
                break;
        }
    } catch (error) {
        result.status = -1;
    }
    return result;
}
export async function getLaunchDates() {
    const result = {
        status: -1,
        launchDates: [{
            key: "",
            label: "Any"
        }]
    };
    try {
        const response = await axios.get(makeUrl(ServiceDefinitions.GET_LAUNCHES), {
            validateStatus: (status) => true,
            timeout: TIMEOUT
        });
        switch (response.status) {
            case 200:
                result.status = 1;
                response.data.forEach(el => {
                    const fullYear = (new Date(el.launch_date_local)).getFullYear();
                    if (!result.launchDates.find((el2) => {
                        return el2.key === fullYear;
                    })) {
                        result.launchDates.push({
                            key: fullYear,
                            label: fullYear
                        })
                    }
                });
                break;
            default:
                result.status = -1
                break;
        }
    } catch (error) {
        result.status = -1;
    }
    return result;
}
export async function getLaunches(keywords, launchPadId, minYear, maxYear) {
    const result = {
        status: -1,
        items: []
    };
    try {
        const response = await axios.get(makeUrl(ServiceDefinitions.GET_LAUNCHES), {
            validateStatus: (status) => true,
            timeout: TIMEOUT
        });
        switch (response.status) {
            case 200:
                result.status = 1;
                result.items = response.data.filter((el) => {
                    return (stringIsNullOrEmpty(keywords) || el.rocket.rocket_name.includes(keywords))
                    && (stringIsNullOrEmpty(launchPadId) || el.launch_site.site_id === launchPadId)
                    && (stringIsNullOrEmpty(minYear) || (new Date(el.launch_date_local)).getFullYear() >= parseInt(minYear))
                    && (stringIsNullOrEmpty(maxYear) || (new Date(el.launch_date_local)).getFullYear() <= parseInt(maxYear))
                });
                break;
            default:
                result.status = -1
                break;
        }
    } catch (error) {
        result.status = -1;
    }
    return result;
}