
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './core/components/auth/auth.module';
import { HomeModule } from './pages/components/home/home.module';
import { BrazilModule } from './pages/components/brazil/brazil.module';
import { InternationalModule } from './pages/components/international/international.module';
import { ContactModule } from './pages/components/contact/contact.module';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: 'home',
    loadChildren: () => HomeModule,
  },
  {
    path: 'brazil',
    loadChildren: () => BrazilModule,
  },
  {
    path: 'international',
    loadChildren: () => InternationalModule,
  },
  {
    path: 'contact',
    loadChildren: () => ContactModule,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
