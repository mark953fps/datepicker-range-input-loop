import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputControlArr: any = [
    { startDate: new Date(), endDate: new Date() },
    { startDate: new Date(), endDate: new Date() },
    { startDate: new Date(), endDate: new Date() },
    { startDate: new Date(), endDate: new Date() },
    { startDate: new Date(), endDate: new Date() }
  ];
}
