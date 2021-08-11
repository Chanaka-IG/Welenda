import React from 'react'
import './StylesOfCard.css'

export const Card = ({image,title}) => {
    return (
        <div className='card_home'>
            <img src={image} alt='' className='card_image'/>
            <h1 className='card_title'>{title}</h1>
        </div>
    );
};

export default Card;