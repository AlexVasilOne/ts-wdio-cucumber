import { When } from '@wdio/cucumber-framework';
import pageFactory from '../po/pages/pageFactory';
import getElementByPath from './utils';

When('I open {string}', async function (pageName: string) {
  await pageFactory.getPage(pageName).open();
});

// we can use "NewUser" as a param so that token value will be an 
// empty string and server will create a new user automatically
When('I login as {string}', async function (userType: string) {
  let tokenValue: string = '';
  //later new types of users can be added
  if (userType === 'userWithPermissions') {
    tokenValue = process.env.USER_WITH_PERMISSIONS || '';
  };
  await browser.execute((tokenValue: string) => {
    window.localStorage.setItem('token', tokenValue)
  }, tokenValue);
});

When('I click {string}',
  async function (elementPath: string) {
    await getElementByPath(elementPath).click();
  });

When('I reload the page', async function () {
  await browser.refresh();
});