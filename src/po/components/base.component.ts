export default class BaseComponent {
  private rootSelector:string; 
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }
  get rootEl() {
    return $(this.rootSelector); 
  }
}
