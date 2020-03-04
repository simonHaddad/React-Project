import * as ServiceFunctions from './Service/ServiceFunctions';

export const POPULATE_DATA = "populate_data";
export const POPULATE_LISTS = "populate_lists";

export function mapDispatchToProps(dispatch) {
    return {
        populateData: (keywords, launchPadId, minYear, maxYear) => {
            ServiceFunctions.getLaunches(keywords, launchPadId, minYear, maxYear).then(
                (result) => {
                    dispatch({
                        type: POPULATE_DATA,
                        payload: result.items
                    })
                }
            );
        },
        populateLists: () => {
            ServiceFunctions.getLaunchPadNames().then(
                (result_launchPads) => {
                    ServiceFunctions.getLaunchDates().then(
                        (result_launchDates) => {
                            dispatch({
                                type: POPULATE_LISTS,
                                payload: {
                                    launchPads: result_launchPads.launchPads,
                                    launchDates: result_launchDates.launchDates
                                }
                            })
                        }
                    )
                }
            );
        }
    }
}