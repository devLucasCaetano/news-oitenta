import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsBarComponent } from './components/tabs-bar/tabs-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    TabsBarComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [
    TabsBarComponent,
    FooterComponent
  ]

})
export class SharedModule {}
