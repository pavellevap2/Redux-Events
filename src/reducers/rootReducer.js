import { combineReducers } from 'redux'
import searchFormDataReducer from './searchFormData'
import events from './events'
import event from './event'

const rootReducer = combineReducers({
  searchFormDataReducer,
  events,
  event,
})

export default rootReducer
