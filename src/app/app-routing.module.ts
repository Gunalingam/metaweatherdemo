import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';


const routes: Routes = [{
  path:'dashboardsearch',
  component:DashboardSearchComponent
},{
  path:'',
  redirectTo:'dashboardsearch',
  pathMatch:'full'
},{
  path:'**',
  redirectTo:'dashboardsearc'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
