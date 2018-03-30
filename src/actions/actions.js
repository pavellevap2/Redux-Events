import { getFormData } from '../selectors/selectors'
import ENDPOINTS from '../api'

export const SELECT_COUNTRY = '@@SIDEBAR/SELECT_COUNTRY'
export const INPUT_CITY = '@@SIDEBAR/INPUT_CITY'
export const INPUT_CLASSIFICATION = '@@SIDEBAR/INPUT_CLASSIFICATION'
export const ADD_TO_CLASSIFICATIONS = '@@SIDEBAR/ADD_TO_CLASSIFICATIONS'
export const LOAD_EVENTS = '@@HOMEPAGE/LOAD_EVENTS'
export const LOAD_EVENT = '@@CURRENT_EVENT/LOAD_EVENT'
export const IS_EVENTS_LOADING = `@@CURRENT_EVENT/IS_EVENT_LOADING`

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
  type: IS_EVENTS_LOADING,
  payload: isLoading,
})

export const fetchEvents = () => (dispatch, getState) => {
  dispatch(isEventsLoad(true))
  const formData = getFormData(getState())

  return fetch(String(ENDPOINTS.GET_EVENTS(formData)))
    .then(response => response.json(formData))
    .then(data => data._embedded.events)
    .then(data => dispatch(loadEvents(data)))
    .then(() => dispatch(isEventsLoad(false)))
    .catch(error => {
      dispatch(isEventsLoad(false))
      console.log('fetchEvents error: ', error)
    })
}
