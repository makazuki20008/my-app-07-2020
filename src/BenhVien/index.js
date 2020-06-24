import React from 'react';
import './index.css';
import HeaderBenhVien from './images/header.png';
import HospitalLogo from './images/hospital-logo.png';
import HospitalMap from './images/hospital-map.png';

function BenhVien() {
    return(
        <div>
            <img src={HeaderBenhVien}/>
            
            <div class="container">
                {/* <navbenhvien></navbenhvien> */}
                <div class="header-navbar">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#"><img src={HospitalLogo} class="hospital-logo" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Trang chủ <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Khoa chuyên ngành
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Ngoại thần kinh</a>
                                    <a class="dropdown-item" href="#">Phụ sản</a>
                                    <a class="dropdown-item" href="#">Răng hàm mặt</a>
                                    <a class="dropdown-item" href="#">Hồi phục</a>
                                    <a class="dropdown-item" href="#">Chấn thương chỉnh hình</a>
                                    <a class="dropdown-item" href="#">Phẩu thuật hẩm mỹ</a>
                                    <a class="dropdown-item" href="#">Ngoại chấn thương</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Bảng đồ khoa viện</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Giới thiệu <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Liên hệ <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <br />
                <img src={HospitalMap} class="hospital-map"/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 class="table-doctor-title">Bảng ghi chú bác sĩ khoa trực</h1>
                <br />
                <table class="table">
                    <tr>
                        <th class="th-1"></th>
                        <th class="th-2">Khoa chuyên ngành</th>
                        <th class="th-3">Giờ khám bệnh</th>
                        <th class="th-4">Bác sĩ trực</th>
                        <th class="th-5">Ghi chú</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Tai mũi họng</td>
                        <td>Sáng: 9:00h - 11:30h <br/> Chiều: 1:30h - 4:00h</td>
                        <td>Ngô Văn Lan, Nguyễn Hữu Trọng, Lê Thị Bích, Đào Lê Dương Ngọc.</td>
                        <td>Lê Thị Bích thay cho Trần Tú Lan, các bác sĩ trong ca trực vẫn hoạt động bình thường. Theo lịch trình bổ sung thêm thiết bị văn phòng như bút, viết, giấy A4,...</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ngoại thần kinh</td>
                        <td>Sáng: 9:00h - 11:30h <br/> Chiều: 1:30h - 4:00h</td>
                        <td>Lý Nguyễn Văn.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Hồi sức cấp cứu</td>
                        <td>Sáng: 6:00h - 11:30h <br/> Chiều: 1:30h - 5:00h</td>
                        <td>Lý Văn Sáng, Lê Quốc Hùng, Nguyễn Thị Tuyết, Ngô Ánh Nguyệt, Nguyễn Phi Long.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Phụ sản</td>
                        <td>Sáng: 9:00h - 11:30h <br/> Chiều: 1:30h - 4:00h <br/> Tối: 7:00h - 12:00h</td>
                        <td>Dương Minh Tâm, Nguyễn Đỗ Quách Đào.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Răng hàm mặt</td>
                        <td>Sáng: 8:00h - 12:00h <br/> Chiều: 2:00h - 5:00h</td>
                        <td>Lê Thị Thu, Dương Đỗ Hùng.</td>
                        <td></td>
                    </tr>
                </table>     
<br/>
                <div class="footer">
                    <div class="footer-logo">
                        <img src={HospitalLogo} />
                    </div>
                    <p><a href="https://google.com"><span>Trang chủ</span></a><a href="https://google.com"><span>Tin tức</span></a><a href="https://google.com"><span>Liên hệ</span></a></p>
                    <p class="footer-copyright">@Copyright 2020 Alazada company</p>
                </div>    

            </div>           

        </div>
    );
};

export default BenhVien;