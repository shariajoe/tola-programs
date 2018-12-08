import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AllActivitiesLoaded,
  AllActivitiesRequested,
  ActivityActionTypes,
  AddActivity,
  AddFailure,
  AddActivitySuccess,
  DeleteActivity,
  DeleteActivityFailure,
  DeleteActivitySuccess,
  UpdateActivity,
  UpdateActivitySuccess,
  UpdateActivityFailure

} from '../actions/activity.actions';
import {throwError,of} from 'rxjs';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom, switchMap} from "rxjs/operators";
import {ActivitiesService} from '../services/activities.service';
import {State} from '../reducers';
import {select, Store} from '@ngrx/store';
import {allActivitiesLoaded} from '../selectors/activity.selectors';
import {Observable} from "rxjs";

@Injectable()
export class ActivityEffects {

    @Effect()
    loadAllActivities$ = this.actions$
    .pipe(
      ofType<AllActivitiesRequested>(ActivityActionTypes.AllActivitiesRequested),
      withLatestFrom(this.store.pipe(select(allActivitiesLoaded))),
      filter(([action, allActivitiesLoaded]) => !allActivitiesLoaded),
      mergeMap(() => this.activitiesService.findAllActivities()),
      map(activities => new AllActivitiesLoaded({activities}))
    );


    @Effect() 
    createActivity$ = this.actions$
      .ofType<AddActivity>(ActivityActionTypes.AddActivity)
      .pipe(
      switchMap((action: any) => {
        return this.activitiesService.addActivity(action.payload)
          .pipe(
            map(
              (activity: any) =>
                new AddActivitySuccess({ activity: activity }),
            ),
            catchError(err =>
              of(new AddFailure({ any: err })),
            ),
          );
      }),
    );

    @Effect() 
    updateActivity$ = this.actions$
      .ofType<UpdateActivity>(ActivityActionTypes.UpdateActivity)
      .pipe(
      switchMap((action: any) => {
        return this.activitiesService.saveActivity(action.payload.activity.id, action.payload.activity.changes)
          .pipe(
            map(
              (activity: any) =>
                new UpdateActivitySuccess({ activity: activity }),
            ),
            catchError(err =>
              of(new UpdateActivityFailure({ any: err })),
            ),
          );
      }),
    );

    @Effect() 
    deleteActivity$ = this.actions$
      .ofType<DeleteActivity>(ActivityActionTypes.DeleteActivity)
      .pipe(
      switchMap((action: any) => {
        return this.activitiesService.deleteActivity(action.payload.id)
          .pipe(
            map(
              (resp: any) =>
                new DeleteActivitySuccess({id:action.payload.id})
            ),
            catchError(err =>
              of(new DeleteActivityFailure({ any: err })),
            ),
          );
      }),
    );

  constructor(private actions$ :Actions, private activitiesService: ActivitiesService,
              private store: Store<State>) {}
}
