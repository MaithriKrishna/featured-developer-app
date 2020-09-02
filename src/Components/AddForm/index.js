import React from "react";
import { Form } from "../Form";
import rn from 'random-number';

export const AddDeveloperFormView = ({ addNewDeveloperData }) => {

    const options = {
        min: 10,
        max: 1000,
        integer: true
    }

    const handleSubmit = (formData) => {
        addNewDeveloperData({
            ...formData,
            id: rn(options)
        });
    };
    return <Form developerData={{}} submitForm={handleSubmit} isNew />;
}



