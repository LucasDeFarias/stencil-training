// import { newSpecPage } from '@stencil/core/testing';
import { DropdownElement } from '../dropdown-element';

// it('should render dropdown-element component', async () => {
//   const page = await newSpecPage({
//     components: [DropdownElement],
//     html: '<dropdown-element element="test"></dropdown-element>'
//   });
//   expect(page.root).toEqualHtml(`
//     <dropdown-element element="test"><li>test</li></dropdown-element>
//   `);
// });

it('should emit the same element when selected', async () => {
  const dropdown = new DropdownElement();
  dropdown.element = 'fake element';
  spyOn(dropdown.selectElement, 'emit');

  dropdown.onSelectElement();

  expect(dropdown.selectElement.emit).toBeCalledWith('fake element');
});
