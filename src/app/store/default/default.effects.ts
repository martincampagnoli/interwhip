import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, catchError, switchMap } from 'rxjs';
import { getFailure, getData } from './default.actions';
import { getDataSuccess } from './default.actions';
import { DataService } from '../../services/data.service';

/**
 * Effects for managing application actions related to data.
 */
@Injectable()
export class AppEffects {
  private dataService = inject(DataService);
  private actions$ = inject(Actions);

  /**
   * Effect to fetch data.
   */
  getData = createEffect(() =>
    this.actions$.pipe(
      ofType(getData),
      switchMap(() =>
        this.dataService.getData().pipe(
          switchMap((data: any) => [getDataSuccess(data)]),
          catchError((error) => of(getFailure({ payload: error })))
        )
      )
    )
  );
}
