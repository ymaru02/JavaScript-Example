alert("hi");

console.log(535353);

let a = 5;
let b = 3;
let myName = "don";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const amIfat = null;
let something;

console.log(something, amIfat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fir = "fir";
const sat = "sat";
const sun = "sun";

const dayOfWeek = mon + tue + wed + thu + fir + sat + sun;
console.log(dayOfWeek);

// const dayOfWeek_array = [mon, tue, wed, thu, fir, sat, sum];
const dayOfWeek_array = ["mon", "tue", "wed", "thu", "fir", "sat"];

//  Get Item from Array
console.log(dayOfWeek_array[4]);

// Add one more day to the array
dayOfWeek_array.push("sun");

const nonsencse = [1, 2, "hello ", "say", undefined];

console.log(nonsencse);

const player = {
  name: "don",
  age: 14,
  points: 10,
  fat: true,
};

player.name = "yun";
player.age = 25;
player.fat = false;

console.log(player);
console.log(player.name);

function sayHello() {
  console.log("Hello word");
}

sayHello();

function add(a, b) {
  console.log(a + b);
}

add(4, 3);

const player_2 = {
  name: "don",
  age: 14,
  fat: true,
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName);
  },
};

player_2.sayHello("lunn");
