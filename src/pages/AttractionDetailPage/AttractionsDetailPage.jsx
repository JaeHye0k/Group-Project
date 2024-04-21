import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttractionDetail } from "../../redux/AttractionPage/attractionsSlice";
import "./AttractionDetailPage.style.css";
import { useNavigate } from "react-router-dom";
import { useDetail } from "../../hooks/useAttractionDetail";
import {useDetailImage} from "../../hooks/useAttractionDetailImage";

const AttractionsDetailPage = () => {
  let { contentId } = useParams();
  const { data, isLoading, isError } = useDetail({ contentId });
  const [contentTypeId, setContentTypeId] =useState("")
  const {data:imageData} = useDetailImage({contentId,contentTypeId})
  const detailData = data?.response.body.items.item[0]
  const navigate = useNavigate();
  console.log(detailData?.contenttypeid);
  console.log(contentTypeId);
  console.log(imageData);
  
  useEffect(()=>{
    if(detailData){

      setContentTypeId(detailData?.contenttypeid)
    }
  
  },[detailData])
  // const imageDb = imageData?.response.body.items.item[0]
  
  ;
  // }, [detailData]);
  return (
    <div className="att-container">
      <div className="att-detail-container">
        <div className="att-flex-box">
          <div className="img-box">
            <img src={detailData?.firstimage} />
            {/* <div className="att-slider-img">
              <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
              <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
              <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
            </div> */}
          </div>

          <div className="detail-info-box">
            <h3>{detailData?.title}</h3>
            <div className="info-text-box">
              <div className="title-box">
                <div className="att-title">우편번호</div>
                <div className="att-article">{detailData?.zipcode}</div>
              </div>
              <div className="title-box">
                <div className="att-title">제목</div>
                <div className="att-article">{detailData?.title}</div>
              </div>
              <div className="title-box">
                <div className="att-title">주소</div>
                <div className="att-article">{detailData?.addr1}</div>
              </div>
            </div>
            <div className="content-article">
             {detailData?.overview}
            </div>
          </div>
        </div>
        <button className="nav-btn" onClick={() => navigate("/attractions")}>
          목록
        </button>
      </div>
    </div>
  );
};

export default AttractionsDetailPage;
