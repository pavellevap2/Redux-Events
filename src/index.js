import ReactDOM from 'react-dom'
import RootContainer from './containers/RootContainer'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body{
    padding:0;
    margin:0;
  };
  li{
    list-style:none;
  };
  a{
    text-decoration:none;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root'),
)
