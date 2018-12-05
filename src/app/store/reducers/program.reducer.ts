import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Program } from '../models/program.model';
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
    case ProgramActionTypes.AddProgram: {
      return adapter.addOne(action.payload.program, state);
    }

    case ProgramActionTypes.UpsertProgram: {
      return adapter.upsertOne(action.payload.program, state);
    }

    case ProgramActionTypes.AddPrograms: {
      return adapter.addMany(action.payload.programs, state);
    }

    case ProgramActionTypes.UpsertPrograms: {
      return adapter.upsertMany(action.payload.programs, state);
    }

    case ProgramActionTypes.UpdateProgram: {
      return adapter.updateOne(action.payload.program, state);
    }

    case ProgramActionTypes.UpdatePrograms: {
      return adapter.updateMany(action.payload.programs, state);
    }

    case ProgramActionTypes.DeleteProgram: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ProgramActionTypes.DeletePrograms: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ProgramActionTypes.LoadPrograms: {
      return adapter.addAll(action.payload.programs, state);
    }

    case ProgramActionTypes.AllProgramsLoaded: {
      return adapter.addAll(action.payload.programs, {...state, allProgramsLoaded:true});
    }


    case ProgramActionTypes.ClearPrograms: {
      return adapter.removeAll(state);
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
