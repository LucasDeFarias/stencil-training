import { CurrencyFormatter } from '../currency-formatter';

it('should display 1.214.300,02€ when given 1214300.02 EUR', () => {
  const formatter = new CurrencyFormatter();
  formatter.locale = 'es-ES';
  formatter.currencyAmount = {
    currency: 'EUR',
    amount: '1214300.02'
  };

  const returnValue = formatter.formattedCurrency();
  // Test fails because node by default only ships with a limited set of locales
  // See: https://stackoverflow.com/questions/49052731/jest-test-intl-datetimeformat/50119588
  expect(returnValue).toBe('1.214.300,02€');
});