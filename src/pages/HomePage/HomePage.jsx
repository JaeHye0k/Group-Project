import React from "react";
import styled from "styled-components";
import './HomePage.style.css'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';;


// const InfoBox = styled.div`
//   position: absolute;
//   background-color: white;
//   bottom: 0;
//   width: 2.5%;
//   height: 40%;
//   margin-left: 1.5%;
// `

const HomePage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
  //    responsive: [ // 반응형 옵션 
	// {
  // 		breakpoint: 480, // (숫자)px 이하일 경우
  //       settings: {
  //         slidesToShow: 1,
  //         arrows:true,
	// 	}
	// }
  // ]
};

  return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">두근두근 설레는<br/>봄꽃여행지 추천</div>
              <Link to='/'><div className="InfoLink">자세히 보기</div></Link>
            </div>
            <img src="/img/banner/1.jpg" alt="banner1"></img>
          </div>

          <div>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">사랑하는 가족들과<br/>함께하는 추억 만들기</div>
              <Link to='/'><div className="InfoLink">자세히 보기</div></Link>
            </div>            
            <img src="/img/banner/2.jpg" alt="banner2"></img>
          </div>
          
          <div>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">매력적인 도시<br/>부산으로 가자</div>
              <Link to='/'><div className="InfoLink">자세히 보기</div></Link>
            </div>
            <img src="/img/banner/3.jpg" alt="banner3"></img>
          </div>
          
          <div>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">보라색 꽃밭으로 물든<br/>안성 팜랜드</div>
              <Link to='/'><div className="InfoLink">자세히 보기</div></Link>
            </div>
            <img src="/img/banner/4.jpg" alt="banner4"></img>
          </div>
         
        </Slider>
        <br/>
        <br/>
        <div>
          <h2>함께 떠나는 힐링테마 여행</h2>
          이미지카드 와르르
        </div>
        <div>
          <h2>이번엔 어디로 떠나볼까?</h2>
          <div>지도넣자</div>
        </div>
          푸터는 따로 만들자
        </div>
    );
  }

//   return <div>

//       <div className="imgBanner"></div>
//       <div className="textBanner">
//         두근두근 설레는<br/>봄꽃 여행지 추천<br/>
//         <Link>자세히보기</Link>
//       </div>
//       <div>
//         <h2>함께 떠나는 힐링테마 여행</h2>
//         이미지카드 와르르
//       </div>
//       <div>
//         <h2>이번엔 어디로 떠나볼까?</h2>
//         <div>지도넣자</div>
//       </div>
//       푸터는 따로 만들자

//   </div>;
// };

export default HomePage;
