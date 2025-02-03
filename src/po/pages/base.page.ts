export default abstract class Page {
  private readonly path: string; 
  constructor(path: string){
    this.path = path; 
  }
  open(): Promise<void | WebdriverIO.Request> {
    return browser.url(this.path);
  }
}