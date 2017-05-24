import { Routes } from '@angular/router';
import { 
  CodeOfConductComponent, 
  DetailsComponent,
  HomeComponent, 
  SpeakersComponent,
  SponsorsComponent 
} from './pages/pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CodeOfConduct', component: CodeOfConductComponent },
  { path: 'Speakers', component: SpeakersComponent },
  { path: 'Sponsors', component: SponsorsComponent },
  { path: 'Details', component: DetailsComponent }
];
