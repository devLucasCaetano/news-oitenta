import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from 'src/app/models/tabs';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.scss'],
})
export class TabsBarComponent implements OnInit {
  @Input() tabInputList: ITab[] = [];

  constructor(private _router : Router  ) {}

  ngOnInit(): void {}

  tabClick(tabLink: string) {
    this._router.navigate([tabLink]);
  }
}
