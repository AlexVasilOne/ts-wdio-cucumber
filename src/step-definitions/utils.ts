import BaseComponent from 'po/components/base.component.ts';
import Page from 'po/pages/base.page.ts';
import  { App, type Pages } from 'po/index.ts';


export default function getElementByPath(elementPath: string): ChainablePromiseElement | Page {
  const arrayOfElements = elementPath.split('>').map(x => x.trim());
  if (arrayOfElements.length < 2) {
    throw new Error('You should use path which has more than one element');
  }
  const page = App[arrayOfElements[0] as keyof Pages];
  let resultedElement: ChainablePromiseElement | BaseComponent = page.getElement(arrayOfElements[1]);

  for (const elementName of arrayOfElements.slice(2)) {
    if (resultedElement.getElement(elementName)) {
      resultedElement = resultedElement.getElement(elementName);
    }
  }
  
  if (resultedElement instanceof BaseComponent) {
    return resultedElement.rootEl;
  }
  return resultedElement;
}