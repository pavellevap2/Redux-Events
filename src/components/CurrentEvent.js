import React from 'react'

class CurrentEvent extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchCurrEvent(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.event)}>test</button>
      </div>
    )
  }
}
export default CurrentEvent
