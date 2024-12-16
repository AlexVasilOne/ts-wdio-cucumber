import { Then } from '@wdio/cucumber-framework';
import getElementByPath from './utils';

Then('I expect {string} should {string} displayed',
  async function (elementPath: string, shouldBeParam: string) {
    let assert = expect(getElementByPath(elementPath));
    if (shouldBeParam === 'not to be') {
      assert = assert.not;
    }
    return assert.toBeDisplayed();
  });

Then('I expect {string} has text {string}',
  async function (elementPath: string, textExpected: string) {
    return expect(getElementByPath(elementPath)).toHaveText(textExpected);
  }
);

Then('I expect page title should be {string}',
  async function (titleExpected: string) {
    const pageTitle = await browser.getTitle();
    return pageTitle === titleExpected;
  }
)