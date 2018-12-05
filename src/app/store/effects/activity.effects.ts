import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AllActivitiesLoaded,
  AllActivitiesRequested,
  ActivityActionTypes,
} from '../actions/activity.actions';
import {throwError,of} from 'rxjs';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from "rxjs/operators";
import {ActivitiesService} from '../services/activities.service';
import {State} from '../reducers';
import {select, Store} from '@ngrx/store';
import {allActivitiesLoaded} from '../selectors/activity.selectors';

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

  constructor(private actions$ :Actions, private activitiesService: ActivitiesService,
              private store: Store<State>) {}
}
