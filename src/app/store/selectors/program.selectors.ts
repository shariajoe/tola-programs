import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProgramState} from '../reducers/program.reducer';

import * as fromProgram from '../reducers/program.reducer';

export const selectProgramsState = createFeatureSelector<ProgramState>("programs");


export const selectCourseById = (programId:number) => createSelector(
  selectProgramsState,
  programState => programState.entities[programId]
);


export const selectAllPrograms = createSelector(
  selectProgramsState,
  fromProgram.selectAll
);

export const allProgramsLoaded = createSelector(
  selectProgramsState,
  programState => programState.allProgramsLoaded
);









