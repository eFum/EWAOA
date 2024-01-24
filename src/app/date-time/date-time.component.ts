import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent {
  date: Date = new Date();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

}
