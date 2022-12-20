import { Component, OnInit } from '@angular/core';
import { IContactForm } from 'src/app/models/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  CInput: IContactForm[] = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      readonly: false,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      readonly: false,
    },
    {
      label: 'Phone',
      type: 'tel',
      placeholder: 'Enter your phone',
      readonly: false,
    },
    {
      label: 'Message',
      type: 'text',
      placeholder: 'Enter your message',
      readonly: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
