import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent, children:[
    {path:'home',component:AdminHomeComponent},

    {path:'contact',component:AdminContactComponent},
    {path:'',component:AdminHomeComponent},


  ]},
  {path:'dashboard', component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
