import { When } from '@wdio/cucumber-framework';
import WelcomePage from '../po/pages/welcome.page'

const welcomePage = new WelcomePage('/assure'); 

When('I open WelcomePage', async function () {
  await welcomePage.open();
}); 
