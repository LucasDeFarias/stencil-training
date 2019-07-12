import { Component, Prop } from '@stencil/core';
import { CurrencyAmount } from '../../models/currency-amount';

@Component({
  tag: 'currency-formatter'
})
export class CurrencyFormatter {

  /**
   * The CurrencyAmount object that is intended
   * to be formatted.
   */
  @Prop() currencyAmount: CurrencyAmount;

  /**
   * Parameter that defines user language.
   */
  @Prop() locale: string;

  formattedCurrency(): string {
    const formatter = new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currencyAmount.currency,
      minimumFractionDigits: 2
    });
    const amountNumber = Number.parseFloat(this.currencyAmount.amount);
    return formatter.format(amountNumber);
  }

  render() {
    return this.currencyAmount && this.formattedCurrency();
  }
}
