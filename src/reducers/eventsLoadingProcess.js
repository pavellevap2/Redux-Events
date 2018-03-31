import { EVENTS_LOADING_PROCESS } from '../actions/actions'

const eventsLoadingProcess = (state = false, { type, payload }) => {
  switch (type) {
    case EVENTS_LOADING_PROCESS:
      return payload
    default:
      return state
  }
}
export default eventsLoadingProcess
