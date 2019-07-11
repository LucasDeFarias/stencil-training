import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'element-selection',
  shadow: true
})
export class ElementSelection {
  /**
   * The selected element 
   */
  @Prop() element: string;

  render() {
    if (!this.element) {
      return (
        <div>No item selected yet!</div>
      );
    }

    return (
      <div>
        Nice choice! ✌
        You have selected: <code>{this.element}</code>
      </div>
    );
  }
}
