import { Component } from '@angular/core';

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
    password: ''
  };

  saveProfile() {
    console.log('Profile saved!', this.profile);
    // Call your service here to save the profile data
  }
}
