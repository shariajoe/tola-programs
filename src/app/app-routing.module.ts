import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activities/:program/:id', component: ActivitiesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }