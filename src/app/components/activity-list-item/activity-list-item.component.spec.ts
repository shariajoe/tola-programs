import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatInputModule,
  MatListModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { ActivityListItemComponent } from './activity-list-item.component';

describe('ActivityListItemComponent', () => {
  let component: ActivityListItemComponent;
  let fixture: ComponentFixture<ActivityListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityListItemComponent],
      imports: [
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        StoreModule.forRoot({})
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
