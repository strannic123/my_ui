//Задача 1

//Дружественные числа
//Решим задачу на определение дружественных чисел. Числа являются дружественными, если сумма собственных делителей (с
// числом 1, но без самого числа) первого числа равна второму числу и, наоборот, сумма делителей второго числа равна первому.
//
// Примером таких чисел может служить пара 220 и 284. Собственными делителями числа 220 являются следующие
// числа: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110. Сумма этих чисел 284. Собственными делителями числа 284, являются
// числа 1, 2, 4, 71, 142 и сумма этих чисел равна 220.
//
// Если у нас есть два числа и сумма одного числа равна делителям другого и наоборот, то такая пара чисел называется дружественными.



//Реализуем  функцию getOwnDivisors - массив делителей
function getOwnDivisors(num) {
    let res = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            res.push(i)
        }
    }
    return res
}

//Реализуем функцию getSum. Которая вернет сумму делителей

function getSum(arr) {
    let res = 0;
    for (let elem of arr) {
        res += elem
    }
    return res;
}

//Реализуем функцию сравнения чисел
function isFreindly(num1, num2) {
    let sum1 = (getSum(getOwnDivisors(num1))),
        sum2 = (getSum(getOwnDivisors(num2)));

    return sum1 === num2 && sum2 === num1
}

//Реализуем поиск чисел дружественных делителей в нужном диапазоне
function getFreindly(min, max) {
    let res = [];
    for (let i = min; i <= max; i++) {
        for (let j = i + 1; j <= max; j++) {
            if (isFreindly(i, j)) {
                console.log(i, j)
                res.push([i, j])
            }
        }
    }
    return res;
}


console.log(getFreindly(1, 1000))
console.log(isFreindly(220, 284))


//задача 2

//Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

function getOwnDivisor(num) {
	let res = [];
	for (let i = 1; i < num; i++){
		if (num % i == 0){
			res.push(i)
		}
	}
	return res;
}

function getSum(arr) {
	let res = 0;
	for (let elem of arr){
		res += elem;
	}
	return res
}

function getPerfect(min, max) {
	let resPerfectNumber = []
	for (let i = min; i < max; i++){
		let findNum = getSum(getOwnDivisor(i))
		if (findNum === i){
			resPerfectNumber.push(i)
		}
	}
	return resPerfectNumber;
}

console.log(getPerfect(1, 100000))

//задача 3

//Сделайте функцию  которая будет принимать параметром целое число и находить все делители этого числа, являющиеся простыми числами.

function getDivisor(num) {
	let res = [];
	for (let i = 1; i <= num; i++){
		if (num % i == 0){
			res.push(i)
		}
	}
	return res
}


function getSimpleDivisors(num) {
	let result = [];
	let res = getDivisor(num);
	for (let elem of res){
		if (elem % 2 !== 0 ){
			result.push(elem)
		}
	}
	return result;
}

console.log(getSimpleDivisors(1000))

//задача 4

//Давайте напишем функцию  которая будет находить пересечение массивов и возвращать пересечение этих массивов.
//
// Пусть пересечение возвращается в виде массива, состоящего из общих элементов.

function getInt(arr1, arr2) {
	let res = [];
	for (let el of arr1){
		if(inArray(el, arr2)){
			res.push(el)
		}
	}
	return res
}

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

console.log(getInt(arr1, arr2))

//задача 5

//Разность массивов на JavaScript

let a1 = [1, 2, 3];
let a2 = [2, 3, 4, 5];

function getElem(arr1, arr2) {
	let res = [];
	for (let elem of arr1){
		if (!inArray(elem, arr2)){
			res.push(elem)
		}
	}
	return res;
}

function getDiff(arr1, arr2) {
	let result = [];

	let diff1 = (getElem(arr1, arr2))
	let diff2 = (getElem(arr2, arr1))

	return result.concat(diff1, diff2)

}

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1
}

console.log(getDiff(a1, a2))

//задача 6

//Реализуйте функцию  которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.
// При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.

//1 функция принимает два числа
//2 вычисляем делители
//3  сравниваем массивы делителей
//4  находим наибольший делитель

function getDivisor(num) {
    let res = [];

    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            res.push(i)
        }
    }
    return res
}

function getElemArr(arr1, arr2) {
    let res = [];

    for (let elem of arr1){
        if (inArray(elem, arr2)){
            res.push(elem)
        }
    }
    return res
}

function maxDivisor(arr) {
    return Math.max(...arr)
}


function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1
}

function getGreatTestCommonDivisor(num1, num2) {
    let resNum1 = getDivisor(num1),
        resNum2 = getDivisor(num2),
        result = maxDivisor(getElemArr(resNum1, resNum2));

    return result
}

console.log(getGreatTestCommonDivisor(12, 18))

//задача 7

//Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми.
// Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.
// Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.


function getDivisor(num) {
    let res = [];

    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            res.push(i)
        }
    }
    return res
}


function getElemArr(arr1, arr2) {
    let res = [];

    for (let elem of arr1){
        if (inArray(elem, arr2)){
            res.push(elem)
        }
    }
    return res
}


