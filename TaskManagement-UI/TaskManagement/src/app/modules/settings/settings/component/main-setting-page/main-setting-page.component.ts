import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'TaskManagement-main-setting-page',
  templateUrl: './main-setting-page.component.html',
  styleUrls: ['./main-setting-page.component.scss']
})
export class MainSettingPageComponent {
  // Tabs configuration
  tabs = [{ label: 'Profile', name: 'profile' },
    { label: 'Notifications', name: 'notifications' },
    { label: 'Appearance', name: 'appearance' },
    
    
  ];

  // Active tab state
  activeTab: string = 'profile'; // Default to the Appearance tab

  constructor(private router: Router) {}

  // Method to handle tab changes
  onTabChange(event: any): void {
    const tabIndex = event.index; // Get the index of the selected tab
    this.activeTab = this.tabs[tabIndex]?.name; // Update the active tab based on the index
    console.log('Tab index:', tabIndex); // Log the index
    console.log('Active tab:', this.activeTab); // Confirm the active tab value
  }
}