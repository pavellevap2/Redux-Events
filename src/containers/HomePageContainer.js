import HomePage from '../components/HomePage'
import { connect } from 'react-redux'
import { getEvents } from '../selectors/selectors'

const mapStateToProps = state => ({
  events: getEvents(state),
})

export default connect(mapStateToProps, undefined)(HomePage)
