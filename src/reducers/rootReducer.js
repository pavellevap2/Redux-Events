import { combineReducers } from 'redux'
import searchFormDataReducer from './searchFormData'
import events from './events'
import isEventsLoading from './isEventsLoading'

const rootReducer = combineReducers({
  searchFormDataReducer,
  events,
  isEventsLoading,
})

export default rootReducer
