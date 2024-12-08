import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'TaskManagement-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile = {
    fullName: '',
    email: '',
    role: '',
    password: '',
    avatar: '' // URL of the avatar image
  };

  settingsTabs: any[] = [
    {
      tabLabel: 'Profile',
      fields: [
        { label: 'Full Name', key: 'fullName', type: 'text' },
        { label: 'Email', key: 'email', type: 'email' },
        { label: 'Role', key: 'role', type: 'text' },
        { label: 'Password', key: 'password', type: 'password' }
      ]
    }
  ];

  formData: { [key: string]: any } = {};
  router: any;

  changeAvatar(): void {
    this.router.navigate(['/avatar-change']);
    // const newAvatar = prompt('Enter the URL of the new avatar:');
    // if (newAvatar) {
    //   this.profile.avatar = newAvatar;
    //   console.log('Avatar changed to:', this.profile.avatar);
    // }
  }

  saveProfile(): void {
    console.log('Profile saved!', this.profile);
    // Call your service here to save the profile data
  }
}
