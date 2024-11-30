import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { RecentTaskGridComponent } from './component/recent-task-grid/recent-task-grid.component';
import { FinalDashboardComponent } from './component/final-dashboard/final-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from '../../blank-layout/blank-layout.component';


const Dashboardroutes:Routes=[{
  path:'',
  component:BlankLayoutComponent,
  children:[{
    path:'', component:CardComponent
  }]
}]

@NgModule({
  declarations: [
    CardComponent,
    RecentTaskGridComponent,
    FinalDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Dashboardroutes),
    // BlankLayoutComponent
  ],
  exports:[CardComponent],
})
export class DashboardModule { }
