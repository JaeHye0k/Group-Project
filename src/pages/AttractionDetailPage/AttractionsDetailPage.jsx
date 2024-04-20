import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttractionDetail } from "../../redux/AttractionPage/attractionsSlice";
import "./AttractionDetailPage.style.css";
import { useNavigate } from "react-router-dom";

const AttractionsDetailPage = () => {
  const detailData = useSelector((state) => state.attraction.attractionDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log({ id });
  const getAttractionDetail = () => {
    dispatch(fetchAttractionDetail(id));
    console.log(detailData);
  };
  useEffect(() => {
    if (detailData) {
      getAttractionDetail();
      console.log(detailData);
    }
  }, [detailData]);
  return (
    <div className="att-container">
      <div className="att-detail-container">
        <div className="att-flex-box">
          <div className="img-box">
            <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
            <div className="att-slider-img">
                <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
                <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
                <img src="https://tong.visitkorea.or.kr/cms/resource/83/3029683_image2_1.jpg" />
            </div>
          </div>

          <div className="detail-info-box">
            <h3>제목</h3>
            <div className="info-text-box">
              <div className="title-box">
                <div className="att-title">우편번호</div>
                <div className="att-article">내용</div>
              </div>
              <div className="title-box">
                <div className="att-title">제목</div>
                <div className="att-article">내용</div>
              </div>
              <div className="title-box">
                <div className="att-title">주소</div>
                <div className="att-article">내용</div>
              </div>
            </div>
            <div className="content-article">
              개요가 어쩌구 저쩌구 우곡 박신윤 선생의 효행와 학덕을 기리기 위해
              세웠고 조정에 상소를 했는데 건립을 했다가 말았다가 폐원을 했다가
              막 그랬다가 어쩌구 아들이 뭘 설치를 했는데 뭔 참배를 하고 이런저런
              이야기가 있는 곳이니까 찾아와서 놀다가도록 해라 개요가 어쩌구
              저쩌구 우곡 박신윤 선생의 효행와 학덕을 기리기 위해 세웠고 조정에
              상소를 했는데 건립을 했다가 말았다가 폐원을 했다가 막 그랬다가
              어쩌구 아들이 뭘 설치를 했는데 뭔 참배를 하고 이런저런 이야기가
              있는 곳이니까 찾아와서 놀다가도록 해라개요가 어쩌구 저쩌구 우곡
              박신윤 선생의 효행와 학덕을 기리기 위해 세웠고 조정에 상소를
              했는데 건립을 했다가 말았다가 폐원을 했다가 막 그랬다가 어쩌구
              아들이 뭘 설치를 했는데 뭔 참배를 하고 이런저런 이야기가 있는
              곳이니까 찾아와서 놀다가도록 해라
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
