import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'training-app',
  styleUrl: 'training-app.css',
  shadow: true
})
export class TrainingApp {

  @State() elements = ['React', 'Angular', 'Vue', 'Vanilla JavaScript'];
  @State() selection: string;

  @Listen('selectElement')
  selectElementHandler(event: CustomEvent) {
    this.selection = event.detail;
  }

  @Listen('createElement')
  createElementHandler(event: CustomEvent) {
    this.elements = [...this.elements, event.detail];
  }
  
  render() {
    return [
      <h1>Training app!</h1>,
      <dropdown-list elements={this.elements}></dropdown-list>,
      <element-selection element={this.selection}></element-selection>,
      <element-add></element-add>
    ];
  }
}
