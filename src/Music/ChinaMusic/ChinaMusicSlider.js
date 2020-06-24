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
import QuyKhu from './Images/LuaChonMatDiKyUc.jpg';

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
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={1200}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}

export default SliderChinaMusic;