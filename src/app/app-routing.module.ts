import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesComponent } from './components/activities/activities.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activities/:program/:id', component: ActivitiesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
