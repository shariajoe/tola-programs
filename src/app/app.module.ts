import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from "@angular/router";

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSidenavModule, MatToolbarModule, MatDatepickerModule, MatDialogModule, MatInputModule } from "@angular/material";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import {MatMomentDateModule} from "@angular/material-moment-adapter";

import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './store/reducers';
import { RouterStateSerializer, StoreRouterConnectingModule } from "@ngrx/router-store";

import { ProgramListItemComponent } from './program-list-item/program-list-item.component';
import { HomeComponent } from './home/home.component';
import { ProgramsEffects } from './store/effects/programs.effects';
import { programReducer} from './store/reducers/program.reducer';
import { ProgramsService } from "./store/services/programs.service";

import { ActivitiesService } from "./store/services/activities.service";
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityEffects } from './store/effects/activity.effects';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';
import { ActivityDialogComponent } from './activity-dialog/activity-dialog.component';

import { ReactiveFormsModule } from "@angular/forms";


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
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ProgramsEffects, ActivityEffects]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'})
  ],
  providers: [ProgramsService, ActivitiesService],
  entryComponents: [ActivityDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }