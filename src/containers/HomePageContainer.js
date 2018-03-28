import HomePage from '../components/HomePage'
import { connect } from 'react-redux'
import { getEvents } from '../selectors/selectors'

const mapStateToProps = state => ({
  events: getEvents(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
