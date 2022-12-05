'use strict';


var leftboarderwidth = 1; //var, let, const - переменные
let second = 2;
const numberpi = 3.14
{
console.log(second); //console.log - отображает данные в косоли
}
var number = 50;
console.log(56/2);
var string = "Hello!";
var obj = {};  //объект пишется в скобках {}


let persone = {
    name: "Chris",
    age: 16,
    information: "He likes to play guitar and dota. He also goes to gym.",
    hasagirlfriend: false,

};
console.log(persone.name);
console.log(persone ["information"]); //чтобы вытащиь данные из обьекта, надо записать его имя в [] и ""
let images = ['banana.jpg', 'apple.png'];
console.log(images[0]); //выводит в консоль переменную или предмет по номеру 
// alert('Are you sure?'); // alert - окно с вопросом 

//let answer = confirm("Are you here?"); окно с вопросом 
//let answer = prompt("Are u 18 y.o.?" , "Yes"); //окно с вопросом и строкой для введения ответа
console.log(typeof(answer)); //тип ответа

let incr = 25,
    decr = 25;


    console.log(incr++); //++ добавить 1, -- отнять 1
    console.log(decr--);

    console.log(15%4); // % остаток от деления
    console.log("24" == 24); // = присваивание, == проверка равенства, ===проверка равенства и типа(строгая проверка)

    let isChecked = true,
        isClose = false;

        console.log(isChecked && !isClose);  //&& оператор (и) , ! делает значение противоположным
        console.log(isChecked || isClose);  // || оператор (или)  


