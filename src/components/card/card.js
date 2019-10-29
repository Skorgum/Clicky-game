import React from 'react';
import './Card.css';

const onClick = (props) => {
	props.randomCards();
	props.updateScore(props.id);
}

const Card = (props) => (
    
      <div className="box">
      <a onClick={() => onClick(props)}>
        <img src={props.image} alt="" className="img-thumbnail"/>
      </a>
    </div>
    
)

export default Card