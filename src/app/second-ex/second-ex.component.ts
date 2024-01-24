import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-ex',
  templateUrl: './second-ex.component.html',
  styleUrls: ['./second-ex.component.css']
})
export class SecondExComponent {
  title = 'second-ex';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  operation: string = '+';
  history: any[] = [];

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
    }
    this.history.push({time: new Date(), operation: this.operation, result: this.result});
  }

  deleteHistory(index: number) {
    this.history.splice(index, 1);
  }
}
