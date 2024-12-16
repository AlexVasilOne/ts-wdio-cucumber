import BaseComponent from "./components/base.component"

export default interface GetElement {
  getElement(elementName: string): WebdriverIO.Element | BaseComponent
}