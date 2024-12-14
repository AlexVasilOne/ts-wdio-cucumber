import Page from './base.page'

export default class WelcomePage extends Page {
  constructor(url: string){
    super(url);
  }
  getElement(elementName:string): WebdriverIO.Element {
    switch(elementName) {
      case 'uploadNewDataset':
        return $('//button[text()="+ Upload New Dataset"]');
      case 'logo':
        return $('main img');
      case 'userMessage':
        return $('main h1');
      default:
        throw new Error('Undefined element name');
    }
  }
}