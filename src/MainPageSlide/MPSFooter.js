import React from 'react';
import './MPSFooter.css';
import LogoWebsite from './images/LogoWebsite.png';

function Footer() {
    return(
        <div>
            <ul class="FooterInfoList">
                <li>Quảng cáo</li>
                <li>Danh sách phim</li>
                <li>Diễn đàn</li>
                <li>Thông tin</li>
                <li>Liên hệ</li>
            </ul>
            <img class="LogoWebsite" src={LogoWebsite}/>
        </div>
    )
}

export default Footer;