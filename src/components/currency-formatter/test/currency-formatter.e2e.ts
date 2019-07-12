import { newE2EPage } from '@stencil/core/testing';
import { CurrencyAmount } from '../../../models/currency-amount';

describe('CurrencyFormatter', () => {
  it('Should render 1.214.300,02 € in the DOM when given 1214300.02 EUR', async () => {
    const page = await newE2EPage();
    await page.setContent(`<currency-formatter></currency-formatter>`)
    await page.$eval('currency-formatter', (elm: any) => {
      elm.locale = 'es-ES';
      elm.currencyAmount = {
        currency: 'EUR',
        amount: '1214300.02'
      } as CurrencyAmount;
    });
    await page.waitForChanges();
    const currencyFormatter = await page.find('currency-formatter');
    expect(currencyFormatter).not.toBe(null);
    expect(currencyFormatter.innerHTML).toEqualHtml("1.214.300,02&nbsp;€");
  });  
});