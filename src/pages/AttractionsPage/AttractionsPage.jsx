import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAttractions } from "../../redux/AttractionPage/attractionsSlice";
import { fetchQueryAttraction } from "../../redux/AttractionPage/attractionsSlice";
import "./attractionsPage.style.css";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import AttractionCard from "../../common/attractionCard/AttractionCard";
const AttractionsPage = () => {
  const [query, setQuery] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const [attractionData,setAttractionData] = useState([])
  let attractionList = useSelector((state) => state.attraction.attractionList);
  let data = attractionList.response?.body.items.item;
  let dispatch = useDispatch();
  //All
  const getAttraction = () => {
    dispatch(fetchAttractions());
    setAttractionData(attractionList.response?.body.items.item)
  };
  //query
  const getQueryAttraction = () => {
    dispatch(fetchQueryAttraction(query));
  };

  //위치 가져오기 비동기 함수이므로 비동기처리.
  const getCurrentLocation = async () => {
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const data = await promise;
    const lat = data?.coords.latitude; // 위도 y (0~90)
    const lng = data?.coords.longitude; // 경도 x (0~180)

    return { lat, lng };
  };
  //정렬
  const sortHandler = (sortChange) => {

      setSortSelect(sortChange);
    
    };
    
    // useEffect(()=>{
    //   if(sortSelect !== ""){
    //     sortHandler()
    //   }
    // },[sortSelect])

  //   if(sortSelect !== ""){
  //     attractionData?.map((item)=>{
  //     console.log(item)
  //     item?.modifiedtime.sort((a,b)=>{
  //       if(sortSelect === "수정일순"){
  //         return console.log(a.modifiedtime) 
  //         // 
  //       }
  //     })
  //   })

  // }
  if(sortSelect !== ""){
    attractionData?.sort((a,b)=>{
      if(sortSelect == "수정일순"){
        console.log(sortSelect)
        return console.log(a.modifiedtime)
      }
    })
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let location = await getCurrentLocation();
  //       dispatch(fetchAttractions(location));
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  //초기
  useEffect(() => {
    getAttraction();
  }, []);
  // 값이 변경될때마다 리렌더링
  useEffect(() => {
    getQueryAttraction();
    console.log("ddd", data);
  }, [query]);

  return (
    <div className="att-container">
      <div className="att-search-container">
        <div className="att-search-box">
          <input
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="지역을 입력하세요."
          />
          <button
            onClick={() => getQueryAttraction()}
            className="black search-btn"
          >
            검색
          </button>
        </div>
        <div className="att-search-box">
          <input type="text" placeholder="검색어을 입력하세요." />
          <button className="search-btn">검색</button>
        </div>
      </div>
      <div className="att-filter-container">
        <div className="data-count">
          <span>
            총데이터 수<span className="orange">{data?.length}</span> 개
          </span>
        </div>
        <div className="att-filter-box">
          <Form.Select
            className="att-filter-select"
            aria-label="Default select example"
            onChange={(e) => sortHandler(e.target.value)}
          >
            <option value="">정렬기준</option>
            <option value="거리순">거리순</option>
            <option value="수정일순">수정일순</option>
            <option value="등록일순">등록일순</option>
          </Form.Select>
          <button className="black filter-btn">보기</button>
        </div>
      </div>
      <section className="card-container">
        {/* {fetchData?.map((item=><AttractionCard />))} */}
        {data?.map((item) => (
           
          <AttractionCard item={item} />
        ))}
       
      </section>
    </div>
  );
};

export default AttractionsPage;
