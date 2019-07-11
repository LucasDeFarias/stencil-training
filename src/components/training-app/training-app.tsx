import { Component, h } from '@stencil/core';
import { CurrencyAmount } from '../../models/currency-amount';

@Component({
  tag: 'training-app',
  styleUrl: 'training-app.css',
  shadow: true
})
export class TrainingApp {

  currencyAmount: CurrencyAmount = {
    amount: '14432.57',
    currency: 'EUR'
  }
  
  render() {
    return [
      <h1>Training app!</h1>,
      <currency-formatter locale="es-ES" currencyAmount={this.currencyAmount} ></currency-formatter>
    ];
  }
}
