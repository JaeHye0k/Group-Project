import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAttractions } from "../../redux/AttractionPage/attractionsSlice";
import { fetchQueryAttraction } from "../../redux/AttractionPage/attractionsSlice";
import { fetchLocationAttraction } from "../../redux/AttractionPage/attractionsSlice";
import "./attractionsPage.style.css";
import { Form } from "react-bootstrap";
import AttractionCard from "../../common/attractionCard/AttractionCard";
import Loading from "../../common/Loading";
import useIntersectionObserver from "../../common/attractionCard/Intersection/UseIntersection";
const AttractionsPage = () => {
  const [query, setQuery] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const [attractionData, setAttractionData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  let attractionList = useSelector((state) => state.attraction.attractionList);
  let loading = useSelector((state) => state.attraction.isLoading);
  let data = attractionList?.response?.body.items.item;
  let dispatch = useDispatch();
  //All
  const getAttraction = () => {
    dispatch(fetchAttractions());
    console.log(attractionList);
  };

  useEffect(() => {
    getAttraction();
    getCurrentLocation((lat, lon));
  }, []);

<<<<<<< HEAD
  // //query
  // const getQueryAttraction = () => {
  //   if (query == "") {
  //     return dispatch(fetchAttractions());
  //   } else if (query !== "" && query !== undefined) {
  //     return dispatch(fetchQueryAttraction(query));
  //   }
  // };
=======
  //query // 준영님 코드
  const getQueryAttraction = () => {
    if (query == "") {
      return dispatch(fetchAttractions());
    } else if (query !== "" && query !== undefined) {
      return dispatch(fetchQueryAttraction(query));
    }
  };
>>>>>>> 3ed3ca3c890a7a13661b9332a0b10087fe36a3f1

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

  if (sortSelect) {
    filterData.sort((a, b) => {
      if (sortSelect === "수정일순") {
        return b.modifiedtime - a.modifiedtime;
      } else if (sortSelect === "등록일순") {
        return b.createdtime - a.createdtime;
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
    if (query) {
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
        {filterData?.map((item, index) => (
          <AttractionCard item={item} key={index} />
        ))}
      </section>
    </div>
  );
};

export default AttractionsPage;
