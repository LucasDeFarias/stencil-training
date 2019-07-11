import { Component, h } from '@stencil/core';

@Component({
  tag: 'training-app',
  styleUrl: 'training-app.css',
  shadow: true
})
export class TrainingApp {
  
  render() {
    return [
      <h1>Training app!</h1>
    ];
  }
}
