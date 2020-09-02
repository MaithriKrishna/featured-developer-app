import { connect } from "react-redux";
import { HomePageView } from "./index";
import { fetchDevelopersData, addNewDeveloperData, deleteDevelopersData, modifyDevelopersData } from "../../Redux/actions";

const mapStateToProps = (state) => {
    return {
        developersData: state.developersData
    };
}

const mapDispatchToProps = {
    fetchDevelopersData,
    addNewDeveloperData,
    deleteDevelopersData,
    modifyDevelopersData
}

export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageView);