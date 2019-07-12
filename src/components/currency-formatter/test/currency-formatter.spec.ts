import { CurrencyFormatter } from '../currency-formatter';

describe('CurrencyFormatter', () => {
  const RealNumberFormat = Intl.NumberFormat;

  function mockNumberFormat() {
    return <any> class FakeNumberFormat extends Intl.NumberFormat {
      format(number: number) {
        return number === 1214300.02 && '1.214.300,02 €';
      }
    }   
  }

  it('should return 1.214.300,02 € when given 1214300.02 EUR', () => {
    // Node by default only ships with a limited set of locales
    global.Intl.NumberFormat = mockNumberFormat();

    const formatter = new CurrencyFormatter();
    formatter.locale = 'es-ES';
    formatter.currencyAmount = {
      currency: 'EUR',
      amount: '1214300.02'
    };

    const returnValue = formatter.formattedCurrency();

    expect(returnValue).toBe("1.214.300,02 €");
  });

  afterEach(() => {
    global.Intl.NumberFormat = RealNumberFormat;
  })
});