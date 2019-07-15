import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'dropdown-list-element',
  styleUrl: 'dropdown-list-element.css',
  shadow: true
})
export class DropdownListElement {
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
