import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/activity.actions';
import {
  catchError,
  filter,
  map,
  mergeMap,
  withLatestFrom,
  switchMap
} from 'rxjs/operators';
import { ActivitiesService } from '../../../shared/activities.service';
import { State } from '../../../reducers';
import { select, Store } from '@ngrx/store';
import { allActivitiesLoaded } from '../selectors/activity.selectors';
import { Observable, of } from 'rxjs';

@Injectable()
export class ActivityEffects {
  @Effect()
  loadAllActivities$ = this.actions$.pipe(
    ofType<fromActions.AllActivitiesRequested>(
      fromActions.ActivityActionTypes.AllActivitiesRequested
    ),
    withLatestFrom(this.store.pipe(select(allActivitiesLoaded))),
    filter(([action, allActivitiesLoaded]) => !allActivitiesLoaded),
    mergeMap(() => this.activitiesService.findAllActivities()),
    map(activities => new fromActions.AllActivitiesLoaded({ activities }))
  );

  @Effect()
  createActivity$ = this.actions$
    .ofType<fromActions.AddActivity>(
      fromActions.ActivityActionTypes.AddActivity
    )
    .pipe(
      switchMap((action: any) => {
        return this.activitiesService.addActivity(action.payload).pipe(
          map(
            (activity: any) =>
              new fromActions.AddActivitySuccess({ activity: activity })
          ),
          catchError(err => of(new fromActions.AddActivityFailure({ err })))
        );
      })
    );

  @Effect()
  updateActivity$ = this.actions$
    .ofType<fromActions.UpdateActivity>(
      fromActions.ActivityActionTypes.UpdateActivity
    )
    .pipe(
      switchMap((action: any) => {
        return this.activitiesService
          .saveActivity(
            action.payload.activity.id,
            action.payload.activity.changes
          )
          .pipe(
            map(
              _ =>
                new fromActions.UpdateActivitySuccess({
                  activity: action.payload.activity
                })
            ),
            catchError(err =>
              of(new fromActions.UpdateActivityFailure({ err }))
            )
          );
      })
    );

  @Effect()
  deleteActivity$ = this.actions$
    .ofType<fromActions.DeleteActivity>(
      fromActions.ActivityActionTypes.DeleteActivity
    )
    .pipe(
      switchMap((action: any) => {
        return this.activitiesService.deleteActivity(action.payload.id).pipe(
          map(
            _ =>
              new fromActions.DeleteActivitySuccess({ id: action.payload.id })
          ),
          catchError(err => of(new fromActions.DeleteActivityFailure({ err })))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService,
    private store: Store<State>
  ) {}
}
