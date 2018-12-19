import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ProgramsService } from '../../../shared/programs.service';
import { ProgramEffects } from './program.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('ProgramEffects', () => {
  let actions$: Observable<any>;
  let effects: ProgramEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      providers: [
        ProgramEffects,
        ProgramsService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ProgramEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
