import { HomeComponent } from './pages/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/components/auth/auth.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
