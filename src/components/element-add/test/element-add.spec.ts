import { ElementAdd } from "../element-add";

describe('ElementAdd', () => {
  let elementAddComponent: ElementAdd;

  beforeEach(() => {
    elementAddComponent = new ElementAdd();
  });

  it('should build with empty newElement', () => {
    expect(elementAddComponent.newElement).toBeFalsy();
  });

  it('should update newElement value on form input', () => {
    elementAddComponent.handleChange({
      target: {
        value: 'hello!'
      }
    });

    expect(elementAddComponent.newElement).toEqualText('hello!');
  });

});