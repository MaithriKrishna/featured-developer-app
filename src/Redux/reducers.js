import {
    UPDATE_LOADING_STATUS,
    ADD_DEVELOPERS_DATA,
    ADD_NEW_DEVELOPER_DATA,
    REMOVE_DEVELOPER_DATA_BY_ID,
    UPDATE_DEVELOPER_DATA
} from "./actions";

const initialState = {
    isLoading: false,
    developersData: [],
    error: ''
}

const addNewDeveloper = (developersData, newDeveloper) => {
    developersData.push(newDeveloper);
    return developersData;
}

const deleteDeveloper = (records, id) =>
    records.filter(record => record.id !== id)

const modifyDeveloper = (records, data) => {
    let index = records.findIndex(record => record.id === data.id);
    records[index] = data;
    return records;
}

export const featuredDevelopersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOADING_STATUS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case ADD_DEVELOPERS_DATA:
            return Object.assign({}, state, {
                isLoading: false,
                developersData: action.developersData,
                error: ''
            });
        case ADD_NEW_DEVELOPER_DATA:
            return Object.assign({}, state, {
                isLoading: false,
                developersData: addNewDeveloper(state.developersData, action.data),
                error: ''
            });
        case REMOVE_DEVELOPER_DATA_BY_ID:
            return Object.assign({}, state, {
                isLoading: false,
                developersData: deleteDeveloper(state.developersData, action.id),
                error: ''
            });
        case UPDATE_DEVELOPER_DATA:
            return Object.assign({}, state, {
                isLoading: false,
                developersData: modifyDeveloper(state.developersData, action.data),
                error: ''
            });
        default:
            return state;
    }
}