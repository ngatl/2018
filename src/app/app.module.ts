import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Import Page Components:
import { 
  HomeComponent,
  CodeOfConductComponent,
  DetailsComponent,
  RegistrationComponent,
  SpeakersComponent,
  SponsorsComponent
  } from './pages/pages';

// Import Re-usable Components:
import { PillButtonComponent , SpeakerCardComponent , SpeakerDetailComponent } from '../components/components';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeOfConductComponent,
    DetailsComponent,
    HomeComponent,
    RegistrationComponent,
    SpeakerCardComponent,
    SpeakerDetailComponent,
    SpeakersComponent,
    SponsorsComponent,
    PillButtonComponent,
    FooterComponent,
    HeaderComponent,
    SpeakerCardComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
