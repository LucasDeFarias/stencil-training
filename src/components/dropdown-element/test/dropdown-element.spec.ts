import { DropdownElement } from '../dropdown-element';

it('should emit the same element when selected', async () => {
  const dropdown = new DropdownElement();
  dropdown.element = 'fake element';
  spyOn(dropdown.selectElement, 'emit');

  dropdown.onSelectElement();

  expect(dropdown.selectElement.emit).toBeCalledWith('fake element');
});
