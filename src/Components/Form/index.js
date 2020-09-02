import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
    Text,
    InputField,
    Label,
    Submit,
    DeveloperForm
} from "./style";

export const Form = ({ developerData, submitForm, isNew = false }) => {
    const [formData, setFormData] = useState(developerData);
    const [formChanged, setFormChanged] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleChange = (event) => {
        if (!formChanged) setFormChanged(true);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData);
        submitForm(
            formData,
            developerData
        );
        setRedirect(true);
    };

    return (
        <DeveloperForm>
            <h2><Text>Featured </Text><Text dark>Developers</Text></h2>
            <form onSubmit={handleSubmit}>
                <Label>Developer Logo Image URL</Label>
                <InputField type="text" id="logo" name="logo" defaultValue={developerData.logo || ""} onChange={handleChange} />
                <Label>Developer Name</Label>
                <InputField type="text" id="imgTitle" name="imgTitle" defaultValue={developerData.imgTitle || ""} onChange={handleChange} />
                <Label>Years of Experience</Label>
                <InputField type="text" id="totalExp" name="totalExp" defaultValue={developerData.totalExp || ""} onChange={handleChange} />
                <Label>Projects Count</Label>
                <InputField type="text" id="totalProjects" name="totalProjects" defaultValue={developerData.totalProjects || ""} onChange={handleChange} />
                <Label>Description</Label>
                <InputField type="text" id="desc" name="desc" defaultValue={developerData.desc || ""} onChange={handleChange} />
                <Label>Project name</Label>
                <InputField type="text" id="title" name="title" defaultValue={developerData.title || ""} onChange={handleChange} />
                <Label>Project location</Label>
                <InputField type="text" id="location" name="location" defaultValue={developerData.location || ""} onChange={handleChange} />
                <Label>Project image URL</Label>
                <InputField type="text" id="imgURL" name="imgURL" defaultValue={developerData.imgURL || ""} onChange={handleChange} />
                <div>
                    <Submit type="submit" value={`${isNew ? 'ADD DEVELOPER' : 'UPDATE'}`} formChanged={formChanged} />
                </div>
            </form>
            {redirect ? <Redirect to={'/'} /> : null}
        </DeveloperForm>
    );
}



