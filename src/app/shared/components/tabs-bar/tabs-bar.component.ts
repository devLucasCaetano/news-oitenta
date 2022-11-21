import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.scss'],
})
export class TabsBarComponent implements OnInit {
  tabList = [
    { label: 'Home', link: 'home' },
    { label: 'Brasil', link: 'brazil' },
    { label: 'Internacional', link: 'about' },
    { label: 'Contato', link: 'contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
