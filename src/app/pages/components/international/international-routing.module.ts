import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternationalComponent } from './international.component';

const routes: Routes = [
  {
    path: '',
    component: InternationalComponent,
    children: [{ path: ':mode', redirectTo: '', pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternationalRoutingModule {}
