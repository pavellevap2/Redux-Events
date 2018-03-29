import React from 'react'
import * as R from 'ramda'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  flex-direction: column;
  background: ${props => props.theme.homePageBackground};
`
const HomeTitle = styled.h1`
  color: ${props => props.theme.primary};
  text-shadow: 1px 1px 4px ${props => props.theme.secondary};
  font-size: 5.5em;
`
const EventDataForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
`
const SelectCountry = styled.select`
  background-color: ${props => props.theme.homePageBackground}
  color:${props => props.theme.primary};
  font-weight:bold;
  font-size: 1.5em;
`
const InputData = styled.input`
  background-color: ${props => props.theme.homePageBackground}
  font-size: 1.5em;
  color:${props => props.theme.secondary}
  font-weight:bold;
`

const HomePage = props => {
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
    <HomeContainer>
      <HomeTitle>Event Search</HomeTitle>
      <EventDataForm>
        <SelectCountry
          value={countryCode}
          onChange={e => selectCountry(e.target.value)}
        >
          {contriesList.map((country, i) => (
            <option key={i} value={countries[country]}>
              {country}
            </option>
          ))}
        </SelectCountry>
        <InputData
          type="text"
          value={city}
          onChange={e => inputCity(e.target.value)}
        />
        <InputData
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
        <Link to="/events" onClick={fetchEvents}>
          search{' '}
        </Link>
      </EventDataForm>
    </HomeContainer>
  )
}
export default HomePage
