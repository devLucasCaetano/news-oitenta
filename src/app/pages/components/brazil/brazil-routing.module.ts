import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrazilComponent } from './brazil.component';

const routes: Routes = [
  {
    path: '',
    component: BrazilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrazilRoutingModule {}
