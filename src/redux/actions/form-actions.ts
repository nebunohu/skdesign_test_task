import { TFormState } from "../reducers/root";

export const SAVE_FORM: "SAVE_FORM" = "SAVE_FORM";

export type TSaveForm = {
  type: typeof SAVE_FORM
  form: TFormState;
}

export const saveForm = (form: TFormState): TSaveForm => {
  return {
    type: SAVE_FORM,
    form
  }
}

export type TFormActions = TSaveForm; 