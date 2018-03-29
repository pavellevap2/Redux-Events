import { LOAD_EVENT } from '../actions/actions'

const event = (state = [], { type, payload }) => {
  switch (type) {
    case LOAD_EVENT:
      return payload
    default:
      return state
  }
}
export default event
