import "./attractionCard.style.css"
import React from 'react'

const AttractionCard = ({item}) => {
  return (
    
      <div className="common-card">
        <img className="attraction-img" src={item?.firstimage} alt="" />
        <div className="attraction-card-box">
        <strong>{item?.title}</strong>
        <span className="attraction-card-text">{item?.addr1}</span>
        </div>
      </div>
     
    
  )
}

export default AttractionCard
