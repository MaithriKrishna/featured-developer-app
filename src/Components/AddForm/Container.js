import { connect } from "react-redux";
import { AddDeveloperFormView } from "./index";
import { addNewDeveloperData } from "../../Redux/actions";

export const AddDeveloperFormContainer = connect(null, { addNewDeveloperData })(AddDeveloperFormView);