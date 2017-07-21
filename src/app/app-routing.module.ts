import { Routes } from '@angular/router';
import {
  CodeOfConductComponent,
  DetailsComponent,
  HomeComponent,
  SpeakersComponent,
  SponsorsComponent,
  WorkshopsComponent
} from './pages/pages';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'CodeOfConduct', component: CodeOfConductComponent},
  {path: 'Speakers', component: SpeakersComponent},
  {path: 'Sponsors', component: SponsorsComponent},
  {path: 'Workshops', component: WorkshopsComponent},
  {path: 'Details', component: DetailsComponent}
];
