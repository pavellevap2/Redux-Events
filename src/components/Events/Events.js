import React from 'react'
import Event from '../Event'
import styled from 'styled-components'
import pent from './pent.jpg'

const EventsTitleBlock = styled.div`
  margin-top: 2em;
  text-align: center;
`
const EventsList = styled.ul`
  margin-top: 7em;
`
const EventsTitle = styled.h1`
  color: ${props => props.theme.primary};
  text-shadow: 2px 1px 4px ${props => props.theme.tertiary};
  font-size: 5.5em;
  font-weight: bold;
  margin-top: 100px;
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
const ThemeBtns = styled.div`
  flex-grow: 0;
  margin: 1em;
  float: right;
  display: flex;
`
const BtnDark = styled.button`
  color: #dc3d24;
  font-size: 0.7em;
  background-color: #232b2b;
  font-weight: bold;
  border: 1px solid #dc3d24;
  padding: 1em 4em;
`
const BtnDesert = styled.button`
  color: #b94629;
  font-size: 0.7em;
  background-color: #e3dec1;
  font-weight: bold;
  border: 1px solid #b94629;
  padding: 1em 4em;
  margin-left: 5px;
`

const Events = ({ events, eventsLoadingProcess, changeTheme }) => {
  const mixedEvents = events.sort(() => Math.random() - 0.5)

  return (
    <Content>
      <ThemeBtns>
        <BtnDark onClick={() => changeTheme('main')}>Dark</BtnDark>
        <BtnDesert onClick={() => changeTheme('secondary')}>Desert</BtnDesert>
      </ThemeBtns>

      {eventsLoadingProcess || !events.length ? (
        <EventsTitleBlock>
          <EventsTitle>Event Search</EventsTitle>
          <PentImg />
        </EventsTitleBlock>
      ) : (
        <EventsList>
          {mixedEvents.map((event, i) => <Event i={i} key={i} event={event} />)}
        </EventsList>
      )}
    </Content>
  )
}
export default Events
