import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import HomePageContainer from '../containers/HomePageContainer'
import CurrentEvent from '../containers/CurrentEventContainer'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/event/:id" component={CurrentEvent} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Root
