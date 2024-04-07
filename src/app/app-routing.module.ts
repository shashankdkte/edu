import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDashboardComponent } from './class/class-dashboard/class-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassListComponent } from './class/class-list/class-list.component';

const routes: Routes = [
  { path: "class/dashboard", component: ClassDashboardComponent },
  { path: "class/schedule", component: ClassListComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: '**', redirectTo: 'class/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
