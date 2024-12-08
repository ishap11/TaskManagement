import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';


const routes: Routes = [
 { 
  path:'',
  loadChildren:()=>import('././modules/dashboard/dashboard.module').then((m)=>m.DashboardModule),
},
{
  path: 'project',
  loadChildren: ()=>import('././modules/project/project/project.module').then((m)=>m.ProjectModule),
},
{
  path: 'settings',
  loadChildren: ()=>import('././modules/settings/settings/settings.module').then((m)=>m.SettingsModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }