import BaseComponent from "../base.component.ts";
import GetElement from "po/page.interface.ts";

export default class PreviousDataset extends BaseComponent implements GetElement {
  constructor() {
    super('div.accordion');
  }
  getElement(elementName: string) {
    switch (elementName) {
      case 'fileCard':
        return this.rootEl.$('ul div')
      default:
        throw new Error('Undefined element name');
    }
  }
}