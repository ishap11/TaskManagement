import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SideNavbarComponent } from './component/side-navbar/side-navbar.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideNavbarComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    SideNavbarComponent
  ]
})
export class LayoutModule { }
