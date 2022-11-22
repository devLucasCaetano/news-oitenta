import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrazilRoutingModule } from './brazil-routing.module';
import { BrazilComponent } from './brazil.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BrazilComponent
  ],
  imports: [
    CommonModule,
    BrazilRoutingModule,
    SharedModule
  ]
})
export class BrazilModule { }
