import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  // Property binding
  numInput: string = '';
  operando1: string = '';
  operando2: string = '';

  result = '0';

  suma = false;
  resta = false;

  // Event binding
  addNum(num: string) {
    this.numInput += num
  }

  sumar() {
    this.operando1 = this.numInput;
    this.numInput = '';

    this.operando2 = '15';

    this.suma = true;
  }

  restar() {
    this.operando1 = this.numInput;
    this.numInput = '';

    this.operando2 = this.numInput;

    this.resta = true;
  }

  resultado() {
    Number(this.operando1)
    Number(this.operando2)
    Number(this.result)

    if(this.suma = true) {
      this.result = this.operando1 + this.operando2
    }/*else if(this.resta = true) {
      result = this.operando1 - this.operando2;
    }*/

    this.numInput = this.result
  }

}
