import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_globalComponents/header/header.component';
import { MobileMenuComponent } from './_globalComponents/mobile-menu/mobile-menu.component';
import { MappingModule } from './_otherComponents/mapping/mapping.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MappingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
