// destructuring hủy
// lấy khởi tạo để ví dụ cho hàm hủy
let thingsToDo = {
    morning: 'Exercise',
    afternoon: 'Work',
    evening: 'Code',
    night: ['Sleep', 'Dream']
};

let { morning, afternoon } = thingsToDo; // Khai báo sử dụng như một variable
morning = 'Run';
console.log(morning, ' - ', afternoon); // Sử dụng morning từ thingsToDo

// 2
// Thường thì object sẽ chứa function, gọi đến function trong object để thực thi function
// Ở đây, object chứa dữ liệu hiển thị theo function đã định trước

// destructuring ({ name, university }) => { ... }
// name và university chưa có dữ liệu
// định nghĩa rằng: khi nào có dữ liệu name và university thì hiển thị theo dạng console.log( làm gì đó name làm gì đó university)
// name, university đại diện cho 1 trường dữ liệu trong object này
// trường { name: '', university: ''}
let uniStudent2 = ({ name, university }) => {
    console.log(`${name} from ${university}`);
};

// student sẽ đại diện cho khối dữ liệu của object này
// |student| <=> |{ a: '', b: '', ... }|
let uniStudent = student => {
    console.log(`${student.name} from ${student.university}`);
} // function for object

uniStudent({
    name: 'Ryan',
    university: 'University of Sydney'
}); // object

uniStudent2({
    name: 'Binh An',
    university: 'Nha Trang University'
})