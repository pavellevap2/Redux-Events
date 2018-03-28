import React from 'react'

const Event = props => {
  const { name, date, i } = props

  return (
    <li key={i}>
      <h3>{date}</h3>
      <p>{name}</p>
    </li>
  )
}
export default Event
