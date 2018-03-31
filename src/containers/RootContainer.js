import Root from '../components/Root'
import { connect } from 'react-redux'
import { getThemeName } from '../selectors/selectors'
const mapStateToProps = state => ({
  themeName: getThemeName(state),
})

export default connect(mapStateToProps, undefined)(Root)
