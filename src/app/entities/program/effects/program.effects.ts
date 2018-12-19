import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/program.actions';
import {
  catchError,
  filter,
  map,
  mergeMap,
  withLatestFrom
} from 'rxjs/operators';
import { ProgramsService } from '../../../shared/programs.service';
import { State } from '../../../reducers';
import { select, Store } from '@ngrx/store';
import { allProgramsLoaded } from '../selectors/program.selectors';

@Injectable()
export class ProgramEffects {
  @Effect()
  loadAllPrograms$ = this.actions$.pipe(
    ofType<fromActions.AllProgramsRequested>(
      fromActions.ProgramActionTypes.AllProgramsRequested
    ),
    withLatestFrom(this.store.pipe(select(allProgramsLoaded))),
    filter(([action, allProgramsLoaded]) => !allProgramsLoaded),
    mergeMap(() => this.programsService.findAllPrograms()),
    map(programs => new fromActions.AllProgramsLoaded({ programs }))
  );

  constructor(
    private actions$: Actions,
    private programsService: ProgramsService,
    private store: Store<State>
  ) {}
}
