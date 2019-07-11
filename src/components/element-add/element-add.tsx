import { Component, h, EventEmitter, Event, State, Host } from '@stencil/core';

@Component({
  tag: 'element-add',
  shadow: true
})
export class ElementAdd {

  @Event() createElement: EventEmitter;

  @State() newElement: string;

  handleChange(event) {
    this.newElement = event.target.value;
  }

  clear() {
    this.newElement = '';
  }

  handleSubmit() {
    this.createElement.emit(this.newElement);
    this.clear();
  }

  render() {
    return (
      <Host>
        <input type="text" name="new-element" id="new-element" placeholder="Start typing a new element" autofocus value={this.newElement} onInput={(e) => this.handleChange(e)} />
        { this.newElement && (
            <div>
                <button onClick={() => this.clear()}>Clear</button>
                <button onClick={() => this.handleSubmit()}>Add</button>
            </div>
          )
        }
        </Host>
    );
  }
}
