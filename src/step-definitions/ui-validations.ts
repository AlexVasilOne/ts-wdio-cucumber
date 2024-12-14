import { Then } from '@wdio/cucumber-framework';
import pageFactory from '../po/pages/pageFactory';

Then('I expect {string} {string} should {string} displayed', 
  async function (pageName:string, elementName: string, shouldBeParam: string) {
    let assert = expect(pageFactory.getPage(pageName).getElement(elementName));
    if(shouldBeParam === 'not be') {
      assert = assert.not;
    }
    return assert.toBeDisplayed(); 
}); 