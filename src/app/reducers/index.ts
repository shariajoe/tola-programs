import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { programReducer, ProgramState } from '../entities/program/reducers/program.reducer';
import { activityReducer, activitiesState } from '../entities/activity/reducers/activity.reducer';

export interface State {
  programs: ProgramState;
  activities: activitiesState;
}

export const reducers: ActionReducerMap<State> = {
  programs: programReducer,
  activities: activityReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
