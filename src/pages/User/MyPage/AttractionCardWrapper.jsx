// AttractionCardWrapper.js
import React from "react";
import useRecentlyViewedItem from "./useRecentlyViewedItem";

const AttractionCardWrapper = ({ item, children }) => {
  useRecentlyViewedItem(item);

  return <div>{children}</div>;
};

export default AttractionCardWrapper;
