import Page from './base.page'
import PreviousDataset from '../components/welcome.page/previousDataset.component';
import BaseComponent from '../components/base.component';
import GetElement from "../page.interface";

export default class WelcomePage extends Page implements GetElement {
  private previousDataset: PreviousDataset;
  constructor(url: string) {
    super(url);
    this.previousDataset = new PreviousDataset();
  }
  getElement(elementName: string): WebdriverIO.Element | BaseComponent {
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