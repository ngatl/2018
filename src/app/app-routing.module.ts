import { Routes } from '@angular/router';
import { 
  CodeOfConductComponent, 
  DetailsComponent,
  HomeComponent, 
  RegistrationComponent,
  SpeakersComponent,
  SponsorsComponent 
} from './pages/pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CodeOfConduct', component: CodeOfConductComponent },
  { path: 'Speakers', component: SpeakersComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Sponsors', component: SponsorsComponent },
  { path: 'Details', component: DetailsComponent }
];
