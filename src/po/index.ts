import WelcomePage from 'po/pages/welcome.page.ts'

export const App: Pages = {
  welcomePage: new WelcomePage()
}

export type Pages = {
  welcomePage: WelcomePage
}