import { CurrencyFormatter } from '../currency-formatter';

it('should display 1.214.300,02€ when given 1214300.02 EUR', () => {
  const formatter = new CurrencyFormatter();
  formatter.locale = 'es-ES';
  formatter.currencyAmount = {
    currency: 'EUR',
    amount: '1214300.02'
  };

  const returnValue = formatter.formattedCurrency();
  // FIXME Broken test
  expect(returnValue.toString()).toBe('1.214.300,02€');
});