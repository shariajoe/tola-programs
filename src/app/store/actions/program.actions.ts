import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Program } from '../models/program.model';

export enum ProgramActionTypes {
  LoadPrograms = '[Program] Load Programs',
  AddProgram = '[Program] Add Program',
  UpsertProgram = '[Program] Upsert Program',
  AddPrograms = '[Program] Add Programs',
  UpsertPrograms = '[Program] Upsert Programs',
  UpdateProgram = '[Program] Update Program',
  UpdatePrograms = '[Program] Update Programs',
  DeleteProgram = '[Program] Delete Program',
  DeletePrograms = '[Program] Delete Programs',
  ClearPrograms = '[Program] Clear Programs',
  AllProgramsRequested = '[Program] All Programs Requested',
  AllProgramsLoaded = '[Program] All Programs Loaded' 
}

export class LoadPrograms implements Action {
  readonly type = ProgramActionTypes.LoadPrograms;

  constructor(public payload: { programs: Program[] }) {}
}

export class AddProgram implements Action {
  readonly type = ProgramActionTypes.AddProgram;

  constructor(public payload: { program: Program }) {}
}

export class UpsertProgram implements Action {
  readonly type = ProgramActionTypes.UpsertProgram;

  constructor(public payload: { program: Program }) {}
}

export class AddPrograms implements Action {
  readonly type = ProgramActionTypes.AddPrograms;

  constructor(public payload: { programs: Program[] }) {}
}

export class UpsertPrograms implements Action {
  readonly type = ProgramActionTypes.UpsertPrograms;

  constructor(public payload: { programs: Program[] }) {}
}

export class UpdateProgram implements Action {
  readonly type = ProgramActionTypes.UpdateProgram;

  constructor(public payload: { program: Update<Program> }) {}
}

export class UpdatePrograms implements Action {
  readonly type = ProgramActionTypes.UpdatePrograms;

  constructor(public payload: { programs: Update<Program>[] }) {}
}

export class DeleteProgram implements Action {
  readonly type = ProgramActionTypes.DeleteProgram;

  constructor(public payload: { id: string }) {}
}

export class DeletePrograms implements Action {
  readonly type = ProgramActionTypes.DeletePrograms;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPrograms implements Action {
  readonly type = ProgramActionTypes.ClearPrograms;
}

export class AllProgramsRequested implements Action {

  readonly type = ProgramActionTypes.AllProgramsRequested;

}

export class AllProgramsLoaded implements Action {

  readonly type = ProgramActionTypes.AllProgramsLoaded;

  constructor(public payload: { programs: Program[] }) {}

}

export type ProgramActions =
 LoadPrograms
 | AddProgram
 | UpsertProgram
 | AddPrograms
 | UpsertPrograms
 | UpdateProgram
 | UpdatePrograms
 | DeleteProgram
 | DeletePrograms
 | ClearPrograms
 | AllProgramsRequested
 | AllProgramsLoaded;
