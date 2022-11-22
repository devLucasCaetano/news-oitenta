import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternationalRoutingModule } from './international-routing.module';
import { InternationalComponent } from './international.component';


@NgModule({
  declarations: [
    InternationalComponent
  ],
  imports: [
    CommonModule,
    InternationalRoutingModule
  ]
})
export class InternationalModule { }
