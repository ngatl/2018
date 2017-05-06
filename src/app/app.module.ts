import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Import Page Components:
import { 
  HomeComponent,
  CodeOfConductComponent,
  RegistrationComponent,
  SpeakersComponent
  } from '../pages/pages';

// Import Re-usable Components:
import { PillButtonComponent } from '../components/components';

@NgModule({
  declarations: [
    AppComponent,
    CodeOfConductComponent,
    HomeComponent,
    RegistrationComponent,
    SpeakersComponent,
    PillButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
