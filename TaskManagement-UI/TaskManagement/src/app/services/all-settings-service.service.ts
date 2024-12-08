import { Injectable } from '@angular/core';
import { Tab, Setting } from '../core/model/setting';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSettingsServiceService {

  constructor() { }

  getSettings(): Observable<Tab[]> {
    const settings: Tab[] = [
      {
        label: 'Profile',
        settings: [
          { id: 'fullName', label: 'Full Name', type: 'text', value: 'John Doe' },
          { id: 'email', label: 'Email', type: 'email', value: 'john.doe@example.com' },
          { id: 'role', label: 'Role', type: 'text', value: 'Admin' },
          { id: 'password', label: 'Change Password', type: 'password', value: '' },
        ],
      },
      {
        label: 'Notifications',
        settings: [
          { id: 'emailNotifications', label: 'Email Notifications', type: 'toggle', value: true },
          { id: 'smsNotifications', label: 'SMS Notifications', type: 'toggle', value: false },
        ],
      },
      {
        label: 'Appearance',
        settings: [
          { id: 'theme', label: 'Theme', type: 'select', value: 'light', options: ['light', 'dark'] },
          { id: 'fontSize', label: 'Font Size', type: 'number', value: 14 },
        ],
      },
    ];

    return of(settings);
  }

  saveSettings(settings: Tab[]): Observable<any> {
    // Here, you would send the updated settings to the backend.
    console.log('Settings saved:', settings);
    return of(null); // Simulate a successful save
  }
}
