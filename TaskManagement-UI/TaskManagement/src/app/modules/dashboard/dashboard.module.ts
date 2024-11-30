import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { RecentTaskGridComponent } from './component/recent-task-grid/recent-task-grid.component';
import { FinalDashboardComponent } from './component/final-dashboard/final-dashboard.component';



@NgModule({
  declarations: [
    CardComponent,
    RecentTaskGridComponent,
    FinalDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
