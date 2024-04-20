import React from 'react';
import './Footer.style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div className='snsIcon'>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='icon'/>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='icon'/>
                <FontAwesomeIcon icon={faYoutube} size="lg" className='icon'/>
                </div>

                <div className='footer_logos'>
                <img className='footerLogo' src='/images/logo.png' alt='로고'></img>
                <img className='footerLogo3' src='/images/3종.png' alt='3종'></img>
                </div>
                
                <div className='footerText'>경기도 원주시 세계로 10   TEL. 031-406-1607 사업자등록번호: 202-81-50707 통신판매업신고: 제209-경기안산-1234호</div>
            </div>
        </div>
    );
};

export default Footer;