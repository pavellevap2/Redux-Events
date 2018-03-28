import { LOAD_EVENTS } from '../actions/actions'

const events = (state = [], { type, payload }) => {
  switch (type) {
    case LOAD_EVENTS:
      return payload
    default:
      return state
  }
}
export default events
