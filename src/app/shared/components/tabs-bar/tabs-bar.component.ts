import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.scss'],
})
export class TabsBarComponent implements OnInit {
  tabList = [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Contact', link: 'contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
