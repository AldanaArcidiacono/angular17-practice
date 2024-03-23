import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './shared/about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    // Cuando el componente export class HomeComponent {}
    loadComponent: () => HomeComponent,
    // Cuando el componente export DEFAULT class HomeComponent {}
    // loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'todo',
    title: 'ToDo',
    loadComponent: () => AboutComponent,
  },
  {
    path: 'notes',
    title: 'Notes',
    loadComponent: () => AboutComponent,
  },
  {
    path: 'users',
    title: 'Users',
    loadComponent: () => AboutComponent,
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => AboutComponent,
  },
  { path: '**', redirectTo: 'home' },
];
