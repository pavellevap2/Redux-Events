import React from 'react'
import { Link } from 'react-router-dom'

const Event = props => {
  const { name, date, i, place, id } = props

  return (
    <li key={i}>
      <h3>{date}</h3>
      <p>{`${name} : ${place}`}</p>
      <Link to={`/event/${id}`}>{id}</Link>
    </li>
  )
}
export default Event
