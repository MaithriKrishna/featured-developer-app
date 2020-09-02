import React from "react";
import { Form } from "../Form";

export const EditForm = ({ developerData, modifyDevelopersData }) => {
    const handleSubmit = (formData, developerData) => {
        modifyDevelopersData({
            ...formData,
            id: developerData.id
        });
    };
    return developerData ? <Form developerData={developerData} submitForm={handleSubmit} /> : null;
}



