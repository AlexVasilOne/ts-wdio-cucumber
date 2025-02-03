import WelcomePage from './welcome.page.ts';

class PageFactory {
  private welcomePage:WelcomePage = new WelcomePage('/assure');

  getPage(pageName: string) {
    switch (pageName) {
      case 'welcomePage':
       return this.welcomePage;
      default:
        throw new Error('Undefined page name');
    }
  }
}

export default new PageFactory(); 