import React from 'react'
import * as R from 'ramda'

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
      <li key={i}>
        <h3>
          {`${event.dates.start.localDate} 
          : ${event.dates.start.localTime.slice(0, 5)} `}
        </h3>
        <p>{event.name}</p>
        {info != undefined ? (
          <div>
            <h3 onClick={() => this.setState({ isInfoOpen: !isInfoOpen })}>
              Event info
            </h3>
            <p>{isInfoOpen ? info : null}</p>
          </div>
        ) : null}
        <p>Area: {event['_embedded'].venues[0].name}</p>
        <p>
          {price != undefined
            ? `${price[0].max} ${price[0].currency} :${price[0].min} ${
                price[0].currency
              } `
            : null}
        </p>
        <img src={event.images[0].url} alt="img" />
        <p>{event[`_embedded`].venues[0].name}</p>
        <a href={event['_embedded'].venues[0].url}>Buy ticket</a>
      </li>
    )
  }
}
export default Event
