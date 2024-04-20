import React from 'react';
import './HomeMap.style.css'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import KakaoMap from '../../TravelMapPage/component/KakaoMap/KakaoMap';


const HomeMap = () => {

    const navigate = useNavigate();
    const navigateTo = (path) => {
    navigate(path);
    };

    return (
        <div>
            <br/>
                <br/>
                    
            <div className='mapPosition'>
            <h3 className='mid-title'>이번엔 어디로 떠나볼까?</h3>
            <br/>
            <br/>            
                        <div className='btnPosition'>
                            <div className='mapbtnBox'>
                                <div className='mapbtn' onClick={() => navigateTo("/map")}>주변여행지</div>
                                <div className='mapbtn' onClick={() => navigateTo("/map")}>음식점</div>
                                <div className='mapbtn' onClick={() => navigateTo("/map")}>카페</div>
                                <div className='mapbtn' onClick={() => navigateTo("/map")}>숙소</div>
                            </div>
                        </div>
                    <div className='homepageMap'>
                    {/* <KakaoMap /> */}
                    </div>
            </div>
        </div>
    );
};

export default HomeMap;