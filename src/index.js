import ReactDOM from 'react-dom'
import Root from './components/Root'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { injectGlobal, ThemeProvider } from 'styled-components'

injectGlobal`
  body{
    padding:0;
    margin:0l
  };
  li{
    list-style:none;
  };
  a{
    text-decoration:none;
  }
`
const mainTheme = {
  primary: '#DC3D24',
  secondary: '#E3AE57',
  tertiary: '#FFFFFF',
  backgroundMain: '#232B2B',
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <Root />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
