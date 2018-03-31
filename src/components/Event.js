import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

const EventItem = styled.li`
  margin-top: 2em;
  display: flex;
  border: 1px dotted ${props => props.theme.mainBackground};
  padding: 1.5em;
`

const EventImage = styled.img`
  height: 30em;
  width: 42em;
  margin-bottom: 2em;
`
const EventData = styled.div`
  display: flex;
  flex-direction: column;
`
const EventAllData = styled.div`
  margin-left: 3em;
`
const EventTitle = styled.h2`
  color: ${props => props.theme.primary};
  margin-left: 9em;
`
const EventText = styled.span`
  color: ${props => props.theme.primary};
  font-weight: bold;
  font-size: ${props => props.theme.S};
`
const EventElem = styled.div`
  font-size: ${props => props.theme.M};
  font-weight: bold;
  padding: 0.4em 0;

  color: ${props => props.theme.backgroundMain};
  &:last-child {
    margin-bottom: 1.7em;
  }
`
const EventInfo = styled.span`
  white-space: pre-wrap;
`
const EventTicket = styled.a`
  border: 1px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundMain} !important;
  color: ${props => props.theme.secondary};
  font-size: ${props => props.theme.S};
  padding: 0.7em 4em;
  &:hover {
    transition: 2s;
    background-color: ${props => props.theme.primary};
  }
`

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInfoOpen: false,
    }
  }
  render() {
    const { event, i } = this.props
    const info = R.path(['accessibility', 'info'], event)
    const price = R.path(['priceRanges'], event)
    const { isInfoOpen } = this.state

    return (
      <EventItem key={i}>
        <EventImage src={event.images[0].url} alt="img" />
        <EventData>
          <EventTitle>{event.name}</EventTitle>
          <EventAllData>
            <EventElem>
              <EventText>Event date: </EventText>
              {event.dates.start.localDate}
            </EventElem>
            {event.dates.start.localTime ? (
              <EventElem>
                <EventText>Event time: </EventText>
                {event.dates.start.localTime.slice(0, 5)}
              </EventElem>
            ) : null}
            <EventElem>
              <EventText>Country: </EventText>{' '}
              {event['_embedded'].venues[0].country.name}
            </EventElem>
            <EventElem>
              <EventText>City: </EventText>
              {event['_embedded'].venues[0].city.name}
            </EventElem>
            <EventElem>
              <EventText>Area: </EventText>
              {event['_embedded'].venues[0].name}
            </EventElem>
            {info !== undefined ? (
              <EventElem>
                <EventText
                  onClick={() => this.setState({ isInfoOpen: !isInfoOpen })}
                >
                  Event info {!isInfoOpen ? '▼' : '▲'}
                </EventText>
                <EventInfo>{isInfoOpen ? info : null}</EventInfo>
              </EventElem>
            ) : null}

            {price !== undefined ? (
              <EventElem>
                <p>
                  <EventText>Min price: </EventText>
                  {price[0].max} {price[0].currency}
                </p>
                <p>
                  <EventText>Max price: </EventText>
                  {price[0].min} {price[0].currency}
                </p>
              </EventElem>
            ) : null}
            <EventTicket href={event['_embedded'].venues[0].url}>
              Buy ticket
            </EventTicket>
          </EventAllData>
        </EventData>
      </EventItem>
    )
  }
}
export default Event
