import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('DropdownList', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<dropdown-list></dropdown-list>`
    });
    await page.waitForChanges();
  });
  
  it ('should not render ul if not open', async () => {
    await page.$eval('dropdown-list', (elm: any) => {
      elm.open = false;
    });
    await page.waitForChanges();
    const ul = await page.find('dropdown-list >>> div ul');
    expect(ul).toBe(null);
  });

  it ('should render ul by default', async () => {
    const ul = await page.find('dropdown-list >>> div ul');
    expect(ul).not.toBe(null);
  });

  it('should not render any dropdown-element by default', async () => {
    const li = await page.findAll('dropdown-list >>> div ul dropdown-element');
    expect(li.length).toBe(0);
  });

  it('should render 2 dropdown-element when 2 elements are passed', async () => {
    await page.$eval('dropdown-list', (elm: any) => {
      elm.elements = [ 'first', 'second' ];
    });
    await page.waitForChanges();
    const dropdownElements = await page.findAll('dropdown-list >>> div ul dropdown-element');
    expect(dropdownElements.length).toBe(2);
  });
  
});