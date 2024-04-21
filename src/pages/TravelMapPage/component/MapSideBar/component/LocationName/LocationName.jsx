import React from "react";

const LocationName = ({ locationBasedList }) => {
  const datas = locationBasedList?.response?.body.items.item;
  const locationName = datas[0].addr1?.split(" ").slice(0, 3);
  return (
    <div className="location-info">
      <div className="location-name1">{locationName[0]}</div>
      <div className="location-name2">
        {locationName[1]} {locationName[2]}
      </div>
    </div>
  );
};

export default LocationName;
