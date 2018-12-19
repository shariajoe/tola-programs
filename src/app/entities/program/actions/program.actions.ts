import { Action } from '@ngrx/store';
import { Program } from '../models/program.model';

export enum ProgramActionTypes {
  AllProgramsRequested = '[Program] All Programs Requested',
  AllProgramsLoaded = '[Program] All Programs Loaded'
}

export class AllProgramsRequested implements Action {
  readonly type = ProgramActionTypes.AllProgramsRequested;
}

export class AllProgramsLoaded implements Action {
  readonly type = ProgramActionTypes.AllProgramsLoaded;

  constructor(public payload: { programs: Program[] }) {}
}

export type ProgramActions = AllProgramsRequested | AllProgramsLoaded;
