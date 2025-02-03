import BaseComponent from "po/components/base.component.ts"

export default interface GetElement {
  getElement(elementName: string): ChainablePromiseElement | BaseComponent
}