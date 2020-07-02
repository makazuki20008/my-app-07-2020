import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import MangChung from './Images/MangChung.jpg';
import AcMa from './Images/AcMaDenTuThienDuong.jpg';
import XuatSon from './Images/XuatSon.jpg';
import TuongTu from './Images/TuongTu.jpg';
import QueBoi from './Images/QueBoi.jpg';
import NguyenLam from './Images/NguyenLam1NguoiBinhThuongBenCanhAnh.jpg';
import TyBaHanh from './Images/TyBaHanh.jpg';
import GiangHai from './Images/GiangHaiBatDoNhi.jpg';
import LuaChonMatDiKyUc from './Images/LuaChonMatDiKyUc.jpg';
import QuyKhu from './Images/QuyKhuLaiHe.jpg';
import DanTyBa from './Images/aHR0cDovL3d3dy5ueWN6aXRoZXIuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMi9iYmNlMzFjODkwNDA2NmY1OWQ3ZTdiNGQ1NmI0NDFiYS5wbmc_p_p100_p_3D.m.png';
import DapAn from './Images/dapancuaban.jpg';
import LuKhach from './Images/lukhachquathoigian.jpg';
import fcca from './Images/3fcca2c21ad25c5f1bbc766a1fdc6202.jpg';
import a281de from './Images/79a281de727d301e52c8fac1943507ea.jpg';
import aHR from './Images/aHR0cDovL3d3dy5ueWN6aXRoZXIuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMi9iYmNlMzFjODkwNDA2NmY1OWQ3ZTdiNGQ1NmI0NDFiYS5wbmc_p_p100_p_3D.m.png';

class SliderChinaMusic extends React.Component {
    render() {
        const images = [
            { url: MangChung },
            { url: AcMa },
            { url: XuatSon },
            { url: TuongTu },
            { url: QueBoi },
            { url: NguyenLam },
            { url: TyBaHanh },
            { url: DanTyBa },
            { url: GiangHai },
            { url: LuaChonMatDiKyUc },
            { url: QuyKhu },
            { url: DapAn },
            { url: LuKhach },
            { url: fcca },
            { url: a281de },
            { url: aHR },
        ];

        return (
            <div class="container">
                <div class="bSlide">
                    <SimpleImageSlider 
                        width={1200}
                        height={504}
                        images={images}
                    />
                </div>

                <div class="sSlide">
                    <SimpleImageSlider class="sSlide"
                        width={330}
                        height={200}
                        images={images}
                    />
                </div>
            </div>
        );
    }
}

export default SliderChinaMusic;