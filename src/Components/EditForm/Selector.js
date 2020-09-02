export const selectDeveloperDataById = (developersData, id) =>
    developersData.length ? developersData.find(data => data.id === parseInt(id)) : null;
