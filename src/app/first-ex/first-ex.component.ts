import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-ex',
  templateUrl: './first-ex.component.html',
  styleUrls: ['./first-ex.component.css']
})
export class FirstExComponent {
  title = 'first-ex';
  name = '';
  fontSize = '16';
  textAlign = 'center';
  fonts = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS'];
  font = this.fonts[0];

  updateName(value: string) {
    this.name = value.toUpperCase();
  }

  updateFontSize(value: string) {
    this.fontSize = value;
  }

  updateFont(value: string) {
    this.font = value;
  }

  updateTextAlign(value: string) {
    this.textAlign = value;
  }

}
