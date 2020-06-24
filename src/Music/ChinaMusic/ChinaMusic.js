import React from 'react';
import './ChinaMusic.css';
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

import MangChungMusic from './Music/MangChung.mp3';
import AcMaMusic from './Music/AcMaDenTuThienDuong.mp3';
import XuatSonMusic from './Music/XuatSon.mp3';
import MotKhucMusic from './Music/MotKhucTuongTu.mp3';
import QueBoiMusic from './Music/[Vietsub + Kara] Quẻ bói - Thôi Tử Cách.mp3';

import SliderChinaMusic from './ChinaMusicSlider';

function ChinaMusic() {
  return (
    <div className="Music">
      <SliderChinaMusic />
        List bài hát:
      <ul class="cmList">
          <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種 <audio class="player" controls><source src={MangChungMusic} type="audio/mp3"/></audio></li>
          <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼 <audio class="player" controls><source src={AcMaMusic} type="audio/mp3"/></audio></li>
          <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山 <audio class="player" controls><source src={XuatSonMusic} type="audio/mp3"/></audio></li>
          <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思 <audio class="player" controls><source src={MotKhucMusic} type="audio/mp3"/></audio></li>
          <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦 <audio class="player" controls><source src={QueBoiMusic} type="audio/mp3"/></audio></li>
          <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你</li>
          <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行</li>
          <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉</li>
          <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶</li>
          <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮</li>
      </ul>
      <ul class="cmList">
          <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種</li>
          <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼</li>
          <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山</li>
          <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思</li>
          <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦</li>
          <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你</li>
          <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行</li>
          <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉</li>
          <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶</li>
          <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮</li>
      </ul>
      <ul class="cmList">
          <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種</li>
          <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼</li>
          <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山</li>
          <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思</li>
          <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦</li>
          <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你</li>
          <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行</li>
          <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉</li>
          <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶</li>
          <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮</li>
      </ul>
    </div>
  );
}

export default ChinaMusic;
