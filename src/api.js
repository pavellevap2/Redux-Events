const API_KEY = 'SfVVui1GLyX7RMEcBNdZlARVjYUR12AL'
const URL_BODY = '/discovery/v2/events.json?'

const ENDPOINTS = {
  GET_EVENTS: data => `/discovery/v2/events.json?${data}&apikey=${API_KEY}`,
}
export default ENDPOINTS
