import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LayoutModule } from './layout/layout.module';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectModule } from './modules/project/project/project.module';


@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    DashboardModule,
    ProjectModule
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  exports:[BlankLayoutComponent]
})
export class AppModule { }
