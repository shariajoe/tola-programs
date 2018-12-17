import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDatepickerModule,
  MatCardModule,
  MatMenuModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatIconModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { ActivityDialogComponent } from './activity-dialog.component';
import { DateFormat } from '../../date-format';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

describe('ActivityDialogComponent', () => {
  let component: ActivityDialogComponent;
  let fixture: ComponentFixture<ActivityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityDialogComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DateAdapter, useClass: DateFormat },
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
