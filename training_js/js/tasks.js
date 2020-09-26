'use strict';

// let bait = 1024;
// let kilobait = bait * 1024;
// let megabait = kilobait * 1024;
// let gigabait = megabait * 1024;
// let terabait = gigabait * 1024;
//
// alert(megabait);
// alert(gigabait);
// alert(10 * gigabait);
// alert(terabait);
// alert(terabait);

// радиус окружности

// const pi = 3.14,
//       c = 25;
//
// const r = c/pi
// alert(r)

// площадь квадрата

// const a = 5;
// const s = a ** 2;
// alert(s);


// площадь прямоугольника
// const a = 5,
//       b = 10
// const s = a * b ;
// alert(s);


// периметр прямоугольника
// const a = 5,
//       b = 10;
// const p =(a + b) * 2;
// alert(p);


// из Цельсия в Фаренгейты
// const c = 5;
// const f = c * (9/5) + 32;
// alert(f);


// из Фаренгейты в Цельсий
// const f = 76;
// const c = (f - 32) * (5/9);
// alert(c);

// let a = +'2';
// let b = +'3';
//alert(a + b);

// let a = '10',
//     b = '20';
// alert(a + b);

// Принудительное преобразование типов данных в JavaScript

// задача 5
// let a = +'2',
//     b = +'3';
// alert(a + b);

// задача 6
// let a = parseInt('5px'),
//     b = parseInt('6px');
// alert(a + b);

// задача 7
// let a = parseFloat('5.5px'),
//     b = parseFloat('6.25px');
// alert(a + b);

// задача 8
// let a = parseFloat('5.5px'),
//     b = parseFloat('6.25px');
// alert(a + b + 'px');

//Преобразование к строке

// задача 9
// let a = 5,
//     b = 6;
// alert(String(a) + String(b))

//Применение преобразование к строке

// задача 10
// let a = 123456;
// alert(String(a).length)

// задача 11
// let a = 123456,
//     b = 67890
//
// alert(String(a).length)
// alert(String(b).length)
// alert(a + b)

// Преобразование логического типа в JavaScript
//Преобразование к логическому типу в JavaScript

//Получение символов строки на JavaScript

// задача 1
// let a = 'abcde';
// alert(a[0]);
// alert(a[2]);
// alert(a[4]);

// задача 2
// let a = 'abcde';
// let b = a[4] + a[3] + a[2] + a[1] + a[0]
// alert(b)


// задача 3
// let str = 'abcde';
// let num = 3
// alert(str[num])

//Последний символ строки

// задача 4
// let str = 'abcde';
// alert(str[str.length - 1]);

// задача 5
// let a = 'abcde';
// alert(a[a.length - 2]);

// задача 6
// let a = 'abcde';
// alert(a[a.length - 3]);

//Строки с цифрами

// задача 7
// let a = '12345';
// alert(Number(a[0]) + Number(a[1]) + Number(a[2]) + Number(a[3]) + Number(a[4]))

// задача 8
// let a = 12345;
// let b = String(a)
// alert(Number(b[0]) + Number(b[1]) + Number(b[2]) + Number(b[3]) + Number(b[4]))

// задача 9
// let a = 12345;
// let b = String(a);
// alert(Number(b[0]) * Number(b[1]) * Number(b[2]) * Number(b[3]) * Number(b[4]));

// задача 10
// let a = 12345;
// let b = String(a);
// alert(b[4] + b[3] + b[2] + b[1] + b[0])

//Неизменяемость строк в JavaScript
//Сокращенные операции в JavaScript

// задача 3
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

//Операции инкремента и декремента в JavaScript

//задача 1
// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

//Префиксный и постфиксный тип
//Функция prompt в JavaScript

// задача 1
// let age = prompt('Введите ваш возраст: ');
// alert('Ваш возраст: ' + age);

//Проблема с типами

// задача 2
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// alert(Number(num1) + Number(num2));

//задача 3
// let num1 = prompt('Введите сторону квадрата: ');
// alert(Number(num1) ** 2);

//задача 4
// let num1 = prompt('Введите сторону квадрата: ');
// let num2 = prompt('Введите сторону квадрата: ');
// alert(Number(num1) * Number(num2))

//Массивы в JavaScript

//задача 1
// let arr = ['a', 'b', 'c']
// alert(arr);
// console.log(arr)

//задача 2
// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

//задача 3
// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3]);

//задача 4
// let arr = ['1', '2', '3'];
// alert(Number(arr[0]) + Number(arr[1]) + Number(arr[2]));

// задача 5
// let arr = [2, 5, 3, 9];
// let b = arr[0] * arr[1];
// let c = arr[2] * arr[3];
// let result = b + c;
// alert(result);

//Длина массива

// задача 6
// let arr = [2, 5, 3, 9];
// alert(arr.length);

//Последний элемент массива

// задача 7
// let arr = [2, 5, 3, 9];
// alert(arr[arr.length - 1]);

//Изменение массива
// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr)

//Перезапись элементов

// задача 9
// let arr = [2, 5, 3];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// alert(arr);

//Инкремент и декремент

//задача 10
// let arr = [1, 2, 3];
// arr[0]++;
// arr[1]++;
// arr[2]++;
// alert(arr);

//Заполнение массива

//задача 11
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

//задача 12
// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// alert(arr);

//Несуществующие элементы

// let arr = ['a', 'b', 'c'];
// console.log(arr[10]); // выведет undefined

//Разреженный массив

//Объекты в JavaScript

// задача 1
// let obj = {1: 'a', 2: 'b', 3: 'c'};
// alert(obj[1]);
// alert(obj[2]);
// alert(obj[3]);

// Неупорядоченность объектов

//Вывод всего объекта

// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj); // выведет сам объект

//Строковые ключи

//задача 2
// let obj = {a: 1, b: 2, c: 3}
// let sum = obj['a'] + obj['b'] + obj['c'];
// console.log(sum)

//Ограничение на строковые ключи

// задача 3
// let obj = {'1a': 1, '2b': 2, 'c-c': 3};
// alert(obj['1a'] + obj['2b'] + obj['c-c']);

//задача 5
// let obj = {key1: 1, key2: 2, key3: 3};
// console.log(obj.key1 + obj.key2 + obj.key3);

// //задача 6
// let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
// console.log(obj["1a"]) // внимательно !!!
// console.log(obj.b2)
// console.log(obj["eee-"]) // внимательно !!!
// console.log(obj.d4)

// Практика

// задача 7

// let name = 'Bob',
//     surname = 'Dilan',
//     patronymic = 'Gogenovich';
//
// alert(`${name} ${surname} ${patronymic}`)

// задача 8
// let year = '2020',
//     month = '09',
//     day = '07';
// alert(`${year}-${month}-${day}`);

// Заполнение

//задача 9
// let obj = {}
//
// obj.a = 1;
// obj.b = 2;
// obj.c = 3;
//
// console.log(obj)

//Ключи из переменных в JavaScript

// задача 1

// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key])

// задача 2
// let arr = [1, 2, 3, 4, 5],
//     key1 = 1,
//     key2 = 2;
// console.log(arr[key1] + arr[key2])

//Ключи объектов

// задача 3
// let obj = {'a': 1, 'b': 2, 'c': 3};
// let key = 'b';
// console.log(obj[key])

//Нюансы объектов

//Типизация массивов и объектов в JavaScript

//Как определить массив ли объект(На помощь придет функция Array.isArray():)

//Передача объектов по ссылке в JavaScript

//Конструкция if-else в JavaScript

//задача 1
//
// let test = 11;
//  if (test > 10) {
//      alert('верно')
//  } else {
//      alert('не верно')
//  }

//задача 2

// let test = 5
// if (test < 10) {
//     alert('верно')
// } else {
//     alert('не верно')
// };

//задача 3

// let test = 10
// if (test >= 10) {
//     alert('верно')
// } else {
//     alert('не верно')
// }

//задача 3

// let test = 10
// if (test <= 10) {
//     alert('верно')
// } else {
//     alert('не верно')
// };

//Проверка на равенство

// let test = 10;
//
// if (test === 10) {
//     alert('верно');
// } else {
//     alert('не верно');
// };

//Проверка на неравенство

// задача 6

// let test = 5;
// if (test != 10) {
//     alert('верно')
// } else {
//     alert('не верно')
// };

// Сравнение переменных

// задача 7

// let test1 = 3,
//     test2 = 4;
// if (test1 > test2) {
//     alert ('верно');
// } else {
//     alert('не верно');
// };

// Типы данных и конструкция if-else в JavaScript

//Числа в кавычках

//Равенство по значению и типу

// Неравенство по значению и типу

//             Нюансы
// Обратите внимание на следующий код:
//
//     if (0 == '') {
//         alert('верно'); // выведет 'верно'
//     } else {
//         alert('неверно');
//     }
// И на следующий:
//
//     if (0 == '0') {
//         alert('верно'); // выведет 'верно'
//     } else {
//         alert('неверно');
//     }

//Сложные условия в if-else в JavaScript

// задача 1

// let num = 6;
// if (num > 0 && num < 5) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// задача 2

// let num = 12;
// if (num >= 10 && num <= 20) {
//     alert('верно');
// } else {
//     alert('не верно');
// };

// задача 3

// let num1 = 5,
//     num2 =6;
// if (num1 <= 1 && num2 >= 3) {
//     alert('верно');
// } else {
//     alert('не верно');
// };

//Логическое ИЛИ

//Приоритет операций сравнения

//Группировка условий

//Инвертирование высказываний в if-else

// задача
// if (!(num1 >= 0 || num2 <= 10)) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

//Конструкция if-else и булевы значения

// задача 1
// let test = true;

// if (test === true) {
//     alert('верно');
// } else {
//     alert('не верно');
// };

// задача 2

// let test = false;
//
// if (test === false) {
//     alert('верно');
// } else {
//     alert('не верно');
// };

//Логические значения и двойное равно
//Сокращенный иф

// задача 12

// let test = true;
//
// if (test) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// задача 13
//
// let test = true;
//
// if (!test) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// задача 14

// let test = true;
//
// if (!test) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// задача 15
// let test = true;
//
// if (test) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

//Сокращенный синтаксис if-else в JavaScript

//задача 1

// let test = 10;
//
// if (test === 10) {
//     alert('верно');
// }

//Необязательность фигурных скобок

//задача 2

// let test = 1;
// if (test === 0)
//     alert('верно');
// else
//     alert('неверно');

//задача 3
// let test = 1;
// if (test === 0)
//     alert('верно');


//Комбинации конструкций if-else в JavaScript

// задача 1

// let day = 15
//
// if (day >= 1 && day <= 10) {
//     alert('первая декада')
// }
//
// if (day >= 11 && day <= 20) {
//     alert('вторая декада')
// }
//
// if (day >= 21 && day <= 31) {
//     alert('третья декада')
// }

//Конструкция else if

//задача 2

// let day = 15
//
// if (day >= 1 && day <= 10) {
//     alert('первая декада')
// }else if (day >= 11 && day <= 20) {
//     alert('вторая декада')
// }else if (day >= 21 && day <= 31) {
//     alert('третья декада')
// }

//задача 3

// let day = 49
//
// if (day >= 1 && day <= 10) {
//     alert('первая декада')
// }else if (day >= 11 && day <= 20) {
//     alert('вторая декада')
// }else if (day >= 21 && day <= 31) {
//     alert('третья декада')
// } else {
//     alert('неверное значение переменной num')
// }

// задача 4

// let age = 65;
//
// if (age >= 10 && age <= 99){
//     age = String(age)
//     let new_age = Number(age[0]) + Number(age[1]);
//     console.log(new_age)
//     alert(new_age);
//     if(new_age <= 9) {
//         alert('сумма цифр однозначна')
//     } else {
//         alert('сумма цифр двузначна')
//     }
// }

//Область видимости let и var в if-else

// задача 1

// let age = 17;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// задача 2

// let age = 17;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// задача 3

// let age = 17;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// задача 4

// let age = 17;
// let result;
//
// if (age >= 18) {
//     if (age <= 23) {
//         result = 'от 18 до 23';
//     } else {
//         result = 'больше 23';
//     }
// } else {
//     result = 'меньше 18';
// }
//
// console.log(result);

// задача 5

// let age = 19;
// let result;
//
// if (age >= 18) {
//     if (age <= 23) {
//         result = 'от 18 до 23';
//     } else {
//         result = 'больше 23';
//     }
// } else {
//     result = 'меньше 18';
// }
//
// console.log(result);


//Область видимости var

//задача 6
// let num = 1;
//
// if (num == 1) {
//     var result = 'верно';
// } else {
//     var result = 'неверно';
// }
//
// console.log(result);

//Примеры использования if-else в JavaScript

//задача 1

// let hours = 35;
//
// if (hours >= 0 && hours < 15) {
//     console.log('первая четверть');
// };
//
// if (hours >= 15 && hours < 30) {
//     console.log('вторая четверть');
// };
//
// if (hours >= 31 && hours < 45) {
//     console.log('третья четверть');
// };
//
// if (hours >= 45 && hours <= 59 ) {
//     console.log('четвертая четверть');
// };

// Длина строк и массивов

//задача 2

// let arr = [1 , 2, 3];
// if (arr.length == 3) {
//     console.log(arr[0] + arr[1] + arr[2])
// }

//Проверка символа строки
//Проверка символа числа

//задача 3

// let num = 3456780;
// let str = String(num)
//
// if (str[str.length - 1] == 0) {
//     console.log('верно');
// } else {
//     console.log('не верно');
// }

//задача 4

// let num = 2345676;
// let strRes = String(num);
// if ((strRes[strRes.length - 1] % 2) == 0) {
//     console.log('четное');
// } else  {
//     console.log('не четное');
// }

//Остаток от деления

//задача 5 - сделал аналог выше

//задача 6

// let num = 2348;
// let delitel = 3;
// let res = num % delitel;
//
// if (res == 0) {
//     console.log('делится без остатка');
// } else {
//     console.log('есть остаток ' + res);
// }

//Практика на условия if-else в JavaScript

//задача 1

// let month = 5;
//
// if (month >= 1 && month <= 2 || month == 12) {
//     console.log('Зима')
// }
//
// if (month >= 3 && month <= 5) {
//     console.log('Весна')
// }
//
// if (month >= 6 && month <= 8) {
//     console.log('Лето')
// }
//
// if (month >= 9 && month <= 11) {
//     console.log('Осень')
// }

//задача 2

// let str = 'abcde';
//
// if (str[0] == 'a') {
//     console.log('Да')
// } else {
//     console.log('Нет')
// }

//задача 3

// let num = 12345;
// let str = String(num);
//
// if(str[0] == 1 || str[1] == 2 || str[2] == 3) {
//     console.log('Да');
// }else {
//     console.log('Нет');
// }

//задача 4

// let num = 123;
// let str = String(num);
// let res = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(res);

//задача 5

// let num = 123456;
// let str = String(num);
// let first3 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(first3);
// let last3 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// console.log(last3);
//
// if (first3 == last3) {
//     console.log('Да');
// }else {
//     console.log('Нет');
// };

// Конструкция switch-case в JavaScript

//задача

// let seasons = 1;
//
// switch (seasons) {
//     case 1:
//         console.log('Зима');
//         break;
//     case 2:
//         console.log('Весна');
//         break;
//     case 3:
//         console.log('Лето');
//         break;
//     case 4:
//         console.log('Осень');
//         break;
//     default:
//         console.log('Некорректное значение')
// }

//Необязательность break

//Тернарный оператор в JavaScript

//задача

// let num = -3;
// let result = num >= 0 ? 1 : -1
// console.log(result);

//Логические операции в JavaScript

//задача 1

// let a = 2 * (3 - 1);
// let b = 6 - 2;
//
// console.log(a == b);

//задача 2

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);

//задача 3

// let a = 2 ** 4;
// let b = 4 ** 2;
//
// console.log(a != b);

//Логические И и ИЛИ
// задания с сайта https://learn.javascript.ru/logical-operators

// let age = 797;
//
// if (age >= 14 && age <= 90) {
//     console.log('Находится в диапазоне')
// } else {
//     console.log('Не входит в диапазон')
// }
//
// // именно if сокращенный вариант
//
// if (age >= 14 && age <= 90);

// if (!(age >= 14 && age <= 90));

// let user = prompt('Введите логин: ');
// let userLowerCase = user.toLowerCase();
//
// if (userLowerCase == 'admin') {
//     let pass = prompt('Введите пароль')
//     if (pass == 'Я главный') {
//         alert('Здравствуйте')
//     } else if (pass == null || pass == '') {
//         alert('Отменено')
//     } else {
//         alert('Неверный пароль')
//     }
//
// } else if (userLowerCase == null || userLowerCase == '') {
//     alert('Отменено')
// } else {
//     alert('Я вас не знаю')
// }

// идем дальше по code.mu
//Функция confirm в JavaScript

//задача

// let ageUser = confirm('Есть ли вам 18 лет?');
//
// if (ageUser){
//     alert('Вы уже взрослый')
// }else {
//     alert('Доступ запрещен')
// }

//Цикл while в JavaScript

// let i = 1;
//
// while (i <= 5) {
//     console.log(i);
//     i++
// }

//задача 1
//
// let i = 1;
//
// while (i <= 100){
//     console.log(i);
//     i++
// }

//задача 2

// let i = 11;
//
// while (i <= 33) {
//     console.log(i);
//     i++
// }

//Более сложный цикл

// let i = 2;
//
// while (i <= 10) {
//     console.log(i);
//     i += 2
// }

//задача 3

// let i = 0;
//
// while (i <= 100) {
//     console.log(i);
//     i += 2;
// }

//задача 4

// let i = 1;
//
// while (i <= 99) {
//     console.log(i);
//     i += 2;
// }

//Обратный отсчет

//задача 5

// let i = 30;
//
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//Ошибки начинающих при работе с циклом while в JavaScript

//задача 1

// let i = 10;
//
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//задача 2

// let i = 10;
//
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//задача 3

// let i = 10;
//
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//задача 4

// let i = 10;
//
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//задача 5

// let i = 10;
//
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//Цикл for в JavaScript

//задача 1

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }

//задача 2

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

//задача 3

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }

//задача 4

// for (let i = 1; i <= 99; i += 2) {
//     console.log(i)
// }

//задача 5

// for (let i = 100; i >= 0; i--) {
//     console.log(i)
// }

//Накопление результата в цикле JavaScript

// let result = 0;
//
// for (let i = 1; i <= 100; i++) {
//     result = result + i;
// }
//
// console.log(result);

//задача 1

// let result = 0;
//
// for (let i = 1; i <= 20; i++){
//     result += i;
// }
// console.log(result)

//задача 2

// let res = 0;
//
// for (let i = 2; i <= 100; i += 2){
//     res += i
// }
//
// console.log(res)

//задача 3

// let res = 0;
//
// for (let i = 1; i <= 99; i += 2) {
//     res += i;
// }
// console.log(res);

//Цикл for для массивов в JavaScript

// let arr = [1, 2, 3, 4, 5]
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

//задача 1
//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'.
// С помощью цикла for выведите все эти элементы на экран.

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

//задача 2
//В следующем коде программист вывел в консоль все элементы массива:
//В коде, однако, была допущена ошибка, которая привела к тому, что в
// последней итерации цикла почему-то выводится undefined, а не элемент
// массива. Исправьте ошибку программиста. Объясните, в чем он был не прав.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Перебор массива и if

