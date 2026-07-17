import { Routes } from '@angular/router';
import { usersRoutes } from './features/users/users.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', children: usersRoutes },
];
