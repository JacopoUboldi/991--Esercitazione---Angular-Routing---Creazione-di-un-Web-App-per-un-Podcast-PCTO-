import { Routes } from '@angular/router';
import { IoComponent } from './io/io.component'; 
import { MeComponent } from './me/me.component';
import { MeStessoComponent } from './me-stesso/me-stesso.component';

export const AppRoutes: Routes = [
  { path: '', component: IoComponent },
  { path: 'Me', component: MeComponent },
  { path: 'Me Stesso', component: MeStessoComponent }
];