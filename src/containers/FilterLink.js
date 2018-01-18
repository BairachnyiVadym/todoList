/**
 * Created by vadim on 18.01.18.
 */

import {SetVisibilityFilter} from "../actions/ActionCreators";
import {connect} from "react-redux";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(SetVisibilityFilter(ownProps.filter))
        }
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;