import React from 'react';
import './Music.css';

import MrSiro from './Images/Mr.Siro.jpg';
import ERIK from './Images/ERIK.jpg';
import LeBaoBinh from './Images/LeBaoBinh.jpg';
import LilZpoet from './Images/LilZpoet.jpg';
import DoanHieu from './Images/DoanHieu.jpg';
import DinhDaiVu from './Images/DinhDaiVu.jpg';
import ThanhHung from './Images/ThanhHung.jpg';
import NhatPhong from './Images/NhatPhong.jpg';
import DucPhuc from './Images/DucPhuc.jpg';
import Amee from './Images/Amee.jpg';
import H2K from './Images/H2K.jpg';

function Music() {
  return (
    <div className="Music">
        List bài hát:
      <ul>
          <li><img class="imageTitle" src={MrSiro} />  1. Đường về chẳng còn em - Mr.Siro</li>
          <li><img class="imageTitle" src={ERIK} />  2. Em không sai chúng ta sai - ERIK</li>
          <li><img class="imageTitle" src={LeBaoBinh} />  3. Thích thì đến - Lê Bảo Bình</li>
          <li><img class="imageTitle" src={LilZpoet} />  4. Yêu từ đâu mà ra - Lil Zpoet</li>
          <li><img class="imageTitle" src={DoanHieu} />  5. Tình sầu thiên thu muôn lối - Doãn Hiếu</li>
          <li><img class="imageTitle" src={DinhDaiVu} />  6. Huynh đệ à - Đinh Đại Vũ</li>
          <li><img class="imageTitle" src={ThanhHung} />  7. Ai đợi mình được mãi - Thanh Hưng</li>
          <li><img class="imageTitle" src={NhatPhong} />  8. Sợ phải kết thúc - Nhật Phong</li>
          <li><img class="imageTitle" src={DucPhuc} />  9. Hơn cả yêu - Đức Phúc</li>
          <li><img class="imageTitle" src={Amee} />  10. Sao anh chưa về nhà - Amee, RickyStar</li>
          <li><img class="imageTitle" src={H2K} />  11. Em có biết - H2K</li>
      </ul>
    </div>
  );
}

export default Music;
