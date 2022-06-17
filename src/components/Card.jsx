import React, { Fragment } from 'react'

const Card = ({data}) => {
  return (
    <div className='card--body'>
      <h3>{data.name}</h3>
      <div>
        <img src={data.image} />
      </div>
    </div>
  )
}

export default Card;
