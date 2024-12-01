import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'TaskManagement-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {
  showFiller = false;
  isCollapsed = false;
  navItems = [
    { label: 'Dashboard', link: '/', icon: 'fas fa-home' },
    { label: 'Project', link: '/project/all-project', icon: 'fas fa-users' },
    { label: 'Settings', link: '/settings', icon: 'fas fa-cog' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
