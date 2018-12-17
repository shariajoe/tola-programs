import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { programReducer, ProgramState } from './program.reducer';
import { activityReducer, activitiesState } from './activity.reducer';

export interface State {
  programs: ProgramState,
  activities: activitiesState
}

export const reducers: ActionReducerMap<State> = {
  programs: programReducer,
  activities: activityReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
