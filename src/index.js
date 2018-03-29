import ReactDOM from 'react-dom'
import Root from './components/Root'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { injectGlobal, ThemeProvider } from 'styled-components'

injectGlobal`
  body{
    padding:0
    margin:0
  }
  li{
    list-style:none
  }
  a{
    text-decoratione:none
  }
`
const mainTheme = {
  primary: 'white',
  secondary: 'red',
  homePageBackground: 'black',
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <Root />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
