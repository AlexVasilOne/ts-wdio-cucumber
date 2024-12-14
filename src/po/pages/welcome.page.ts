import Page from './base.page'
import PreviousDataset from '../components/welcome.page/previousDataset.component';

export default class WelcomePage extends Page {
  private previousDataset:PreviousDataset; 
  constructor(url: string){
    super(url);
    this.previousDataset = new PreviousDataset(); 
  }
  getElement(elementName:string): WebdriverIO.Element {
    switch(elementName) {
      case 'uploadNewDataset':
        return $('//button[text()="+ Upload New Dataset"]');
      case 'logo':
        return $('main img');
      case 'userMessage':
        return $('main h1');
      case 'previousDataset':
        return this.previousDataset.rootEl; 
      default:
        throw new Error('Undefined element name');
    }
  }
  get getPreviousDataset (): PreviousDataset {
    return this.previousDataset; 
  }
}