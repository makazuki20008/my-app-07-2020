// câu lệnh
// MySQL commandline
// Set enviroment
// C:\xampp\mysql\bin

// Connect to MySQL
// mysql -u USERNAME -p

// using databse
// use khanhhoa

// query select
// select * from data

// execute query
// \G 

// command help
// \h

// show all info primary key, foreign key, structure of table
// SHOW CREATE TABLE test\G;

// khóa ngoại
//
// inbound
// if make foreign key inbound table then 'unable foreign key check' is 'disable' 
//
// code set unable foreign key check // SET FOREIGN_KEY_CHECKS=0; SET FOREIGN_KEY_CHECKS=1;
// ALTER TABLE products 
// ADD CONSTRAINT cat_fk 
// FOREIGN KEY (category) REFERENCES `categorypd`(`id`)  
// ON UPDATE CASCADE ON DELETE CASCADE;
//
// RESTRICT | CASCADE   | SET NULL | NO ACTION    | SET DEFAULT ?
// Hạn chế  | Thác nước | Đặt NULL | Không làm gì | Đặt làm mặt định


// sửa tên table 
// RENAME TABLE mysql.tên_cũ TO mysql.tên_mới


// tạo bảng 
CREATE TABLE table_name  (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(30) NOT NULL,
	lastname VARCHAR(30) NOT NULL,
	email VARCHAR(50),
	ten_column kieu(kich_co) dieu_kien_neu_co,
	reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

// UNSIGNED Không dấu
// AUTO_INCREMENT Tự động hiển thị
// PRIMARY KEY Khóa chính 
// NOT NULL Khi tạo ra một hàng thì cột này không được để trống
// TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP Kiểu thời gian




// sửa bảng 
ALTER TABLE table_name
  ADD new_column_name column_definition
    [ FIRST | AFTER column_name ];

// xóa bảng
DROP TABLE table_name;
// xóa dữ liệu có trong bảng 
TRUNCATE TABLE table_name;


			  bảng
		   
				  cột           cột
			  ---------------------------
			  |   price    |   Symbol   |
			  ---------------------------
			  |  dữ_liệu   |    VND     |   hàng
			  |  dữ_liệu   |    KRW     |   hàng 
			  |  300.000   |   dữ_liệu  |   hàng 
			  |  500.000   |    AUR     |   hàng
			  ---------------------------


SELECT * FROM tableName WHERE id=1; // lấy tất cả các cột trong bảng khi thỏa điều kiện của cột
SELECT `id`, `name`, `category`, `map`, `parent` FROM `data` WHERE 1; // lấy một số trường nhất định từ bảng
INSERT INTO `data`(`id`, `name`, `category`, `map`, `parent`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5]); // thêm dữ liệu vào bảng
UPDATE `data` SET `parent`=1, `category`=1 WHERE 1; // sửa dữ liệu đã có trong bảng kèm điều kiện nếu có (điều kiện xác định vị trí hàng cần thay đổi)
DELETE FROM `data` WHERE 0; // xóa dữ liệu có trong bảng với điều kiện (điều kiện xác định vị trí cần thay đổi)

// select distinct
// lấy dữ liệu một hoặc nhiều cột nào đó với điều kiện là một khi gặp 'hàng nào đó trùng lặp dữ liệu của tất cả các cột' thì chỉ hiển thị hàng đó 1 lần duy nhất
SELECT DISTINCT Country FROM Customers;

// select where, and, or, not
SELECT * from table_name WHERE id="abc" AND name="abc" // lấy tất cả các cột khi hàng đó thỏa điều kiện id bằng abc và name bằng abc 
SELECT * from table_name WHERE id="abc" OR name="abc" // lấy tất cả các cột khi hàng đó thỏa điều kiện hàng đó có id bằng abc hoặc hàng đó có name bằng abc 
SELECT * from table_name WHERE id="abc" AND NOT name="abc" // lấy tất cả các cột khi hàng đó thỏa điều kiện hàng đó có id bằng abc và dữ liệu của cột name khác abc
SELECT * from table_name WHERE NOT id="abc" // lấy tất cả các cột khi hàng đó thỏa điều kiện dữ liệu cột id khác abc

// order by 
SELECT * FROM Customers ORDER BY Country; // lấy tất cả các cột sau đó sắp xếp dữ liệu theo thứ tự abc giá trị cột Country
SELECT * FROM Customers ORDER BY Country DESC; // lấy tất cả các cột sau đó sắp xếp dữ liệu theo thứ tự cba giá trị cột Country 
SELECT * FROM Customers ORDER BY Country ASC; // lấy tất cả các cột sau đó sắp xếp dữ liệu theo thứ tự abc giá trị cột Country
SELECT * FROM Customers ORDER BY Country ASC, CustomName DESC; // lấy tất cả các cột sau đó sắp xếp các hàng dữ liệu theo thứ tự abc giá trị cột Country trước, 
// trong 'tập hợp các giá trị trùng nhau' ở cột 'country' tiếp tục tiến hành sắp xếp các hàng dữ liệu theo giá trị cột customName 
// có nghĩa là giữ nguyên thứ tự sắp xếp trước sau đó sắp xếp theo giá trị sắp xếp tiếp theo

// null lấy dữ liệu với điều kiện trường rỗng
SELECT * from table_name WHERE id IS NULL
SELECT * from table_name WHERE id IS NOT NULL

// select TOP, select LIMIT 
SELECT TOP 5 * from table_name 
SELECT * from table_name LIMIT 5

// select MIN, select MAX 
SELECT MIN(Price) AS SmallestPrice FROM Products; // lấy ra dữ liệu có giá trị nhỏ nhất trong cột price, đặt cho cột chứa dữ liệu đó tên là smallestprice
SELECT MAX(Price) AS HighestPrice FROM Products; // lấy ra dữ liệu có giá trị lớn nhất trong cột price, đặt cho cột chứa dữ liệu đó tên là highestprice

// select count, avg, sum
select count(price) from table_name // hiển thị số lượng dòng dữ liệu của cột price
select avg(price) from table_name // hiển thị trung bình cộng các giá trị của cột price
select sum(price) from table_name // hiển thị tổng cộng giá trị các dòng của cột price

// group by 
// having

// kiểm tra
// check 
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);
// check on constraint
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);
// check when select data 

// đổi kiểu table thành InnoDB
// InnoDB for table  
ALTER TABLE `data` ENGINE=InnoDB;







// thay đổi dữ liệu đầu ra 
SELECT 25 `name` FROM `distint` // hiển thị ra tất cả các hàng trong distint với column name mang đều mang giá trị 25