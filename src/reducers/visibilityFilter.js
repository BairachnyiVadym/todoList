/**
 * Created by vadim on 17.01.18.
 */
import {SET_VISIBILITY_FILTER, VisibilityFilters} from "../actions/ActionCreators";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
                return action.filter;
        default:
            return state;

    }
}

export default visibilityFilter;