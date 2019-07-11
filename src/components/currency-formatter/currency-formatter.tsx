import { Component, Prop } from '@stencil/core';
import { CurrencyAmount } from '../../models/currency-amount';

@Component({
  tag: 'currency-formatter',
  shadow: true
})
export class TrainingApp {

  formats = [
    {
      // Fallback format if currency is unknown
      currency: 'default',
      formatFn: (c: CurrencyAmount) => {
        return `${c.amount}${c.currency}`
      }
    },
    {
      currency: 'EUR',
      formatFn: (c: CurrencyAmount): string => {
        const amountNumber = Number.parseFloat(c.amount);
        const formattedNumber: string = amountNumber
          .toFixed(2)
          .replace('.', ',')
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        return `${formattedNumber}€`;
      }
    },
  ];

  @Prop() currencyAmount: CurrencyAmount;

  formattedCurrency(): string {
    try {
      return (this.formats.find(f => f.currency === this.currencyAmount.currency) || this.formats[0])
        .formatFn(this.currencyAmount);
    } catch(e) {
      throw Error(`Invalid number: ${this.currencyAmount.amount}`);
    }
  }

  render() {
    return this.formattedCurrency();
  }
}
