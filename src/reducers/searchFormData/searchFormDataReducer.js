import { combineReducers } from 'redux'
import {
  country,
  countries,
  city,
  classification,
  classifications,
} from './searchFormData'

const searchFormDataReducer = combineReducers({
  country,
  countries,
  city,
  classification,
  classifications,
})

export default searchFormDataReducer
