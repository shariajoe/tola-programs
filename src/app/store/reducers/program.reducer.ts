import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Program } from '../../models/program.model';
import { ProgramActions, ProgramActionTypes } from '../actions/program.actions';

export interface ProgramState extends EntityState<Program> {
  // additional entities state properties
  allProgramsLoaded: boolean;
}

export const adapter: EntityAdapter<Program> = createEntityAdapter<Program>();

export const initialProgramState: ProgramState = adapter.getInitialState({
  // additional entity state properties
  allProgramsLoaded: false
});

export function programReducer(
  state = initialProgramState,
  action: ProgramActions
): ProgramState {
  switch (action.type) {
    
    case ProgramActionTypes.AllProgramsLoaded: {
      return adapter.addAll(action.payload.programs, {...state, allProgramsLoaded:true});
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
