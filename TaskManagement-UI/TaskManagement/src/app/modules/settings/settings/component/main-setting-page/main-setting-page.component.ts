import { Component } from '@angular/core';
import { AllSettingsServiceService } from '../../../../../services/all-settings-service.service';
import { ProfileComponent } from '../profile/profile.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ApperanaceComponent } from '../apperanace/apperanace.component';

@Component({
  selector: 'TaskManagement-main-setting-page',
  templateUrl: './main-setting-page.component.html',
  styleUrl: './main-setting-page.component.scss'
})
export class MainSettingPageComponent {
  tabs = [
    { label: 'Profile', component: ProfileComponent },
    { label: 'Notifications', component: NotificationsComponent },
    { label: 'Appearance', component: ApperanaceComponent }
  ];
ProfileComponent: any;
NotificationsComponent: any;
ApperanaceComponent: any;

  constructor(private allsettingservice : AllSettingsServiceService) {}

  selectedTab: any = this.tabs[0].component; 

  switchTab(component: any): void {
    this.selectedTab = component;
  }

}
