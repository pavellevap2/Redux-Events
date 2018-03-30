export const getCountries = state => state.searchFormDataReducer.countries

export const getCountry = state => state.searchFormDataReducer.country

export const getCity = state => state.searchFormDataReducer.city

export const getClassification = state =>
  state.searchFormDataReducer.classification

export const getClassifications = state =>
  state.searchFormDataReducer.classifications

export const getFormData = state => {
  const data = state.searchFormDataReducer
  const classifications = data.classifications.length
    ? data.classifications
        .reduce((acc, x) => [...acc, `classificationName=${x}`], [])
        .join('&')
    : ''

  const countryCode = data.country.length ? `countryCode=${data.country}` : ''
  const city = data.city.length ? `city=${data.city}` : ''
  return `${countryCode}&${city}&${classifications}`
}

export const getEvents = state => state.events

export const getEventsLoading = state => state.isEventsLoading
