// 1

var age = prompt("Сколько вам лет?");

if (age >= 18) {
    console.log("Вы совершеннолетний");
}

else {
    console.log("Вы несовершеннолетний");
}

// 2

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 3

function ButtonStyle() {
    document.body.style.backgroundColor = "blue";
}

// 4
let w = 1;
while (w < 6) {
    console.log(w);
    w++;
}

// 5
var input = prompt("Солнце - это звезда?");

if (input === "да" || input === "Да") {
    console.log("Правильно!");
}

else if (input === "нет" || input === "Нет") {
    console.log("Неправильно, солнце — это звезда.");
}

else {
    console.log("Введи корректно свой ответ")
}

// 6 

for (let a = 1; a < 21; a++) {
    if (a % 2 == 0) {
        console.log("Четное: " + a);
    }

    else {
        console.log("Не четное: " + a);
    }
}

// 7

for (let y = 1; y <= 10; y++) {
    console.log("Таблица умножение: " + y * 5);
}

// 8

function Click() {
    document.getElementById("text").textContent = "Вы кликнули дважды!"
}

// 9 
function Body() {
    let random = '#' + Math.floor(Math.random() * 1000);
    document.body.style.backgroundColor = random;
}

// 10
let count = 0
alert("Добро пожаловаться в Викторину! В Викторине всего 3 вопроса, за каждый правильный ответ начисляется 1 балл.")
var input_vectorina1 = prompt("1. Сколько у человека ног?")

if (input_vectorina1 == 2) {
    alert("Правильно!")
    count++;
}

else {
    alert("Не правильно!")
}

var input_vectorina2 = prompt("2. Сколько океанов на земле?")
if (input_vectorina2 == 5) {
    alert("Правильно!")
    count++;
}

else {
    alert("Не правильно!")
}

var input_vectorina3 = prompt("3. Сколько планет в Солнечной системе?")
if (input_vectorina3 == 8) {
    alert("Правильно!")
    count++;
}

else {
    alert("Не правильно!")
}

alert("Вы набрали " + count + " очков!");
