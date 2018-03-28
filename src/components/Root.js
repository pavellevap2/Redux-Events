import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import HomePageContainer from '../containers/HomePageContainer'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Root
