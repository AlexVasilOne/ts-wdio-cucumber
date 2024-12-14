import { Then } from '@wdio/cucumber-framework';
import pageFactory from '../po/pages/pageFactory';

Then('I expect {string} -> {string} should {string} displayed', 
  async function (pageName:string, elementName: string, shouldBeParam: string) {
    let assert = expect(pageFactory.getPage(pageName).getElement(elementName));
    if(shouldBeParam === 'not to be') {
      assert = assert.not;
    }
    return assert.toBeDisplayed(); 
});

Then ('I expect {string} -> {string} has text {string}',
  async function (pageName:string, elementName: string, textExpected:string) {
    return expect(pageFactory.getPage(pageName).
      getElement(elementName)).toHaveText(textExpected); 
  }
); 

Then ('I expect page title should be {string}',
  async function (titleExpected:string) {
    const pageTitle = await browser.getTitle();
    return pageTitle === titleExpected;  
  }
)