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
// function getOwnDivisors(num) {
//     let res = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             res.push(i)
//         }
//     }
//     return res
// }

//Реализуем функцию getSum. Которая вернет сумму делителей

// function getSum(arr) {
//     let res = 0;
//     for (let elem of arr) {
//         res += elem
//     }
//     return res;
// }

//Реализуем функцию сравнения чисел
// function isFreindly(num1, num2) {
//     let sum1 = (getSum(getOwnDivisors(num1))),
//         sum2 = (getSum(getOwnDivisors(num2)));
//
//     return sum1 === num2 && sum2 === num1
// }

// Реализуем поиск чисел дружественных делителей в нужном диапазоне(при запуске функции на больших числах - более 2000,
// значительная нагрузка на процессор - длительное ожидание результата)
// function getFreindly(min, max) {
//     let res = [];
//     for (let i = min; i <= max; i++) {
//         for (let j = i + 1; j <= max; j++) {
//             if (isFreindly(i, j)) {
//                 console.log(i, j)
//                 res.push([i, j])
//             }
//         }
//     }
//     return res;
// }
//
//
// console.log(getFreindly(1, 1000))


// console.log(isFreindly(220, 284))


//задача 2

//Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

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

//задача 3

//Сделайте функцию  которая будет принимать параметром целое число и находить все делители этого числа, являющиеся простыми числами.

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

