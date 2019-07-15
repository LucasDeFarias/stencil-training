import { DropdownListElement } from '../dropdown-list-element';

it('should emit the same element when selected', async () => {
  const dropdown = new DropdownListElement();
  dropdown.element = 'fake element';
  spyOn(dropdown.selectElement, 'emit');

  dropdown.onSelectElement();

  expect(dropdown.selectElement.emit).toBeCalledWith('fake element');
});
