export default class Page {
  private path: string; 
  constructor(path: string){
    this.path = path; 
  }
  open(): Promise<void | WebdriverIO.Request> {
    return browser.url(this.path);
  }
}