import { connect } from 'react-redux'
import CurrentEvent from '../components/CurrentEvent'
import { getEvent } from '../selectors/selectors'

import { fetchCurrEvent } from '../actions/actions'

const mapStateToProps = state => ({
  event: getEvent(state),
})

const mapDispatchToProps = dispatch => ({
  fetchCurrEvent: id => dispatch(fetchCurrEvent(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentEvent)
