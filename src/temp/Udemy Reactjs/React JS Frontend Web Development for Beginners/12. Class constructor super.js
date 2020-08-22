// classes

// we could create a function and add methods on the function object using the prototype

// in javascript functions are objects - ingerit the begaviour ob object
// whenever you create an object, the prorotype object is also created behind the scene

// 1

// Phân tích hình thành function:
//    Tôi là function
//    Tôi có ngăn chứa là destination và days
//    Tôi cần bạn đổ dữ liệu cho 2 ngăn chứa đó

// Phân tích hình thành construc function:
//    Tạo ra function, function Holiday() {}
//    Dữ liệu này lấy từ bên ngoài vào nên sử dụng đối số
//    Khai báo đối số (destination, days)
//    Đổ dữ liệu vào ngăn chứa this.destination = dữ_liệu, this.day = dữ_liệu
//    Khởi tạo ngăn chứa this.destination, this.days

// Cách phân tích:
//    Cái gì hiểu gần nhất là cái làm cuối
//    Phân tích xong sắp xếp ngược trở lên
//    Ta sẽ có hành động và suy nghĩ
//    Hành động sắp xếp ngược
//    Suy nghĩ cùng hành động thì suy nghĩ sẽ đặt trước

function Holiday(destination, days) {
    this.destination = destination
    this.days = days
}

Holiday.prototype.info = function() {
    console.log(this.destination + " | " + this.days + " days");
}

var Nepal = new Holiday("Nepal", 30);
console.log(Nepal.info());

// 2
// constructor là khởi tạo cho class
// method không cần mô tả function
class Holiday2 {
    constructor(destination, days) {
        this.destination = destination
        this.days = days
    }

    info() {
        console.log(`${this.destiantion} will take ${this.days} days.`);
    }
}

console.log(Holiday2.prototype);

const trip = new Holiday2("Kathmandu, Nepal", 30);
console.log(trip.info());

// 3
// Kế thừa trong javascript

// super class
class Holiday3 {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

// sub class
class Expedition extends Holiday3 {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }
    info() {
        super.info(); // sử dụng super(phần_tử) để gọi phần tử từ cha
        console.log(`Bring your ${this.gear.join(" and your")}`);
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);
tripWithGear.info();