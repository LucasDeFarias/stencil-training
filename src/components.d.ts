/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DropdownElement {
    /**
    * The dropdown element
    */
    'element': string;
  }
  interface DropdownList {
    /**
    * The list of elements
    */
    'elements': string[];
    /**
    * Indicates if the dropdown is open
    */
    'open': boolean;
  }
  interface ElementAdd {}
  interface ElementSelection {
    /**
    * The selected element
    */
    'element': string;
  }
  interface TrainingApp {}
}

declare global {


  interface HTMLDropdownElementElement extends Components.DropdownElement, HTMLStencilElement {}
  var HTMLDropdownElementElement: {
    prototype: HTMLDropdownElementElement;
    new (): HTMLDropdownElementElement;
  };

  interface HTMLDropdownListElement extends Components.DropdownList, HTMLStencilElement {}
  var HTMLDropdownListElement: {
    prototype: HTMLDropdownListElement;
    new (): HTMLDropdownListElement;
  };

  interface HTMLElementAddElement extends Components.ElementAdd, HTMLStencilElement {}
  var HTMLElementAddElement: {
    prototype: HTMLElementAddElement;
    new (): HTMLElementAddElement;
  };

  interface HTMLElementSelectionElement extends Components.ElementSelection, HTMLStencilElement {}
  var HTMLElementSelectionElement: {
    prototype: HTMLElementSelectionElement;
    new (): HTMLElementSelectionElement;
  };

  interface HTMLTrainingAppElement extends Components.TrainingApp, HTMLStencilElement {}
  var HTMLTrainingAppElement: {
    prototype: HTMLTrainingAppElement;
    new (): HTMLTrainingAppElement;
  };
  interface HTMLElementTagNameMap {
    'dropdown-element': HTMLDropdownElementElement;
    'dropdown-list': HTMLDropdownListElement;
    'element-add': HTMLElementAddElement;
    'element-selection': HTMLElementSelectionElement;
    'training-app': HTMLTrainingAppElement;
  }
}

declare namespace LocalJSX {
  interface DropdownElement extends JSXBase.HTMLAttributes<HTMLDropdownElementElement> {
    /**
    * The dropdown element
    */
    'element'?: string;
    'onSelectElement'?: (event: CustomEvent<any>) => void;
  }
  interface DropdownList extends JSXBase.HTMLAttributes<HTMLDropdownListElement> {
    /**
    * The list of elements
    */
    'elements'?: string[];
    /**
    * Indicates if the dropdown is open
    */
    'open'?: boolean;
  }
  interface ElementAdd extends JSXBase.HTMLAttributes<HTMLElementAddElement> {
    'onCreateElement'?: (event: CustomEvent<any>) => void;
  }
  interface ElementSelection extends JSXBase.HTMLAttributes<HTMLElementSelectionElement> {
    /**
    * The selected element
    */
    'element'?: string;
  }
  interface TrainingApp extends JSXBase.HTMLAttributes<HTMLTrainingAppElement> {}

  interface IntrinsicElements {
    'dropdown-element': DropdownElement;
    'dropdown-list': DropdownList;
    'element-add': ElementAdd;
    'element-selection': ElementSelection;
    'training-app': TrainingApp;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


