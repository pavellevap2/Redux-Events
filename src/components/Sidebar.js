import React from 'react'
import * as R from 'ramda'

const Sidebar = props => {
  const {
    countries,
    selectCountry,
    countryCode,
    inputCity,
    city,
    inputClassification,
    classification,
    classifications,
    addToClassifications,
    fetchEvents,
  } = props
  const contriesList = R.keys(countries)
  const test = classifications
    .reduce((acc, x) => [...acc, `classificationName=${x}`], [])
    .join('&')

  return (
    <div>
      <select value={countryCode} onChange={e => selectCountry(e.target.value)}>
        {contriesList.map((country, i) => (
          <option key={i} value={countries[country]}>
            {country}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={city}
        onChange={e => inputCity(e.target.value)}
      />
      <input
        type="text"
        value={classification}
        onChange={e => inputClassification(e.target.value)}
        onKeyPress={e =>
          e.key == 'Enter' ? addToClassifications(e.target.value) : null
        }
      />
      <div>
        {classifications.map((classification, i) => (
          <button key={i}>{classification}</button>
        ))}
      </div>
      <button onClick={() => fetchEvents()}>search</button>
    </div>
  )
}
export default Sidebar
