import { When } from '@wdio/cucumber-framework';
import  { App, type Pages } from 'po/index.ts';
import getElementByPath from './utils.ts';

When('I open {string}', async function (pageName: string) {
  await App[pageName as keyof Pages].open();
});

When('I login as {string}', async function (userType: string) {
  let tokenValue = '';
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