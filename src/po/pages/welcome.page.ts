import Page from './base.page.ts'
import PreviousDataset from 'po/components/welcome.page/previousDataset.component.ts';
import type GetElement from "po/page.interface.ts";

export default class WelcomePage extends Page implements GetElement {
  private readonly previousDataset: PreviousDataset;
  constructor(url: string) {
    super(url);
    this.previousDataset = new PreviousDataset();
  }
  getElement(elementName: string) {
    switch (elementName) {
      case 'uploadNewDataset':
        return $('//button[text()="+ Upload New Dataset"]');
      case 'logo':
        return $('main img');
      case 'userMessage':
        return $('main h1');
      case 'previousDataset':
        return this.previousDataset;
      default:
        throw new Error('Undefined element name');
    }
  }
}