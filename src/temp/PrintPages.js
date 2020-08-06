import React from 'react';
class PrintPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    clickHandle = () => {
        window.print();
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandle}>Print</button>
                <pre>
                    Bảng xếp loại học sinh theo lớp 
                    Bảng xếp loại học sinh theo khóa 
                    Bảng điểm học sinh 
                    Sổ đầu bài 
                    Sổ sao đỏ 
                    Thời khóa biểu 
                    Thông tin học sinh 
                    Bảng điểm theo môn học 
                </pre>
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Giới tính</th>
                        <th>Năm sinh</th>
                        <th>Lớp</th>
                        <th>Học lực</th>
                        <th>Hạnh kiểm</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Hoàng Lân</td>
                        <td>Nam</td>
                        <td>1999</td>
                        <td>10A3</td>
                        <td>Tiên tiến</td>
                        <td>Khá</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Huỳnh Lê Bảo Ngọc</td>
                        <td>Nữ</td>
                        <td>2000</td>
                        <td>10A3</td>
                        <td>Giỏi</td>
                        <td>Xuất sắc</td>
                    </tr>
                </table>
                
            </div>
        )
    }
}

export default PrintPage;