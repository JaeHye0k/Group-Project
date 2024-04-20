import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAttractions } from "../../redux/AttractionPage/attractionsSlice";
import { fetchQueryAttraction } from "../../redux/AttractionPage/attractionsSlice";
import { fetchLocationAttraction } from "../../redux/AttractionPage/attractionsSlice";
import "./attractionsPage.style.css";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import AttractionCard from "../../common/attractionCard/AttractionCard";
import Button from "../../common/Button";
import Loading from "../../common/Loading";
import useIntersectionObserver from "../../common/attractionCard/Intersection/UseIntersection";
const AttractionsPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  // const [query, setQuery] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const [attractionData, setAttractionData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  let attractionList = useSelector((state) => state.attraction.attractionList);
  let data = attractionList.response?.body.items.item;

  const query = searchParams.get("query") || "";

  //query
  const getQueryAttraction = () => {
    dispatch(fetchQueryAttraction(query));
  };

  useEffect(() => {
    if (query) {
      // URL에 쿼리 파라미터가 있으면 해당 쿼리로 검색합니다.
      getQueryAttraction(query);
    } else {
      // URL에 쿼리 파라미터가 없으면 모든 관광지 정보를 가져옵니다.
      dispatch(fetchAttractions());
    }
  }, [query, dispatch]);

  // 검색 함수: 입력된 검색어를 URL 쿼리 파라미터로 설정합니다.
  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  let loading = useSelector((state) => state.attraction.isLoading);
  //All
  const getAttraction = () => {
    dispatch(fetchAttractions());
  };
 

  //위치 가져오기 비동기 함수이므로 비동기처리.
  // const getCurrentLocation = async () => {
  //   const promise = new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(resolve, reject);
  //   });
  //   const data = await promise;
  //   const lat = data?.coords.latitude; // 위도 y (0~90)
  //   const lng = data?.coords.longitude; // 경도 x (0~180)

  //   return { lat, lng };
  // };

  useEffect(() => {
    getAttraction();
    getCurrentLocation((lat, lon));
  }, []);

  //query
  const getQueryAttraction = () => {
    if (query == "") {
      return dispatch(fetchAttractions());
    } else if (query !== "" && query !== undefined) {
      return dispatch(fetchQueryAttraction(query));
    }
  };

  //위치 가져오기 비동기 함수이므로 비동기처리.
  const getCurrentLocation = async () => {
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const data = await promise;
    const lat = data?.coords.latitude; // 위도 y (0~90)
    const lon = data?.coords.longitude; // 경도 x (0~180)

    // return { lat, lng };
    return { lat: setLat(lat), lon: setLon(lon) };
  };
  
  //정렬
  const sortHandler = (sortChange) => {
    setSortSelect(sortChange);
    // getCurrentLocation((lat, lon));
    console.log(sortChange);
  };
  useEffect(() => {
    if (filterData) {
      if (sortSelect === "거리순") {
        dispatch(fetchLocationAttraction({ lat, lon }));
      } else if (sortSelect === "전체") {
        dispatch(fetchAttractions());
        if (data !== null) {
          const filterImgData = data?.filter((filter) => {
            return filter.firstimage !== "";
          });
          setFilterData(filterImgData);
        }
      }
    }
    
  }, [sortSelect]);

  // }
  if(sortSelect !== ""){
    attractionData?.sort((a,b)=>{
      if(sortSelect === "수정일순"){
        console.log(sortSelect)
        return console.log(a.modifiedtime)
//   if (sortSelect) {
//     filterData.sort((a, b) => {
//       if (sortSelect === "수정일순") {
//         return b.modifiedtime - a.modifiedtime;
//       } else if (sortSelect === "등록일순") {
//         return b.createdtime - a.createdtime;
      }
    });
  }

  useEffect(() => {
    if (data !== null) {
      const filterImgData = data?.filter((filter) => {
        return filter.firstimage !== "";
      });
      setFilterData(filterImgData);
    }
  }, [attractionList?.response]);
  // // 값이 변경될때마다 리렌더링
  useEffect(() => {
    if(query){
      getQueryAttraction();
    }
    console.log("ddd", filterData);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="att-container">
      <div className="att-search-container">
        {/*  */}
        {/* <div className="att-search-box">
          <input type="text" placeholder="검색어을 입력하세요." />
          <button className="search-btn">검색</button>
        </div> */}
      </div>
      <div className="att-filter-container">
        <div className="data-count">
          <span>
            총데이터 수<span className="orange">{filterData?.length}</span> 개
          </span>
        </div>
        <div className="att-search-box">
         <input
            type="text"
            placeholder="지역을 입력하세요."
            defaultValue={query} // 입력 필드에 현재 검색어를 표시합니다.
          />
          <Button
            onClick={(e) => handleSearch(e.target.previousElementSibling.value)}
            className="black search-btn"
          >
            검색
          </Button>
        </div>
        <div className="att-search-box">
          <input type="text" placeholder="검색어을 입력하세요." />
          <Button className="search-btn">검색</Button>
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
            <option value="전체">전체</option>
            <option value="거리순">거리순</option>
            <option value="수정일순">수정일순</option>
            <option value="등록일순">등록일순</option>
          </Form.Select>
          <button className="black filter-btn">보기</button>
        </div>
      </div>
      <section className="card-container">
        {/* {data?.map((item=><AttractionCard />))} */}
        {filterData?.map((item) => (
          <AttractionCard item={item} />
        ))}
      </section>
    </div>
  );
};

export default AttractionsPage;
