import React from 'react';
import User from './User';

function Card(props) {

  return (
    <div className='card'>
      <User name={props.company}/>
      <div className='card-main'>
      </div>
      {props.startDate ?  props.startDate.toString() : null}
      {props.endDate ?  props.endDate.toString() : null}
    </div>
  );
}

export default Card;
