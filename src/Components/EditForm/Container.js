import { connect } from "react-redux";
import { EditForm } from "./index";
import { modifyDevelopersData } from "../../Redux/actions";
import { selectDeveloperDataById } from "./Selector";

const mapStateToProps = ({developersData},{match}) => {
    return {
        developerData: selectDeveloperDataById(developersData, match.params.id)
    };
}

export const EditFormContainer = connect(mapStateToProps, { modifyDevelopersData })(EditForm);