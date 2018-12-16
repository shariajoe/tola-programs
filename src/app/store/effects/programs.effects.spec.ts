import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ProgramsService } from '../../services/programs.service';
import { ProgramsEffects } from './programs.effects';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';

describe('ProgramsEffects', () => {
  let actions$: Observable<any>;
  let effects: ProgramsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ 
        HttpClientModule,
        StoreModule.forRoot({})
      ],
      providers: [
        ProgramsEffects,
        ProgramsService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ProgramsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
