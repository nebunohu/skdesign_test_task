import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../index';
import { TFormActions } from '../redux/actions/form-actions';

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TFormActions; 

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, TRootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;