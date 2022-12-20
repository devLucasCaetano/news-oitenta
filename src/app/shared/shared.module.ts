import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsBarComponent } from './components/tabs-bar/tabs-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    TabsBarComponent,
    FooterComponent,
    CustomInputComponent
  ],
  imports: [CommonModule],
  exports: [
    TabsBarComponent,
    FooterComponent,
    CustomInputComponent
  ]

})
export class SharedModule {}