// задача 3
//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for
// и оператора if выведите в консоль нечетные элементы массива.

// let arr = [1, 2, 3, 4, 5]
//
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0) {
//         console.log(arr[i])
//     }
// }

//Нахождение суммы элементов

//задача 4
//Дан массив с элементами 1, 2, 3, 4, 5.
// С помощью цикла for найдите произведение элементов этого массива.

// let res = 0;
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     res += arr[i]
// }
// console.log(res)

//задача 5
//Дан массив с элементами 1, 2, 3, 4, 5.
// С помощью цикла for найдите сумму квадратов элементов этого массива.

// let res = 0;
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     res += arr[i] ** 2
// }
// console.log(res);

//Задачи

//задача 6
//Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и
// оператора if выведите
// в консоль те элементы массива, которые больше 3-х, но меньше 10.


// let arr = [2, 5, 9, 15, 1, 4];
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }

//задача 7
//Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let res = 0;
// let arr = [1, -2, 3, 4, -5 , 6]
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0) {
//         res += arr[i]
//     }
// }
// console.log(res);

//задача 8
//Дан массив arr. Найдите среднее арифметическое его элементов
// (сумма делить на количество).
// Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// let res = 0;
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     res += arr[i]
// }
// console.log(res/arr.length);

//задача 9
//Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран
// только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];
//
// for (let i = 0; i < arr.length; i++){
//     if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5){
//         console.log(arr[i])
//     }
// }

//задача 10

//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// let arr = [1, 2, 3, 4, 5];
// let res = []
// for (let i = arr.length - 1; i > 0; i--) {
//     res.push(arr[i]);
//
// }
// console.log(res)
// console.log(typeof res)

//задача 11

//Дан массив с числами. С помощью цикла выведите на экран все элементы,
// значение которых совпадает с их порядковым номером в массиве.

// let arr = [1, 1, 3, 4, 5, 5];
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == i) {
//         console.log(`Совпадает индекс ${i} и число в массиве ${arr[i]}`);
//     }
// }

//задача 12

//Дан массив с числами. С помощью цикла for и функции document.write
// выведите каждый элемент массива с
// новой строки. Используйте для этого тег br.
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]}<br>`)
// }

//задача 13
//Дан массив с числами. С помощью цикла for и функции
// document.write выведите каждый элемент массива в отдельном абзаце.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     document.write(`<p>${arr[i]}</p>`)
// }

//задача 14

//Составьте массив дней недели. С помощью цикла for выведите все дни
// недели, а выходные дни выведите жирным.

// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//
// for (let i = 0; i < week.length; i++){
//     if (week[i] == 'сб' || week[i] == 'вс') {
//         document.write(`<p><b>${week[i]}</b></p>`);
//     }else {
//         document.write(`<p>${week[i]}</p>`);
//     }
// };

//задача 15

//Составьте массив дней недели. С помощью цикла for выведите все дни
// недели, а текущий день выведите курсивом.
// Номер текущего дня должен храниться в переменной day.

// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     day = 'ср';
//
// for (let i = 0; i < week.length; i++) {
//     if (week[i] == day) {
//         document.write(`<em>${week[i]}</em>`)
//     }else {
//         document.write(`<p>${week[i]}</p>`)
//     }
// }

//Перебор массива циклом for-of в JavaScript

// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     console.log(elem);
// }

//задача 1

//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'.
// С помощью цикла for-of выведите все эти элементы на экран.

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let elem of arr) {
//     console.log(elem)
// }

//задача 2

//Дан массив с элементами 1, 2, 3, 4, 5.
// С помощью цикла for-of найдите сумму элементов этого массива.

// let arr = [1, 2, 3, 4, 5],
//     res = 0;
//
//
// for (let elem of arr){
//     res += elem
// }
// console.log(res);
// console.log(typeof res);

//Цикл for vs for-of

//задача 3

//Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите
// на экран все месяцы из массива. Определите, каким циклом удобнее
// будет решить эту задачу: циклом for-of или обычным for со счетчиком.

// let month = ['январь', 'февраль', 'март',  'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
//
// for (let elem of month) {
//     console.log(elem);
// }

//задача 4

//Пусть у вас есть массив с месяцами.(ошибка на сайте!!)
// Пусть в переменной month
// хранится номер текущего месяца, например, 10. С помощью цикла
// выведите все месяцы, а текущий месяц выведите курсивом.
// Определите, каким циклом удобнее будет решить эту задачу:
// циклом for-of или обычным for со счетчиком. (

//  let month = ['январь', 'февраль', 'март',  'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
//     current_month = 10;
//
// for (let i = 0; i < month.length; i++) {
//     if(i == current_month) {
//         document.write(`<p><em>${month[i]}</em></p>`)
//     }else {
//         document.write(`<p>${month[i]}</p>`)
//     }
// }

//Перебор объекта циклом for-in в JavaScript

// задача
//С помощью цикла for-in найдите сумму элементов этого объекта

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5},
//     res = 0;
//
// for (let key in obj) {
//     res += obj[key]
// }
// console.log(res)

//Сокращенный синтаксис циклов в JavaScript

//Общий синтаксис цикла for в JavaScript

// На самом деле начальные команды и команды после прохода цикла могут
// состоять не из одной, а из нескольких, разделяемых запятыми.
//     Для примера давайте сделаем два счетчика: первый пусть каждую
// итерацию цикла увеличивается на единицу, а второй - на двойку:

// for (let i = 0, j = 0; i <= 9; i++, j += 2){
//     console.log(i, j);
// }

//Инструкция break в JavaScript

// задача 1

//Дан массив с числами. Запустите цикл, который будет по очереди
// выводить элементы этого массива в консоль до тех пор, пока не
// встретится элемент со значением 0. После этого цикл должен завершить
// свою работу.

// let arr = [1, 2, 3, 0, 4, 5]
//
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] == 0) {
//         console.log('Значение 0');
//         break;
//     } else {
//         console.log(arr[i])
//     }
// }

// задача 2

//Дан массив с числами. Найдите сумму элементов, расположенных от
// начала массива до первого отрицательного числа.

// let arr = [1, 2, 3, -6, 4, 5],
//     res = 0;
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0) {
//         break;
//     }else {
//         res += arr[i];
//     }
// }
// console.log(res)

// задача 3

//Дан массив с числами. Найдите позицию первого числа 3 в этом
// массиве (считаем, что это число обязательно есть в массиве).

// let arr = [1, 2, 3, 4, 5, 3];
//
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] == 3){
//         console.log(i)
//         break;
//     }else {
//         console.log('Шаг итерации: ' + (i+1));
//     }
// }

// задача 4

//Определите, сколько целых чисел, начиная с числа 1, нужно
// сложить, чтобы сумма получилась больше 100.

// let num = 0;
//
// for (let i = 0; i <= 100; i++) {
//     if (num >= 100) {
//         console.log('Проверка закончена ' + i);
//         break;
//     }else {
//         num += i;
//         console.log(num)
//     }
// }
//
// console.log(num);

//Инструкция continue в JavaScript

//Область видимости let и var в циклах JavaScript

//Область видимости счетчиков

//Работа с флагами в JavaScript

//задача

//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. Проверьте, что в
// этом массиве есть элемент 'c'. Если есть - выведите 'да', а
// если нет - выведите 'нет'.

// let arr = ['a', 'b', 'c', 'd', 'e'],
//     flag = false;
//
// for (let elem of arr) {
//     if (elem == 'c') {
//         flag = true;
//         break;
//     }
// }
//
// if (flag === true) {
//     console.log('Есть');
// } else {
//     console.log('Нет');
// }

//Нахождение простых чисел на JavaScript

// задача

// let num = 31,
//     flag = true;
//
//
// for (let i = 2; i < num; i++){
//     if (num % i == 0){
//         flag = false;
//         break;
//     }
// }
//
// console.log(flag);

//Циклы без заданного количества итераций в JavaScript

//задача 1

//Дано число num с неким начальным значением. Умножайте его на 3 столько
// раз, пока результат умножения не станет больше 1000. Какое число
// получится? Посчитайте количество итераций, необходимых для этого.

// let num = 3,
//     counter = 0;
//
// while (num <= 1000){
//     num *= 3;
//     counter++;
// }
// console.log(counter);

//Использования цикла for

// for (var num = 3, i = 0; num <= 1000; num *= 3, i++);
// console.log(i)

//Формирование строк через циклы в JavaScript

//задача 1

// let str = '';
//
// for (let i = 1, j = '0'; i <= 5; i++){
//     str += j
// }
// console.log(str);

//Строка с цифрами

//задача 2

//С помощью цикла сформируйте строку 123456789 и запишите ее в
// переменную str. Выведите значение этой переменной на экран.

// let str = '';
//
// for (let i = 1; i < 10; i++){
//     str += i;
// };
// console.log(str)

//задача 3

//С помощью цикла сформируйте строку 987654321 и запишите ее в
// переменную str. Выведите значение этой переменной на экран.

// let str = '';
//
// for (let i = 9; i >= 1; i--){
//     str += i;
// }
// console.log(str);

//задача 4

//С помощью цикла сформируйте строку -1-2-3-4-5-6-7-8-9-
// и запишите ее в переменную str. Выведите значение этой переменной
// на экран.

// let str = '-';
//
// for (let i = 9; i >= 1; i--){
//     str = str + i + '-';
// }
// console.log(str);

//Цикл for и типы данных JavaScript

//задача 1

//Переберите циклом числа от 10 до 1000 и выведите на экран те числа,
// сумма двух первых цифр которых равна 5.

// for (let i = 10; i <= 1000; i++){
//     let str = String(i);
//
//     if(Number(str[0]) + Number(str[1]) == 5){
//         console.log(i)
//     }
// }

//Типизация и сумма

//задача 1

//Переберите циклом числа от 1 до 30 и сложите их как строки.

// let str = '';
//
// for (let i = 1; i <= 30; i++){
//     str += i;
// }
// console.log(str);

//Вложенные циклы в JavaScript

//К примеру, давайте решим следующую задачу: выведем на экран строку:
// 111222333444555666777888999

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i);
//     }
// }

//задача 1

//С помощью двух вложенных циклов выведите на экран следующую строку:
//
// 111222333444555666777888999

// for (let i = 1; i <= 9; i++){
//     for(let j = 1; j <= 3; j++){
//         document.write(i);
//     };
// };

//задача 2

//С помощью двух вложенных циклов выведите на экран следующую строку:
// 11 12 13 21 22 23 31 32 33

// let str = '';
//
// for (let i = 10; i <= 33; i += 10){
//     for (let j = 1; j <= 3; j++){
//         str = i + j + ' '
//         console.log(str)
//     }
//
// }

//Вложенные циклы и область видимости в JavaScript

//Заполнение массивов через цикл в JavaScript


//задача 1

//Объявите пустой массив, а затем заполните его числами от 1 до 10.

// let arr = []

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = 8;
// arr[8] = 9;
// arr[9] = 10;
//
// console.log(arr)

//задача 2

//Объявите пустой массив, а затем заполните его 5-ю буквами x.

// let arr = [];
// arr[0] = 'x';
// arr[1] = 'x';
// arr[2] = 'x';
// arr[3] = 'x';
// arr[4] = 'x';
// console.log(arr)

//Заполнение массива в цикле

//задача 3

// let arr = [];
//
// for (let i = 0; i <= 100; i++){
//     arr[i] = i+1
// }
// console.log(arr);

//Проблема пропусков

//Заполнение значениями не по порядку

//задача 4

//С помощью цикла заполните массив нечетными числами
// в промежутке от 1 до 99.

// let arr = [];
//
// for (let i = 1, j = 0; i <= 99; i += 2, j++){
//     arr[j] = i;
// }
// console.log(arr)

// Изменение массива в цикле JavaScript

//задача 1

//Дан массив с числами. Переберите этот массив циклом и возведите
// каждый элемент этого массива в квадрат.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] ** 2;
// }
// console.log(arr);

//Сокращенные операции

//задача 2

//Дан массив с числами. Переберите этот массив циклом и
// отнимите от каждого элемента единицу.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = arr.length-1; i >= 0 ; i--){
//     arr[i] -= 1
//
// }
// console.log(arr)

//задача 3

//Дан массив с числами. Переберите этот массив циклом и прибавьте
// к каждому элементу 10.
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     arr[i] += 10
// }
// console.log(arr)


//Заполнение массива методом push в JavaScript

//задача 1

//Объявите пустой массив, а затем заполните его числами от 1 до 10.
// Используйте для этого метод push.

// let arr = [];
//
// for (let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr)

//Заполнение массива в цикле

//задача 2

//Используя цикл и метод push заполните массив числами от 1 до 10.

// let arr = [];
//
// for (let i = 1; i <= 10; i++){
//     arr.push(i);
// }
// console.log(arr);
//

//задача 3

//Используя цикл и метод push заполните массив 10-ю буквами x.

// let arr = [];
//
// for (let i = 1, j = 'x'; i <= 10; i++){
//     arr.push(j)
// }
// console.log(arr);

//задача 4

// Используя цикл и метод push заполните массив 10-ю случайными целыми
// числами. Пусть случайные числа будут в промежутке от 1 до 10.


// let arr = [];
//
// for (let i = 1; i <= 10; i++){
//     let a = Math.floor(Math.random(0.1, 0.9) *10)
//     arr.push(a)
// }
// console.log(arr)

//Заполнение массива из другого массива

//задача 5

//Дан массив с числами. Переберите его циклом и запишите в новый массив
// только положительные из чисел.

// let arr = [1, 2, - 33, -5, 3, 4, 5 , -12],
//     result = [];
//
// for (let elem of arr){
//     if(elem >= 0){
//         result.push(elem)
//     }
// }
// console.log(result);

//Переворот массива

//задача 5
//Давайте выполним переворот массива, то есть, к примеру
// из массива [1, 2, 3, 4, 5] сделаем массив [5, 4, 3, 2, 1].

// let arr = ['a', 'b', 'c', 'd', 'e'],
//     result = [];
//
// for (let i = arr.length -1; i >= 0; i--){
//     result.push(arr[i]);
// }
// console.log(result);

//Необъявленный массив

//задача 7
//Автор следующего кода хотел создать массив вида ['a', 'b', 'c']:
//
// arr.push('a');
// arr.push('b');
// arr.push('c');
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.


// let arr = [];
// arr.push('a');
// arr.push('b');
// arr.push('c');
// console.log(arr);

//задача 8

// let arr = [];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
// console.log(arr);


//задача 9

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     result = [];
//
// for (let elem of arr) {
//     if (elem % 2 != 0) {
//         result.push(elem);
//     }
// }
//
// console.log(result);

//Заполнение объектов через цикл в JavaScript

//задача 1

//Объявите пустой объект, а затем заполните его названиями дней
// недели в качестве ключей, и порядковыми номерами дней недели в
// качестве значений

// let obj = {};
//
// obj[1] = 'понедельник';
// obj[2] = 'вторник';
// obj[3] = 'среда';
// obj[4] = 'четверг';
// obj[5] = 'пятница';
// obj[6] = 'суббота';
// obj[7] = 'воскресенье';
// console.log(obj);

//Заполнение объекта в цикле

//задача 2

//Даны два массива: первый с названиями дней недели, а второй -
// с их порядковыми номерами:
//С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let res = {};
//
// for (let i = 0; i <= 6; i++){
//     res[arr1[i]] = arr2[i];
// }
// console.log(res);

//задача 3

//Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней,
// а значениями - их названия.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let res = {};
//
// for (let i = 0; i <= 6; i++){
//     res[arr2[i]] = arr1[i];
// }
// console.log(res);

//Заполнение объекта из другого объекта

//задача 4

//Запишите в новый объект те элементы, значения которых расположены в
// промежутке от 10 до 20.

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17},
//     res = {};
//
// for (let key in obj){
//     if(obj[key] >= 10 && obj[key] <= 20){
//         res[key] = obj[key]
//     }
// }
// console.log(res);

//задача 5

//Дан объект:
//Запишите в новый объект дни недели, номера которых являются
// нечетными числами.

// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'},
//     res = {};
// for (let key in obj){
//     if(key % 2 == 0){
//         res[key] = obj[key];
//     }
// };
// console.log(res)

//Изменение объекта в цикле

//задача 6

//Переберите этот объект циклом и возведите каждый элемент этого
// объекта в квадрат.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5},
//     res = {};
//
// for (let key in obj){
//     res[key] = obj[key] ** 2;
// }
// console.log(res)

//Обмен ключей и значений объекта

//задача 7

//Самостоятельно, не подсматривая в мой код, выполните переворот
// какого-нибудь объекта.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5},
//     res = {};
//
// for (let key in obj){
//     res[obj[key]] = key;
// }
// console.log(res)

//Практика на циклы с массивами и объектами JavaScript

//======================================================================

//задача 1

//Увеличьте зарплату каждого работника на 10%.

// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };
// let res = {};
//
// for (let elem in obj){
//     res[elem] = obj[elem] + (obj[elem] * 0.10)
// };
// console.log(res)

//задача 2

//Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась
// только тем работникам, у которых она меньше или равна 400.

// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };
// let res = {};
//
// for (let elem in obj){
//     if(obj[elem] <= 400){
//         res[elem] = obj[elem] + obj[elem] * 0.10
//     }
// };
// console.log(res);

//задача 4

//С помощью этих массивов создайте новый объект, сделав его ключами
// элементы первого массива, а значениями - элементы второго.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let res = {};
//
// for (let i = 0; i < arr1.length; i++){
//     res[arr1[i]] = arr2[i];
// }
// console.log(res);


//задача 4

//Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10},
//     resKey = 0,
//     resValue = 0,
//     res = 0;
//
// for (let elem in obj){
//     resKey += Number(elem);
//     resValue += Number(obj[elem])
// }
// res = resKey/resValue;
// console.log(res);

//задача 5

//Запишите ключи этого объекта в один массив, а значения - в другой.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5},
//     arrKey = [],
//     arrVal = [];
//
// for (let key in obj){
//     arrKey.push(key);
//     arrVal.push(obj[key]);
// }
// console.log(arrKey)
// console.log(arrVal)

//задача 6

//Запишите в новый массив элементы, значение которых начинается с
// цифры 1 или цифры 2.
// То есть у вас в результате получится вот такой массив:
// let arr = [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

// let obj = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };
// let res = [];
//
// for (let key in obj) {
//     let str = String(obj[key]);
//     if (str[0] == 1 || str[0] == 2){
//         res.push(str)
//     }
// }
// console.log(res)

//задача 7
// Дан следующий массив:
//
//     let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
//
//     let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// let arr = ['a', 'b', 'c', 'd', 'e'],
//     res = {};
//
// for (let i = 0; i < arr.length; i++ ){
//     res[i + 1] = arr[i]
// }
// console.log(res)

//задача 8

// Дан следующий массив:
//
//     let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
//
//     let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arr = ['a', 'b', 'c', 'd', 'e'],
//     res = {};
// for (let i = 0; i < arr.length; i++){
//     res[arr[i]] = i+1;
// }
// console.log(res);

//Подсчет количества элементов в массиве JavaScript

//задача 1
// Дан следующий массив:
//
//     let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3],
//     counter = 0;
//
// for (let elem of arr){
//     if(elem == 3){
//         counter++
//     }
// }
// console.log(counter);

//задача 2

//Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно
// подсчитывалось и количество троек, и количество двоек.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3],
//      counter_2 = 0,
//      counter_3 = 0;
//
// for (let elem of arr){
//     if (elem == 2 ){
//         counter_2++
//     }else if (elem == 3){
//         counter_3++
//     }
// }
// console.log(counter_2);
// console.log(counter_3);

//Результат в виде объекта

//задача 3

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {};
//
// for (let elem of arr){
//     if (count[elem] === undefined){
//         count[elem] = 1;
//     }else {
//         count[elem]++
//     }
// }
// console.log(count)

//Получение соседей элементов в массиве JavaScript

//задача 1

//Дан массив с числами. Переберите его циклом и в каждой итерации
// цикла выведите следующий элемент массива.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i+1])
// }

//задача 2

//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла
// выводилась сумма текущего и следующего элемента массива.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i] + arr[i+1])
// }

//задача 3

//Дан массив с числами. Переберите его циклом и в каждой итерации цикла
// выведите два предыдущих элемента массива.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 2; i < arr.length; i++){
//     console.log(arr[i-2], arr[i-1])
// }

//задача 4

//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла
// выводилась сумма двух предыдущих элементов и текущего элемента массива.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 2; i < arr.length; i++){
//     console.log(arr[i-2] + arr[i-1]);
// }

//задача 5

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла
// выведите сумму предыдущего, текущего и следующего элементов массива.

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 1; i < arr.length; i++){
//     console.log(arr[i-1] + arr[i] + arr[i+1])
// }

//Получение чисел Фибоначчи в JavaScript

// let one = 0;
// let two = 1;
//
// for (let i = 1; i <= 10; i++) {
//     let current = one + two;
//
//     one = two;
//     two = current;
//
//     console.log(current);
// }

//задача 1

//Разберите мое решение описанной задачи, а затем самостоятельно,
// не подсматривая в мой код, решите эту задачу.

// let one = 0,
//     two = 1;
//
// for (let i = 1; i <= 15; i++){
//     let res = one + two;
//
//     one = two;
//     two = res
//     console.log(res)
// }

//задача 2

//Решите задачу на нахождение ряда чисел, каждое из которых равно сумме
// трех предыдущих, а первые три числа равны 0, 1 и 2.

// let one = 0,
//     two = 1,
//     three = 2;
//
// for (let i = 1; i <= 15; i++){
//     let res = one + two + three;
//
//     one = two;
//     two = three;
//     three = res;
//
//     console.log(res)
// }

//Вывод пирамидок на JavaScript

//задача 1

//Выведите на экран следующую пирамидку:
//
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

// let str = '';
//
// for (let i = 0; i < 5; i++){
//     str += 'xx';
//     document.write(str + '<br>');
// };

//задача 2

//Выведите на экран следующую пирамидку:
//
// 1
// 333
// 55555
// 7777777
// 999999999

// for (let i = 1; i <= 9; i += 2){
//     for (let j = 1; j <= i; j++){
//         document.write(i);
//     };
//     document.write('<br>');
// };

//Перевернутые пирамидки

//задача 3

//Выведите на экран следующую пирамидку:
//
// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

// for (let i = 9; i > 0; i -= 2){
//     let str = '';
//     for (let j = 0; j <= i; j++){
//         str += 'x'
//     }
//     document.write(str + '<br>')
// }

//задача 4

// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

// for (let i = 9; i >= 1; i--){
//     for (let j = 1; j <= i; j++){
//         document.write( i )
//     }
//     document.write( '<br>' )
// }

//Заполнение массивов с накоплением строки в JavaScript

//задача 1

// let arr = [],
//     str = '';
//
// for (let i = 2; i <= 10; i += 2){
//     str += 'xx';
//     arr.push(str);
// }
// console.log(arr);

//Заполнение массива числами

//задача 2

//С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']

// let arr = [];
//
// for (let i = 1; i <= 5; i++){
//     let str = '';
//     for (let j = 1; j <= 5; j++){
//         str += i;
//     }
//     arr.push(str)
// }
//
// console.log(arr)


//Отработка циклов JavaScript

//задача 1

//Выведите с помощью цикла столбец чисел от 1 до 100.

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }

//задача 2

//Выведите с помощью цикла столбец чисел от 100 до 1.

// for (let i = 100; i >= 1; i--){
//     console.log(i);
// }

//задача 3

//Выведите с помощью цикла столбец четных чисел от 1 до 100.

// for (let i = 2; i <= 100; i += 2){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

//задача 4

//Заполните массив 10-ю иксами с помощью цикла.

// let arr = [];
//
//
// for (let i = 1; i <= 10; i++){
//     let str = '';
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);

//задача 5

//Заполните массив числами от 1 до 10 с помощью цикла.

// let arr = [];
//
// for (let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr)

//задача 6

//Дан массив с числами. С помощью цикла выведите только те элементы
// массива, которые больше нуля и меньше 10-ти.

// let arr = [ 33, 4, 21, 6, 1, 9, 12]
//
// for (let elem of arr){
//     if (elem > 0 && elem < 10){
//         console.log(elem)
//     }
// }

//задача 7

//Дан массив с числами. С помощью цикла проверьте, что в нем есть
// элемент со значением 5.

// let arr = [ 33, 4, 21, 6, 1, 9, 12, 5],
//     flag = false;
//
// for (let elem of arr){
//     if (elem == 5){
//         flag = true;
//     }
// }
// if (flag === true){
//     console.log('есть такой элемент')
// }else {
//     console.log('нет такого элемента')
// };


//задача 8

//Дан массив с числами. С помощью цикла найдите сумму
// элементов этого массива.

// let arr = [ 1, 2, 3, 4, 5],
//     res = 0;
//
// for (let i = 0; i < arr.length; i++){
//     res += arr[i];
// }
// console.log(res)

//задача 9

//Дан массив с числами. С помощью цикла найдите сумму
// квадратов элементов этого массива.

// let arr = [ 1, 2, 3, 4, 5],
//     res = 0;
//
// for (let i = 0; i < arr.length; i++){
//     res += arr[i]**2;
// }
//
// console.log(res);

//задача 10

//Дан массив с числами. Найдите среднее арифметическое его элементов
// (сумма элементов, делить на количество).
// let arr = [ 1, 2, 3, 4, 5],
//     res = 0;

// for (let i = 0; i < arr.length; i++){
//     res += arr[i];
// }

// for (let elem of arr){ // более чистый вариант
//     res += elem;
// }
//
// let final_sum = res /(arr.length);
// console.log(final_sum)

//задача 11

//Напишите скрипт, который будет находить факториал числа.
// Факториал (обозначается !) - это произведение (умножение) всех
// целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// let factorial = 8,
//     res = 1;
//
// for (let i = 1; i <= factorial; i++){
//
//     res *= i;
// }
// console.log(res)

//Многомерные массивы в JavaScript

//задача 1

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.

// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);


//задача 2

// let arr = [[1, 2], [3, 4], [5, 6]];
// Найдите сумму всех его элементов.

// let arr = [[1, 2], [3, 4], [5, 6]],
//     res = 0;
//
// res = arr[0][0] + arr[0][1] + arr[1][0]+arr[1][1] + arr[2][0]+arr[2][1]
//
// console.log(res)

//задача 3

// let arr = [
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [5, 6],
//         [7, 8],
//     ],
// ];
//Найдите сумму всех элементов приведенного массива.

// let res = 0;
// res = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]
// console.log(res);

//задача 4

// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]],
//     [8, [9, 10]]];
//Найдите сумму всех элементов приведенного массива.

// let res = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
// console.log(res)

//Перебор многомерных массивов в JavaScript

//задача 1

//Дан двухмерный массив с числами:
//let arr = [[1, 2, 3], [4, 5], [6]];
//С помощью вложенных циклов найдите сумму элементов этого массива.
// let res = 0;
//
// for (let subArr of arr){
//     for (let elem of subArr){
//         res += elem;
//     }
// }
// console.log(res);

//задача 2

//Дан трехмерный массив с числами:
//let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

// let res = 0;
// for (let subArr of arr){
//     for (let elem of subArr){
//         for (let el of elem){
//             res += el;
//         }
//     }
// }
// console.log(res)

//Перебор через обычный for

//задача 2

//Решите предыдущие две задачи через цикл for.

//========== 1 ===========

// let arr = [[1, 2, 3], [4, 5], [6]],
//     res = 0;
// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//          res += arr[i][j];
//     }
// }
// console.log(res)

//========== 2 ===========

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
//     res = 0;
//
// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         for (let y = 0; y < arr[i][j].length; y++){
//             res += arr[i][j][y];
//         }
//     }
// }
// console.log(res)

//Заполнение многомерных массивов JavaScript

//задача 1

//Сформируйте с помощью двух вложенных циклов следующий массив:
//
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = [];
//
// for (let i = 0; i <= 2; i++){
//     arr[i] = [];
//     for (let j = 0; j <= 4; j++){
//         arr[i].push(j + 1)
//     }
// }
//
// console.log(arr)

//задача 2

//Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]

// let arr = [];
// for (let i = 0; i <= 2; i++){
//     arr[i] = [];
//     for (let j = 1; j <= 4; j++){
//         let strX = 'x';
//         arr[i].push(strX)
//     }
// }
//
// console.log(arr)

//задача 3

//Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]

// let arr =[];
//
// for (let i = 0; i <= 2; i++){
//     arr[i] = [];
//     for (let j = 0; j < 2; j++){
//         arr[i][j] = [];
//         for (let y = 1; y <= 5; y++){
//             arr[i][j].push(y)
//         }
//     }
// }
// console.log(arr);

//Потенциальная проблема

//задача 4

//Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []; //добавил это
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);
//Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

//задача 5

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);


//задача 6

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);

//задача 7

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[j] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);

//задача 8

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }
//
// console.log(arr);

//задача 9

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] == [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);

//задача 10

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);

//задача 11

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = '';
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 5; j++) {
// 		arr[i][j] = j+1;
// 	}
// }
//
// console.log(arr);

//задача 12

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr.push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.


// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);

//задача 13

//Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j <= 5; j++) {
// 		arr[j][i] = j;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }
//
// console.log(arr);

//задача 14

//Автор следующего кода хотел сделать двухмерный массив:
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 5; j++) {
// 		arr[i][j] = j+1;
// 	}
// }
//
// console.log(arr);

//Заполнение числами по порядку

//задача 15

//Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]

// let arr = [];
//
// for (let i = 0, k = 1; i <= 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++ ){
//         arr[i][j] = k++
//     }
// }
// console.log(arr)

//задача 16

//Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

// let arr = [];
//
// for (let i = 0, k = 0; i < 4; i++){
//     arr[i] = [];
//     for (let j = 0; j < 3; j++){
//         arr[i][j] = k += 2
//     }
// }
// console.log(arr)

//задача 17

//Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = [];
//
// for (let i = 0, k = 1; i < 2; i++){
//     arr[i] = [];
//     for (let j = 0; j < 2; j++){
//         arr[i][j] = [];
//         for (let y = 0; y < 2; y++){
//             arr[i][j][y] = k++;
//
//         }
//     }
// }
//
// console.log(arr);

//задача 18

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте
// ошибку автора.

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);

//задача 19

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите
// и исправьте ошибку автора.

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }
// console.log(arr);

//задача 20

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k--;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);

//задача 21

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
// let k;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);

//задача 22

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }
//
// console.log(arr);

//задача 23

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0, k++; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);

//задача 24

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++; k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);

//задача 25

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = ++k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }
//
// console.log(arr);

//задача 26

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[k] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);

//задача 27

//Автор следующего кода хотел сделать массив
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного.
// Найдите и исправьте ошибку автора.

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);

//Многомерные объекты в JavaScript

//задача 1

//Дан следующий объект:
//
// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// Найдите сумму элементов приведенного объекта.

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
//
// let res = obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + obj.key3.key1 + obj.key3.key2 + obj.key3.key3;
// console.log(res);

//задача 2

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// // Выведите на экран элемент 'b2' и элемент 'c1'.
//
// console.log(obj[2][2]);
// console.log(obj[3][1]);

//задача 3

// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }

// Найдите сумму всех элементов-чисел.
// let res = obj.key1.a + obj.key1.b + obj.key1.c['d'] + obj.key1.c['e'] + obj.key1.f + obj.key2.g + obj.key2.h
// console.log(res)

//Перебор многомерных объектов в JavaScript

// Пусть дан следующий двухмерный массив:
//
//     let obj = {
//         a: {
//             1: 'a1',
//             2: 'a2',
//             3: 'a3',
//         },
//         b: {
//             1: 'b1',
//             2: 'b2',
//             3: 'b3',
//         },
//         c: {
//             1: 'c1',
//             2: 'c2',
//             3: 'c3',
//         },
//     }
// Давайте выведем все его элементы на экран. Для этого нам необходимо запустить два вложенных друг в друга цикла for-in:
//
// for (let key in obj) {
//     let subObj = obj[key];
//
//     for (let subKey in subObj) {
//         console.log(subObj[subKey]);
//     }
// }

//задача

//Дан следующий объект:

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Используя циклы, найдите сумму элементов этого объекта.

// let res = 0;
//
// for (let key in obj){
//     let subObj = obj[key];
//     for (let subKey in subObj){
//         console.log(subObj[subKey])
//         res += subObj[subKey]
//     }
// }
// console.log(res);

//Ключи из переменных в многомерных структурах JavaScript

//задача 1

//Дан следующий объект с названиями месяцев:
// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// Даны также следующие переменные:
//
//let lang = 'ru'; // может быть или 'ru' или 'en'
//let month = 5; // число от 0 до 12
// Выведите на экран название месяца, соответствующее значениям
// переменных lang и month.

// console.log(months[lang][month]);

//задача 2

//Дана вот такая структура для хранения списка дел за года, месяцы и дни:

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }
// Пусть даны также 3 переменные, содержащие год, месяц и день.
// Выведите дело, соответствующее значениям переменных.
// let year = '2018',
//     month = 12,
//     day = 30;
//
// console.log(affairs[year][month][day])

//Подводный камень с ключами объектов

//задача 3

//Автор следующего кода хотел вывести элемент со значением '24':

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

//задача 4

//Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

//задача 5

//Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

//задача 6

//Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// console.log(obj[key1]['key4']);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

//Многомерные массивы и объекты в JavaScript

//задача 1

//Дан следующий массив работников:
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// Выведите на экран сумму зарплат первого и второго работников.
// console.log(employees[0].salary + employees[1].salary)

//задача 2

//Дан следующий массив студентов:
//
// let students = {
// 	'boys':  ['Коля', 'Вася', 'Петя'],
// 	'girls': ['Даша', 'Маша', 'Лена'],
// };
// Выведите на экран элемент 'Вася' и элемент 'Лена'.
// console.log(students['boys'][1]);
// console.log(students['girls'][2]);

//Перебор многомерных комбинаций в JavaScript

// let users = [
//     {
//         name: 'name1',
//         age: 31,
//     },
//     {
//         name: 'name2',
//         age: 32,
//     },
//     {
//         name: 'name3',
//         age: 33,
//     },
// ];
//
// for (let user of users) {
//     document.write(user.name + ' ' + user.age + '<br>');
// }

//задача 1

//Дан следующий массив работников:

    // let employees = [
    //     {
    //         name: 'name1',
    //         salary: 300,
    //     },
    //     {
    //         name: 'name2',
    //         salary: 400,
    //     },
    //     {
    //         name: 'name3',
    //         salary: 500,
    //     },
    // ];
//Выведите на экран данные каждого работника в формате имя - зарплата.

// for (let elem of employees){
//     document.write(`${elem.name}: ${elem.salary} <br>` );
// }

//задача 2

//Дан следующий массив работников:
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// Выведите на экран сумму зарплат всех работников.
// let res = 0;
// for (let worker of employees){
//     res += worker.salary
// }
// console.log(res)

//задача 3

//Дан следующий массив работников:

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// Выведите на экран сумму зарплат тех работников, возраст которых равен
// или более 30 лет.
// let res = 0;
// for (let worker of employees){
//     if (worker.age >= 30){
//         res += worker.salary;
//     }
// }
// console.log(res);

//задача 4

//Дан следующий массив работников, в котором поле dismissed хранит в
// себе информацию о том, уволен работник или нет (true - уволен):
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		dismissed: false,
// 	},
// ];
// Выведите на экран имена и зарплаты неуволенных работников.
// for (let worker of employees){
//     if (worker.dismissed === false){
//         document.write(`${worker.name}: ${worker.salary} <br>`)
//     }
// }

//Сложные структуры


//Пусть теперь у нас дан следующий объект со студентами:
//
// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
// Пусть количество групп и количество студентов в каждой группе может быть любым.
//
// Давайте выведем на экран имена всех студентов, перебрав наш объект двумя вложенными циклами.
//
// Как вы видите, у нас объект с массивами. Это значит, что первый цикл должен быть по объекту, а второй - по массивам. То есть первый цикл будет for-in, а второй - for-of, вот так:
//
// for (let group in students) {
// 	for (let name of students[group]) {
// 		console.log(name);
// 	}
// }

//задача 5

//Дана следующая структура с данными:

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 		'data34',
// 		'data35',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 	],
// };
// С помощью вложенных циклов выведите на экран все строки с данными.

// for (let key in data){
//     for (let elem of data[key]){
//         console.log(elem)
//     }
// }

//задача 6

//Дана следующая структура с данными:

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 		4: 'data14',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 	},
// ];
// Количество объектов в массиве и количество элементов в объекте
// может быть произвольным.

// С помощью вложенных циклов выведите на экран все строки с данными.

// for (let elem of data){
//    for (let key in elem){
//        console.log(elem[key])
//    }
// }

//задача 7

//Дана следующая структура с данными:
//
// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 			'data224',
// 		],
// 		3: [
// 			'data231',
// 			'data232',
// 			'data233',
// 			'data234',
// 			'data235',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 		],
// 	},
// ];
// С помощью вложенных циклов выведите на экран все строки с данными.

//важно !!!

//  !!!!!!!!!!!!!!!!!!!!!!

// for (let elem of data){
//     for (let key in elem){
//             for (let elem2 of elem[key]){
//                 document.write(elem2 + '<br>')
//             }
//         }
// }

//Добавление элементов в многомерные массивы JavaScript

// let users = [
//     {
//         name: 'name1',
//         age: 31,
//     },
//     {
//         name: 'name2',
//         age: 32,
//     },
//     {
//         name: 'name3',
//         age: 33,
//     },
// ];
//
// users.push({
//     name: 'name4',
//     age: 34,
// });
//
// for (let elem of users){
//     for (let key in elem){
//         console.log( key + ': ' + elem[key])
//     }
// }

//задача

// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		age: 30,
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		age: 31,
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		age: 32,
// 	},
// ];
// Добавьте в этот массив еще одного юзера.

// users.push({
//     name: 'name101',
//     age: 55,
// })
//
// for (let elem of users) {
//     for (let key in elem){
//         console.log(elem[key])
//     }
// }

//Добавление элементов в многомерные объекты JavaScript

// let students = {
//     'group1': ['student11', 'student12', 'student13'],
//     'group2': ['student21', 'student22', 'student23'],
//     'group3': ['student31', 'student32'],
// };
//
//Давайте добавим еще одного студента в первую группу:
// students.group1.push('student14');

//Давайте теперь сделаем еще одну, четвертую группу и добавим в нее студента:
// students.group4 = [];
// students.group4.push('students41');
//
// for (let key in students){
//     for (let elem of students[key]){
//         console.log(elem)
//     }
// }

//задача 1

//Дана вот такая структура для хранения списка дел за определенные даты:
//
// let affairs = {
// 	'2019-12-28': ['дело11', 'дело12', 'дело13'],
// 	'2019-12-29': ['дело21', 'дело22', 'дело23'],
// 	'2019-12-30': ['дело31', 'дело32', 'дело33'],
// }
// Добавьте еще одно дело в дату '2019-12-29'. Добавьте еще два дела
// в дату '2019-12-31'.

//добавляем еще одно дело
//affairs["2019-12-29"].push('дело24')

// for (let key in affairs){
//     for (let elem of affairs[key]){
//         console.log(elem);
//     }
// }

//Усложним хранение

// let students = {
//     'group1':{
//         'subgroup11': ['student111', 'student112', 'student113'],
//         'subgroup12': ['student121', 'student122', 'student123'],
//     },
//     'group2':{
//         'subgroup21': ['student211', 'student212', 'student213'],
//         'subgroup22': ['student221', 'student222', 'student223'],
//     },
//     'group3' :{
//         'subgroup31': ['student311', 'student312', 'student313'],
//         'subgroup32': ['student321', 'student322', 'student323'],
//     },
// };

// for (let key in students){
//     for (let key1 in students[key]){
//         for (let elem of students[key][key1]){
//             console.log(elem)
//         }
//     }
// }

//задача 2

//Добавьте нового студента в подгруппу 'subgroup11'.
// students['group1']['subgroup11'].push('student114')
//
// for (let key in students){
//     for (let key1 in students[key]){
//         for (let elem of students[key][key1]){
//             console.log(elem)
//         }
//     }
// }

//задача 3

//Добавьте в первую группу еще одну подгруппу.

// students['group1']['subgroup13'] = [];
// students['group1']['subgroup13'].push('student131');
//
// for (let key in students){
//     for (let key1 in students[key]){
//         for (let elem of students[key][key1]){
//             console.log(elem)
//         }
//     }
// }

//задача 4

//Сделайте четвертую группу, в ней сделайте подгруппу и
// добавьте в нее двух новых студентов.

// students['group4'] = [];
// students['group4']['subgroup33'] = [];
// students['group4']['subgroup33'].push('student411')
//
//
// for (let key in students){
//     console.log(key)
//     for (let key1 in students[key]){
//         document.write(key1 + ': '+ '<br>' + students[key][key1] + '<br>')
//
//     }
// }

//Автоматическое добавление

//задача 5

// let affairs = {
// 	'2019-12-28': ['дело11', 'дело12', 'дело13'],
// 	'2019-12-39': ['дело21', 'дело22', 'дело23'],
// 	'2019-12-30': ['дело31', 'дело32', 'дело33'],
// }
// Сделайте функцию addAffair, которая будет добавлять новое дело в
// заданную дату. Пусть функция первым параметром принимает дату,
// а вторым - дело.

// addAffair('2019-12-27', 'дело41' );
// addAffair('2019-12-27', 'дело42' );
//
// function addAffair(data, business) {
//     if (affairs[data] === undefined){
//         affairs[data] = [];
//         affairs[data].push(business);
//     } else {
//         affairs[data].push(business);
//     }
// }
//
// console.log(affairs);

//задача 6

//Дана вот такая структура для хранения студентов:
//
// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };
// Сделайте функцию addStudent, которая будет добавлять нового студента.
// Пусть функция первым параметром принимает группу,
// а вторым - подгруппу, а третьим - имя студента.

// addStudent('group4', 'subgroup41', 'student411');
// addStudent('group4', 'subgroup41', 'student412');
// addStudent('group4', 'subgroup41', 'student413');
//
// function addStudent(group, subgroup, name) {
//     if(students[group] === undefined){
//         students[group] = {};
//     }
//     if(students[group][subgroup] === undefined){
//         students[group][subgroup] = [];
//     }
//     students[group][subgroup].push(name);
//
// }

// for (let key in students){
//     for (let key1 in students[key]){
//         console.log(key1 + ': ' + students[key][key1])
//     }
// }

// console.log(students)

//задача 7

//Дана вот такая структура для хранения списка дел за года, месяцы и дни:
//
// let affairs = {
// 	2018: {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	2019: {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }
// Сделайте функцию addAffair, которая будет добавлять новое дело в
// заданную дату. Пусть функция первым параметром принимает год,
// вторым - месяц, третьим - день, а четвертым - дело.

// function addAffair(year, month, day, business) {
//     if (affairs[year] === undefined){
//         affairs[year] = {};
//     }
//     if (affairs[year][month] === undefined){
//         affairs[year][month] = {};
//     }
//     if (affairs[year][month][day] === undefined){
//         affairs[year][month][day] = []
//     }
//     affairs[year][month][day].push(business)
//
// }

// addAffair('2020', '08', 14, 'дело411')
// addAffair('2020', '08', 14, 'дело412')
// addAffair('2020', '08', 14, 'дело413')
//
// addAffair('2020', '10', 16, 'дело421')
// addAffair('2020', '10', 16, 'дело422')
// addAffair('2020', '10', 16, 'дело423')

// for (let key in affairs){
//     for (let key1 in affairs[key]){
//         for (let key2 in affairs[key][key1]){
//             for (let elem of affairs[key][key1][key2]){
//                 console.log(elem)
//             }
//         }
//     }
// }


// console.log(affairs);

//Практика на многомерные массивы и объекты в JavaScript

//задача 1

//Дан такой объект:
//
// let data = {
// 	2018: {
// 		11: {
// 			29: [1, 2, 3],
// 			30: [4, 5],
// 		},
// 		12: {
// 			30: [6, 7],
// 			31: [8, 9],
// 		},
// 	},
// 	2019: {
// 		12: {
// 			29: [10, 11],
// 			30: [12, 13],
// 			31: [14, 15],
// 		}
// 	},
// }


// Запишите все элементы этого объекта в какой-нибудь массив, вот так:
//
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let arr = [];
//
// for (let key in data){
//     for (let key1 in data[key]){
//         for (let key2 in data[key][key1]){
//             for (let elem of data[key][key1][key2]){
//                 arr.push(elem)
//             }
//         }
//     }
// }
// console.log(arr)

//задача 2

//Дан массив:
//
// let affairs = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9'
// 	},
// ]
// Получите из этого массива уникальные даты, то есть вот так:
//
// ['2019-12-29', '2019-12-30', '2019-12-31']

// let arr = [];
//
// for (let elem of affairs){
//     if (elem['date']) {
//         if (arr.indexOf(elem['date']) === -1){
//             arr.push(elem['date'])
//         }
//     }
// }
//
// console.log(arr);

//задача 3

//Дан такой массив с юзерами:
//
// let users = [
// 	{
// 		name: 'name1',
// 		age: 31,
// 		active: true,
// 	},
// 	{
// 		name: 'name2',
// 		age: 32,
// 		active: false,
// 	},
// 	{
// 		name: 'name3',
// 		age: 33,
// 		active: true,
// 	},
// 	{
// 		name: 'name4',
// 		age: 34,
// 		active: false,
// 	},
// 	{
// 		name: 'name5',
// 		age: 35,
// 		active: true,
// 	},
// ];
// Выведите на экран тех юзеров, значение ключа active для которых равно
// true.

// for (let elem of users){
//     if (elem.active === true){
//         console.log(elem)
//     }
// }

//задача 4

//
//Даны города и их страны следующей структуре:

// let arr = [];
//
// let date = [
//     {
//         country: 'Россия',
//         city:    'Москва',
//     },
//     {
//         country: 'Беларусь',
//         city:    'Минск',
//     },
//     {
//         country: 'Россия',
//         city:    'Питер',
//     },
//     {
//         country: 'Россия',
//         city:    'Владивосток',
//     },
//     {
//         country: 'Украина',
//         city:    'Львов',
//     },
//     {
//         country: 'Беларусь',
//         city:    'Могилев',
//     },
//     {
//         country: 'Украина',
//         city:    'Киев',
//     },
// ];
//Подсчитайте количество стран.

// for (let elem of date){
//     if (arr.indexOf(elem.country) === -1) {
//         arr.push(elem.country)
//     }
// }
// console.log(arr.length)

//задача 5

//Дан такой список дел за определенную дату:
//
// let affairs = {
// 	'2019-12-31': ['массив дел'],
// 	'2018-11-29': ['массив дел'],
// 	'2018-11-30': ['массив дел'],
// 	'2018-12-27': ['массив дел'],
// 	'2019-12-29': ['массив дел'],
// 	'2019-12-30': ['массив дел'],
// 	'2018-12-30': ['массив дел'],
// 	'2018-12-31': ['массив дел'],
// }
// Выведите на экран все дела за 2018 год.
//
// Выведите на экран все дела за 12 месяц 2018 года.

// let date = '2018',
//     day = '12';
//
// for (let key in affairs){
//     let newStr = key.split('-');
//     if (newStr[0] == date && newStr[1] == day){
//         console.log(key)
//     }
// }

//задача 6

//Дан такой массив с юзерами:

// let users = [
// 	{
// 		name: 'name1',
// 		active: true,
// 	},
// 	{
// 		name: 'name2',
// 		active: false,
// 	},
// 	{
// 		name: 'name3',
// 		active: true,
// 	},
// 	{
// 		name: 'name4',
// 		active: false,
// 	},
// 	{
// 		name: 'name5',
// 		active: true,
// 	},
// ];
// Сделайте две функции, которые будут менять значение поля active: первая функция пусть меняет на true, а вторая - на false.
//
// Пусть наши функции параметрами принимают данный массив и номер юзера, над которым следует произвести изменения.
//
// Пусть функции возвращают измененный массив.

// function toggleActive(arr, numUser) {
//     arr[numUser - 1]['active'] === true ? arr[numUser - 1]['active'] = false : arr[numUser - 1]['active'] = true
//     return arr;
// }
//
// toggleActive(users, 2);
//
// console.log(users)

//Удобное хранение данных в JavaScript

//задача 1

//Даны данные в следующей структуре:

// let date = [
// 	{
// 		country: 'Россия',
// 		city:    'Москва',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Минск',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Питер',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Владивосток',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Львов',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Могилев',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Киев',
// 	},
// ];
// Вам известно, что вам нужно будет получать массивы городов
// определенных стран. К примеру, нужно будет получить все города России, либо все города Беларуси. Также необходимо будет находить количество городов в определенной стране.
//
// Решите поставленные задачи для текущей структуры хранения данных.
//
// После этого ответьте на вопрос, удобна ли такая структура данных
// для решения поставленных задач?
//
// Переделайте структуру на более удобную. Напишите решения поставленных
// задач для новой структуры данных.

// let arrCity = [];
//
// function recivCity(arr, c) {
//     for (let elem of arr){
//         if (elem.country == c){
//             console.log(elem.city)
//             arrCity.push(elem.city)
//         }
//     }
// }
//
//
// recivCity(date, 'Россия')
// console.log(arrCity)

//Даты

//задача 2

// let date = [
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 21,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 25,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 26,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 29,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 30,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 19,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// ]
// Пусть вам нужно будет получать данные за определенный день, за
// определенный месяц, и за определенный год. Удобна ли текущая структура хранения данных для этого?
//
// Если да, оставьте все как есть, если нет, переделайте структуру на
// более удобную. Получите затем все данные за 2020 год.

// let date = {
// 	year : {
// 	month : {
// 		data : {
// 			11 : ['массив дел']
// 		}
//
// 	}
// }
// }

// for (let elem of date) {
// 		if (elem['year'] === 2020){
// 			console.log(elem)
// 	}
// }

//задача 3

//Дана следующая структура для хранения событий и их дат:
//
// let affairs = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9'
// 	},
// ]
// Пусть вам нужно будет получать список событий за определенную дату.
//  Получите затем список событий за '2019-12-30'

// корректировка !

// for (let elem of affairs){
// 	if (elem.date === '2019-12-30'){
// 		console.log(elem)
// 	}
// }

//Задачи для закрепления

//задача 4

//Пусть перед вами стоит задача хранения гороскопов для знаков зодиака.
// Гороскопы хранятся на несколько месяцев вперед.
//
// Необходимо будет получать гороскопы всех знаков зодиака за определенный день, а также гороскоп конкретного знака
// зодиака за определенный день.
//
// Продумайте удобную структуру хранения данных. Укажите ее преимущества
// и недостатки. Поясните, для решения каких задач придуманная вами
// структура будет неудобна.

// let horoscope = {
// 		2020: {
// 				9: {
// 					14: {
// 						'овен' : ['horoscope']
// 					}
// 				}
// 			}
//
// }
//
// let a = horoscope[2020][9][14]['овен'];
// console.log(a)

//задача 5
//задача 6

//Конвертация многомерных структур в JavaScript

// let users = [
// 	{
// 		id: 11,
// 		name: 'name11',
// 		surname: 'surname11',
// 	},
// 	{
// 		id: 14,
// 		name: 'name14',
// 		surname: 'surname14',
// 	},
// 	{
// 		id: 17,
// 		name: 'name17',
// 		surname: 'surname17',
// 	},
// ];
//
// let result = {};
//
// for (let user of users) {
// 	result[user.id] = user;
// }
//
// console.log(result);

//задача 1

//Дан список городов и их стран, хранящийся в следующей структуре:
//
// let date = [
// 	{
// 		country: 'Россия',
// 		city:    'Москва',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Минск',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Питер',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Владивосток',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Львов',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Могилев',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Киев',
// 	},
// ]
// Напишите код, которой переделает структуру данных вот в такую:
//
// {
// 	'Россия': [
// 		'Москва', 'Питер', 'Владивосток',
// 	],
// 	'Беларусь': [
// 		'Минск', 'Могилев'
// 	],
// 	'Украина': [
// 		'Киев', 'Львов'
// 	],
// }

// let result = {};
//
// for (let elem of date ){
// 	if (result[elem.country] === undefined){
// 		result[elem.country] = [elem.city]
// 	}else {
// 		result[elem.country].push(elem.city)
// 	}
// }
//
// console.log(result)

//задача 2

//Дан список событий за определенные даты, хранящийся в следующей структуре:
//
// let events = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9'
// 	},
// ]
// Напишите код, которой переделает структуру данных вот в такую:
//
// {
// 	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
// 	'2019-12-30': ['name4', 'name8', 'name9'],
// 	'2019-12-31': ['name2', 'name6'],
// }

// let new_events = {}
//
// for (let elem of events){
// 	if(new_events[elem.date] === undefined){
// 		new_events[elem.date] = [elem.event];
// 	}else {
// 		new_events[elem.date].push(elem.event)
// 	}
// }
//
// console.log(new_events)

//задача 3

//Дан список событий за определенные даты, хранящийся в следующей структуре:
//
// let events = {
// 	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
// 	'2019-12-30': ['name4', 'name8', 'name9'],
// 	'2019-12-31': ['name2', 'name6'],
// }
// Напишите код, которой переделает структуру данных вот в такую:
//
// let events = [
// 	{
// 		date:  '2019-12-29'
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31'
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31'
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name9'
// 	},
// ]

// let new_events = [];
//
// for (let key in events){
// 	for (let elem of events[key]){
// 		new_events.push({date: key, elem: elem })
// 	}
// }
// console.log(new_events)

//Даты

//задача 4

//Дан список событий за определенные месяцы, хранящийся в следующей структуре:
//
let events = [
	{
		date:  '2019-12',
		event: 'name1'
	},
	{
		date:  '2019-12',
		event: 'name2'
	},
	{
		date:  '2019-11',
		event: 'name3'
	},
	{
		date:  '2019-11',
		event: 'name4'
	},
	{
		date:  '2020-10',
		event: 'name5'
	},
	{
		date:  '2020-10',
		event: 'name6'
	},
	{
		date:  '2020-11',
		event: 'name5'
	},
	{
		date:  '2020-11',
		event: 'name6'
	},
	{
		date:  '2020-12',
		event: 'name7'
	},
	{
		date:  '2020-12',
		event: 'name8'
	},
	{
		date:  '2020-12',
		event: 'name9'
	},
]
// Напишите код, которой переделает структуру данных вот в такую:
//
// {
// 	2019: {
// 		11: [массив событий],
// 		12: [массив событий],
// 	}
// 	2020: {
// 		10: [массив событий],
// 		11: [массив событий],
// 		12: [массив событий],
// 	}
// }

// let res = {}
//
// for (let elem of events){
// 	let [year, month] = elem.date.split('-');
//
// 	if (res[year] === undefined){
// 		res[year] = {}
// 	}
//
// 	if (res[year][month] === undefined){
// 		res[year][month] = []
// 		console.log(res[year][month])
// 	}
// 	res[year][month].push(elem.event)
// }
//
// console.log(res)


//задача 5

//Дан список каких-то данных за определенные даты, хранящийся в следующей структуре:
//
// let data = [
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 21,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 25,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 26,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 29,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 30,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 19,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// ]
// Напишите код, которой переделает структуру данных в структуру вида:
//
// {
// 	год1: {
// 		месяц1: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 		месяц2: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 	}
// 	год2: {
// 		месяц1: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 		месяц2: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 	}
// }
// !!!

// let res = {};
//
// for (let elem of data){
// 	let[year, month, day] = [elem.year, elem.month, elem.day];
//
// 	if (res[year] === undefined){
// 		res[year] = {}
// 	}
// 	if (res[year][month] === undefined){
// 		res[year][month] = {}
// 	}
//
//
// 	res[year][month][day] = elem.data
//
// }
// console.log(res)


//Математические методы в JavaScript
// Работа со степенью и корнем

//задача 1

//Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10))

//задача 2

//Найдите квадратный корень из 245.

// console.log(Math.sqrt(245))

//задача 3

//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный
// корень из суммы кубов его элементов. Для решения воспользуйтесь
// циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let res = 0;
// for (let elem of arr){
// 	res = elem ** 3;
// }
// console.log(Math.sqrt(res))

//Работа с функциями округления

//задача 4

// console.log(Math.sqrt(379));
// console.log(Math.round(Math.sqrt(379)));
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));

//задача 5

// console.log(Math.sqrt(587));
// console.log(Math.ceil(Math.sqrt(587)));
// console.log(Math.floor(Math.sqrt(587)));

//Нахождение максимального и минимального числа

//задача 6

// let num = [4, -2, 5, 19, -130, 0, 10]
// console.log(Math.max.apply(null, num));
// console.log(Math.min.apply(null, num))

//Работа с рандомом

//задача 7

//Выведите на экран случайное целое число от 1 до 100.

// function getRandomNum(min, max) {
// 	return console.log(Math.floor(Math.random()*(max-min + 1)+ min))
// }
//
// getRandomNum(1, 100)

//задача 8

//Заполните массив 10-ю случайными целыми числами.
// (Подсказка: нужно воспользоваться циклами for или while).

// let arr = [],
// 	count = 0;
//
// function getRandomNum(min, max) {
// 	return (Math.floor(Math.random()*(max-min + 1)+ min))
// }
//
// getRandomNum(1, 100)
//
// while (count < 10){
// 	arr.push(getRandomNum(1, 100))
// 	count++
// }
// console.log(arr)

//задача 9

//Даны переменные a и b. Найдите найдите модуль разности a и b.
// Проверьте работу скрипта самостоятельно для различных a и b.

// function numAbs(a, b) {
// 	return (Math.abs(a-b))
// }
// console.log(numAbs(2, 3))

//Строковые методы JavaScript
// Работа с регистром символов

//задача 1

//Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = 'js'
// console.log(str.toUpperCase())

//задача 2

//Дана строка 'JS'. Сделайте из нее строку 'js'.

// let str = 'JS';
// console.log(str.toLowerCase())

//Работа с substr, substring, slice

//задача 3

//Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и
// слово 'javascript' тремя разными способами
// (через substr, substring, slice).

// let str = 'я учу javascript!';
// let subStr = str.substr(2,3);
// let subStr1 = str.substr(6,10);
// let subStrin = str.substring(2,5);
// let subStrin1 = str.substring(6,16);
// let sl = str.slice(2, 5);
// let sl1 = str.slice(6,16);
// console.log(subStr)
// console.log(subStr1)
// console.log(subStrin)
// console.log(subStrin1)
// console.log(sl)
// console.log(sl1)

//Работа с indexOf

//задача 5

//Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

// let str = 'abcde';
// console.log(str.indexOf('c'))

//задача 6

//Дана строка. Проверьте, есть ли в этой строке символ 'a'.
// let str = 'abcde';
// console.log(str.indexOf('a'))

//задача 7

//Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

// let str = 'abcde';
// console.log(str.indexOf('a', 0))

//задача 8

//Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

// let str = 'abcde';
// console.log(str.indexOf('a', str.length));

//задача 9

//Дана строка. Проверьте, начинается ли эта строка на http://.
// let str = 'abcde';
// console.log(str.indexOf('http//'))

//задача 10

// let str = 'abcde.html';
// console.log(str.lastIndexOf('.html'))

//Работа с startsWith, endsWith

//задача 11

//Дана строка. Проверьте, начинается ли эта строка на http://.

// let str = 'abcde.html';
// console.log(str.startsWith('http://'));


//задача 12

//Дана строка. Проверьте, заканчивается ли эта строка на .html.

// let str = 'abcde.html';
// console.log(str.endsWith('.html'))

//Работа с split

//задача 13

//Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое
// число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5';
// let res = str.split('-')
// console.log(res)


//задача 14

//Дана строка '12345'. С помощью метода split запишите каждый
// символ этой строки в отдельный элемент массива.

// let str = '12345';
// let res = str.split('');
// console.log(res)

//Работа с join

//задача 15

//Дан следующий массив:
//
// let arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.

// let arr = [1, 2, 3, 4, 5];
// let res = arr.join('-')
// console.log(res)
// console.log(typeof res)

//Методы для массивов в JavaScript
// Работа с push, unshift

//задача 1

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4, 5, 6)
// console.log(arr)

//задача 2

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//Работа с shift, pop

//задача 3

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq'];
// let res = arr.shift();
// console.log(res)

//задача 4

//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];
// let res = arr.pop();
// console.log(res)

//Работа с slice

//задача 5

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// let res = arr.slice(0,3)
// console.log(res)

//задача 6

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите
// в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5];
// let res = arr.slice(3);
// console.log(res);

//Работа с splice

//задача 7

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// let res = arr.splice(1, 2);
// console.log(arr)

//задача 8

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5];
// let res = arr.splice(1,3);
// console.log(res)

//задача 9

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr)

//задача 10

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из
// него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0,'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(arr.length, 0, 'e');
// console.log(arr)

//задача 11

//Дан массив с числами. Проверьте, есть ли в этом массиве число 3.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.indexOf(3)
// console.log(res)

//Практика на использования изученных методов
// Регистр символов

//задача 1

//Преобразуйте последнюю букву строки в верхний регистр.
// let str = 'london';
// let res = str.slice(0, -1) + str.slice(-1).toUpperCase()
// console.log(res)

//задача 2

//Преобразуйте первые 2 буквы строки в верхний регистр.

// let str = 'london';
// let res = str.slice(0,2).toUpperCase() + str.slice(2)
// console.log(res)

//задача 3

//Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
//
// let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.

// let str = 'London';
// let res = str.toLowerCase();
// console.log(res)


//Слова в строке

//задача 4

//Давайте напишем код, который преобразует первую букву каждого
// слова в верхний регистр.

//!!!

// let str = 'word1 word2 word3';
//
// let words = str.split(' ');
//
// for (let i = 0; i < words.length; i++){
// 	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1)
// }
// let res = words.join(' ')
//
//
// console.log(res);

//задача 5

//Преобразуйте строку 'var_test_text' в 'VarTestText'.
//
// Написанный код должен работать для любых строк такого типа
// (то есть для строк, в которых слова разделены символов подчеркивания).

// let str = 'var_test_text';
//
// let words = str.split('_');
//
// for (let i=0; i < words.length; i++){
// 	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1)
// }
//
// let res = words.join('');
// console.log(res)

//задача 6

//Модифицируйте предыдущую задачу так, чтобы первая буква
// новой строки была в нижнем регистре.

// let str = 'var_test_text';
//
// let words = str.split('_');
//
// for (let i=0; i < words.length; i++){
// 	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1)
// }
//
// let res = words.join('');
// let res1 = res.slice(0,1).toLowerCase() + res.slice(1)
// console.log(res1)

//Переворот строки

//задача 7

//Дана строка со словами. Напишите скрипт, который переставит
// слова в строке в обратном порядке.

// let str = 'учу сплю ем';
//
// let res = str.split(' ').reverse().join(',')
//
// console.log(res);

//Основы работы с пользовательскими функциями в JavaScript

//задача 1

// function showName(name) {
// 	alert(name)
// }
//
// showName('Дмитрий')

//задача 2

//Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

// let count = 0;
// function showNum(num) {
//
// 	while (count <= num){
// 		document.write(count + '<br>')
// 		count++
// 	}
// }
//
// showNum(100);

//Параметры функций в JavaScript

//задача 1

//Сделайте функцию, которая параметром принимает число и выводит
// на экран куб этого числа.

// function numCube(num) {
// 	alert(num ** 3)
// }
//
// numCube(3);

//задача 2

//Сделайте функцию, которая параметром принимает число и проверяет,
// положительное это число или отрицательное. В первом случае пусть
// функция выводит на экран текст '+++', а во втором '---'.

// function askNum(num) {
// 	if (num > 0){
// 		alert('+++')
// 	}else if (num < 0){
// 		alert('---')
// 	}else {
// 		alert('равно 0')
// 	}
// }
//
// askNum(0)

//Несколько параметров

//задача 3

// function sum(num1, num2, num3) {
// 	alert(num1 + num2 + num3)
// }
//
// sum(1, 2, 3,);

//Параметры-переменные

//задача 4

//Сделайте функцию func, которая параметром будет принимать 3 числа и
// выводить на экран их сумму.
//
// Пусть даны 3 переменные с числами:
//
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений
// эти переменных.

// function sum(num1, num2, num3) {
// 	alert(num1 + num2 + num3)
// }
//
// sum(param1, param2, param3);

//Необязательные параметры

//Инструкция return в JavaScript

//задача 1

//Сделайте функцию, которая параметром принимает число, а возвращает
// куб этого числа. С помощью этой функции найдите куб числа 3
// и запишите его в переменную result.

// function numCube(num) {
// 	return num ** 3;
// }
//
// let res = numCube(3)
// console.log(res)

//Использование функций в выражении

// function sumNum(num) {
// 	return Math.sqrt(num);
// }
//
// let res = sumNum(3) + sumNum(4)
// console.log(res)

//Функции в функциях

//задача 3

//Пусть у вас есть функция, возвращающая квадратный корень из числа,
// и функция, округляющая дробь до трех знаков в дробной части:
//
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
//
// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 и
// округлите его до трех знаков в дробной части.


// let res = round(sqrt(2))
// console.log(res)

//задача 4

//Пусть у вас есть функция, возвращающая квадратный корень из числа,
// и функция, возвращающая сумму трех чисел:
//
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
//
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и
// запишите ее в переменную result.

// let result = sum(sqrt(2), sqrt(3), sqrt(4))
// console.log(result)

//задача 5

//Пусть у вас есть функция, округляющая дробь до трех знаков в
// дробной части:
//
// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так,
// чтобы в переменную result записывалась дробь, округленная
// до 3-х знаков в дробной части.

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
//
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
//
// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)))
// console.log(result)


//Тонкое место return

//Цикл и return

//Что выведется на экран в результате выполнения следующего кода:
//
// function func(num) {
// 	let sum = 0;
//
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
//
// alert( func(5) );
// Объясните почему.
//
// Что хотел сделать автор данного кода? Исправьте ошибку автора.

// function func(num) {
// 	let sum = 0;
//
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
//
// alert( func(5) );

//Применение return в цикле

//задача 10

//Напишите функцию, которая параметром будет принимать число и
// делить его на 2 столько раз, пока результат не станет меньше 10.
// Пусть функция возвращает количество итераций, которое потребовалось
// для достижения результата.

// function divisionByTwo(num) {
// 	let counter = 0;
// 	let res = num
// 	while (res >= 10){
// 		res /= 2
// 		counter++
// 	}
// 	return counter
//
// }
// let res = divisionByTwo(290);
// console.log(res)

//Приемы работы с return

//Дана следующая функция:
//
// function func(num1, num2) {
// 	let result;
//
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}
//
// 	return result;
// }
//
// alert(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории

// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return  num1 * num2;
// 	} else {
// 		return  num1 - num2;
// 	}
// }
//
// alert(func(3, 4));


//Примеры на создание функций в JavaScript

//задача 1

//Напишите функцию, которая будет находить сумму квадратов элементов
// массива.

// function sumSquare(arr) {
// 	let res = 0;
// 	for (let elem of arr){
// 		res += elem ** 2
// 	}
// 	return res
// }
//
// let arr1 = [1, 2, 3, 4];
//
// console.log(sumSquare(arr1));


//задача 2

//Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром будет принимать целое число и возвращать сумму его цифр.

// function getDigitsSum(digit) {
// 	let result = 0;
// 	let res = String(digit).split('')
// 	for (let elem of res){
// 		result += Number(elem)
// 	}
// 	console.log(result)
// 	return result
// }
//
// getDigitsSum(3456)


//задача 3

//Реализуйте функцию getDivisors, которая параметром будет принимать
// число и возвращать массив его делителей, то есть чисел, на которое
// делится наше число. К примеру, если мы передадим число 24 - мы
// должны получить массив [1, 2, 3, 4, 6, 12, 24].

// function getDivisors(num) {
// 	let res = [];
// 	for (let i = 0; i <= num; i++){
// 		if (num % i === 0){
// 			res.push(i)
// 		}
// 	}
// 	return res
//
// }
//
// console.log(getDivisors(24));

//задача 4

//Сделайте функцию reverseStr, которая параметром будет принимать
// строку и переворачивать ее символы в обратном порядке.
// Решите задачу без цикла, используя комбинацию стандартных
// функций JavaScript.

// function reverseStr(str) {
// 	let res = str.split('').reverse().join(',')
// 	return res
// }
//
// console.log(reverseStr('asdf'))

//задача 5

//Сделайте функцию delElem, которая параметрами будет принимать
// значение и массив и удалять из массива все элементы с таким значением.

// function delElem(elem, arr) {
// 	let res = []
// 	for (let el of arr){
// 		if (el !== elem){
// 			res.push(el)
// 		}
// 	}
//
// 	return res
// }
//
// let arr1 = [1, 2, 3, 4, 5, 2, 6, 2]
// console.log(delElem(2, arr1))

//задача 6

//Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
//
// Пример работы такой функции:
//
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

// function openArray(num) {
// 	let res = [];
// 	for (let i = 1; i <= num; i++){
// 		res.push(i)
// 	}
// 	return res
// }
//
// console.log(openArray(15))

//задача 7

//Сделайте функцию, заполняющую массив целыми числами от начального
// до конечного заданных чисел.
//
// Пример работы такой функции:
//
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

// function startFinish(num1, num2) {
// 	let res = [];
// 	for (let i = num1; i <= num2; i++){
// 		res.push(i);
// 	}
// 	return res
// }
//
// console.log(startFinish(3, 7))

//Флаги в функциях JavaScript

//задача 1

//Сделайте функцию, которая параметром будет принимать массив с
// числами, и проверять, что все элементы в этом массиве являются
// четными числами.

// function oddEven(arr) {
// 	for (let elem of arr){
// 		if (elem % 2 !== 0){
// 			return false
// 		}
// 	}
// 	return true
// }
//
// let arr = [2, 5, 6, 8]
// console.log(oddEven(arr))


//задача 2

//Сделайте функцию, которая параметром будет принимать число и
// проверять, что все цифры это числа являются нечетными.

// function oddNum(num) {
// 	let strNum = String(num).split('');
// 	for (let elem of strNum){
// 		if(Number(elem) % 2 === 0){
// 			return false
//
// 		}
// 	}
// 	return true
// }
//
// console.log(oddNum(373))

//задача 3

//Сделайте функцию, которая параметром будет принимать массив и
// проверять, есть ли в этом массиве два одинаковых элемента подряд.

// function sameElem(arr) {
// 	for (let elem of arr){
// 		if(arr[elem] === arr[elem -1]){
// 			return true
// 		}
// 	}
// 	return false
// }
//
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(sameElem(arr))


//Логические операторы без if в функциях JavaScript

//задача 1

//Дана следующая функция:
//
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.


// function func(a, b) {
//  	return a == b;
//  }

//задача 2

//function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(a, b) {
// 	return a != b
// }

//задача 3

//Дана следующая функция:
//
// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(a, b) {
// 	return a + b >= 10
// }
//
// console.log(func(7, 4))

//задача 4

//Дана следующая функция:
//
// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(num) {
// 	return num >= 0;
// }
//
// console.log(func(7))

//Правильное использование функций JavaScript

//Дана функция, проверяющая числа на простоту:
//
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
//
// 	return true;
// }
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.


// function numRange(number) {
// 	let res = [];
// 	for (let i = 0; i <= number; i++){
// 		if(isPrime(i)){
// 			res.push(i)
// 		}
// 	}
// 	return res;
//
// }
// console.log(numRange(100));

//задача 2

//Дана функция getDigitsSum, которая параметром принимает целое число
// и возвращает сумму его цифр:
//
// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
//
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
//
// 	return sum;
// }
// С помощью приведенной функции getDigitsSum найдите все года
// от 1 до 2030, сумма цифр которых равна 13.

// function sumNumber(num) {
// 	let res = [];
// 	for (let i = 1; i <= num; i++){
// 		if(getDigitsSum(i) === 13){
// 			res.push(i)
// 		}
// 	}
// 	return res
// }
//
// console.log(sumNumber(2030));

//задача 3

//Пусть дан какой-то массив с числами, например, такой:

// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в
// обратном порядке. То есть из нашего массива сделаем следующий:
//
// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:

// let nums = [123, 456, 789];
//let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }
// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла
// отдельная функция.

// function numReverse(arr) {
// 	let result = [];
// 	for (let num of arr) {
// 		result.push(String(num).split('').reverse().join(''));
// 	}
// 	return result;
// }
//
// console.log(numReverse(nums))

//задача 4

//Даны два числа. Необходимо проверить, равна ли сумма цифр первого
// числа сумме цифр второго числа.
//
// Некий программист уже написал решение задачи, вот оно:
//
// let num1 = 234;
// let num2 = 531;
//
// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }
//
// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }
//
// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }
// В чем недостатки приведенного кода? Переделайте код так, чтобы он
// был более удачным.


// let num1 = 234;
// let num2 = 532;
//
// function digitsSum(number) {
// 	let digits = String(number).split('');
// 	let result = 0;
// 	for (let elem of digits){
// 		result += Number(elem)
// 	}
// 	return result;
// }
//
// function sum(res1, res2) {
// 	return res1 === res2 ? 'суммы цифр совпадают': 'суммы цифр не совпадают'
// }
//
// console.log(sum(digitsSum(num1), digitsSum(num2)))

//задача 5

//Дан массив с числами. Необходимо перебрать этот массив с числами и
// вывести в консоль нетривиальные делители этих чисел (то есть исключая
// число 1 и само число).
//
// Некий программист уже написал решение задачи:
//
// let nums = [12, 24, 35, 14];
//
// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }
//
// function getDivisors(num) {
// 	let result = [];
//
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(num);
// 		}
// 	}
//
// 	return result;
// }
// Программист не тестировал отдельно работу функции getDivisors,
// а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.
//
// Найдите и исправьте ошибку. Потестируйте отдельно функцию
// getDivisors, чтобы убедиться, что она работает корректно после
// вашей правки. После того, как вы убедитесь в корректности работы
// функции - проверьте полный код решения задачи.

// let nums = [12, 24, 35, 14];
//
// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }
//
// function getDivisors(num) {
// 	let result = [];
//
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
//
// 	return result;
// }

//Комбинация вспомогательных функций JavaScript

//задача 1

//Дана функция getSum, находящая сумму элементов переданного массива:
//
// function getSum(arr) {
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
//
// 	return sum;
// }
//Дана функция getDigits, возвращающая массив цифр числа:

// function getDigits(num) {
// 	return String(num).split('');
// }
// Используя комбинацию приведенных функций найдите сумму
// цифр числа 12345.

// console.log(getSum(getDigits(12345)))

//задача 2

//Дано число. Нужно найти его делители (без 1 и самого числа),
// а затем найти среднее арифметическое (сумма делить на количество)
// делителей числа и вывести результат на экран.
//
// Некий программист уже написал решение задачи:
//
// console.log( getAvg(getDivisors(24)) );
//
// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum = elem;
// 	}
//
// 	return sum / arr.length;
// }
//
// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
//
// 	for (let i = 2; i > num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// }
// Программист не тестировал отдельно работу своих функций, а написал
// весь код сразу и затем запустил его. При запуске оказалось, что код
// работает неверно.
//
// Найдите и исправьте ошибки программиста. Потестируйте отдельно работу
// всех функций, чтобы убедиться, что они работают корректно после
// ваших правок. После того, как вы убедитесь в корректности работы
// функций - проверьте полный код решения задачи.


// console.log( getAvg(getDivisors(12)) );
//
// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//
// 	return sum / arr.length;
// }
//
// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
//
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// 	return result;
// }

//Вспомогательные функции внутри других функций в JavaScript

//задача

// let arr = [12, 19, 28, 13, 14, 345];
// let result = [];
//
// function getDigit(num) {
// 	return String(num).split('')
// }
//
// function getSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr){
// 		sum += Number(elem)
// 	}
// 	return sum
// }
//
// function isRange(num) {
// 	return num >= 1 && num <= 9
// }
//
// for (let el of arr){
// 	if (isRange(getSum(getDigit(el)))){
// 		result.push(el)
// 	}
// }
//
// console.log(result)

//Дружественные числа на JavaScript

//задача 1

//Реализуйте функцию getOwnDivisors. Потестируйте ее работу.
// function getOwnDivisors(num) {
// 	let res = [];
// 	for (let i = 1; i < num; i++){
// 		if (num % i == 0){
// 			res.push(i)
// 		}
// 	}
// 	return res
// }

//задача 2

//Реализуйте функцию getSum. Потестируйте ее работу.

// function getSum(arr) {
// 	let res = 0;
// 	for (let elem of arr){
// 		res += elem
// 	}
// 	return res;
// }
//
// function isFreindly(num1, num2) {
// 	let sum1 = (getSum(getOwnDivisors(num1))),
// 		sum2 = (getSum(getOwnDivisors(num2)));
//
// 	return sum1 === num2 && sum2 === num1;
// }
//
// function getFreindly(min, max) {
// 	let res = [];
// 	for (let i = min; i <= max; i++){
// 		for (let j = i+1; j <= max; j++){
// 			if(isFreindly(i, j)){
// 				res.push([i, j])
// 			}
// 		}
// 	}
// 	return res;
// }
//
//
// console.log(getFreindly(1, 2000))


// console.log(isFreindly(220, 284))

//Задачи

//задача 5

//Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

// function getOwnDivisor(num) {
// 	let res = [];
// 	for (let i = 1; i < num; i++){
// 		if (num % i == 0){
// 			res.push(i)
// 		}
// 	}
// 	return res;
// }

// function getSum(arr) {
// 	let res = 0;
// 	for (let elem of arr){
// 		res += elem;
// 	}
// 	return res
// }

// function getPerfect(min, max) {
// 	let resPerfectNumber = []
// 	for (let i = min; i < max; i++){
// 		let findNum = getSum(getOwnDivisor(i))
// 		if (findNum === i){
// 			resPerfectNumber.push(i)
// 		}
// 	}
// 	return resPerfectNumber;
// }
//
// console.log(getPerfect(1, 100000))

// задача 6

//Сделайте функцию getSimpleDivisors, которая будет принимать параметром целое число и находить все делители этого числа, являющиеся простыми числами.

// function getDivisor(num) {
// 	let res = [];
// 	for (let i = 1; i <= num; i++){
// 		if (num % i == 0){
// 			res.push(i)
// 		}
// 	}
// 	return res
// }

// console.log(getDivisor(100))

// function getSimpleDivisors(num) {
// 	let result = [];
// 	let res = getDivisor(num);
// 	for (let elem of res){
// 		if (elem % 2 !== 0 ){
// 			result.push(elem)
// 		}
// 	}
// 	return result;
// }
//
// console.log(getSimpleDivisors(1000))

//Пересечение массивов на JavaScript

//задача

//Давайте напишем функцию getInt, которая будет находить пересечение массивов и возвращать пересечение этих массивов.
//
// Пусть пересечение возвращается в виде массива, состоящего из общих элементов.

// function getInt(arr1, arr2) {
// 	let res = [];
// 	for (let el of arr1){
// 		if(inArray(el, arr2)){
// 			res.push(el)
// 		}
// 	}
// 	return res
// }
//
//
// function inArray(elem, arr) {
// 	return arr.indexOf(elem) !== -1
// }
//
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];
//
// console.log(getInt(arr1, arr2))

//Разность массивов на JavaScript

// let a1 = [1, 2, 3];
// let a2 = [2, 3, 4, 5];
//
// function getElem(arr1, arr2) {
// 	let res = [];
// 	for (let elem of arr1){
// 		if (!inArray(elem, arr2)){
// 			res.push(elem)
// 		}
// 	}
// 	return res;
// }

// function getDiff(arr1, arr2) {
// 	let result = [];
//
// 	let diff1 = (getElem(arr1, arr2))
// 	let diff2 = (getElem(arr2, arr1))
//
// 	return result.concat(diff1, diff2)
//
// }
//
// function inArray(elem, arr) {
// 	return arr.indexOf(elem) !== -1
// }
//
// console.log(getDiff(a1, a2))

//Наибольший общий делитель на JavaScript

//Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.
//
// При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.
//
// Обязательно тестируйте каждую вспомогательную функцию перед использованием.

//задача 1

//1 функция принимает два числа
//2 вычисляем делители
//3  сравниваем массивы делителей
//4  находим наибольший делитель

// function getDivisor(num) {
// 	let res = [];
//
// 	for (let i = 1; i <= num; i++){
// 		if (num % i == 0){
// 			res.push(i)
// 		}
// 	}
// 	return res
// }
//
// // console.log(getDivisor(12))
//
// function getElemArr(arr1, arr2) {
// 	let res = [];
//
// 	for (let elem of arr1){
// 		if (inArray(elem, arr2)){
// 			res.push(elem)
// 		}
// 	}
// 	return res
// }
//
// function maxDivisor(arr) {
// 	return Math.max(...arr)
// }
//
//
// function inArray(elem, arr) {
// 	return arr.indexOf(elem) !== -1
// }
//
// function getGreatestCommonDivisor(num1, num2) {
// 	let resNum1 = getDivisor(num1),
// 		resNum2 = getDivisor(num2),
// 		result = maxDivisor(getElemArr(resNum1, resNum2));
//
// 	return result
// }

// console.log(getGreatestCommonDivisor(100, 244))

//Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми.
// Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.
// Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.


// function getDivisor(num) {
// 	let res = [];
//
// 	for (let i = 1; i <= num; i++){
// 		if (num % i == 0){
// 			res.push(i)
// 		}
// 	}
// 	return res
// }
//
// function getElemArr(arr1, arr2) {
// 	let res = [];
//
// 	for (let elem of arr1){
// 		if (inArray(elem, arr2)){
// 			res.push(elem)
// 		}
// 	}
// 	return res
// }
//
// function mutuallySimple(arr) {
// 	return arr.length == 1 && arr[0] == 1
// }
//
// function inArray(elem, arr) {
// 	return arr.indexOf(elem) !== -1
// }
//
// function getGreatestCommonDivisor(num1, num2) {
// 	let resNum1 = getDivisor(num1),
// 		resNum2 = getDivisor(num2),
// 		result = mutuallySimple(getElemArr(resNum1, resNum2));
//
// 	return result
// }
//
// console.log(getGreatestCommonDivisor(38, 45))

//Случайный элемент из массива на JavaScript

//задача 1

//Реализуем функцию, возвращающую случайный элемент из массива

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// let arr = [1, 2, 3, 4, 5];
//
// function random(arr) {
// 	return arr[getRandomInt(0, arr.length -1)]
// }
//
// console.log(random(arr))

//задача 2

//Используя созданную функцию, найдите сумму трех случайных элементов из массива.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// let arr = [1, 2, 3, 4, 5];
//
// function random(arr) {
// 	return arr[getRandomInt(0, arr.length -1)]
// }
//
// function sumElem() {
// 	let elem1 = random(arr),
// 		elem2 = random(arr),
// 		elem3 = random(arr),
// 		res = 0;
// 	res = elem1 + elem2 + elem3
// 	return res
//
// }
//
//
// console.log(sumElem())

//Перемешивание массива на JavaScript

//задача 1

//Реализуем функцию shuffle, параметром принимающую массив и перемешивающую его элементы в случайном порядке.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function shuffle(arr) {
// 	let result = [];
//
// 	while (arr.length > 0){
// 		let random = getRandomInt(0, arr.length -1);
// 		let elem = arr.splice(random, 1)[0];
// 		result.push(elem)
// 	}
// 	return result;
// }
//
// let arr = [1, 2, 3, 4, 5]
// console.log(shuffle(arr))

//задача 2

//Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function arr(num1, num2) {
// 	let arrForRandom = [];
// 	for (let i = num1; i <= num2; i++){
// 		arrForRandom.push(i)
// 	}
// 	return arrForRandom
// }
//
// function shuffle(arr) {
// 	let res = [];
//
// 	while (arr.length > 0){
// 		let random = getRandomInt(0, arr.length -1);
// 		let elem = arr.splice(random, 1)[0]
// 		res.push(elem)
// 	}
// 	return res;
// }
//
// function range(numMin, numMax) {
// 	return shuffle(arr(numMin, numMax));
// }
//
// console.log(range(11, 18))


//задача 3

//Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle. РЕШЕНИЕ ВЫШЕ ПОДХОДИТ ПОЛНОСТЬЮ ПОД ЭТИ ДАННЫЕ

// Случайные элементы из массива на JavaScript

//задача

//Давайте теперь реализуем функцию randoms, возвращающую заданное количество случайных элементов из массива.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function shuffle(arr) {
// 	let res = [];
//
// 	while (arr.length > 0){
// 		let random = getRandomInt(0, arr.length-1);
// 		let elem = arr.splice(random, 1)[0]
// 		res.push(elem)
// 	}
// 	console.log('shuffle '+ res)
// 	return res
// }
//
// function random(arr, length) {
// 	return firstRandom(shuffle(arr), length)
// }
//
// function firstRandom(arr, length) {
// 	console.log('firstRandom ' + arr.splice(0, length))
// 	return arr.splice(0, length)
//
// }
//
// console.log(random([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3));

//Счастливые билеты на JavaScript

//Пусть нам нужно вывести на экран все возможные счастливые автобусные билеты. Билет называется счастливым, если сумма первых трех цифр билета равна сумме вторых трех цифр (будем рассматривать только билеты, в номере которых 6 цифр).

// console.log(getTicket());
//
// function getTicket() {
// 	let result = []
// 	for (let i = 1001; i <= 999999; i++){
// 		if (isLucky(i)){
// 			result.push(normalizeNum(i))
// 		}
// 	}
// 	return result
//
// }
//
// function isLucky(num) {
// 	let str = normalizeNum(num)
//
// 	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// 	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
//
//
// 	return sum1 === sum2;
// }
//
// function normalizeNum(num) {
// 	let str = String(num)
// 	if (str.length == 5){
// 		return '0' + str;
// 	}
//
// 	if (str.length == 4){
// 		return '00' + str;
// 	}
//
// 	return str
// }

//Счастливые билеты любой длины на JavaScript

//теперь сделаем так что бы в билете было любое колличество цифр(четное) и так же находились счастливые билеты

// function formStr(data, length) {
// 	let str = String(data)
// 	let strZero = '';
// 	if (str.length < length){
// 		for (let i = 1; i <= (length - str.length); i++){
// 			strZero += '0';
// 		}
// 	}
// 	return strZero + str;
// }
//
// function normalizeNum(num, length) {
// 	let str = String(num);
// 	return formStr(str, length)
// }
//
// function isLucky(num) {
// 	let str = String(num);
// 	let sum1 = 0;
// 	let sum2 = 0;
//
// 	for (let i = 0; i <= str.length/2 - 1; i++){
// 		sum1 += Number(str[i])
// 	}
//
// 	for (let i = str.length/2 ; i <= str.length - 1; i++){
// 		sum2 += Number(str[i])
// 	}
//
// 	return sum1 == sum2;
// }
//
// function getLast(num) {
// 	let res = '';
// 	for (let i = 1; i <= num; i++){
// 		res += '9'
// 	}
// 	return res
// }
//
//
//
// function getFirst(num) {
// 	let res = '';
// 	let number = (num /2) - 1
// 	for (let i = 1; i <= number; i++){
// 		res += '0'
// 	}
// 	let finalRes = '1' + res + '1'
// 	return finalRes
// }
//
// function getLuckyTickets(digitsAmount) {
// 	let result = [],
// 	    first = getFirst(digitsAmount),
// 		last = getLast(digitsAmount);
//
// 	for (let i = first; i <= last; i++){
// 		let ticket = normalizeNum(i, digitsAmount)
// 		if(isLucky(ticket)){
// 			result.push(ticket)
// 		}
// 	}
// 	return result
// }
//
// console.log(getLuckyTickets(8))


//Область видимости переменных в функциях JavaScript

//Область видимости и параметры функций JavaScript

//Исходный код функции и ее результат в JavaScript

//Функция как переменная в JavaScript

//задача 1

// function func() {
// 	return 'abc'
// }

// //задача 2
//
// function func() {
// 	return 'abc'
// }
//
// console.log(alert(func()))

// //задача 3
//
// function func() {
// 	return 'abc'
// }
// console.log(alert(func))

//задача 4

// function func() {
// 	return 'abc'
// }
// func = 123;
// console.log(alert(func))

//задача 5

// function func1() {
// 	return 3
// }
// console.log(func1())

//задача 6

// let func2 = func1;

//задача 7
// console.log(func1() + func2())

//Присваивание функций в переменные при создании

//задача 8

//Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

// let func1 = function () {
// 	return 1
// }
// console.log(func1())

//задача 9

//Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.

// let func2 = function () {
// 	return 2
// }

//задача 10

//Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом на экран.

// console.log(func1() + func2())

//Function expression и Function declaration в JavaScript

//задача 3

//Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.

// console.log(func())
//
// function func() {
// 	return 123;
// };

//задача 4

//Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.

// console.log(func())
//
// let func = function () {
// 	return 123;
// };

//Объяснение работы Function Declaration

//задача 5

//Расставьте точки с запятой во всех необходимых местах:

// let func1 = function() {alert('!')};
// let func2 = function() {
// 	alert('!')
// };
// function func3() {
// 	alert('!')
// }

//Нюансы функциональных выражений в JavaScript

//Массив с анонимными функциями в JavaScript

//задача 1

//Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

// let arr = [
// 	function () {return 1},
// 	function () {return 2},
// 	function () {return 3},
// ]

//задача 2

//Используя созданный вами массив arr выведите на экран число 3, вызвав соответствующую функцию.

// console.log(arr[2]())

//задача 3

//Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.

// let arr = [
// 	function () {return 1},
// 	function () {return 2},
// 	function () {return 3},
// ]
//
// for (let elem of arr){
// 	console.log(elem())
// }

//Объект с анонимными функциями в JavaScript

//задача 1

//Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите на экран сумму возвращаемых чисел.

// let obj = {
// 	func1: function () {return 1},
// 	func2: function () {return 2},
// 	func3: function () {return 3},
// }
//
// console.log(obj["func1"]() + obj["func2"]() + obj["func3"]())

//задача 2

//Переберите созданный объект циклом и выведите результаты работы функций на экран.


// for (let key in obj){
// 	console.log(obj[key]())
// }

//задача 3

//Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

// let obj = {
// 	sum: function (num) {
// 		let res = 0;
// 		for (let elem of num) {
// 			res += elem;
// 		}
// 		return res;
// 	},
// 	square: function (arr) {
// 		let res = 0;
// 		for (let elem of arr){
// 			res += elem * elem;
// 		}
// 		return res;
// 	},
// 	cube: function (arr) {
// 		let res = 0;
// 		for (let elem of arr){
// 			res += elem ** 3
// 		}
//
// 		return res;
// 	}
//
// }
//
// let arr = [2, 3, 4]
// console.log(obj.sum(arr));
// console.log(obj.square(arr));
// console.log(obj.cube(arr));

//Передача функций параметрами в JavaScript


//задача 1

//Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите на экран сумму результатов функций.

// test (
// 	function () { return 1},
// 	function () { return 2},
// 	function () { return 3},
// )
//
// function test(func1, func2, func3) {
// 	return console.log(func1() + func2() + func3())
// }

//Именованные функции

//задача 2

//Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

// test(
// 	function () {return 1},
// 	function () {return 2},
// 	function () {return 3},
// )
//
// function test(func1, func2, func3) {
// 	return console.log(func1() + func2() + func3())
// }

//задача 3

//Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

// function test(func1, func2, func3) {
// 	let res = func1() + func2() + func3()
// 	return console.log(res)
// }
//
//
// function func1() {
// 	return 1
// }
//
// function func2() {
// 	return 2
// }
//
// function func3() {
// 	return 3
// }
//
// test(func1, func2, func3)

//задача 4

//Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

// function test(func1, func2, func3) {
// 	let res = func1() + func2() + func3()
// 	return console.log(res)
// }
//
// let func1 = function () {
// 	return 1
// }
//
// let func2 = function () {
// 	return 2
// }
//
// let func3 = function () {
// 	return 3
// }
//
// test(func1, func2, func3)


//Параметры передаваемых функций

//задача 5

//Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

// test(function(num) {
// 	return num * num;
// });
//
// function test(func) {
// 	console.log((func(3)));
// }

//задача 6

//Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

// test(func)
//
// function func(num) {
// 	return num * num;
// };
//
// function test(func) {
// 	console.log((func(3)));
// }

//задача 7

//Переделайте передаваемую функцию на Function Expression с тем же именем func.

// let func = function (num) {
// 	return num * num;
// };
//
// test(func)
//
// function test(func) {
// 	console.log((func(3)));
// }

//задача 8

//Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемая функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.

// test(func)
//
// function func(num1, num2) {
// 	return num1 + num2
// }
//
// function test(func) {
// 	console.log((func(2, 3)));
// }


//Передадим и число параметром

//задача 9

//Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
//
// Пусть функция test возвращает сумму результатов переданных функций:
//
// function test(num, func1, func2) {
// 	return console.log(func1(num) + func2(num));
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.

// function square(num) {
// 	return num * num
// }
//
// function cube(num) {
// 	return num * num * num
// }
//
// test(3, square, cube)

//задача 10

//Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.

// function test(arr, func){
// 	for (let i = 0; i < arr.length; i++){
// 		arr[i] = func(arr[i])
// 	}
// 	return arr
// }

// let result = (test([1, 2, 3], function (num) {
// 	return num * num
// }))
// console.log(result)


//задача 11

//Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.

// let result = (test([1, 2, 3], function (num) {
// 	return num * num * num
// }))
// console.log(result)

//Именованные функциональные выражения в JavaScript

//Функция в функции в JavaScript

//задача

//Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	};
// 	function cube(num) {
// 		return num * num * num;
// 	};
// 	return square(num1) + cube(num2)
// }
//
// console.log(func(2, 3))

//Функция в функции и область видимости переменных в JavaScript

//Функция, возвращающая функцию в JavaScript

//задача 1

//Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

// function func1() {
// 	return function(){
// 		return 1
// 	}
// }
//
// function func2() {
// 	return function(){
// 		return 2
// 	}
// }
// let res = (func1()() + func2()())
// console.log(res)

//Любой уровень вложенности

//задача 2

//Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'

// function func() {
// 	return function (){
// 		return function (){
// 			return function () {
// 				return function (){
// 					return '!'
// 				}
// 			}
// 		}
// 	}
// }
//
// console.log(func()()()()())

//Параметры

//задача 3

//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func(num1) {
// 	return function (num2) {
// 		return function (num3){
// 			return num1 + num2 + num3
// 		}
// 	}
// }
//
// console.log(func(2)(3)(4))

//задача 4

//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

// function func(num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			return function (num4) {
// 				return function () {
// 					return [num1, num2, num3, num4]
// 				}
// 			}
// 		}
// 	}
// }
//
// console.log(func(2)(3)(4)(5)())

//Лексическое окружение функций в JavaScript

//Лексическое окружение

//Замыкания в JavaScript

//Счетчик на замыканиях

//задача 1

//Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function test(){
// 	let num = 1;
// 	return function (){
// 		return num++
// 	}
// }
//
// let func = test();
// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())

//задача 2

//Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число

// function test() {
// 	let num = 10;
// 	return function () {
// 		num--
// 		return num
// 	}
// }
//
// let res = test();
//
// console.log(res())
// console.log(res())
// console.log(res())
// console.log(res())

//задача 3

//Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// function test() {
// 	let num = 3;
//
// 	return function () {
// 		num--
// 		if (num > 0){
// 			return num
// 		} else {
// 			return 'расчет окончен'
// 		}
//
//
// 	}
// }
//
// let res = test();
//
// console.log(res())
// console.log(res())
// console.log(res())

// let counter = 0;
//
// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// };
//
// let func = test;
//
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();



// function test() {
// 	let counter = 0;
//
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
//
// let func = test()();
//
// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();



// function test() {
// 	let counter = 0;
//
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
//
// let func = test();
//
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

//Вызов функции на месте в JavaScript

//Параметры

//Несколько скобок

//задача 12

//Допишите следующий код так, чтобы его запуск алертом выводил '!':
//
// (function() {
// 	// какой-то код
// })()()();

// (function() {
// 	return function () {
// 		return function () {
// 			console.log('!')
// 		}
// 	}
// })()()();

//задача 13

//Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// (function() {
// 	// какой-то код
// })(1)(2);

// (function(num1) {
// 	return function (num2) {
// 		return console.log(num1 + num2)
// 	}
// })(1)(2);

//задача 14

//Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
 
// (function() {
// 	// какой-то код
// })(1)(2)(3);

// (function(num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			return console.log(num1 + num2 + num3)
// 		}
// 	}
// })(1)(2)(3);

//Подводные камни

//Замыкания и вызов функции на месте в JavaScript

//задача 1

//Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
//задача 2 (Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала)  - на базе задачи 1

// let func = (function () {
// 	let num = 1;
//
// 	return function () {
// 		if (num > 5){
// 			num = 0;
// 		}
// 		console.log(num)
// 		num++
// 	}
// })();
//
// func();
// func();
// func();
// func();
// func();
// func();

//Понятие функции-коллбэка в JavaScript

//ниже базовый пример
//Подобные функции, которые передаются параметрами другим функциям и выполняются где-то внутри них, называются коллбэками (англ. callback). В нашем случае мы можем сказать, что вторым параметром функция each получает коллбэк.

// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num * num;
// });
//
// function each(arr, callback) {
// 	let result = [];
//
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
//
// 	return result;
// }
//
// console.log(result); // должно вывести [1, 4, 9, 16, 25]


//задача 1

//Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.


// function reverse(elem) {
// 	let res = elem.split("").reverse().join('')
// 	return res
// }
//
// function each(arr, callback) {
// 	let result = [];
//
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
//
// 	return result;
// }
//
// let arr = ['one', 'two', 'five']
//
// let newRes = each(arr, reverse)
// console.log(newRes)


//задача 2

//Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

// function upperCase(elem) {
// 	let res = elem[0].toUpperCase() + elem.slice(1);
// 	return res
// } - можно передать именованную функцию

// function each(arr, callback) {
// 	let result = [];
//
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
//
// 	return result;
// }
//
// let arr = ['one', 'two', 'five']
// let result = each(arr, function (elem){
// 	return elem[0].toUpperCase() + elem.slice(1);
// })
//
// console.log(result)

//Количество параметров в коллбэке

//задача 3

//Дан массив с числами. С помощью созданной нами функции each найдите произведение каждого элемента массива на его порядковый номер.

// function each(arr, callback) {
// 	let result = [];
// 	let i = 0
//
// 	for (let elem of arr) {
// 		result.push( callback(elem, i++)); // вызываем функцию-коллбэк
// 	}
//
//
// 	return result;
// }
//
// let result = each([1, 2 , 3, 4, 5], function (elem, index) {
// 	return elem * index
// })
//
// console.log(result)

//Функция filter

//задача 4

//Реализуйте функцию filter, которая будет осуществлять фильтрацию массива. Пусть первым параметром функция принимает массив, а вторым - функцию-коллбэк, и возвращает массив элементов, для которых функция-коллбэк вернет true.
//
// Пример работы такой функции (оставим в массиве только четные числа):
//
// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
//
// console.log(result); // выведет [2, 4]
// Пусть в первый параметр коллбэка попадает элемент массива, а во второй - его номер.


// function filter(arr, callback) {
// 	let res = [];
//
// 	for (let elem of arr){
// 		res.push(callback(elem))
// 	}
// 	return res;
// }
//
// let result = filter([1, 2, 3, 4, 5], function (elem){
// 	if (elem % 2 === 0 ){
// 		return true;
// 	}else {
// 		return false;
// 	}
// })
//
// console.log(result)

//задача 5

//Дан массив с числами. С помощью созданной нами функции filter оставьте в этом массиве только положительные числа.

// function filter(arr, callback) {
// 	let res = [];
//
//
// 	for (let elem of arr){
// 		if(callback(elem)){
// 			res.push(elem)
// 		}
// 	}
// 	return res;
// }
//
// let result = filter([-12, 5, 6, 7, -4, 0, 8], function (elem) {
// 	return elem > 0 ? true : false;
// })
//
// console.log(result)

//задача 6

//Дан массив со строками. С помощью созданной нами функции filter оставьте в этом массиве только строки, длина которых от 1 до 3 символов.

// function filter(arr, callback) {
// 	let res = [];
//
//
// 	for (let elem of arr){
// 		if(callback(elem)){
// 			res.push(elem)
// 		}
// 	}
// 	return res;
// }
//
// let arr = ['hello', 'see', 'apple', 'you']
// let result = filter(arr, function (elem) {
// 	return elem.length >= 1 && elem.length < 4 ? true : false;
// })
//
// console.log(result);

//Функции every и some

//задача 7

//Реализуйте функцию every, которая будет возвращать true, если для всех элементов массива функция-коллбэк вернула true, и будет возвращать false в противном случае.
//
// Пример работы такой функции (проверим, что в массиве только положительные числа):
//
// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
//
// console.log(result); // выведет true


// function every(arr, calllback) {
// 	let res = true;
//
// 	for (let elem of arr){
// 		if (!calllback(elem)){
// 			res = false
// 		}
// 	}
// 	return res
// }
//
// let arr = [5, 1, 2, 3, 4]
// let result = every(arr, function (elem){
// 	return elem > 0 ? true : false
// })
//
// console.log(result)

//задача 8

//Реализуйте функцию some, которая будет возвращать true, если для хотя бы для одного элемента массива функция-коллбэк вернула true, и будет возвращать false в противном случае.Пример работы такой функции (проверим, что в массиве есть хотя бы одно отрицательное число):

// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem < 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
//
// console.log(result); // выведет false

// function some(arr, calllback) {
// 	let res = false;
//
// 	for (let elem of arr){
// 		if (calllback(elem)){
// 			res = true
// 		}
// 	}
// 	return res
// }
//
// let arr = [1, 2, 3, 4, 5]
//
// let result = some(arr, function (elem) {
// 	return elem < 0 ? true : false
// })
//
// console.log(result)

//задача 9

//Реализуйте функцию alternate, которая первым параметром будет принимать массив, а вторым и третьим - коллбэки.Функция должна по очереди применять коллбэки к элементам массива. То есть: для первого элемента - первый коллбэк, для второго элемента - второй коллбэк, для третьего - опять первый коллбэк и так далее пока элементы массива не закончатся.
// Пример работы такой функции ():
//
// let result = alternate(
// 	['a', 'b', 'c', 'd', 'e'],
// 	function(elem) {
// 		return elem + '!';
// 	},
// 	function(elem) {
// 		return elem + '?';
// 	},
// );
//
// console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

// function alternate(arr, callback1, callback2) {
// 	let res = [];
// 	for (let i = 0; i <= arr.length-1; i++){
// 		if (i % 2 == 0){
// 			res.push(callback1(arr[i]))
//
// 		}else {
// 			res.push(callback2(arr[i]))
// 		}
// 	}
// 	return res
// }
//
// let result = alternate(['a', 'b', 'c', 'd', 'e'], function (elem) {
// 	return elem + '!'
// }, function (elem) {
// 	return elem + '?'
// })
//
// console.log(result);

//Стрелочные функции в JavaScript

//задача 1

//Дана следующая функция с коллбэком:
//
// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

// let result = every([1, 2, 3, 4, 5], elem => elem > 0);


//задача 2

//Дана следующая функция с коллбэком:
//
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

// let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

//задача 3

//Дана следующая функция с коллбэком:

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//
// let result = each(arr, function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
//Упростите коллбэк через стрелочную функцию.

// let result = each(arr, (elem, index) => {
// 	return elem * index > 10;
// });

//Работа с рекурсией в JavaScript

//Сумма элементов массива

//задача 1

//Сделайте функцию, которая с помощью рекурсии выведет первые 10 чисел Фибоначчи. Числа Фибоначчи строятся следующим образом: каждое новое число равно сумме двух предыдущих. Первые два числа Фибоначчи - это 1 и 2. Следующее число будет равно 1 + 2 = 3, следующее число будет равно 2 + 3 = 5 и так далее.
//
// Вот основа кода, который вы должны написать:
//
// function func(prevPrevNum, prevNum){
// 	// тут код с рекурсией, который вы должны написать
// }
//
// func(1, 2); // вызываем функцию с первыми двумя числами

// let counter = 1;
//
// function func(prevPrevNum, prevNum){
// 	let res = 0;
//
//
// 	res = prevPrevNum + prevNum;
// 	console.log(res)
// 	prevPrevNum = prevNum;
// 	prevNum = res;
// 	counter++;
//
// 	if (counter <= 10){
// 		func(prevPrevNum, prevNum);
//
// 	}
//
// }
//
// func(1, 2);

//задача 2

//Модифицируйте предыдущую задачу так, чтобы функция не выводила числа, а возвращала массив первых 10 чисел Фибоначчи:
// console.log(func(1, 2)); // выведет массив чисел

// let counter = 1;
// let result = [];
//
// function func(prevPrevNum, prevNum){
// 	let res = 0;
//
// 	res = (prevPrevNum + prevNum);
// 	result.push(res);
// 	prevPrevNum = prevNum;
// 	prevNum = res;
// 	counter++;
//
// 	if (counter <= 10){
// 		func(prevPrevNum, prevNum);
// 	}
// }
//
// func(1, 2);
// console.log(result)

//Редуцирование числа

//задача 3

// function getDigitsSum(num) {
// 	let res = getString(num),
// 		result = 0;
//
// 	for (let elem of res){
// 		result += Number(elem)
// 	}
// 	console.log(result)
// 	return result
// }
//
// function getString(arr) {
// 	return String(arr).split('')
// }
//
// function reduceNum(num) {
// 	let res = getDigitsSum(num)
//
// 	if(res <= 9){
// 		return res
// 	}else{
// 		reduceNum(res)
// 	}
//
// }
//
// console.log(reduceNum(1734))

//Рекурсия и многомерные структуры в JavaScript

//задача 1

//Дан многомерный объект произвольного уровня вложенности, например, такой:
//
//let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.


// function funcObj(ob) {
// 	for (let key in ob){
// 		if (typeof ob[key] == 'object'){
// 			funcObj(ob[key])
// 		}else {
// 			console.log(ob[key])
// 		}
// 	}
// }
//
// funcObj(obj)

//задача 2

//Дан многомерный объект произвольного уровня вложенности, например, такой:
//
//let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.


// function sumElem(obj) {
// 	let res = 0;
//
// 	for (let key in obj){
// 		if (typeof obj[key] == 'object'){
// 			res += sumElem(obj[key])
// 		}else {
// 			res += obj[key]
// 		}
// 	}
// 	return res
// }
//
// console.log(sumElem(obj))


//задача 3

//Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
//
//let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:'abcdefgjk'

// function newArr(arr) {
// 	let res = '';
//
// 	for (let elem of arr){
// 		if (typeof elem == 'object'){
// 			res += newArr(elem)
// 		}else {
// 			res += elem
// 		}
// 	}
// 	return res;
// }
//
// console.log(newArr(arr))

//Манипуляции с элементами

//задача 4

//Дан многомерный массив произвольного уровня вложенности, например, такой:

//let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.

// function square(arr) {
// 	for (let i = 0; i < arr.length; i++){
// 		if(typeof arr[i] == 'object'){
// 			arr[i] = square(arr[i])
// 		}else {
// 			arr[i] = arr[i] * arr[i]
// 		}
// 	}
// 	return arr
// }
//
// console.log(square(arr))

//задача 5

//Дан многомерный массив произвольного уровня вложенности, например, такой:
//
//let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
//
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

// let res = []
// function newArr(arr) {
//
// 	for (let elem of arr){
// 		if (typeof elem == 'object'){
// 			newArr(elem)
// 		}else {
// 			res.push(elem)
// 		}
// 	}
//
// }
//
// console.log(newArr(arr))
// console.log(res)

//Задачи повышенного уровня

//задача 6

//Дан многомерный массив произвольного уровня вложенности, например, такой:
//
//let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
//Выведите на экран все элементы-массивы, содержащие внутри себя только примитивы.

// let res = []
//
// function primitiveArr(arr) {
// 	for (let elem of arr){
// 		if (typeof elem == 'object'){
// 			let result = elem.every(function (el) {
// 				return typeof el != 'object';
// 			})
// 			if (result){
// 				res.push(elem)
// 			}else {
// 				primitiveArr(elem)
// 			}
// 		}
// 	}
//
// }
//
// primitiveArr(arr)
// console.log(res)

//задача 7

//Дан многомерный массив произвольного уровня вложенности. Подсчитайте с помощью рекурсии самый максимальный уровень вложенности этого массива.

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]],
// 	counter = 0;
//
// function primitiveArr(arr) {
// 	for (let elem of arr){
// 		if (typeof elem == 'object'){
// 			let result = elem.every(function (el) {
// 				return typeof el != 'object';
// 			})
// 			if (result){
// 				counter++
// 			}else {
// 				primitiveArr(elem)
// 			}
// 		}
// 	}
//
// }
//
// primitiveArr(arr)
// console.log(counter)

//Метод map для перебора массива в JavaScript

//задача 1

//Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

// let arr = [1, 2, 3, 4, 5];
// let result = (arr.map(function (elem) {
// 	return elem ** 2
// }));
//
// console.log(result)

//задача 2

//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'

// let arr = ['asd', 'qwe', 'ert'];
//
// let result = arr.map(function (elem) {
// 	return elem + '!';
// });
//
// console.log(result)

//задача 3

//Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// let arr = ['asd', 'qwe', 'ert'];
// let result = arr.map(function (elem){
// 	return elem.split('').reverse().join('')
// })
//
// console.log(result)

//задача 4

//Дан следующий массив:
//
// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
//
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];



// let result = arr.map(function (elem){
// 	let res = [];
// 	let strSplit = elem.split('');
// 	for (let el of strSplit){
// 		 res.push(Number(el))
// 	}
// 	return res
//
//
//
// })
//
// console.log(result)


//задача 5

//Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

// let arr = [1, 2, 3, 4, 5]
//
// let result = arr.map((elem, index) => {return elem * index})
//
// console.log(result)


//Перебор многомерных массивов

//Метод forEach для перебора массива в JavaScript

//задача

//Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

// let arr = [1, 2, 3, 4, 5],
// 	sum = 0;
//
//
// arr.forEach(function (elem) {
// 	sum += elem **2
// })
//
// console.log(sum)

//Метод filter для фильтрации массива в JavaScript

//задача 1

//Дан массив с числами. Оставьте в нем только положительные числа.

// let arr = [1, 2, 3, -5, 4, 5, -10];
//
// console.log(arr.filter(elem => elem > 0));


//задача 2

//Дан массив с числами. Оставьте в нем только отрицательные числа.

// let arr = [1, 2, 3, -5, 4, 5, -10];
// console.log(arr.filter(elem => elem < 0))


//задача 3

//Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

// let arr = [1, 11, 2, 12, 3, 13, 4, 14, 5, 15];
// console.log(arr.filter(elem => elem > 0 && elem < 10))

//задача 4

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ['asdfgh', 'qwerty', 'ase', 'asrf', 'apple'];
// console.log(arr.filter(elem => elem.length > 5))

//задача 5

//Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.filter((elem, index) => {
// 	return elem * index < 30
// }))

//задача 6

//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// console.log(arr.filter(elem => typeof elem != 'object'))


//задача 6

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// let arr = [1, 2, 3, -5, 4, 5, -10, -11];
//
// console.log(arr.filter(elem => elem < 0).length)


//Метод every для проверки массива в JavaScript

//задача 1

//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let arr = [1, 2, 3, -5, 4, 5, -10, -11];
// let arr2 = [1, 2, 3, 4, 5];
//
// console.log(arr2.every(elem => elem > 0));

//задача 2

//Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// let arr = [1, 2, 3, 4, 5];
//
// console.log(arr.every((elem, index) => elem * index < 30))


//Метод some для проверки массива в JavaScript

//задача 1

//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let arr = [2, 4, 6, 8];
//
// console.log(arr.some(elem => elem > 0));

//задача 2

//Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// let arr = [2, 4, 6, 8];
//
// console.log(arr.some((elem, index) => elem * index > 30));

//Оператор spread в JavaScript

//задача 1

//Дан массив:
//
// let arr = [1, 2, 3, 4, 5];
// Дана также функция:
//
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// Найдите с помощью приведенной функции сумму элементов массива.

// console.log(func(...arr))

//задача 3

//Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [1, 2, 3, 4, 5];
//
// console.log(Math.min(...arr))

//Оператор spread и слияние массивов

//Оператор spread для строк и чисел в JavaScript

//Оператор spread и числа

//Оператор rest в JavaScript

//Применение операторов rest и spread в JavaScript
// Функция, находящая сумму чисел

//задача 1

//Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

// function average(...nums) {
// 	let res = 0;
// 	for (let elem of nums){
// 		res += elem;
// 	}
// 	return res / nums.length
// }
//
// console.log(average(1, 2, 3, 4, 5))

//Функция, сливающая массивы в двухмерный

//задача 2

//Для сравнения реализуйте нашу функцию без использования оператора rest.

// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);
//
//
// function unite(arr1, arr2, arr3) {
// 	let res = []
// 	res.push(arr1);
// 	res.push(arr2);
// 	res.push(arr3);
// 	return res;
// }

//Функция, сливающая массивы в один

//задача 3

//Для сравнения реализуйте нашу функцию без использования оператора rest.

// let arrs = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9] ];
//
//
// let res = [];
// function merge(arr) {
//
// 	for (let elem of arr){
// 		for (let el of elem){
// 			res.push(el)
// 		}
// 	}
// 	return res;
// }
//
// console.log(merge(arrs))

//Пересечение произвольного количества массивов на JavaScript

//задача 3

//Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

// function getInt(...arrs) {
// 	let result = [];
//
// 	let arr0 = arrs.shift();
//
// 	for (let elem of arr0) {
// 		if (inArrays(elem, arrs)) {
// 			result.push(elem);
// 		}
// 	}
// 	return result;
// }
//
// function inArrays(elem, arrs) {
// 	for (let arr of arrs){
// 		if(!inArray(elem, arr)){
// 			return false;
// 		}
// 	}
// 	return true;
// }
//
// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }
//
// let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
// console.log(result);

//Разность произвольного количества массивов на JavaScript

//задача

//Реализуйте поставленную задачу.

// function getDiff(arr1, arr2){
// 	let result = [];
//
// 	let diff1 = getFirstDiff(arr1, arr2);
// 	let diff2 = getFirstDiff(arr2, arr1);
//
// 	return [].concat( diff1, diff2 );
// }
//
// function getFirstDiff(arr1, arr2){
// 	let result = [];
//
// 	for (let elem of arr1) {
// 		if (!inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
//
// 	return result;
// }
//
// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }

//Разность произвольного количества массивов на JavaScript


// function getDiff(...arrs) {
// 	let result = [];
// 	let arrCommon = [];
//
// 	for (let i = 0; i < arrs.length; i++) {
// 		let arr0 = arrs.shift();
// 		arrCommon = [].concat(...arrs);
// 		result = result.concat(getFirstDiff(arr0, arrCommon));
// 		arrs.push(arr0);
// 	}
// 	return result;
// }
//
// function getFirstDiff(arr1, arr2) {
// 	let result = [];
//
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (!inArray(arr2, arr1[i])) {
// 			result.push(arr1[i]);
// 		}
// 	}
// 	return result;
// }
//
// function inArray(arr, elem) {
// 	return arr.indexOf(elem) !== -1;
// }
// console.log(getDiff([1, 2, 3], [2, 3, 4, 5],[1, 8, 9, 4] ));

//Деструктуризация массивов в JavaScript

//задача 1

//В следующем коде части массива записываются в соответствующие переменные:
//
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

//let [name, surname, department, position, salary ] = arr

//Массив из функции

//задача 2

//В следующем коде части массива записываются в соответствующие переменные:
//
// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }
//
// let arr = func();
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

//let [name, surname, department, position, salary ] = func()

//задача 3

//В следующем коде части массива записываются в соответствующие переменные:
//
//let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
//
// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let [,, department, position] = arr
//
// console.log(department);
// console.log(position);


//задача 4

//В следующем коде части массива записываются в соответствующие переменные:
//
//let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
//
// let name    = arr[0];
// let surname = arr[1];
//
// let info = arr.slice(2); // все элементы со второго до конца массива
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let [name, surname, ...info] = arr;
//
// console.log(name);
// console.log(surname);
// console.log(info);

//Значение по умолчанию

//задача 5

//В следующем коде части массива записываются в соответствующие переменные:
//
//let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
//
// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let [name, surname, department, position = 'junior'] = arr
//
// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);

//Функции в качестве значения по умолчанию

//задача 6

// function func() {
// 	return [(new Date).getFullYear(), (new Date).getMonth()+1, (new Date).getDay()];
// }
//
// let arr = [];
// let [year = func()[0], month = func()[1], day = func()[2]] = arr;
// console.log(year);
// console.log(month);
// console.log(day);

//Объявление переменных

//Деструктуризация объектов в JavaScript

//задача 1

//В следующем коде части объекта записываются в соответствующие переменные:
//
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
//
// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let {color, width, height } = options
//
// console.log(color)
// console.log(width)
// console.log(height)

//Другие имена переменных

//задача 2

//В следующем коде части объекта записываются в соответствующие переменные:
//
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
//
// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let {color: c, width: w, height: h } = options
//
// console.log(c)
// console.log(w)
// console.log(h)

//Значения по умолчанию

//задача 3

//В следующем коде части объекта записываются в соответствующие переменные:
//
// let options = {
// 	width:  400,
// 	height: 500,
// };
//
// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
//
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let { color = 'black', width, height} = options;
//
// console.log(color);
// console.log(width);
// console.log(height);


//Другие переменные и значения по умолчанию

//задача 4

//В следующем коде части объекта записываются в соответствующие переменные:
//
// let options = {
// 	width:  400,
// 	height: 500,
// };
//
// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }
//
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let {color:c = 'black', width, height} = options
//
// console.log(c);
// console.log(width);
// console.log(height);


//Функции в качестве значения по умолчанию

// function func() {
// 	return (new Date).getFullYear();
// }
//
// let obj = {
// 	month: 12,
// 	day:   31,
// };
//
// let {year = func(), month, day} = obj;
//
// console.log(year);
// console.log(month);
// console.log(day);

//Объект из функции

//Объявление переменных

//Деструктуризация параметров функций в JavaScript

//задача 1

//Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }
//
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// function func1([name, surname, department, position, salary]) {
// 	 console.log(name, surname, department, position, salary);
// }
// func1( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

//задача 2

//Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee.slice(2);
// }
//
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// function func([name, surname, ...info]) {
// 	console.log(name, surname)
// }
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

//задача 3

//Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
//
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }
//
// func( ['Иван', 'Иванов', 'отдел разработки'] );

// function func([name, surname, department, position = 'джуниор']) {
// 	console.log(name, surname, department, position = 'джуниор')
// }
//
// func(['Иван', 'Иванов', 'отдел разработки']);


//задача 4

//Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
//
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }
//
// func( 'отдел разработки', ['Иван', 'Иванов'], '2018-12-31' );

// function destrDate(str) {
// 	let res = str.split('-');
// 	let year = res[0],
// 		month = res[1],
// 		day = res[2]
// 	return [year, month, day]
// }
//
//
// function func(department, [name, surname], [year, month, day]) {
// 	console.log(department, name, surname, year, month, day)
// }
//
// func( 'отдел разработки', ['Иван', 'Иванов'], destrDate('2018-12-31') );

//Объекты в параметрах

//задача 5

//Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }
//
// func( {color: 'red', width: 400, height: 500} );

// function func({color, width, height}) {
// 	console.log(color, width, height)
// }
//
// func( {color: 'red', width: 400, height: 500} );

//задача 6

//Переделайте следующий код через деструктуризацию согласно изученной теории:
//
// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
//
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }
//
// func( {color: 'red', width: 400, height: 500} );

// function func({color = 'black', width, height}) {
// 	console.log(color, width, height)
// }
//
// func( { width: 400, height: 500} );

//Работа с объектом Date в JavaScript

// let date = new Date();
// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день
//
// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды

//задача 1

//Выведите на экран текущий день.

//let date = new Date();
//console.log(date.getDate())

//задача 2

//Выведите на экран текущий месяц.

// let date = new Date();
// console.log(date.getMonth()+1)

//задача 3

//Выведите на экран текущий год.

// let date = new Date();
// console.log(date.getFullYear())

//Форматирование даты в JavaScript

//задача 1

//Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.

// function getZero(num) {
// 	if (num >= 0 && num <= 9){
// 		return '0' + num
// 	}else{
// 		return num
// 	}
// }
//
// let date = new Date();
//
// let hours = getZero(date.getHours()),
// 	minutes = getZero(date.getMinutes()),
// 	seconds = getZero(date.getSeconds()),
// 	year = getZero(date.getFullYear()),
// 	month = getZero(date.getMonth()),
// 	day = getZero(date.getDate());
//
// console.log(`${hours}:${minutes}:${seconds}  ${day}.${month}.${year}`)

//задача 2

//Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

// let str = '2025-12-31';
//
// let res = str.split('-').reverse().join('-')
// console.log(res)

//Получения дня недели на JavaScript

//задача 1

//Выведите на экран номер текущего дня недели.

// let date = new Date();
// console.log(date.getDay())

//задача 2

//Определите, является ли текущий день недели выходным или рабочим днем.

// let date = new Date();
// let res = date.getDay()
// console.log(res);
// console.log(res > 0 && res < 5 ? "Рабочий": "Выходной");


//задача 3

//Определите сколько дней осталось до ближайшего воскресенья.

// let date = new Date();
// let res = date.getDay()
// let output = 7 - res
//
// console.log(`До выходного осталось ${output} дн.`);


//Вывод частей даты словом в JavaScript

//задача

//Пусть дан следующий массив:
//
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// // Выведите с помощью этого массива название текущего месяца.
//
// let date = new Date();
// let mon = date.getMonth();
// console.log(months[mon])

//Установка времени в объекте Date в JavaScript

//задача

//Узнайте, какой день недели был в ваш день рождения.

// let date = new Date(1978, 5, 18);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day])

//Работа с getTime

//задача 1

//Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

// let date = new Date(2025, 0, 1);
// console.log(date.getTime())

//Разница между датами

//задача 2

//Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

// let now = new Date(2000, 0, 10),
// 	date = new Date(1988, 2, 1),
// 	diff = now - date;
// console.log(diff / (1000*60*60*24))

//задача 3

//Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

// let now = new Date(),
// 	date = new Date(1998, 7, 18),
// 	diff = now - date;
// console.log(Math.round(diff /(1000*60*60*24)))

//Разница между объектами с датой в JavaScript

//задача 1

//Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// let now = new Date(2010, 1, 15),
// 	date = new Date(2000, 8, 1),
// 	diff = now - date;
// console.log(diff)

//задача 2

//Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

// let now = new Date(2010, 1, 15),
// 	date = new Date(2000, 8, 1),
// 	diff = now - date;
// console.log(Math.round(diff / (1000*60*60*24)))

//задача 3

//Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.

// let now = new Date(2010, 1, 15),
// 	date = new Date(2000, 8, 1),
// 	diff = now - date;
// console.log(Math.round(diff / (1000*60*60*24*30)))

//задача 4

//Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.

// let now = new Date(2010, 1, 15),
// 	date = new Date(2000, 8, 1),
// 	diff = now - date;
// console.log(Math.round(diff / (1000*60*60*24*365)))

//Автоматическая корректировка дат в JavaScript

//Нулевой день

//Нахождение последнего дня месяца в JavaScript


// задача 2

// function getLastDay(year, month) {
// 	let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//
// 	if (month === 1){
// 		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
// 			return lastDays[month]+1
// 		}
// 	}else {
// 		return lastDays[month]
// 	}
// }
//
// console.log( getLastDay(2020, 1))

//задача 3

//Определите, какой день недели будет в последнем дне пятого месяца 2025 года.


// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let date = new Date(2025, 4, 31);
// let res = date.getDay()

//Определение високосного года

// function isLeap(year) {
// 	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
// 			console.log('високосный')
// 		}else {
// 		console.log('обычный')
// 	}
// }

//Проверка корректности даты в JavaScript

// let year  = 2025;
// let month = 0;
// let day   = 32;
//
// let date = new Date(year, month, day);
//
// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
//
// }

//задача

//Задача
// Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:
//
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false

// function checkDate(year, month, day) {
// 	let date = new Date(year, month, day);
// 	if(date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 		console.log(true)
// 	}else {
// 		console.log(false)
// 	}
// }
//
// checkDate(2025, 0, 31)
// checkDate(2025, 0, 32)

//Получение моментов времени в JavaScript

//задача 1

//Определите, какой день недели будет 31 декабря текущего года.

// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31)
//
// console.log(date.getDay())

//задача 2

//Определите, какой день недели будет 1 числа текущего месяца.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1)
//
// console.log(date.getDay())

//задача 3

//Определите, какой день недели будет 31 декабря следующего года.

// let now = new Date();
// let date = new Date(now.getFullYear()+1, 11, 31)
//
// console.log(date.getDay())

//задача 4

//Определите, какой день недели будет через год в такую же дату, как сегодня.

// let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
//
// let now = new Date();
// let date = new Date(now.getFullYear()+1, now.getMonth(), now.getDay())
//
// console.log(days[date.getDay()])

//задача 5

//Определите, какой день недели был год назад в такую же дату, как сегодня.

// let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
//
// let now = new Date();
// let date = new Date(now.getFullYear()-1, now.getMonth(), now.getDay())
//
//
// console.log(days[date.getDay()])

//задача 6

//Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.

//задача 7

//Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.


// let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
//
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth()-1, now.getDate());
//
// console.log(days[date.getDay()])

//Разность моментов

//задача 8

//Определите, сколько дней между 1 января и 10 сентября текущего года.

// let date1 = new Date(),
// 	date2 = new Date(2020, 0,1 ),
// 	res = (date1 - date2) / (1000*60*60*24)
//
// console.log(Math.round(res));

//задача 9

//Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

// let one_date = new Date(2020, 8, 20),
// 	two_date = new Date(2020, 9, 10),
// 	res = Math.round((two_date - one_date) / (1000*60*60*24)) ;
//
// console.log(res)

//Момент времени дня

//задача 10

// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
// let res = Math.round((now - date1) / (1000*60*60));
//
// console.log(res);

//Начало дня

//задача 11

//Определите, сколько часов прошло между началом дня и текущим моментом времени.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
// 	res = Math.floor((now - date) / (1000*60*60));
//
// console.log(res)


//Конец дня

//задача 12

//Определите, сколько часов осталось до конца дня.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24)
//
// let res = Math.floor((date - now) / (1000*60*60));
//
// console.log(res)

// Циклическая проверка

//задача 13

//Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.

// let now = new Date();
// let res = 0;
//
// for (let year = 2000; year <= now.getFullYear(); year++){
// 	let date = new Date(year, 0, 1);
// 	if(date.getDay() == 0 || date.getDay() == 6){
// 		res += 1;
// 	}
// }
//
// console.log(res)

//Практика на получение моментов времени в JavaScript

//задача 1

//Определите, сколько секунд прошло с начала дня до настоящего момента времени.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() )
//
// let res = ( now.getTime() - date.getTime()) / 1000
// console.log(res)

//задача 2

//Определите, сколько секунд секунд осталось до конца дня.

// let now = new Date;
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24)
//
// let res = (date.getTime() - now.getTime()) / 1000;
// console.log(res)

//задача 3

//Определите, сколько дней осталось до нового года.

// let now = new Date();
// let date = new Date(now.getFullYear()+1, 0);
// console.log((date - now)/(1000*60*60*24))

//задача 4

//Определите, сколько пятниц 13-е в текущем году.

// let year = new Date().getFullYear();
// let counter = 0;
//
// for (let month = 0; month <= 11; month++){
// 	let date = new Date(year, month, 13)
// 	if(date.getDay() == 6){
// 		counter += 1;
// 	}
// }
// console.log(counter)

//задача 5

//Определите, какой год был 3 месяца назад.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth()-3);
// console.log(date.getFullYear())


//задача 6

//Определите, какой день недели будет в последнем дне текущего месяца.

// let now = new Date();
// let days = ['вскр', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ]
// let date = new Date(now.getFullYear(), now.getMonth()+1, 0);
// console.log(days[date.getDay()])

//задача 7

//Определите, сколько дней осталось до конца месяца года.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth()+1, 1);
// let res = Math.round((date.getTime() - now.getTime()) / (1000*60*60*24));
// console.log(res)

//задача 8

//Напишите код, который будет определять, високосный ли текущий год.

// function leapYear(year) {
// 	if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
// 		console.log('високосный')
// 	}else {
// 		console.log('обычный')
// 	}
// }
//
// leapYear(2024)

//задача 9

//Напишите код, который будет находить предыдущий високосный год.

// function prevLeapYear(year) {
// 	let leap = true;
// 	let counter = year;
// 	while (leap){
// 		if (counter % 4 == 0 && counter % 100 !== 0 || counter % 400 == 0){
// 			leap = false;
// 			console.log(counter)
// 			return counter
// 		}else {
// 			counter -= 1;
//
// 		}
// 	}
// }
//
// prevLeapYear(2019)

//задача 10

//Напишите код, который будет находить следующий високосный год.

// function prevLeapYear(year) {
// 	let leap = true;
// 	let counter = year;
// 	while (leap){
// 		if (counter % 4 == 0 && counter % 100 !== 0 || counter % 400 == 0){
// 			leap = false;
// 			console.log(counter)
// 			return counter
// 		}else {
// 			counter += 1;
//
// 		}
// 	}
// }
//
// prevLeapYear(2021)

//Строковое сравнение дат на JavaScript

//задача 1

//Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

// let date1 = '2020-11-31';
// let date2 = '2020-12-01';
//
// if (date1 > date2){
// 	console.log('date1 больше date2')
// }else {
// 	console.log('date1 меньше date2')
// }

//задача 2

//Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

// let date1 = '09-21';
// let date2 = '09-23';
//
//
// if (date1 > date2){
// 	console.log('date1 больше date2')
// }else {
// 	console.log('date1 меньше date2')
// }

//задача 3

//Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

// function dataZodiac(date) {
// 	if (date >= '12-22' && date < '01-19'){
// 		console.log('Козерог')
// 	}
// 	if (date >= '01-20' && date < '02-18'){
// 		console.log('Водолей')
// 	}
// 	if (date >= '02-19' && date < '03-20'){
// 		console.log('Рыбы')
// 	}
// 	if (date >= '03-21' && date < '04-20'){
// 		console.log('Овен')
// 	}
//
// 	if (date >= '04-21' && date < '05-20'){
// 		console.log('Телец')
// 	}
//
// 	if (date >= '05-21' && date < '06-20'){
// 		console.log('Близнецы')
// 	}
// 	if (date >= '06-21' && date < '07-22'){
// 		console.log('Рак')
// 	}
// 	if (date >= '07-23' && date < '08-22'){
// 		console.log('Лев')
// 	}
// 	if (date >= '08-23' && date < '09-22'){
// 		console.log('Дева')
// 	}
// 	if (date >= '09-24' && date < '10-23'){
// 		console.log('Весы')
// 	}
// 	if (date >= '10-24' && date < '11-22'){
// 		console.log('Скорпион')
// 	}
// 	if (date >= '11-22' && date < '12-21'){
// 		console.log('Стрелец')
// 	}
//
// }
//
// dataZodiac('06-18')

//Сравнение объектов с датами в JavaScript

//задача 1

//Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12)
// if (now > date){
// 	console.log('Полдень уже был')
// }else {
// 	console.log('Полдень еще не наступил')
// }

//задача 2

//Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 15)
// let res = Math.round((date - now)/(1000 *60 * 60 *24))
//
//
// if (res <= 0) {
// 	console.log('больше половины месяца')
// }else {
// 	console.log('половина месяца не прошла')
// }

//Количество времени до ближайшей даты на JavaScript

//задача 1

// let now  = new Date();
//
// let date = new Date(now.getFullYear(), 2, 8); // текущий год
//
// let diff = Math.floor((date - now)/(1000 *60 * 60 *24))
// console.log(diff)
//
// if (diff > 0) {
// 	console.log('Осталось  ' + diff + ' дней')
// } else if (diff == 0) {
// 	console.log('Праздник сегодня')
// } else {
// 	let date = new Date(now.getFullYear()+1, 2, 8);
// 	let diff = Math.floor((date - now)/(1000 *60 * 60 *24))
// 	console.log(`Будет в новом году, через: ${diff} дня`)
// }


//задача 2

//Пусть ваш День Рождения - первое марта. Определите, сколько дней осталось до вашего ближайшего дня рождения.

// let now  = new Date();
// let date = new Date(now.getFullYear(), 2, 1);
//
// let diff = Math.floor((date - now)/(1000 *60 * 60 *24))
// console.log(diff)
//
// if (diff > 0) {
// 	console.log('Осталось  ' + diff + ' дней')
// } else if (diff == 0) {
// 	console.log('Праздник сегодня')
// } else {
// 	let date = new Date(now.getFullYear()+1, 2, 1);
// 	let diff = Math.floor((date - now)/(1000 *60 * 60 *24))
// 	console.log(`Будет в новом году, через: ${diff} дня`)
// }

//задача 3

//Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day. Определите, сколько дней осталось до заданного этой датой праздника. Учтите при решении, что есть счастливчики, которые родились 29 февраля. Не забудьте их учесть в вашем решении.



// function happyDay(month, day) {
// 	let leap = leapDay(month, day)
//
// 	let now = new Date(),
// 		date = new Date(now.getFullYear(), month-1, day)
//
// 	let diff = Math.round((date - now)/(1000*60*60*24))
//
// 	if (!leap){
// 		return whenDay(diff)
// 	}else {
// 		return whenDay(diff + 1)
// 	}
//
// }
//
// function whenDay(num) {
// 	if (num > 0){
// 		console.log(`День рождения будет через ${num}`)
// 	} else if (num == 0){
// 		console.log(`День рождения сегодня. Поздравляю `)
// 	}else {
// 		console.log(`День рождения уже прошло `)
// 	}
// }
//
// function leapDay(month, day) {
// 	return month == 2 && day == 29 ? true : false
// }
//
// happyDay(3, 22)




























