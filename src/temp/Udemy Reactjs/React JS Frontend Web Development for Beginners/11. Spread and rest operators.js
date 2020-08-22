// 1
var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan]; // khởi tạo array từ 2 array

console.log(allMountains);

// 2
var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chicken curry'
};

var night = {
    dinner: 'noodle soup'
}

var picnic = {...day, ...night};

console.log(picnic);

// sử dụng sai cứ pháp cố ý để sửa lại

// 3
// rest 
var rivers = ['Sunkoshi', 'Tamakoshhi', 'Saptakoshi'];
var [first, ...rest] = rivers;
// ta đã học let [, , first] là cách khai báo object lấy vị trí
// first là lấy vị trí
// rest là lấy toàn bộ array ngoại trừ first

// let [ ] = object
// cú pháp lấy phần tử
// sử dụng cú pháp này lấy phần tử theo vị trí
// [ ] là khu vực dữ liệu bên vế phải

console.log(first);
console.log(rest); // ...rest vừa định nghĩa rest, vừa định nghĩa khoảng mà rest sẽ tượng trưng