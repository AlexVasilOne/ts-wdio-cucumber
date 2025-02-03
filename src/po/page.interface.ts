import BaseComponent from "po/components/base.component"

export default interface GetElement {
  getElement(elementName: string): WebdriverIO.Element | BaseComponent
}