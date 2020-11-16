import { combineReducers } from "redux";
import themeReducer from './themeReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import sidebarReducer from './sidebarReducer';
import { RESET_APP } from "../actions/action-types";

const appReducer = combineReducers({
    form: reduxFormReducer,
    theme: themeReducer,
    sidebar: sidebarReducer,
});

export const rootReducer = (state, action) => {
    if (action.type === RESET_APP) {
        // only keep locale
        state = { locale: state.locale };
    }
    return appReducer(state, action);
};

