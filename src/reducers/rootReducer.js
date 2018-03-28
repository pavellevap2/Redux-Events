import { combineReducers } from 'redux'
import searchFormDataReducer from './searchFormData'
import events from './events'

const rootReducer = combineReducers({
  searchFormDataReducer,
  events,
})

export default rootReducer
