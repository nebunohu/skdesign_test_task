import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../index';
import { TFormActions } from '../redux/actions/form-actions';
import { ChangeEvent, MutableRefObject } from 'react';

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TFormActions; 

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, TRootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;

export type TFormInput = {
  id: string;
  inputLabel: string;
  placeholder: string;
  inputWidth?: string;
  required?: boolean;
  validationTemplate?: object;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: {message: string};
  value?: string; 
}