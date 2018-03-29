import Events from '../components/Events'
import { connect } from 'react-redux'
import { getEvents } from '../selectors/selectors'

const mapStateToProps = state => ({
  events: getEvents(state),
})

export default connect(mapStateToProps, undefined)(Events)
