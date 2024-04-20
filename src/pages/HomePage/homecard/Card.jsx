import React from 'react';
import styled from 'styled-components';

const ImgBox = styled.img`
    width: 340px;
    height: 300px;
   @media (max-width: 600px) {
    width: 150px;
    height: 150px;
   } 
`

const Card = () => {
    return (
        <div>
            <ImgBox src='/images/banner/2.jpg'></ImgBox>
            <h4>오래된 나무</h4>
            <h6>충청남도 어쩌구시</h6>
        </div>
    );
};

export default Card;