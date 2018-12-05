import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AllProgramsLoaded,
  AllProgramsRequested,
  ProgramActionTypes,
} from '../actions/program.actions';
import {throwError,of} from 'rxjs';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from "rxjs/operators";
import {ProgramsService} from '../services/programs.service';
import {State} from '../reducers';
import {select, Store} from '@ngrx/store';
import {allProgramsLoaded} from '../selectors/program.selectors';

@Injectable()
export class ProgramsEffects {

    @Effect()
    loadAllPrograms$ = this.actions$
    .pipe(
      ofType<AllProgramsRequested>(ProgramActionTypes.AllProgramsRequested),
      withLatestFrom(this.store.pipe(select(allProgramsLoaded))),
      filter(([action, allProgramsLoaded]) => !allProgramsLoaded),
      mergeMap(() => this.programsService.findAllPrograms()),
      map(programs => new AllProgramsLoaded({programs}))
    );

  constructor(private actions$ :Actions, private programsService: ProgramsService,
              private store: Store<State>) {}
}
