import { Routes } from '@angular/router';
import { DashboardPage } from '../components/pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardPage },
  // default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
