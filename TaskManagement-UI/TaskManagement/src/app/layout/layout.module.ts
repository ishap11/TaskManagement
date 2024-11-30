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
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { Option1Component } from './option1/option1.component';
// import { Option2Component } from './option2/option2.component';

// const routes: Routes = [
//   { path: 'option1', component: Option1Component },
//   { path: 'option2', component: Option2Component },
// ];
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
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  exports: [
    LayoutsComponent,
    
  ],
})
export class LayoutModule { }
