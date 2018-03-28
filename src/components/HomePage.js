import React from 'react'
import SidebarContainer from '../containers/SidebarContainer'
import Event from './Event'

const Homepage = props => {
  const { events } = props
  return (
    <div>
      <SidebarContainer />
      <ul>
        {events.map((event, i) => (
          <Event
            name={event.name}
            i={i}
            date={`${
              event.dates.start.localDate
            } : ${event.dates.start.localTime.slice(0, 5)} `}
          />
        ))}
      </ul>
    </div>
  )
}
export default Homepage
