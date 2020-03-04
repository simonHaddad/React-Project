import * as moment from 'moment';

export function stringIsNullOrEmpty(str) {
    if (str !== undefined && str !== null && str.length !== 0) {
        return false;
    } else {
        return true;
    }
}

export function isOdd(num) {
    return num % 2;
}

export function formatDate(dateString, format) {
    const momentDate = moment(dateString);
    return momentDate.format(format);
}