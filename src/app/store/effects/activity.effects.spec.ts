import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../../services/activities.service';
import { ActivityEffects } from './activity.effects';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';

describe('ActivityEffects', () => {
  let actions$: Observable<any>;
  let effects: ActivityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ 
        HttpClientModule,
        StoreModule.forRoot({})
      ],
      providers: [
        ActivityEffects,
        ActivitiesService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ActivityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
