import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
