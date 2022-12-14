import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule],
  exports: [ContactComponent, ContactFormComponent],
})
export class ContactModule {}
