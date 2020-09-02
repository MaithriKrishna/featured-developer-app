import axios from "axios";

export const UPDATE_LOADING_STATUS = "UPDATE_LOADING_STATUS";
export const ADD_DEVELOPERS_DATA = "ADD_DEVELOPERS_DATA";
export const ADD_NEW_DEVELOPER_DATA = "ADD_NEW_DEVELOPER_DATA";
export const UPDATE_DEVELOPER_DATA = "UPDATE_DEVELOPER_DATA";
export const REMOVE_DEVELOPER_DATA_BY_ID = "REMOVE_DEVELOPER_DATA_BY_ID";

const url = "http://localhost:3000/items";

const updateLoadingStatus = () => {
    return {
        type: UPDATE_LOADING_STATUS
    }
}

const addDevelopersData = (developersData) => {
    return {
        type: ADD_DEVELOPERS_DATA,
        developersData
    }
}

const appendNewDeveloperData = (data) => {
    return {
        type: ADD_NEW_DEVELOPER_DATA,
        data
    }
}

const updateDevelopersData = (data) => {
    return {
        type: UPDATE_DEVELOPER_DATA,
        data
    }
}

const removeDeveloperDataById = (id) => {
    return {
        type: "REMOVE_DEVELOPER_DATA_BY_ID",
        id
    }
}

export const fetchDevelopersData = () => {
    return (dispatch) => {
        dispatch(updateLoadingStatus());
        return axios
            .get(url)
            .then((response) =>
                dispatch(addDevelopersData(response.data))
            )
            .catch((err) => console.log(err));
    };
}

export const addNewDeveloperData = (data) => {
    return (dispatch) => {
        dispatch(updateLoadingStatus());
        return axios
            .post(url, data)
            .then((response) =>
                dispatch(appendNewDeveloperData(response.data))
            )
            .catch((err) => console.log(err));
    };
}

export const modifyDevelopersData = (data) => {
    return (dispatch) => {
        dispatch(updateLoadingStatus());
        return axios
            .put(`${url}/${data.id}`, data)
            .then((response) =>
                dispatch(updateDevelopersData(data))
            )
            .catch((err) => console.log(err));
    };
}

export const deleteDevelopersData = (id) => {
    return (dispatch) => {
        dispatch(updateLoadingStatus());
        return axios
            .delete(`${url}/${id}`)
            .then((response) =>
                dispatch(removeDeveloperDataById(id))
            )
            .catch((err) => console.log(err));
    };
}