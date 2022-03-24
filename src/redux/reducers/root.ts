import { SAVE_FORM, TFormActions } from './../actions/form-actions';
import { combineReducers } from "redux";

export type TFormState = {
  name: string;
  phone: string;
  email: string;
  profileLink: string;
  city: string;
  organization: string;
  recipient: string;
  source: string; 
};

const formInitialState: TFormState = {
  name: '',
  phone: '',
  email: '',
  profileLink: '',
  city: '',
  organization: '',
  recipient: '',
  source: '',
};

export const formReducer = (state = formInitialState, action: TFormActions): TFormState => {
  switch (action.type) {
    case SAVE_FORM: {
      return {
        ...action.form
      }
    }
    default: return state;
  }
};

export const rootReducer = combineReducers({
  form: formReducer
});