import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dropdown-list',
  styleUrl: 'dropdown-list.css',
  shadow: true
})
export class DropdownList {
  /**
   * The list of elements
   */
  @Prop() elements: string[] = [];

  /**
   * Indicates if the dropdown is open
   */
  @Prop() open: boolean = true;

  toggleStatus = () => this.open = !this.open;

  render() {
    return (
      <div>
        <span onClick={() => this.toggleStatus()}>I am a {this.open ? 'open' : 'closed'} dropdown! Click me to toggle list visibility</span>
        { this.open &&
          <ul>
            {
              this.elements.map((el) => <dropdown-element element={el}></dropdown-element>)
            }
          </ul>
        }
      </div>
    );
  }
}
