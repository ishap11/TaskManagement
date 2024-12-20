import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
