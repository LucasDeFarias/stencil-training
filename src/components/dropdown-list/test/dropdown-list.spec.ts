import { DropdownList } from "../dropdown-list";

describe('DropdownList', () => {

  it('should build with empty array by default', () => {
    const el = new DropdownList();
    expect(el.elements.length).toBe(0);
  });

  it('should be open by default', () => {
    const el = new DropdownList();
    expect(el.open).toBe(true);
  });

  it('should change status on toggle', () => {
    const el = new DropdownList();
    el.toggleStatus();
    expect(el.open).toBe(false);
    el.toggleStatus();
    expect(el.open).toBe(true);
  });

});