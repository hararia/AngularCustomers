import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <app-customers></app-customers>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  

  constructor() {}

  ngOnInit() {
  }

}
