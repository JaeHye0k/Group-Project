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
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
const AttractionsPage = () => {
  const [sortSelect, setSortSelect] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [page, setPage] = useState(1);
  let attractionList = useSelector((state) => state.attraction.attractionList);
  let loading = useSelector((state) => state.attraction.isLoading);
  let data = attractionList?.response?.body.items.item;
  let dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navQuery = searchParams.get("query");
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  //All
  const getAttraction = () => {
    dispatch(fetchAttractions());
  };

  useEffect(() => {
    getAttraction();
    getCurrentLocation((lat, lon));
  }, []);
  useEffect(() => {
    if (page) {
      dispatch(fetchAttractions(page));
    }
  }, [page]);
  //query
  const getQueryAttraction = () => {
    if (navQuery == "") {
      return dispatch(fetchAttractions());
    } else if (navQuery !== "" && navQuery !== undefined) {
      return dispatch(fetchQueryAttraction(navQuery));
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
    return { lat: setLat(lat), lon: setLon(lon) };
  };
  //정렬
  const sortHandler = (sortChange) => {
    setSortSelect(sortChange);
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
    filterData?.sort((a, b) => {
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
    getQueryAttraction();
  }, []);
  if (loading) {
    return <Loading />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getQueryAttraction();
  };
  return (
    <div className="att-container">
      <div className="att-search-container"></div>
      <div className="att-filter-container">
        <div className="data-count">
          <span>
            총데이터 수
            <span className="orange">
              {attractionList?.response?.body?.totalCount}
            </span>{" "}
            개
          </span>
        </div>
        {/* <form className="att-search-box" onSubmit={handleSubmit}>
          <input
            onChange={(event) => setSearchParams({ query: event.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.target.value = "";
              }
            }}
            type="text"
            placeholder="지역을 입력하세요."
          />
          <button type="submit" className="black search-btn">
            검색
          </button>
        </form> */}
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
      <ReactPaginate
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={attractionList?.response?.body?.totalCount}
        previousLabel="< "
        pageClassName="page-item"
        pageLinkClassName="page-link-b"
        previousClassName="page-item"
        previousLinkClassName="page-link-b"
        nextClassName="page-item"
        nextLinkClassName="page-link-b"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link-b"
        containerClassName="pagination"
        activeClassName="active"
        activeLinkClassName="link-active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </div>
  );
};

export default AttractionsPage;
