import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { ActivitiesComponent } from './activities.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'activities/:program/:id', component: ActivitiesComponent }
];

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesComponent],
      imports: [
        MatIconModule,
        MatDialogModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot(routes)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
