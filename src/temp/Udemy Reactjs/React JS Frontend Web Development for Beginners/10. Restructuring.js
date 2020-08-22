// 1
// Khởi tạo object từ các phần tử định trước
var name = 'Everest';
var height = 8848;
var output = function () {
    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
}

var adventureClimbing = { name, height, output }; // khởi tạo object từ 2 biến riêng biệt
console.log(adventureClimbing.output());

// 2
// Khởi tạo object từ các thành phần 1 lần
var adventureClimbing2 = {
    name: 'Everest',
    height: 8848,
    output: function() { // có thể ghi là () {} cũng không sao, chỉ bị eslint bắt
        console.log(`Mt. ${this.name} is ${this.height} meter tall`);
    }
};
adventureClimbing2.output();