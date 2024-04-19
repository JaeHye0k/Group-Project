import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAttractions } from "../../redux/reducers/attractionsSlice";
import "./attractionsPage.style.css";
import { Form } from "react-bootstrap";
import AttractionCard from "../../common/attractionCard/AttractionCard";
const AttractionsPage = () => {
  const {fetchData,setFetchData} = useState(null)
  let attractionList = useSelector((state) => state.attraction.attractionList);
  let dispatch = useDispatch();
  // let data = attractionList.response.body.items.item
  // const getAllFetch = () =>{
  //   dispatch(fetchAttractions())
  //   console.log(attractionList)
  // }

  const getCurrentLocation = async () => {
    //비동기함수
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      dispatch(fetchAttractions({ lat, lon }));

      console.log(attractionList);
    });
  };

  useEffect(() => {
    const fetchData =async() =>{
      try{
         await getCurrentLocation()
        setFetchData(attractionList.response.body.items.item)
      }catch(error){
        console.log("error",error)
      }
    }
    fetchData()
  }, [dispatch]);
  useEffect(() => {
    console.log(fetchData)
  }, [fetchData]);

  // }, [attractionList]);
  return (
    <div className="att-container">
      <div className="att-search-container">
        <div className="att-search-box">
          <input type="text" placeholder="지역을 입력하세요." />
          <button className="black search-btn">검색</button>
        </div>
        <div className="att-search-box">
          <input type="text" placeholder="검색어을 입력하세요." />
          <button className="search-btn">검색</button>
        </div>
      </div>
      <div className="att-filter-container">
        <div className="data-count">
          <span>
            총데이터 수<span className="orange">{12345}</span> 개
          </span>
        </div>
        <div className="att-filter-box">
          <Form.Select
            className="att-filter-select"
            aria-label="Default select example"
          >
            <option>정렬기준</option>
            <option value="최신순">최신순</option>
            <option value="인기순">인기순</option>
            <option value="거리순">거리순</option>
          </Form.Select>
          <button className="black filter-btn">보기</button>
        </div>
      </div>
      <section className="card-container">
        {fetchData?.map((item=><AttractionCard />))}
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
      </section>
    </div>
  );
};

export default AttractionsPage;
