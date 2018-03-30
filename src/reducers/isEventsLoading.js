import { IS_EVENTS_LOADING } from '../actions/actions'

const isEventsLoading = (state = false, { type, payload }) => {
  switch (type) {
    case IS_EVENTS_LOADING:
      return payload
    default:
      return state
  }
}
export default isEventsLoading
