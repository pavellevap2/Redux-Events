import { getFormData } from '../selectors/selectors'

export const SELECT_COUNTRY = '@@SIDEBAR/SELECT_COUNTRY'
export const INPUT_CITY = '@@SIDEBAR/INPUT_CITY'
export const INPUT_CLASSIFICATION = '@@SIDEBAR/INPUT_CLASSIFICATION'
export const ADD_TO_CLASSIFICATIONS = '@@SIDEBAR/ADD_TO_CLASSIFICATIONS'
export const LOAD_EVENTS = '@@HOMEPAGE/LOAD_EVENTS'

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

export const fetchEvents = () => (dispatch, getState) => {
  const formData = getFormData(getState())

  return fetch(
    `/discovery/v2/events.json?${formData}&apikey=SfVVui1GLyX7RMEcBNdZlARVjYUR12AL`,
  )
    .then(response => response.json(response))
    .then(response => {
      console.log(response)
      dispatch(loadEvents(response['_embedded'].events))
    })
    .catch(error => console.log(error))
}
