import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import HomePageContainer from '../containers/HomePageContainer'
import EventsContainer from '../containers/EventsContainer'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/events" component={EventsContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Root
