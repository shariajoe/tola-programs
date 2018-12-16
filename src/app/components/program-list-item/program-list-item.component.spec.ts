import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatListModule, MatIconModule } from "@angular/material";
import { StoreModule } from '@ngrx/store';
import { ProgramListItemComponent } from './program-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgramListItemComponent', () => {
  let component: ProgramListItemComponent;
  let fixture: ComponentFixture<ProgramListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramListItemComponent ],
      imports: [
        MatListModule,
        MatIconModule,
        MatInputModule,
        StoreModule.forRoot({})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
