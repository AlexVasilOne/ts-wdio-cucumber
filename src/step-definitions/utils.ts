import BaseComponent from '../po/components/base.component';
import Page from '../po/pages/base.page';
import pageFactory from '../po/pages/pageFactory';


export default function getElementByPath(elementPath: string): WebdriverIO.Element | Page {
  const arrayOfElements = elementPath.split('>').map(x => x.trim());
  if (arrayOfElements.length < 2) {
    throw new Error('You should use path which has more than one element');
  }
  //assumes that the first word in elementPath is always a page
  let resultElement = pageFactory.getPage(arrayOfElements[0]);
  for (const elementName of arrayOfElements.slice(1)) {
    if (resultElement.getElement(elementName)) {
      resultElement = resultElement.getElement(elementName);
    }
  }
  //if we have path like "Page -> Component"
  //instead of getting Component obj we would like 
  // to get it's root element for future interaction
  if (resultElement instanceof BaseComponent) {
    return resultElement.rootEl;
  }
  return resultElement;
}