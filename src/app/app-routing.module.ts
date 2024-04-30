import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isAuthenticated } from './pages/auth/auth.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'places',
    canMatch: [isAuthenticated],
    loadChildren: () => import('./pages/places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'bookings',
    canMatch: [isAuthenticated],
    loadChildren: () => import('./pages/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
