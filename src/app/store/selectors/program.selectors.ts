import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProgramState} from '../reducers/program.reducer';

import * as fromProgram from '../reducers/program.reducer';

export const selectProgramsState = createFeatureSelector<ProgramState>("programs");

export const selectAllPrograms = createSelector(
  selectProgramsState,
  fromProgram.selectAll
);

export const allProgramsLoaded = createSelector(
  selectProgramsState,
  programState => programState.allProgramsLoaded
);









