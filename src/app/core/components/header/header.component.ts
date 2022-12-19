import { Component, OnInit } from '@angular/core';
import { ITab } from 'src/app/models/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabInput: ITab[] = [
    { label: 'Home', link: '/home' },
    { label: 'Brasil', link: '/brazil' },
    { label: 'Internacional', link: '/international' },
    { label: 'Contato', link: '/contact' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
