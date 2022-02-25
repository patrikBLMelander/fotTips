import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefaultComponent } from './public/default/default.component';
import { PublicNavbarComponent } from './public/sidebar/public-navbar.component';
import { DefaultMainComponent } from './public/default-main/default-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PublicNavbarComponent,
    DefaultMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModules,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
