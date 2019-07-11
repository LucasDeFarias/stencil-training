import { Component, Prop } from '@stencil/core';
import { CurrencyAmount } from '../../models/currency-amount';

@Component({
  tag: 'currency-formatter'
})
export class CurrencyFormatter {

  locale = {
    'EUR': 'es-ES',
    'USD': 'en-US'
  }

  /**
   * The CurrencyAmount object that is intended
   * to be formatted
   */
  @Prop() currencyAmount: CurrencyAmount;

  format(locale: string): string {
    const amountNumber = Number.parseFloat(this.currencyAmount.amount);
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: this.currencyAmount.currency,
      minimumFractionDigits: 2
    });
    return formatter.format(amountNumber);
  }

  formattedCurrency(): string {
    try {
      return this.format(this.locale[this.currencyAmount.currency]);
    } catch (e) {
      throw Error(`Invalid number: ${this.currencyAmount.amount}`);
    }
  }

  render() {
    return this.formattedCurrency();
  }
}
