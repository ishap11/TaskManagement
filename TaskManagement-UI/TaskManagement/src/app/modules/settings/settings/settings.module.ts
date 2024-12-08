import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './component/profile/profile.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { ApperanaceComponent } from './component/apperanace/apperanace.component';
import { MainSettingPageComponent } from './component/main-setting-page/main-setting-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from '../../../blank-layout/blank-layout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

const SettingRoutes : Routes=[
  {
    path:'main-setting',
    component:BlankLayoutComponent,
    children:[{
      path:'',component:MainSettingPageComponent,
    }]
  }
]


@NgModule({
  declarations: [
    ProfileComponent,
    NotificationsComponent,
    ApperanaceComponent,
    MainSettingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingRoutes),
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
  ],
  exports: [
    MainSettingPageComponent,
    ProfileComponent,
    NotificationsComponent,
    ApperanaceComponent
  ]
})
export class SettingsModule { }
