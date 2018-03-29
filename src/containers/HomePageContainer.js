import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import {
  getCountries,
  getCountry,
  getCity,
  getClassification,
  getClassifications,
} from '../selectors/selectors'

import {
  selectCountry,
  inputCity,
  inputClassification,
  addToClassifications,
  fetchEvents,
} from '../actions/actions'

const mapStateToProps = state => ({
  countries: getCountries(state),
  countryCode: getCountry(state),
  city: getCity(state),
  classification: getClassification(state),
  classifications: getClassifications(state),
})

const mapDispatchToProps = dispatch => ({
  selectCountry: country => dispatch(selectCountry(country)),
  inputCity: city => dispatch(inputCity(city)),
  inputClassification: classification =>
    dispatch(inputClassification(classification)),
  addToClassifications: classification =>
    dispatch(addToClassifications(classification)),
  fetchEvents: () => dispatch(fetchEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
