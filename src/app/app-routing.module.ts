
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/components/auth/auth.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'auth',
    loadChildren: () => AuthComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/components/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'brazil',
    loadChildren: () =>
      import('./pages/components/brazil/brazil.module').then(
        (m) => m.BrazilModule
      ),
  },
  {
    path: 'international',
    loadChildren: () =>
      import('./pages/components/international/international.module').then(
        (m) => m.InternationalModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
