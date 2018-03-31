import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import Logo from './Logo'

const SidebarContainer = styled.div`
  width: 23em;
  display: flex;
  overflow: auto;
  flex-direction: column;
  background: ${props => props.theme.backgroundMain};
`
const EventDataForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0 2.5%;
`
const SelectCountry = styled.select`
  background-color: ${props => props.theme.backgroundMain};
  color: ${props => props.theme.secondary};
  font-weight: bold;
  font-size: ${props => props.theme.L};
  border: 1px solid ${props => props.theme.primary}};
`
const InputData = styled.input`
  background-color: ${props => props.theme.backgroundMain};
  padding:0.1em;
  font-size: ${props => props.theme.L};
  color: ${props => props.theme.secondary};
  font-weight:bold;
  border:1px solid ${props => props.theme.primary}
  font-size:2em;
`
const Classifications = styled.div`
  margin-top: 2em;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  height: 200px;
  border: 3px dotted ${props => props.theme.primary};
`
const Classification = styled.span`
  color: ${props => props.theme.primary};
  font-size: ${props => props.theme.L};
  margin-right: 7px;
  font-weight: 400;
  border: 1px solid ${props => props.theme.secondary};
`

const SearchBtnBlock = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
`
const SearchBtn = styled.button`
  border: 2px solid ${props => props.theme.primary};
  height: 2.7em;
  width: 75%;
  font-weight: bold;
  font-size: ${props => props.theme.L};
  color: ${props => props.theme.secondary};
  text-align: center;
  background-color: ${props => props.theme.backgroundMain};
  &:hover {
    transition: 2s;
    background-color: ${props => props.theme.primary};
  }
`

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  submitFormData(e) {
    e.preventDefault()
    this.props.fetchEvents()
  }

  selectCountry(country) {
    this.props.selectCountry(country)
  }
  inputCity(cityName) {
    this.props.inputCity(cityName)
  }
  inputClassification(classification) {
    this.props.inputClassification(classification)
  }
  addClassification(e) {
    if (e.key === 'Enter' && this.props.classifications.length <= 7) {
      e.preventDefault()
      this.props.addToClassifications(e.target.value)
    }
  }

  render() {
    const {
      countries,
      countryCode,
      city,
      classification,
      classifications,
    } = this.props

    const contriesList = R.keys(countries)

    return (
      <SidebarContainer>
        <Logo />
        <EventDataForm onSubmit={e => this.submitFormData(e)}>
          <SelectCountry
            value={countryCode}
            onChange={e => this.selectCountry(e.target.value)}
          >
            {contriesList.map((country, i) => (
              <option key={i} value={countries[country]}>
                {country}
              </option>
            ))}
          </SelectCountry>
          <InputData
            placeholder="Input city"
            type="text"
            value={city}
            onChange={e => this.inputCity(e.target.value)}
          />
          <InputData
            placeholder="Input event tage"
            type="text"
            value={classification}
            onChange={e => this.inputClassification(e.target.value)}
            onKeyPress={e => this.addClassification(e)}
          />
          <Classifications>
            {classifications.map((classification, i) => (
              <Classification key={i}>{`#${classification}`}</Classification>
            ))}
          </Classifications>
          <SearchBtnBlock>
            <SearchBtn>SEARCH</SearchBtn>
          </SearchBtnBlock>
        </EventDataForm>
      </SidebarContainer>
    )
  }
}
export default Sidebar
