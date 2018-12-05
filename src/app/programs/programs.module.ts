import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "../home/home.component";
import {ProgramListItemComponent} from "../program-list-item/program-list-item.component";
import {ProgramsService} from "../store/services/programs.service";
import {
    MatDatepickerModule,
    MatDialogModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
    MatSlideToggleModule,
    MatSortModule, MatTableModule
} from "@angular/material";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
//import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from '../store/effects/programs.effects';
import { programReducer} from '../store/reducers/program.reducer';

export const coursesRoutes: Routes = [
    {
        path: "",
        component: HomeComponent

    }
];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        //MatMomentDateModule,
        ReactiveFormsModule,
        RouterModule.forChild(coursesRoutes),
        StoreModule.forFeature('programs', programReducer),
        EffectsModule.forFeature([ProgramsEffects])
    ],
    declarations: [HomeComponent, ProgramListItemComponent],
    exports: [HomeComponent, ProgramListItemComponent],
    entryComponents: [],
    providers: [
        ProgramsService
    ]
})
export class ProgramsModule {}

