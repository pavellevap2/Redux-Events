import Events from '../components/Events'
import { connect } from 'react-redux'
import { getEvents, getEventsLoading } from '../selectors/selectors'

const mapStateToProps = state => ({
  events: getEvents(state),
  isEventsLoading: getEventsLoading(state),
})

export default connect(mapStateToProps, undefined)(Events)
