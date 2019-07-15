import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('DropdownListElement', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<dropdown-element element="fake"></dropdown-element>`
    });
    await page.waitForChanges();
  });

  it('should render a li element with the text "fake"', async () => {
    const li = await page.find('dropdown-element >>> li');
    expect(li).not.toBe(null);
    expect(li).toEqualText("fake");
  });

  it('should trigger "selectElement" event when li element is clicked', async () => {
    const li = await page.find('dropdown-element >>> li');
    const spy = await page.spyOnEvent('selectElement');
    
    li.click();
    await page.waitForChanges();

    expect(spy).toHaveReceivedEventDetail('fake');
  });

});