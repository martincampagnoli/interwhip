import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, Subject, throwError } from 'rxjs';
import { AppEffects } from './default.effects';
import { DataService } from '../../services/data.service';
import { getData, getDataSuccess, getFailure } from './default.actions';
import { PlaceholderModel } from '../../models/PlaceholderModel';
import { Action } from '@ngrx/store';

class MockDataService {
  getData = jest.fn();
}

describe('AppEffects', () => {
  let actions$: Subject<Action>;
  let effects: AppEffects;
  let dataService: MockDataService;

  beforeEach(() => {
    actions$ = new Subject<Action>();

    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        { provide: DataService, useClass: MockDataService },
        provideMockActions(() => actions$ as unknown as Observable<Action>),
      ],
    });

    effects = TestBed.inject(AppEffects);
    dataService = TestBed.inject(DataService) as unknown as MockDataService;
  });

  afterEach(() => {
    actions$.complete();
  });

  it('should emit getDataSuccess when getData succeeds', (done) => {
    const mockData: PlaceholderModel[] = [{ id: 1 }];
    dataService.getData.mockReturnValue(of(mockData));

    effects.getData.subscribe((result) => {
      expect(result).toEqual(getDataSuccess({ payload: mockData }));
      done();
    });

    actions$.next(getData());
  });

  it('should emit getFailure when getData fails', (done) => {
    const error = { message: 'Boom' };
    dataService.getData.mockReturnValue(throwError(() => error));

    effects.getData.subscribe((result) => {
      expect(result).toEqual(getFailure({ payload: error }));
      done();
    });

    actions$.next(getData());
  });
});
