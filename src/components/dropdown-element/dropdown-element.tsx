import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'dropdown-element',
  styleUrl: 'dropdown-element.css',
  shadow: true
})
export class DropdownElement {
  /**
   * The dropdown element 
   */
  @Prop() element: string;

  @Event() selectElement: EventEmitter;

  onSelectElement() {
    this.selectElement.emit(this.element);
  }

  render() {
    return (
        <li onClick={() => this.onSelectElement()}>{this.element}</li>
    );
  }
}
