import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EditFormContainer } from "../EditForm/Container"
import { HomePageContainer } from "../HomePage/Container";
import { AddDeveloperFormContainer } from "../AddForm/Container"

export const FeaturedDeveloperApp = ({ fetchDevelopersData }) => {
    // useEffect(() => {
    //     fetchDevelopersData()
    // }, []);

    return <Router>
        <Switch>
            <Route path="/" exact component={HomePageContainer} />
            <Route path="/new" exact component={AddDeveloperFormContainer} />
            <Route path="/:id" component={EditFormContainer} />
        </Switch>
    </Router>
}