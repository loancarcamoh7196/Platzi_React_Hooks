import React, { Fragment } from 'react'

const Card = ({ children, key,data }) => {
  return (
    <div key={key} className='card'>
      <h3>{data.name}</h3>
      <div className='card--body'>
        <img src={data.image} />
        {children}
      </div>
    </div>
  )
}

export default Card;
