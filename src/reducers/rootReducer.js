import { combineReducers } from 'redux'
import searchFormDataReducer from './searchFormData'
import events from './events'
import eventsLoadingProcess from './eventsLoadingProcess'
import themeName from './themeName'

const rootReducer = combineReducers({
  searchFormDataReducer,
  events,
  eventsLoadingProcess,
  themeName,
})

export default rootReducer
