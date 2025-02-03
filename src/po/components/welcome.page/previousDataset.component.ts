import BaseComponent from "../base.component.ts";
import GetElement from "../../page.interface.ts";

export default class PreviousDataset extends BaseComponent implements GetElement {
  constructor() {
    super('div.accordion');
  }
  getElement(elementName: string): WebdriverIO.Element | BaseComponent {
    switch (elementName) {
      case 'fileCard':
        return this.rootEl.$('ul div')
      default:
        throw new Error('Undefined element name');
    }
  }
}