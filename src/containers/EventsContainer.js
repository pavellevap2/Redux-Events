import Events from '../components/Events'
import { connect } from 'react-redux'
import { getEvents, getEventsLoading } from '../selectors/selectors'
import { changeTheme } from '../actions/actions'

const mapStateToProps = state => ({
  events: getEvents(state),
  eventsLoadingProcess: getEventsLoading(state),
})
const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(changeTheme(theme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
