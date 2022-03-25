import { TFormState } from "../reducers/root";

export const SAVE_FORM: "SAVE_FORM" = "SAVE_FORM";
export const CLEAR_FORM: "CLEAR_FORM" = "CLEAR_FORM";

export type TSaveForm = {
  type: typeof SAVE_FORM;
  form: TFormState;
}

export type TClearForm = {
  type: typeof CLEAR_FORM;
}

export const saveForm = (form: TFormState): TSaveForm => {
  return {
    type: SAVE_FORM,
    form
  }
}

export const clearForm = (): TClearForm => {
  return {
    type: CLEAR_FORM
  }
}

export type TFormActions = TSaveForm | TClearForm; 