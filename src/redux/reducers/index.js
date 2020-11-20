import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import themeReducer from './themeReducer';
import rtlReducer from './rtlReducer';
import sidebarReducer from './sidebarReducer';
import cryptoTableReducer from './cryptoTableReducer';
import newOrderTableReducer from './newOrderTableReducer';
import customizerReducer from './customizerReducer';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import { RESET_APP } from "../actions/action-types";

const appReducer = combineReducers({
    form: reduxFormReducer, // mounted under "form",
    theme: themeReducer,
    rtl: rtlReducer,
    sidebar: sidebarReducer,
    cryptoTable: cryptoTableReducer,
    newOrder: newOrderTableReducer,
    customizer: customizerReducer,
    todos: todoReducer,
    user: authReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === RESET_APP) {
      // only keep locale
      state = { locale: state.locale };
  }
  return appReducer(state, action);
};
