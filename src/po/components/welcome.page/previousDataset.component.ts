import BaseComponent from "../base.component";
import GetElement from "../../page.interface";

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