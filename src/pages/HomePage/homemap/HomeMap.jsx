import React from 'react';
import './HomeMap.style.css'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomeMap = () => {

    const navigate = useNavigate();
    const navigateTo = (path) => {
    navigate(path);
    };

    return (
        <div>
            <br/>
                <br/>
                    <h3 className='mid-title'>이번엔 어디로 떠나볼까?</h3>
            <div className='mapPosition'>                
                        <div className='btnPosition'>
                            <div className='mapbtn' onClick={() => navigateTo("/map")}>주변여행지</div>
                            <div className='mapbtn' onClick={() => navigateTo("/map")}>음식점</div>
                            <div className='mapbtn' onClick={() => navigateTo("/map")}>카페</div>
                            <div className='mapbtn' onClick={() => navigateTo("/map")}>숙소</div>
                        </div>
                    <div className='homepageMap'>
                        지도넣자</div>
            </div>
        </div>
    );
};

export default HomeMap;