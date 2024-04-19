import React from 'react';
import './HomeCard.style.css'
import Card from './Card';


const HomeCard = () => {
    return (
        <div className='cardPosition'>
            <br/>
            <br/>
                
                <h3 className='mid-title'>함께 떠나는 힐링테마 여행</h3>
                <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
                {/* <div className='homeCards'>
                
                </div> */}
        </div>
    );
};

export default HomeCard;