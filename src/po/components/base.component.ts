export default abstract class BaseComponent {
  private readonly rootSelector:string; 
  constructor(rootSelector: string) {
    this.rootSelector = rootSelector;
  }
  get rootEl() {
    return $(this.rootSelector); 
  }
}
