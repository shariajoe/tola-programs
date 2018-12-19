import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatDatepickerModule,
  MatDialogModule,
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from './components/home/home.component';
import { ProgramListItemComponent } from './components/program-list-item/program-list-item.component';
import { effects } from './app.effects';
import { ProgramsService } from './shared/programs.service';
import { ActivitiesService } from './shared/activities.service';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityListItemComponent } from './components/activity-list-item/activity-list-item.component';
import { ActivityDialogComponent } from './components/activity-dialog/activity-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormat } from './date-format';
import { ServiceWorkerModule } from '@angular/service-worker';

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

@NgModule({
  declarations: [
    AppComponent,
    ProgramListItemComponent,
    HomeComponent,
    ActivitiesComponent,
    ActivityListItemComponent,
    ActivityDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    ProgramsService,
    ActivitiesService,
    { provide: DateAdapter, useClass: DateFormat },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  entryComponents: [ActivityDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