function mutuallySimple(arr) {
    return arr.length == 1 && arr[0] == 1
}


function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1
}

function getGreatestCommonDivisor(num1, num2) {
    let resNum1 = getDivisor(num1),
        resNum2 = getDivisor(num2),
        result = mutuallySimple(getElemArr(resNum1, resNum2));

    return result
}

console.log(getGreatestCommonDivisor(38, 45))

//задача 8

//Реализуем функцию, возвращающую случайный элемент из массива

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [1, 2, 3, 4, 5];

function random(arr) {
	return arr[getRandomInt(0, arr.length -1)]
}

console.log(random(arr))

//задача 9

//Используя созданную функцию, найдите сумму трех случайных элементов из массива.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [1, 2, 3, 4, 5];

function random(arr) {
	return arr[getRandomInt(0, arr.length -1)]
}

function sumElem() {
	let elem1 = random(arr),
		elem2 = random(arr),
		elem3 = random(arr),
		res = 0;
	res = elem1 + elem2 + elem3
	return res

}

console.log(sumElem())


//задача 10

//Реализуем функцию shuffle, параметром принимающую массив и перемешивающую его элементы в случайном порядке.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
	let result = [];

	while (arr.length > 0){
		let random = getRandomInt(0, arr.length -1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem)
	}
	return result;
}

let arr = [1, 2, 3, 4, 5]
console.log(shuffle(arr))

//задача 11

//Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив,
// заполненный целыми числами из этого диапазона.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arr(num1, num2) {
	let arrForRandom = [];
	for (let i = num1; i <= num2; i++){
		arrForRandom.push(i)
	}
	return arrForRandom
}

function shuffle(arr) {
	let res = [];

	while (arr.length > 0){
		let random = getRandomInt(0, arr.length -1);
		let elem = arr.splice(random, 1)[0]
		res.push(elem)
	}
	return res;
}

function range(numMin, numMax) {
	return shuffle(arr(numMin, numMax));
}

console.log(range(11, 18))


//задача 12

//Давайте теперь реализуем функцию randoms, возвращающую заданное количество случайных элементов из массива.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
	let res = [];

	while (arr.length > 0){
		let random = getRandomInt(0, arr.length-1);
		let elem = arr.splice(random, 1)[0]
		res.push(elem)
	}
	console.log('shuffle '+ res)
	return res
}

function random(arr, length) {
	return firstRandom(shuffle(arr), length)
}

function firstRandom(arr, length) {
	console.log('firstRandom ' + arr.splice(0, length))
	return arr.splice(0, length)

}

console.log(random([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3));


//задача 13

//Пусть нам нужно вывести на экран все возможные счастливые автобусные билеты. Билет называется счастливым, если сумма первых трех цифр билета равна сумме вторых трех цифр (будем рассматривать только билеты, в номере которых 6 цифр).

console.log(getTicket());

function getTicket() {
    let result = []
    for (let i = 1001; i <= 999999; i++){
        if (isLucky(i)){
            result.push(i)
        }
    }
    return result

}

function isLucky(num) {
    let str = normalizeNum(num)

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);


    return sum1 === sum2;
}

function normalizeNum(num) {
    let str = String(num)
    if (str.length == 5){
        return '0' + str;
    }

    if (str.length == 4){
        return '00' + str;
    }

    return str
}

//задача 14

//Счастливые билеты любой длины
//теперь сделаем так что бы в билете было любое колличество цифр(четное) и так же находились счастливые билеты

function formStr(data, length) {
	let str = String(data)
	let strZero = '';
	if (str.length < length){
		for (let i = 1; i <= (length - str.length); i++){
			strZero += '0';
		}
	}
	return strZero + str;
}

function normalizeNum(num, length) {
	let str = String(num);
	return formStr(str, length)
}

function isLucky(num) {
	let str = String(num);
	let sum1 = 0;
	let sum2 = 0;

	for (let i = 0; i <= str.length/2 - 1; i++){
		sum1 += Number(str[i])
	}

	for (let i = str.length/2 ; i <= str.length - 1; i++){
		sum2 += Number(str[i])
	}

	return sum1 == sum2;
}


function getLast(num) {
	let res = '';
	for (let i = 1; i <= num; i++){
		res += '9'
	}
	return res
}


function getFirst(num) {
	let res = '';
	let number = (num /2) - 1
	for (let i = 1; i <= number; i++){
		res += '0'
	}
	let finalRes = '1' + res + '1'
	return finalRes
}


function getLuckyTickets(digitsAmount) {
	let result = [],
	    first = getFirst(digitsAmount),
		last = getLast(digitsAmount);

	for (let i = first; i <= last; i++){
		let ticket = normalizeNum(i, digitsAmount)
		if(isLucky(ticket)){
			result.push(ticket)
		}
	}
	return result
}


console.log(getLuckyTickets(8))

//задача 15

//Дан массив со строками. Переверните символы каждой строки в обратном порядке.


function reverse(elem) {
	let res = elem.split("").reverse().join('')
	return res
}

function each(arr, callback) {
	let result = [];

	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}

	return result;
}

let arr = ['one', 'two', 'five']

