import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';


const routes: Routes = [
 {
  path:'',
  // component:BlankLayoutComponent, 
  loadChildren:()=>import('././modules/dashboard/dashboard.module').then((m)=>m.DashboardModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }