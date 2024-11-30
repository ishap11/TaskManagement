import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'TaskManagement-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {
  showFiller = false;
  isCollapsed = false;
  navItems = [
    { label: 'Dashboard', icon: 'fas fa-tachometer-alt', link: '/dashboard' },
    { label: 'Users', icon: 'fas fa-users', link: '/users' },
    { label: 'Settings', icon: 'fas fa-cog', link: '/settings' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