let newRes = each(arr, reverse)
console.log(newRes)

//задача 16

//Дан массив со строками. Сделайте заглавным первый символ каждой строки.

function each(arr, callback) {
	let result = [];

	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}

	return result;
}

let arr = ['one', 'two', 'five']
let result = each(arr, function (elem){
	return elem[0].toUpperCase() + elem.slice(1);
})

console.log(result)

//задача 17

//Дан массив с числами. Найдите произведение каждого элемента массива на его порядковый номер.

function each(arr, callback) {
	let result = [];
	let i = 0

	for (let elem of arr) {
		result.push( callback(elem, i++)); // вызываем функцию-коллбэк
	}


	return result;
}

let result = each([1, 2 , 3, 4, 5], function (elem, index) {
	return elem * index
})

console.log(result)

//задача 18

//Реализуйте функцию filter, которая будет осуществлять фильтрацию массива. Пусть первым параметром функция принимает массив, а вторым - функцию-коллбэк, и возвращает массив элементов, для которых функция-коллбэк вернет true.


function filter(arr, callback) {
	let res = [];

	for (let elem of arr){
		res.push(callback(elem))
	}
	return res;
}

let result = filter([1, 2, 3, 4, 5], function (elem){
	if (elem % 2 === 0 ){
		return true;
	}else {
		return false;
	}
})

console.log(result)

//задача 19

//Дан массив с числами. С помощью созданной нами функции filter оставьте в этом массиве только положительные числа.

function filter(arr, callback) {
	let res = [];


	for (let elem of arr){
		if(callback(elem)){
			res.push(elem)
		}
	}
	return res;
}

let result = filter([-12, 5, 6, 7, -4, 0, 8], function (elem) {
	return elem > 0 ? true : false;
})

console.log(result)

//задача 20

//Сделайте функцию, которая с помощью рекурсии выведет первые 10 чисел Фибоначчи. Числа Фибоначчи строятся следующим образом: каждое новое число равно сумме двух предыдущих. Первые два числа Фибоначчи - это 1 и 2. Следующее число будет равно 1 + 2 = 3, следующее число будет равно 2 + 3 = 5 и так далее.


let counter = 1;

function func(prevPrevNum, prevNum){
	let res = 0;

	res = prevPrevNum + prevNum;
	console.log(res)
	prevPrevNum = prevNum;
	prevNum = res;
	counter++;

	if (counter <= 10){
		func(prevPrevNum, prevNum);

	}

}

func(1, 2);


//задача 21

//Дан многомерный объект произвольного уровня вложенности, например, такой:
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.


function funcObj(ob) {
	for (let key in ob){
		if (typeof ob[key] == 'object'){
			funcObj(ob[key])
		}else {
			console.log(ob[key])
		}
	}
}

funcObj(obj)

//задача 22

//Дан многомерный объект произвольного уровня вложенности, например, такой:
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.


function sumElem(obj) {
	let res = 0;

	for (let key in obj){
		if (typeof obj[key] == 'object'){
			res += sumElem(obj[key])
		}else {
			res += obj[key]
		}
	}
	return res
}

console.log(sumElem(obj))


//задача 23

//Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
//
let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:'abcdefgjk'

function newArr(arr) {
	let res = '';

	for (let elem of arr){
		if (typeof elem == 'object'){
			res += newArr(elem)
		}else {
			res += elem
		}
	}
	return res;
}

console.log(newArr(arr))

//задача 24

//Дан многомерный массив произвольного уровня вложенности, например, такой:

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.

function square(arr) {
	for (let i = 0; i < arr.length; i++){
		if(typeof arr[i] == 'object'){
			arr[i] = square(arr[i])
		}else {
			arr[i] = arr[i] * arr[i]
		}
	}
	return arr
}

console.log(square(arr))

//задача 25

//Дан многомерный массив произвольного уровня вложенности, например, такой:

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

let res = []
function newArr(arr) {

	for (let elem of arr){
		if (typeof elem == 'object'){
			newArr(elem)
		}else {
			res.push(elem)
		}
	}

}

console.log(newArr(arr))
console.log(res)

//задача 26

//Дан многомерный массив произвольного уровня вложенности, например, такой:
let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
//Выведите на экран все элементы-массивы, содержащие внутри себя только примитивы.

let res = []

function primitiveArr(arr) {
	for (let elem of arr){
		if (typeof elem == 'object'){
			let result = elem.every(function (el) {
				return typeof el != 'object';
			})
			if (result){
				res.push(elem)
			}else {
				primitiveArr(elem)
			}
		}
	}
}

primitiveArr(arr)
console.log(res)

//задача 27

//Дан многомерный массив произвольного уровня вложенности. Подсчитайте с помощью рекурсии самый максимальный уровень вложенности этого массива.

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]],
	counter = 0;

function primitiveArr(arr) {
	for (let elem of arr){
		if (typeof elem == 'object'){
			let result = elem.every(function (el) {
				return typeof el != 'object';
			})
			if (result){
				counter++
			}else {
				primitiveArr(elem)
			}
		}
	}
}

primitiveArr(arr)
console.log(counter)