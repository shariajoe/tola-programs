import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { programReducer } from './program.reducer';
import { activityReducer } from './activity.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  programs: programReducer,
  activities: activityReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
