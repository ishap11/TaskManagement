import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
 { path:' ' ,
  component: BlankLayoutComponent ,
  children:[ {path:' ' , component: DashboardModule} ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
