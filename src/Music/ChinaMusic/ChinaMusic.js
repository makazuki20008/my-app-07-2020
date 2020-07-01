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
import NguyenLamMotNguoiBinhThuongBenCanhAnhMusic from './Music/Vietsub+LyricEm nguyện làm một người bình thường bên cạnh anhVương Thất Thất我愿意平凡的陪在你身旁-王七七.mp3';
import GiangHaiBatDoNhiMusic from './Music/Vietsub+LyricGiang hải bất độ nhĩThi Nhân Lương江海不渡你-诗人凉.mp3';
import TyBaHanhMusic from './Music/[Vietsub] Tỳ Bà Hành - Kỳ Nhiên, Thẩm Mật Nhân 琵琶行 - 奇然沈谧仁.mp3';
import LuaChonMatDiKyUcMusic from './Music/Lựa Chọn Mất Đi Ký Ức Remix 选择失忆 dj Bài Hát Được Yêu Thích Trên Tik Tok ChinaChọn Cách Lãng Quên.mp3';
import QuyKhuLaiHeMusic from './Music/[Vietsub + Pinyin] Quy Khứ Lai Hề - Hoa Chúc 歸去來兮 - 花粥.mp3';

import BatPhucMusic from '../ChinaMusic/New folder/BatPhucLive-UongToLangSilenceWangTrieuTieuDuongZhaoXiaoTangTaKhaDanXieKeYinTuTuNhanRoadaXuDoiManhSNH48MacHanSNH48DoanNgheTuyenDuanYiXuan-6285468.mp3';
import CoChutNgotMusic from '../ChinaMusic/New folder/CoChutNgotLive-PhoNhuKieuFuRuQiaoPhiThamNguyenFeiQinYuanLamPhamFreyaLimTanNguuChinhUyLunaQinChuLamVuZhuLinYu-6268004.mp3';
import ConGioMuaHaMusic from '../ChinaMusic/New folder/ConGioMuaHa-HoaDuongHapThuyLieuHuoYangKeShuiLe-6266134.mp3';
import ConMatKyTaiMusic from '../ChinaMusic/New folder/ConMatKyTaiXuatChungFull-ChauThamZhouShen-6277785.mp3';
import DiemSangMusic from '../ChinaMusic/New folder/DiemSang-TieuChienXiaoZhan-6266825.mp3';
import MuonGapEmCoverMusic from '../ChinaMusic/New folder/MuonGapEmCover-TieuUcTinh-6267189.mp3';
import NguyetDaTranThienMusic from '../ChinaMusic/New folder/NguyetDaTranThienThienTrongLoiDonOST-SongSenhYeuDuong-6281229.mp3';
import GiacMoMuaHeNamAyMusic from '../ChinaMusic/New folder/GiacMoMuaHeNamAy-SNH48-5978291.mp3';
import ThichAnhMusic from '../ChinaMusic/New folder/ThichAnhSangTaoDoanh2020-TranTracTuyen-6270058.mp3';
import XichLinhMusic from '../ChinaMusic/New folder/XichLinhRemix-DangThapYeuQuanDengShenMeJun-6271733.mp3';
import XichLinhRemixMusic from '../ChinaMusic/New folder/XichLinhRemixRemix-ChapToHe-6283260.mp3';


import SliderChinaMusic from './ChinaMusicSlider';

