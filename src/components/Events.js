import React from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'

const Events = props => {
  const { events } = props
  return (
    <div>
      <Link to="/">home</Link>
      <ul>{events.map((event, i) => <Event i={i} event={event} />)}</ul>
      <button onClick={() => console.log(events)}>all</button>
    </div>
  )
}
export default Events
