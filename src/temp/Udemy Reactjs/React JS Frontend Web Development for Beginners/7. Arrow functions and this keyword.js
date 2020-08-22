// https://www.udemy.com/course/react-tutorial/learn/lecture/13683138#overview
// Ryan Dhungel
let nepal = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],
    // add method
    printWithDash: function() {
        setTimeout(function(){
            console.log(this.mountains.join(" - "))
        }, 3000)
    }
}

alert(nepal.mountains);

let nepal2 = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],
    // add method
    printWithDash: function() {
        setTimeout(() => {
            console.log(this.mountains.join(" - "))}, 3000);
    }
};

alert(nepal2.mountains);

// function in object
// function with arrow function