function ChinaMusic() {
  return (
    <div className="Music">
      <SliderChinaMusic />
      <div>
        List bài hát:
        <ul class="cmList">
            <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種 <audio class="player" controls><source src={MangChungMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼 <audio class="player" controls><source src={AcMaMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山 <audio class="player" controls><source src={XuatSonMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思 <audio class="player" controls><source src={MotKhucMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦 <audio class="player" controls><source src={QueBoiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你 <audio class="player" controls><source src={NguyenLamMotNguoiBinhThuongBenCanhAnhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行 <audio class="player" controls><source src={TyBaHanhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉 <audio class="player" controls><source src={GiangHaiBatDoNhiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶 <audio class="player" controls><source src={LuaChonMatDiKyUcMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
        </ul>
        <ul class="cmList">
            <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種 <audio class="player" controls><source src={MangChungMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼 <audio class="player" controls><source src={AcMaMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山 <audio class="player" controls><source src={XuatSonMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思 <audio class="player" controls><source src={MotKhucMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦 <audio class="player" controls><source src={QueBoiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你 <audio class="player" controls><source src={NguyenLamMotNguoiBinhThuongBenCanhAnhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行 <audio class="player" controls><source src={TyBaHanhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉 <audio class="player" controls><source src={GiangHaiBatDoNhiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶 <audio class="player" controls><source src={LuaChonMatDiKyUcMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  11. Muốn Gặp Em / 想见你想见你想见你 <audio class="player" controls><source src={MuonGapEmCoverMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  12. Bất Phục / 不服 <audio class="player" controls><source src={BatPhucMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  13. Điểm Sáng / 光点 <audio class="player" controls><source src={DiemSangMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  14. Có Chút Ngọt / 有点甜 <audio class="player" controls><source src={CoChutNgotMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  15. Xích Linh / 赤伶 <audio class="player" controls><source src={XichLinhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  16. Cơn Gió Mùa Hạ / 夏天的风 <audio class="player" controls><source src={ConGioMuaHaMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  17. Giấc Mơ Mùa Hè Năm Ấy / 那年夏天的梦 <audio class="player" controls><source src={GiacMoMuaHeNamAyMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  18. Thích Anh / 喜欢你 <audio class="player" controls><source src={ThichAnhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  19. Đồng Tử (Kỳ Tài Xuất Chúng) / 瞳 (出类拔萃) <audio class="player" controls><source src={ConMatKyTaiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  20. Nguyệt Dạ / 月夜 <audio class="player" controls><source src={NguyetDaTranThienMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  21. Xích Linh Remix / 赤伶 <audio class="player" controls><source src={XichLinhRemixMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
        </ul>
        <ul class="cmList">
            <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種 <audio class="player" controls><source src={MangChungMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼 <audio class="player" controls><source src={AcMaMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山 <audio class="player" controls><source src={XuatSonMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思 <audio class="player" controls><source src={MotKhucMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦 <audio class="player" controls><source src={QueBoiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你 <audio class="player" controls><source src={NguyenLamMotNguoiBinhThuongBenCanhAnhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行 <audio class="player" controls><source src={TyBaHanhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉 <audio class="player" controls><source src={GiangHaiBatDoNhiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶 <audio class="player" controls><source src={LuaChonMatDiKyUcMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
        </ul>
        <ul class="cmList">
            <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種 <audio class="player" controls><source src={MangChungMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼 <audio class="player" controls><source src={AcMaMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山 <audio class="player" controls><source src={XuatSonMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思 <audio class="player" controls><source src={MotKhucMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦 <audio class="player" controls><source src={QueBoiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你 <audio class="player" controls><source src={NguyenLamMotNguoiBinhThuongBenCanhAnhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行 <audio class="player" controls><source src={TyBaHanhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉 <audio class="player" controls><source src={GiangHaiBatDoNhiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶 <audio class="player" controls><source src={LuaChonMatDiKyUcMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
        </ul>
        <ul class="cmList">
            <li><img class="cnImageTitle" src={MangChung}/>  1. Mang Chủng (Âm khuyết Thi Thính) 芒種 <audio class="player" controls><source src={MangChungMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={AcMa}/>  2. Ác Ma Đến Từ Thiên Đường 来自天堂的魔鬼 <audio class="player" controls><source src={AcMaMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={XuatSon}/>  3. Xuất Sơn 出山 <audio class="player" controls><source src={XuatSonMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TuongTu}/>  4. Một Khúc Tương Tư 曲相思 <audio class="player" controls><source src={MotKhucMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QueBoi}/>  5. Quẻ Bói 卜卦 <audio class="player" controls><source src={QueBoiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={NguyenLam}/>  6. Nguyện Làm 1 Người Bình Thường Cạnh Anh 我愿意平凡的陪在你 <audio class="player" controls><source src={NguyenLamMotNguoiBinhThuongBenCanhAnhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={TyBaHanh}/>  7. Tỳ Bà Hành 琵琶行 <audio class="player" controls><source src={TyBaHanhMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={GiangHai}/>  8. Giang Hải Bất Độ Nhĩ 江海不渡你-诗人凉 <audio class="player" controls><source src={GiangHaiBatDoNhiMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={LuaChonMatDiKyUc}/>  9. Lựa Chọn Mất Đi Ký Ức 選擇失憶 <audio class="player" controls><source src={LuaChonMatDiKyUcMusic} type="audio/mp3"/></audio></li>
            <li><img class="cnImageTitle" src={QuyKhu}/>  10. Quy Khứ Lai Hề 歸去來兮 <audio id="lh" class="player" controls><source src={QuyKhuLaiHeMusic} type="audio/mp3"/></audio></li>
        </ul>
      </div>
      
    </div>
  );
}

export default ChinaMusic;
