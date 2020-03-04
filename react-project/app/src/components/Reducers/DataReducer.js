import * as StoreDefinitions from '../StoreDefinitions';

export default function dataReducer(state = {
    items: [],
    launchPads: [],
    launchDates: []
}, action) {
    switch (action.type) {
        case StoreDefinitions.POPULATE_DATA:
            state = {
                ...state,
                items: action.payload
            }
            break;

        case StoreDefinitions.POPULATE_LISTS:
            state = {
                ...state,
                launchPads: action.payload.launchPads,
                launchDates: action.payload.launchDates
            }
            break;

        default:
            break;
    }

    return { ...state };
}