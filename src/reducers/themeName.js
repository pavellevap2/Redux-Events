import { CHANGE_THEME } from '../actions/actions'

const themeName = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      return payload
    default:
      return state
  }
}
export default themeName
