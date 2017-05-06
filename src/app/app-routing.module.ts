import { Routes } from '@angular/router';
import { 
  CodeOfConductComponent, 
  HomeComponent, 
  RegistrationComponent,
  SpeakersComponent 
} from '../pages/pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CodeOfConduct', component: CodeOfConductComponent },
  { path: 'Speakers', component: SpeakersComponent },
  { path: 'Registration', component: RegistrationComponent }
];
