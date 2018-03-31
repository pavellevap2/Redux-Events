import ENDPOINTS from '../api'
import { getFormData } from '../selectors/selectors'

export const SELECT_COUNTRY = '@@SIDEBAR/SELECT_COUNTRY'
export const INPUT_CITY = '@@SIDEBAR/INPUT_CITY'
export const INPUT_CLASSIFICATION = '@@SIDEBAR/INPUT_CLASSIFICATION'
export const ADD_TO_CLASSIFICATIONS = '@@SIDEBAR/ADD_TO_CLASSIFICATIONS'
export const LOAD_EVENTS = '@@HOMEPAGE/LOAD_EVENTS'
export const LOAD_EVENT = '@@CURRENT_EVENT/LOAD_EVENT'
export const EVENTS_LOADING_PROCESS = `@@CURRENT_EVENT/IS_EVENT_LOADING`
export const CLEAR_FORM_INPUT = 'REDUCERS/CLEAR_FORM_INPUT'
export const CLEAR_CLASSIFICATIONS = 'REDUCERS/CLEAR_CLASSIFICATIONS'
export const CHANGE_THEME = 'ROOT/CHANGE_THEME'

export const selectCountry = country => ({
  type: SELECT_COUNTRY,
  payload: country,
})

export const inputCity = city => ({
  type: INPUT_CITY,
  payload: city,
})

export const inputClassification = classification => ({
  type: INPUT_CLASSIFICATION,
  payload: classification,
})
export const addToClassifications = classification => ({
  type: ADD_TO_CLASSIFICATIONS,
  payload: classification,
})

const loadEvents = events => ({
  type: LOAD_EVENTS,
  payload: events,
})

const isEventsLoad = isLoading => ({
  type: EVENTS_LOADING_PROCESS,
  payload: isLoading,
})

const clearFormInput = () => ({
  type: CLEAR_FORM_INPUT,
  payload: '',
})

const clearClassifications = () => ({
  type: CLEAR_CLASSIFICATIONS,
  payload: [],
})

export const fetchEvents = () => (dispatch, getState) => {
  dispatch(isEventsLoad(true))
  const formData = getFormData(getState())

  return fetch(String(ENDPOINTS.GET_EVENTS(formData)))
    .then(response => response.json(formData))
    .then(data => data._embedded.events)
    .then(data => dispatch(loadEvents(data)))
    .then(() => dispatch(isEventsLoad(false)))
    .then(() => {
      dispatch(clearFormInput())
      dispatch(clearClassifications())
    })
    .catch(error => {
      dispatch(isEventsLoad(false))
      console.log('fetchEvents error: ', error)
    })
}

export const changeTheme = theme => ({ type: CHANGE_THEME, payload: theme })
