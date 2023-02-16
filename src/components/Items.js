import Date from './CardDate' ;
import React from 'react'

const Items = (props) => {
  return (
    <div className='Card'>
     <div className='card-item'><p>title : {props.Title}</p></div>
     <div className='card-item amount'><p>amount : {props.Ammount} $</p></div>
        <Date Date={props.Date} />
    </div>
  )
}

export default Items
