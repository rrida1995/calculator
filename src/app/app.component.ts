import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Calculator App';
  num1: number;
  num2: number;
  result: number;

  add() {
      this.result = this.num1 + this.num2;
  }
  substract() {
      this.result = this.num1 - this.num2;
  }
  multiply() {
      this.result = this.num1 * this.num2;
  }
  divide() {
      if(this.num2 === 0) {
        alert('value must not be 0');
      }
      else {
        this.result = Math.round(this.num1 * 100.0 / this.num2) / 100;
      }
  }
}