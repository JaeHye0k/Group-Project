import React from "react";
import "./HomePage.style.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../Footer/Footer";
import HomeCard from "./homecard/HomeCard";
import HomeMap from "./homemap/HomeMap";
import Loading from "../../common/Loading";


const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
   
  };

  return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
           <div className="info">
            <figure>
              <img src="/images/banner/1.jpg" alt="banner1"/>
            </figure>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">두근두근 설레는<br/>봄꽃여행지 추천</div>
              <Link to='/'>자세히 보기</Link>
            </div>
          </div>
          <div className="info">
            <figure>
              <img src="/images/banner/2.jpg" alt="banner2"/>
            </figure>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">사랑하는 가족들과<br/>함께하는 추억 만들기</div>
              <Link to='/'>자세히 보기</Link>
            </div>
          </div>

          <div className="info">
            <figure>
              <img src="/images/banner/3.jpg" alt="banner3"/>
            </figure>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">매력적인 도시<br/>부산으로 가자</div>
              <Link to='/'>자세히 보기</Link>
            </div>
          </div>

          <div className="info">
            <figure>
              <img src="/images/banner/4.jpg" alt="banner"/>
            </figure>
            <div className="InfoBox">
              <div className="decoBox"/>
              <div className="InfoText">보라색으로 물든<br/>안성 팜랜드</div>
              <Link to='/'>자세히 보기</Link>
            </div>
          </div>
               
        </Slider>

        <HomeCard />
        <HomeMap />
        <Footer />
          

        </div>
      
  
  
  );
};


export default HomePage;