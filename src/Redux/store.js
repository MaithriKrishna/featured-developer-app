import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { featuredDevelopersReducer } from "./reducers";

export const store = () =>
    createStore(
        featuredDevelopersReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );