import React from 'react';
import './MainPageSlide.css';

import Header from './MPSHeader';
import Footer from './MPSFooter';

import RManImage from './images/1.jpg';
import TheManImage from './images/2.jpg';
import FanChanImage from './images/3.jpg';
import TiengSungImage from './images/555.jpg';
import QuangTruong from './images/556.jpg';
import PokeImage from './images/557.jpg';
import PhieuLuuImage from './images/poster.medium.jpg';
import MeCungImage from './images/GiaiMaMC.jpg';
import TroDuaImage from './images/truth-or-dare-2012-movie-poster.jpg';
import VungDatZomImage from './images/DoubleTap.jpg';
import FrozenImage from './images/index.jpg';
import EliceImage from './images/alice.jpg';

function PhimHot() {
    return (
        <div class="PhimHotDiv">

            <h1>Phim hot</h1>




            <div class="PhimHotContain">
                <img src={RManImage}/>
                <ul>
                    <li><h2>Running man</h2></li>
                    <li><p>Năm phát hành: 2019</p></li>
                    <li><p>Tập: 187</p></li>
                    <li><p>Quốc gia: Hàn Quốc</p></li>
                </ul>
            </div>

            <div class="PhimHotContain">
                <img src={TheManImage}/>
                <ul>
                    <li><h2>The Man From Nowhere</h2></li>
                    <li><p>Năm phát hành: 2017</p></li>
                    <li><p>Quốc gia: Hàn Quốc</p></li>
                </ul>
            </div>

            <div class="PhimHotContain">
                <img src={FanChanImage}/>
                <ul>
                    <li><h2>FanChan</h2></li>
                    <li><p>Năm phát hành: 2005</p></li>
                    <li><p>Quốc gia: Thái Lan</p></li>
                </ul>
            </div>





        </div>
    )
}

const PhimMoi = (
    <div class="PhimMoiDiv">
        <h1>Phim moi</h1>

        <div class="PhimMoiContain">
            <img src={TiengSungImage} />
            <ul>
                <li><h2>Người hùng không súng (Hacksaw Ridge)</h2></li>
                <li><p>Năm phát hành: 2019</p></li>
                <li><p>Tập: 187</p></li>
                <li><p>Quốc gia: Hàn Quốc</p></li>
            </ul>
        </div>

        <div class="PhimMoiContain">
            <img src={QuangTruong} />
            <ul>
                <li><h2>Quảng Trường Ma-Siam Square (2017)</h2></li>
                <li><p>Năm phát hành: 2019</p></li>
                <li><p>Tập: 187</p></li>
                <li><p>Quốc gia: Hàn Quốc</p></li>
            </ul>
        </div>

        <div class="PhimMoiContain">
            <img src={PokeImage} />
            <ul>
                <li><h2>Pokemon XYZ</h2></li>
                <li><p>Năm phát hành: 2019</p></li>
                <li><p>Tập: 187</p></li>
                <li><p>Quốc gia: Hàn Quốc</p></li>
            </ul>
        </div>


         <br/>
         <br/>
         <br/>
    </div>
);

function MainPageSlide() {
    return(
        <div>
            <Header></Header>
            <PhimHot></PhimHot>
            <div class="SlidePhim">
                <h1>Slide Phim</h1>
                <img src={PhieuLuuImage}/>
                <img src={MeCungImage}/>
                <img src={TroDuaImage}/>
                <img src={VungDatZomImage}/>
                <img src={FrozenImage}/>
                <img src={EliceImage}/>
            Cuộc Phiêu Lưu Vào Lòng Đất-Journey to the Center of the Earth 2008 3000view 5rate
            Mê cung 2015 7524view 3rate
            Trò đùa tử thần 2017 10000view 2.5rate
            Vùng đất zombie 2009 25000view 3rate
            Frozen 2015 1000000view 5rate
            Elisa sứ sở thần tiên 2014 500view 4rate
            </div>
            {PhimMoi}
            <Footer></Footer>
            {/* <PhimMoi></PhimMoi>
            <PhimNhieuLuotXem></PhimNhieuLuotXem> */}
        </div>
    )
}

export default MainPageSlide;