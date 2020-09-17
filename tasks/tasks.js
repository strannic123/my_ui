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



