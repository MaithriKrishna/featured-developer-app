import { connect } from "react-redux";
import { FeaturedDeveloperApp } from "./index";
import { fetchDevelopersData } from "../../Redux/actions";

const mapDispatchToProps = {
    fetchDevelopersData
}

export const FeaturedDeveloperContainer = connect(null, mapDispatchToProps)(FeaturedDeveloperApp);