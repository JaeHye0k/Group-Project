import "./attractionCard.style.css"
import React from 'react'

const AttractionCard = ({item}) => {
  return (
    
      <div className="common-card">
        <img className="attraction-img" src={item?.firstimage} alt="" />
        <strong>{item?.title}</strong>
        <span>{item?.addr1}</span>
      </div>
     
    
  )
}

export default AttractionCard
