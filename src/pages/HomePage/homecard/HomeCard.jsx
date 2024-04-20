import React from 'react';
import './HomeCard.style.css'
import AttractionCard from '../../../common/attractionCard/AttractionCard'


const HomeCard = () => {
    return (
        <div className='cardPosition'>
            <br/>
            <br/>
                <h3 className='mid-title'>함께 떠나는 힐링테마 여행</h3>
                <AttractionCard />
        </div>
    );
};

export default HomeCard;