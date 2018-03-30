import React from 'react'
import Event from './Event'
import styled from 'styled-components'
import pent from '../asserts/images/pent.jpg'

const EventsTitleBlock = styled.div`
  margin-top: 2em;
  text-align: center;
`
const EventsTitle = styled.h1`
  color: ${props => props.theme.primary};
  text-shadow: 2px 1px 4px ${props => props.theme.tertiary};
  font-size: 5.5em;
  font-weight: bold;
`
const Content = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`
const PentImg = styled.img.attrs({ src: pent, alt: '' })`
  margin-top: 2em;
  animation: Pent-logo-spin infinite 30s linear;
  @keyframes Pent-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Events = props => {
  const { events, isEventsLoading } = props
  return (
    <Content>
      {isEventsLoading || !events.length ? (
        <EventsTitleBlock>
          <EventsTitle>Event Search</EventsTitle>
          <PentImg />
        </EventsTitleBlock>
      ) : (
        <ul>
          {events.map((event, i) => <Event i={i} key={i} event={event} />)}
        </ul>
      )}
    </Content>
  )
}
export default Events
