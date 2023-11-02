
// 1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами

// const myBrowser = {
//     name: "Chrome",
//     version: "9.2"
// }
// console.log([myBrowser]);



// 2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое 
// отображает кол-во проданных билетов) и ticketCost (цена билета) и задайте значения. Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.

// const cinema = {
//     soldTickets: 70,
//     ticketCost: 20
// };
// function sum(cinema) {
//     return cinema.soldTickets * cinema.ticketCost;
// }
// const total = sum(cinema);
// console.log(total);

 

// 3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив 
// вида [[key, value], [key, value]]. То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]]. Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()

// const object = {
//     a: 1,
//     b: 2
// };
// function fn(object) {
//     return Object.entries(object)
// }

// console.log(fn(object));


// 4) Дан объект. Нужно извлечь число 123 одной строкой

// const myCrazyObject = {
//     someArray: [7, 9, { purpose: "путаница", number: 123}, 3.3],
// };
// const sum = myCrazyObject.someArray[2].number;
// console.log(sum);


// 5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, 
// а не массивом, null и т.п. Тут вам пригодится метод Array.isArray()

// function arr(obj) {
//     return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
//   }
//   console.log(arr({})); 
//   console.log(arr([])); 
//   console.log(arr(null)); 
//   console.log(arr(33)); 
  
// 6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. 
// Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.

// const names = ['john', 'jane', 'kate', 'peter'];
// const capitalizedNames = [];

// for (var i = 0; i < names.length; i++) {
//   const name = names[i];
//   const capitalizedName = name[0].toUpperCase() + name.slice(1);
//   capitalizedNames.push(capitalizedName);
// }

// console.log(capitalizedNames);


// 7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, 
// который содержит все числа из него, включая начальное и конечное. Затем напишите функцию sum, 
// принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.

const arr = [];
let counter = 0;

function range (number1, number2){
    for(let i = number1; i <= number2; i++){
        arr.push(i)
    }
}
range (1,5);

function sum (arrSum){
    return  arrSum.forEach(i => {
        counter = i + counter
    }); 
}
sum(arr);
console.log(counter);






// 8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты 
// округления в объект с ключами 'floor' и 'ceil'. Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект

// let num = Math.sqrt(587);
// let max = Math.ceil(num);
// let min = Math.floor(num);

// let obj = {
//     'ceil': max,
//     'floor': min,
// };
// console.log(obj.ceil);
// console.log(obj.floor);



// 9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 
// 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. Для работы понадобится for...in

// const obj = {
//     'Minsk' : 'Belarus',
//     'Moskow' : 'Russia',
//     'Kiev' : 'Ukraine'
// };

// for (const key in obj) {
//     console.log(key + ' - это  ' + obj[key]);
// }

