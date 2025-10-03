import { Action } from '@ngrx/store';
import { appReducer, AppState } from './default.reducers';
import { getDataSuccess, resetAppState } from './default.actions';

describe('appReducer', () => {
  const initial: AppState = { loading: false, data: [] };

  it('should return initial state when state is undefined', () => {
    const dummyAction: Action = { type: '@@init' };
    const state = appReducer(undefined, dummyAction);
    expect(state).toEqual(initial);
  });

  it('should handle resetAppState', () => {
    const modified: AppState = { loading: true, data: [{ id: 99 }] };
    const state = appReducer(modified, resetAppState());
    expect(state).toEqual(modified);
  });

  it('should handle getDataSuccess', () => {
    const payload = [{ id: 1 }];
    const state = appReducer(initial, getDataSuccess({ payload }));
    expect(state.data.length).toBe(1);
    expect(state.data[0].id).toBe(1);
  });
});
