import { createAction, props } from '@ngrx/store';
import { PlaceholderModel } from '../../models/PlaceholderModel';

/**
 * Action representing a failure during data retrieval.
 */
export const getFailure = createAction(
  '[Default] GetFailure Error',
  props<{ payload: { message: string } }>()
);

/**
 * Action to initiate retrieval of data.
 */
export const getData = createAction('[Movie] Get Data');

/**
 * Action indicating successful retrieval of data.
 */
export const getDataSuccess = createAction(
  '[Movie] Get Data Success',
  props<{ payload: PlaceholderModel[] }>()
);

/**
 * Action to reset the application state.
 */
export const resetAppState = createAction('[Default] Reset app state');
