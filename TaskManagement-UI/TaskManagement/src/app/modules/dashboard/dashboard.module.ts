import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { RecentTaskGridComponent } from './component/recent-task-grid/recent-task-grid.component';
import { FinalDashboardComponent } from './component/final-dashboard/final-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { HelperModule } from '../../helper/helper.module';

@NgModule({
  declarations: [
    CardComponent,
    RecentTaskGridComponent,
    FinalDashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports : [
    CardComponent,
    RecentTaskGridComponent
  ]
})
export class DashboardModule { }
