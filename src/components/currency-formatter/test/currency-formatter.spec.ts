import { CurrencyFormatter } from '../currency-formatter';

class FakeNumberFormat extends Intl.NumberFormat {
  format(num: number) {
    return '1.214.300,02 €';
  }
}

describe('CurrencyFormatter', () => {

  it('should display 1.214.300,02 € when given 1214300.02 EUR', () => {
    // Node by default only ships with a limited set of locales
    Intl.NumberFormat = <any> FakeNumberFormat;

    const formatter = new CurrencyFormatter();
    formatter.locale = 'es-ES';
    formatter.currencyAmount = {
      currency: 'EUR',
      amount: '1214300.02'
    };

    const returnValue = formatter.formattedCurrency();

    expect(returnValue).toBe('1.214.300,02 €');
  });
});