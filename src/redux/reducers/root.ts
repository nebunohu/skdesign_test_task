import { TFormActions } from './../actions/form-actions';
import { combineReducers } from "redux";

type TState = {

};

const formInitialState: TState = {

};

export const formReducer = (state = formInitialState, action: TFormActions): TState => {
  switch (action.type) {
    default: return state;
  }
};

export const rootReducer = combineReducers({

});