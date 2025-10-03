import {
  getFailure,
  getData,
  getDataSuccess,
  resetAppState,
} from './default.actions';

describe('Default Actions', () => {
  it('should create getData action with correct type', () => {
    const action = getData();
    expect(action.type).toBe('[Movie] Get Data');
  });

  it('should create getDataSuccess with payload', () => {
    const payload = [{ id: 1 }];
    const action = getDataSuccess({ payload });
    expect(action.type).toBe('[Movie] Get Data Success');
    expect(action.payload).toEqual(payload);
  });

  it('should create getFailure with error payload', () => {
    const action = getFailure({ payload: { message: 'Error occurred' } });
    expect(action.type).toBe('[Default] GetFailure Error');
    expect(action.payload.message).toBe('Error occurred');
  });

  it('should create resetAppState action', () => {
    const action = resetAppState();
    expect(action.type).toBe('[Default] Reset app state');
  });
});
