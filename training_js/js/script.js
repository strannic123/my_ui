//Получение DOM элемента в JavaScript


//задача 1
//Даны 3 абзаца:
//
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
//
// console.log(elem1)
// console.log(elem2)
// console.log(elem3)

//Более сложные селекторы

//задача 2

//<div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.

// let elem = document.querySelector('#block p')
// console.log(elem)

//задача 3

//Дан следующий HTML:
//
// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.

// let elem = document.querySelector('.block p');
// console.log(elem)

//задача 4

//Дан следующий HTML:
//
// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.

// let elem = document.querySelector('.www');
// console.log(elem)

//Привязывание обработчиков событий к элементам

//задача

//<input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')
// let button3 = document.querySelector('#button3')
//
// button1.addEventListener('click', function () {
//     alert('1')
// });
//
// button2.addEventListener('click', function () {
//     alert('2');
// });
//
// button3.addEventListener('click', function () {
//     alert('3')
// })

//Другие типы событий в JavaScript

//задача 1

//Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.

// let button = document.querySelector('#button');
// button.addEventListener('dblclick', function () {
//     alert('Был двойной клик')
// })

//задача 2

//Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.

// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function () {
//     alert('Наведение курсора')
// })

//задача 3

// let button = document.querySelector('#button');
// button.addEventListener('mouseout', function () {
//     alert('убрали курсор')
// })

//Ловим несколько событий на элементе

//задача 4

//Дана кнопка. По клику на нее выведите число 1, а по двойному клику - число 2.

// let button = document.querySelector('#button');
//
// button.addEventListener('dblclick', function () {
//     console.log('2')
// });
// button.addEventListener('click', function () {
//     console.log('1')
// })

//Именованные обработчики событий в JavaScript

//задача

//Дан следующий HTML код:
//
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:
//
// function func1() {
// 	alert(1);
// }
//
// function func2() {
// 	alert(2);
// }
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

// let button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2');
//
// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);
//
// function func1() {
//     alert('1')
// };
//
// function func2() {
//     alert('2')
// }

//Привязывание одного обработчика ко многим элементам

//задача

//Даны 5 абзацев:
//
// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:
//
// function func() {
// 	alert('message');
// }
// Привяжите эту функцию ко всем 5-ти абзацам.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3'),
//     elem4 = document.querySelector('#elem4'),
//     elem5 = document.querySelector('#elem5');
//
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);
//
//
// function func() {
//     alert('message');
// }

//Несколько обработчиков одного события в JavaScript

//задача 1

//Дан абзац:
//
// <p id="elem">text</p>
// Даны следующие функции:
//
// function func1() {
// 	alert('1');
// }
//
// function func2() {
// 	alert('2');
// }
//
// function func3() {
// 	alert('3');
// }
// Привяжите все эти функции к нашему абзацу.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);
//
// function func1() {
//     alert('1');
// }
//
// function func2() {
//     alert('2');
// }
//
// function func3() {
//     alert('3');
// }

//Анонимные обработчики
//задача 2

//Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.

// let button = document.querySelector('#button');
// button.addEventListener('dblclick', function () {
//     alert('1')
// });
// button.addEventListener('dblclick', function () {
//     alert('2')
// });
// button.addEventListener('dblclick', function () {
//     alert('3')
// });

//Работа с текстом тега на JavaScript

//задача 1
//Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function (){
//     alert(Number(elem1.innerHTML) + Number(elem2.innerHTML))
// })

//задача 2

//Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2');
//
// button1.addEventListener('click', function () {
//     alert(elem1.innerHTML)
// })
//
// button2.addEventListener('click', function () {
//     alert(elem2.innerHTML)
// })

// Запись

//задача 3

//Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.

// let elem = document.querySelector('#elem'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2');
//
// button1.addEventListener('click', function () {
//     elem.innerHTML = 'Привет'
//     alert(elem.innerHTML)
// });
//
// button2.addEventListener('click', function () {
//     elem.innerHTML = 'Пока';
//     alert(elem.innerHTML);
// })

//задача 4

//Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3');
//
// elem1.addEventListener('click', function () {
//     elem1.innerHTML += 1;
// });
//
// elem2.addEventListener('click', function () {
//     elem2.innerHTML += 2;
// })
//
// elem3.addEventListener('click', function () {
//     elem3.innerHTML += 3;
// })

//задача 5

//Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = elem.innerHTML ** 2;
//     elem.innerHTML = res
// })

//задача 6

//Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = Number(elem.innerHTML) + 1;
//     elem.innerHTML = res;
// })

//задача 7

//Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = elem.innerHTML + '!';
//     elem.innerHTML = res;
// })

//задача 8

//Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = '!' + elem.innerHTML;
//     elem.innerHTML = res;
// })

//Запись тегов

//задача 9

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.innerHTML = '<i>hello</i>'
// })

//задача 10

//Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     alert(elem.innerHTML);
//     elem.innerHTML = "<b>100</b>"
// })

//Работа с атрибутами тегов через свойства элементов

//задача 1

//Дан следующий инпут:
//
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.value = elem.type;
// })

//задача 2

//Дана также кнопка. По нажатию на кнопку выведите запишите в атрибут type значение submit.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     alert(elem.type);
//     elem.type = 'submit';
//     alert(elem.type)
// })

//задача 3

//Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let link = document.querySelector('#link'),
//     elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.innerHTML = link.href
// })

//задача 4

//Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let link = document.querySelector('#link'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     link.innerHTML +=  '(' + link.href +')'
// })

//задача 5

//Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// let image = document.querySelector('#image'),
//     elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.innerHTML = image.src
// })

//задача 6

//Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let image = document.querySelector('#image'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     image.width = 300
// })

//задача 7

//Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let image = document.querySelector('#image'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     image.width *= 2
// })

//задача 8

//Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.

// let image = document.querySelector('#image'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2');
//
// button1.addEventListener('click', function () {
//     image.src = "https://tvbrics.com/upload/resize_cache/iblock/d1c/800_500_0/d1cb79c1049b07bcb0dc302d7eb1cd78.jpg"
// });
//
// button2.addEventListener('click', function () {
//     image.src = "https://coolhouses.ru/files/images/4.2014/rayskiy-dom-na-beregu-okeana-v-kalifornii-4.jpg"
// })

//Работа с текстовыми полями в JavaScript

//задача 1

//Дан инпут:
//
// <input id="elem" value="text">
// Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
//
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     alert(elem.value)
// })

//задача 2

//Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.value = 'новый текст'
// })

//задача 3

//Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// let elem = document.querySelector('#elem'),
//     elem_text = document.querySelector('#elem_text'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem_text.innerHTML = elem.value
// })

//задача 4

//Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem2.value = elem1.value ** 2
// })

//задача 5

//Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = elem1.value;
//     elem1.value = elem2.value;
//     elem2.value = res;
// })

//задача 6

//Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

//задача 7

//Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3'),
//     elem4 = document.querySelector('#elem4'),
//     elem5 = document.querySelector('#elem5'),
//     item = document.querySelector('#item'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     item.innerHTML = (Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) /5
// })

//Фокус текстовых полей в JavaScript

//задача 1

//Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('focus', function () {
//     elem.value = 1
// });
//
// elem.addEventListener('blur', function () {
//     elem.value = 2;
// })

//задача 2

//Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('blur', function () {
//     elem.value = elem.value **2
// })

//задача 3

//Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('focus', function () {
//     elem.value = '';
// })

//Исключения при работе с атрибутами в JavaScript

//задача 1

//<div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button'),
//     item = document.querySelector('#item');
//
// button.addEventListener('click', function () {
//     item.innerHTML = elem.className;
// })

//задача 2

//<div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.className = 'content'
//     console.log(elem.className)
// })

//задача 3

//Дан див с несколькими CSS классами, записанными через пробел:
//
// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = [];
//     res = elem.className.split(' ');
//     console.log(res)
// })

//Цепочки методов и свойств в JavaScript

//задача 1

//Дан следующий код:
//
// <img id="image" src="avatar.png">
// let image = document.querySelector('#image');
// console.log(image.src);
// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.

// console.log(document.querySelector('#image').src)

//Преимущества и недостатки цепочек

//задача 2

//Дан следующий код:
//
// <img id="image" src="avatar.png" width="300" height="500">
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);
// Укажите на недостатки данного кода. Исправьте их.

// let elem = document.querySelector('#image');
// console.log(elem.src);
// console.log(elem.width);
// console.log(elem.height);

//Объект this в JavaScript

//задача 1

//Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('focus', function () {
//     this.value = 1;
// })
//
// elem.addEventListener('blur', function () {
//     this.value = 2;
// })

//задача 2

//Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.

// let button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     this.value = ++this.value;
// })

//Особое преимущество this

//задача 3

//Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3'),
//     elem4 = document.querySelector('#elem4'),
//     elem5 = document.querySelector('#elem5');
//
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);
//
// function func() {
//     this.innerHTML += '!!!'
// }

//задача 4

//Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3');
//
// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);
//
// function func() {
//     this.value *= this.value
// }

//Получение группы элементов

//задача 1

//Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение text.

// let elems = document.querySelectorAll('.elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func);
//
// function func() {
//     for (let elem of elems){
//         elem.innerHTML = 'text'
//     }
// };

//задача 2

//Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let elems = document.querySelectorAll('.elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func);
// function func() {
//     for (let i = 0; i <= elems.length; i++){
//         elems[i].innerHTML += i+1;
//     }
// };

//задача 3

//Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

// let inputs = document.querySelectorAll('.num'),
//     elem = document.querySelector('#elem'),
//     butt = document.querySelector('#button');
//
// butt.addEventListener('click', func);
// function func() {
//     let res = 0;
//     for (let input of inputs){
//         res += Number(input.value)
//         console.log(res)
//     }
//     elem.innerHTML = res;
// }

//задача 1

//Дана следующая функция:
//
// function func() {
// 	this.value = Number(this.value) + 1;
// }
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.

// let inputs = document.querySelectorAll('.num');
//
// for (let elem of inputs){
//     elem.addEventListener('blur', func);
// }
//
// function func() {
//     this.value = Number(this.value) + 1;
// }


//задача 2
//Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

// let elems = document.querySelectorAll('p');
//
// for (let elem of elems){
//     elem.addEventListener('click', func )
// }
//
// function func() {
//     this.innerHTML = Number(this.innerHTML) ** 2;
// }

//Анонимные функции как обработчики событий

//задача 3


// let divs = document.querySelectorAll('div');
//
// for (let div of divs) {
// 	div.addEventListener('click', func);
// }
//
// function func() {
// 	this.innerHTML++;
// }
// Сделайте функцию-обработчик анонимной.

// let divs = document.querySelectorAll('div');
//
// for (let div of divs){
//     div.addEventListener('click', function () {
//         this.innerHTML++;
//     })
// }

//Отвязывание событий через removeEventListener

//задача 1

//Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let link = document.querySelector('a');
//
// link.addEventListener('click', func);
//
// function func() {
//     link.innerHTML += '(' + link.href + ')';
//     link.removeEventListener('click', func)
// }


//задача 2

//Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

// let button = document.querySelector('#button');
//
// button.addEventListener('click', func)
//
// function func() {
//     if(Number(button.value) < 10){
//         button.value = Number(button.value) + 1;
//     }else {
//         button.removeEventListener('click', func)
//     }
// }

//Отвязывание обработчиков событий в цикле


//задача
//Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let elems = document.querySelectorAll('p');
//
// for (let elem of elems){
//     elem.addEventListener('click', func)
// }
//
// function func() {
//     this.innerHTML += '!';
//     this.removeEventListener('click', func)
// }

//Отвязывание анонимных функций в JavaScript

//Работа с атрибутами через методы в JavaScript

//задача 1
// let elem = document.querySelector('#elem');
// console.log(elem.getAttribute('value'))

//задача 2
//<input id="elem" class="www zzz">
// Получите значение его атрибута class.

// let elem = document.querySelector('#elem');
// console.log(elem.getAttribute('class'))

//Установка

//задача 3
//<input id="elem">
// Установите его атрибут value в значение 'text'.

// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');
// console.log(elem.value)

//задача 4
//Дан элемент:
//
// <input id="elem">
// Установите ему атрибут class в значение 'valid'.

// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid')
// console.log(elem.className)

//Удаление

//задача 5

//Дан элемент:
//
// <input id="elem" value="text">
// Удалите у него атрибут value.

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');
// console.log(elem.hasAttribute('value'));

//Проверка

//задача 6
//Дан элемент:
//
// <input id="elem" value="text">
// Проверьте наличие у него атрибута value.

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

//Разница между способами получения атрибутов

//задача 1

//Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func)
//
// function func() {
//     if(elem.value === 'text'){
//         console.log('не изменялось')
//     }else {
//         console.log('изменялось')
//     }
// }

//Изменение атрибута

//задача 2

//Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func);
//
// function func() {
//     elem.value = elem.getAttribute('value')
//     console.log(elem.value)
// }

//Манипулирование CSS классами в JavaScript
//Массив классов

//задача 1

//Дан элемент
// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.

// let elem = document.querySelector('#elem');
// let classLength = elem.classList
// console.log(classLength.length)

//задача 2

//Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Переберите в цикле его классы
// let elem = document.querySelector('#elem');
// let resClass = elem.classList;
// for (let el of resClass){
//     console.log(el)
// }

//Добавление классов

//задача 3

//<p id="elem" class="www ggg zzz"></p>
// Добавьте ему класс xxx.
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx')

//Удаление классов

//задача 4

//<p id="elem" class="www ggg zzz"></p>
// Удалите у него класс www и класс zzz.
// let elem = document.querySelector('#elem');
// elem.classList.remove('www', 'zzz')

//Проверка классов

//задача 5

//Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Проверьте наличие у него класса ggg.
// let elem = document.querySelector('#elem');
// console.log(elem.classList.contains('ggg'));

//Чередование классов

//задача 6

//Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.

// let elem = document.querySelector('#elem');
// elem.classList.toggle('www')

//Стилизация элементов через атрибут style в JavaScript

//задача 1
//Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
// let elem = document.querySelector('.name'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.style.width = '200px';
//     elem.style.height = '100px';
//     elem.style.border = '2px solid aqua';
// })

//Свойства с дефисом

//задача 2
//Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.

// let elem = document.querySelector('.name'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     elem.style.fontSize = '20px';
//     elem.style.borderTop = '2px solid aqua';
//     elem.style.background = 'yellow';
// })

//задача 3
// Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.

// let list = document.querySelector('#list'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     list.style.cssFloat = 'left'
// })

//Стилизация с помощью CSS классов на JavaScript

//задача 1
//Объясните, почему я выбрал для названия класса слово colored, а не слово green, явно указывающее на желаемый нами цвет.

//задача 2
//Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).

// let elem = document.querySelector('p'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2'),
//     button3 = document.querySelector('#button3');
//
// button1.addEventListener('click', function () {
//     elem.classList.add('cross_out')
// })
//
// button2.addEventListener('click', function () {
//     elem.classList.add('do_bold')
// })
//
// button3.addEventListener('click', function () {
//     elem.classList.add('colored')
// })

//Дополнительное преимущество

//задача 3
//Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.

// let elem = document.querySelector('p'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2'),
//     button3 = document.querySelector('#button3');
//
// button1.addEventListener('click', function () {
//     elem.classList.toggle('cross_out')
// })
//
// button2.addEventListener('click', function () {
//     elem.classList.toggle('do_bold')
// })
//
// button3.addEventListener('click', function () {
//     elem.classList.toggle('colored')
// })

//Отработка изученного материала на работу с DOM

//задача 1
//Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

// let elem = document.querySelector('#elem'),
//     text = document.querySelector('p')
//
// elem.addEventListener('blur', function () {
//     text.innerHTML += elem.value
// })

//задача 2
//Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3'),
//     res = document.querySelector('p'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func)
//
// function func() {
//     res.innerHTML = Number(elem1.value) + Number(elem2.value) + Number(elem3.value);
// }

//задача 3
//Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('blur', func);
// function func() {
//     let res = 0;
//     let spl = elem.value.split('');
//     for (let elem of spl){
//         res += Number(elem)
//     }
//     elem.value = res;
// }

//задача 4
//Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
//     let res = 0;
//     let spl = elem.value.split(',');
//     for (let elem of spl){
//         res += Number(elem)
//     }
//     elem.value = res/spl.length
// }

//задача 5
//Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3'),
//     elem4 = document.querySelector('#elem4');
//
// elem1.addEventListener('blur', func);
// function func() {
//     let res = elem1.value.split(' ');
//     elem2.value = res[0];
//     elem3.value = res[1];
//     elem4.value = res[2];
// }

//задача 6
//Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('blur', func);
// function func() {
//     let res = ''
//     let spl = elem.value.split(' ');
//     for (let elem of spl){
//         res += elem[0].toUpperCase() + elem.slice(1) + ' '
//     }
//     elem.value = res;
// }

//задача 7
//Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let elem = document.querySelector('#elem'),
//     text = document.querySelector('p');
//
// elem.addEventListener('blur', func);
// function func() {
//     let res = elem.value.split(' ');
//     text.innerHTML += res.length;
// }

//задача 8
//Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('blur', func);
//
// function func() {
//     let res = elem.value.split('.').reverse().join('-')
//     elem.value = res;
// }

//задача 9
//Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

// let elem = document.querySelector('#elem'),
//     str = document.querySelector('p'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func)
//
// function func() {
//     let reversing = elem.value.split('').reverse().join('')
//     if(elem.value === reversing){
//         str.innerHTML += ' Да это палиндром'
//     }else {
//         str.innerHTML += ' Нет это не палиндром'
//     }
// }

//задача 10
//Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// let elem = document.querySelector('#elem'),
//     str = document.querySelector('p');
//
//
// elem.addEventListener('blur', func)
//
// function func() {
//     let num = false;
//     let res = elem.value.split('')
//     for (let elem of res){
//         if(Number(elem) === 3){
//             num = true;
//         }
//     }
//     if (num){
//         str.innerHTML += ' Цифра 3 есть'
//     }else {
//         str.innerHTML += ' Цифры 3 нет'
//     }
// }

//задача 11
//Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// let elems = document.querySelectorAll('p'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', func);
//
// function func() {
//     let counter = 0;
//     for (let elem of elems){
//         counter += 1;
//         elem.innerHTML += ' ' + counter;
//     }
// }

//задача 12
//Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// let links = document.querySelectorAll('a');
//
// for (let link of links){
//     link.addEventListener('click', func);
// }
//
// function func(e) {
//     e.preventDefault();
//     this.innerHTML += '(' + this.href + ')'
// }

//задача 13
//Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

//задача 14
//Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// let elems = document.querySelectorAll('p');
//
// for (let elem of elems){
//     elem.addEventListener('click', func)
// }
//
// function func() {
//     let res = 0;
//     res =  Number(this.innerHTML) * Number(this.innerHTML);
//     this.innerHTML = res;
// }

//задача 15
//Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

// let num_days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
// let inp = document.querySelector('#date_num');
//
// inp.addEventListener('blur', func);
//
// function func() {
//    let str_date = inp.value.split('.');
//    let [day, month, year] = str_date;
//    let date = new Date(Number(year), Number(month)-1, Number(day))
//    let res = date.getDay();
//    inp.value = num_days[res];
// }

//задача 16
//Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

// let input = document.querySelector('#num'),
//     inc = document.querySelector('#incr'),
//     dec = document.querySelector('#decr'),
//     res = 5;
//
// inc.addEventListener('click', func_inc);
// dec.addEventListener('click', func_dec);
//
//
// function func_inc() {
//     if(input.value >= 0){
//         ++input.value
//     }
// }
//
// function func_dec() {
//     if(input.value > 0){
//         --input.value
//     }
// }

//задача 17
//Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// let elems = document.querySelectorAll('p'),
//     inp = document.querySelector('#num');
//     res = 0;
//
// for (let elem of elems){
//     elem.addEventListener('click', func)
// }
//
// function func() {
//     res += 1;
//     inp.value = res;
// }

//задача 18
//В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).

// let elem = document.querySelector('#country'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let res = elem.value.split(',')
//
//     let uls = document.createElement('ul');
//     document.body.appendChild(uls);
//     for (let el of res){
//         let li = document.createElement('li');
//         li.innerHTML = el;
//         uls.appendChild(li);
//     }
// })

//задача 19
//В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.

// let elem = document.querySelector('#country'),
//     paragraf = document.querySelector('#text'),
//     dist = [];
//
// elem.addEventListener('keydown', function (e) {
//     if(e.keyCode === 13){
//         dist += elem.value + ', ';
//         paragraf.innerHTML = dist;
//     }
// })


//задача 20
//На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста

// let elems = document.querySelectorAll('.text');
//
// for (let elem of elems){
//     if (elem.innerHTML.length > 10){
//         let res = elem.innerHTML.slice(0, 11) + '...';
//         elem.innerHTML = res;
//     }
// }

//задача 21
//Дан массив с числами. Выведите каждый элемент этого массива в своем инпуте. Сделайте так, чтобы под всеми инпутами вывелась сумма элементов нашего массива.

// let arr = [1, 2, 3, 4, 5],
//     res = 0,
//     paragraf = document.createElement('p');
//
// for (let elem of arr){
//     let inp = document.createElement('input');
//     document.body.appendChild(inp);
//     inp.value = elem;
//     res += Number(elem)
// }
//
// paragraf.innerHTML = res;
// document.body.appendChild(paragraf);

//задача 22
//Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

// let elem = document.querySelector('#num');
//
// elem.addEventListener('blur', func);
//
// function func() {
//     if(Number(elem.value) >= 1 && Number(elem.value) <= 100){
//         elem.style.background = 'green';
//     }else{
//         elem.style.background = 'red';
//     }
// }

//задача 23
//Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

// let elem = document.querySelector('#text'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', generateWord);
//
// function generateWord() {
//     let str = '';
//     let randomStr = Math.random().toString(36).substring(2, 10);
//     str += randomStr;
//     elem.value = str;
// }

//задача 24
//Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

// let elem = document.querySelector('#text'),
//     button = document.querySelector('#button');
//
// button.addEventListener('click', function randomLetter(){
//     let arr = elem.value.split('');
//     let j, temp;
//     for(let i = arr.length - 1; i > 0; i--){
//         j = Math.floor(Math.random()*(i + 1));
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//     }
//     elem.value = arr.join('');
// });

//задача 25
//Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.

// let link = document.querySelector('a'),
//     box = document.querySelector('#box');
//
// link.addEventListener('click', function () {
//     if(box.checked){
//         box.checked = false
//     }else{
//         box.checked = true
//     }
// })

//задача 26
//Дан инпут. В него вводится температура в градусах Фарингейта. Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом эта температура выводилась в градусах Цельсия.

// let inp = document.querySelector('#text'),
//     text = document.querySelector('#elem');
//
// inp.oninput = function () {
//     text.innerHTML = 'В градусах цельсия: ' + Math.floor((inp.value - 32) * (5/9));
// }

//задача 27
//Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

// let inp = document.querySelector('#text'),
//     button = document.querySelector('#button'),
//     text = document.querySelector('#elem');
//
// button.addEventListener('click', factorial);
//
// function factorial() {
//     let res = 1;
//     let num = Number(inp.value);
//     for (let i = 1; i <= num; i++){
//         res *= i;
//     }
//     text.innerHTML = 'Факториал числа: ' + res;
// }

//задача 28
//Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.

// let inp_a = document.querySelector('#text1'),
//     inp_b = document.querySelector('#text2'),
//     inp_c = document.querySelector('#text3'),
//     button = document.querySelector('#button'),
//     elem_p = document.querySelector('#elem');
//
//
// button.addEventListener('click', func);
// //D = b2 − 4ac
// function func() {
//     let a = Number(inp_a.value),
//         b = Number(inp_b.value),
//         c = Number(inp_c.value);
//     console.log(a, b, c)
//     let discr = (b**2) - (4*a*c);
//     console.log(discr)
//     if(discr < 0 && a != 0){
//         elem_p.innerHTML = 'Нет корней'
//     }else if (discr == 0 && a != 0){
//         let res = (-b + Math.sqrt(discr)) / (2*a)
//         elem_p.innerHTML = res;
//     }else if(discr > 0 && a != 0) {
//         let res = (-b + Math.sqrt(discr)) / (2*a)
//         let res_2 = (-b - Math.sqrt(discr)) / (2*a)
//         elem_p.innerHTML = res + ', ' + res_2;
//     }else {
//         elem_p.innerHTML = '"а" не должно быть нулем'
//     }
// }

//Нахождение элементов по родственным связям
// Потомки элементов

//задача 1
//Дан элемент #elem:
//
//<ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.

// let elem = document.querySelector('#elem');
// let text = elem.firstElementChild;
// console.log(text)
// text.style.color = 'red';

//задача 2
//Дан элемент #elem:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

// let elem = document.querySelector('#elem');
// let text = elem.lastElementChild;
// text.style.color = 'red';

//задача 3
//Дан элемент #elem:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// let elems = document.querySelector('#elem');
// let text = elems.children;
// for (let elem of text){
//     elem.innerHTML += '!'
// }

//Родители элементов

//задача 4
//Дан элемент #elem:
//
// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>
// Найдите его родителя и задайте ему красную границу.

// let elem = document.querySelector('#elem');
// let el = elem.parentElement;
// el.style.border = '2px solid red';

//задача 5
//Дан элемент #elem:
//
// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>
// Найдите его родителя его родителя и задайте ему красную границу.

// let elem = document.querySelector('#elem');
// let parent = elem.parentElement.parentElement;
// parent.style.border = '2px solid red';


//Поиск всех родителей


//задача 6
//Дан элемент:
//
// <header>
// 	<div>
// 		<p>
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося тегом div.

// let elem = document.querySelector('#elem');
// let parent = elem.closest('div')
// console.log(parent)


//задача 7
//Дан элемент:
//
// <header>
// 	<div class="www">
// 		<p class="www">
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.

// let elem = document.querySelector('#elem'),
//     parent = elem.closest('.www');
// console.log(parent)


// Поиск соседей


//задача 8
//Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа сверху и добавьте ему в конец текст '!'.

// let elem = document.querySelector('#elem'),
//     text = elem.previousElementSibling;
//
// text.innerHTML += '!';


//задача 9
//Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу и добавьте ему в конец текст '!'.

// let elem = document.querySelector('#elem'),
//     text = elem.nextElementSibling;
// text.innerHTML += '!';


//задача 10
//Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

// let elem = document.querySelector('#elem'),
//     text = elem.nextElementSibling.nextElementSibling;
// text.innerHTML += '!'


//задача 11
//Дан элемент #elem:
//
// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li id="elem">text3</li>
// 	<li>text4</li>
// 	<li>text5</li>
// </ul>
// Поменяйте местами текст его соседа сверху и текст его соседа снизу

// let elem = document.querySelector('#elem'),
//     text_up = elem.previousElementSibling,
//     text_down = elem.nextElementSibling,
//     res = text_up.innerHTML;
//
// text_up.innerHTML = text_down.innerHTML;
// text_down.innerHTML = res;


//Другие полезные методы для поиска элементов


//задача 1
//Дан элемент #elem:
//
// <div id="elem"></div>
// Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.

// let elem = document.getElementById('elem');
// elem.innerHTML = 'Текст'


// Получение по имени тега


//задача 2
//Дан список:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Получите все теги li по имени тега и сделайте их текст красного цвета.

// let elems = document.getElementsByTagName('li');
//
// for (let elem of elems){
//     elem.style.color = 'red';
// }


// Получение по имени класса

//задача 3
//Даны элементы:
//
// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>
// Получите эти элементы по имени класса и сделайте их текст красного цвета.

// let elems = document.getElementsByClassName('www');
// for (let elem of elems){
//     elem.style.color = 'red';
// }


//Поиск элементов внутри другого элемента

//задача
//Дан элемент #parent:
//
// <div id="parent">
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// </div>
// let parent = document.querySelector('#parent');
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.

// let parent = document.querySelector('#parent'),
//     elems1 = parent.querySelectorAll('.www'),
//     elems2 = parent.querySelectorAll('.ggg');
//
// console.log(elems1);
// console.log(elems2);


// Работа с текстареа в JavaScript

//задача
//Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// let elem = document.querySelector('#elem'),
//     text = document.querySelector('#txt');
//
// elem.addEventListener('blur', function () {
//     text.innerHTML = elem.value;
// })


// Атрибут disabled в JavaScript

//задача 1
//Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#btn');
//
// button.addEventListener('click', function () {
//     elem.disabled = true;
// })

//задача 2
//Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// let elem = document.querySelector('#elem'),
//     btn_1 = document.querySelector('#btn_1'),
//     btn_2 = document.querySelector('#btn_2')
//
// btn_1.addEventListener('click', function () {
//     elem.disabled = true;
// })
//
// btn_2.addEventListener('click', function () {
//     elem.disabled = false;
// })

//задача 3
//Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

// let elem = document.querySelector('#elem'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     alert(elem.disabled ? 'разблокирован':'заблокирован')
// })


//Работа с чекбоксами в JavaScript

//задача 1
//Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.

// let elem = document.querySelector('#checkbox'),
//     btn_check = document.querySelector('#btn_check'),
//     btn_un_check = document.querySelector('#btn_un_check');
//
// btn_check.addEventListener('click', function () {
//     elem.checked = true;
// })
//
// btn_un_check.addEventListener('click', function () {
//     elem.checked = false;
// })

//задача 2
//Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

// let ch_box = document.querySelector('#checkbox'),
//     btn = document.querySelector('#btn_check'),
//     prg = document.querySelector('#text');
//
// btn.addEventListener('click', function () {
//     if (ch_box.checked){
//         prg.innerHTML = 'Привет';
//     }else {
//         prg.innerHTML = 'Пока';
//     }
// })


// Чередование атрибутов без значений

//задача 1
//задача 2
//Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

// let elem = document.querySelector('#checkbox'),
//     btn = document.querySelector('#btn_check');
//
// btn.addEventListener('click', function () {
//     elem.checked = !elem.checked
// })


//Работа с радиокнопками в JavaScript

//задача
//Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// let radio = document.querySelectorAll('input[type="radio"]'),
//     btn = document.querySelector('#btn'),
//     prg = document.querySelector('#elem');
//
// btn.addEventListener('click', function () {
//     for (let elem of radio){
//         if(elem.checked){
//             prg.innerHTML = elem.value;
//         }
//     }
// })


// Событие change в JavaScript

//задача 1
//Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let inp = document.querySelector('#inp'),
//     prg = document.querySelector('#text');
//
// inp.addEventListener('change', function () {
//     prg.innerHTML = inp.value;
// })

//задача 2
//Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

// let inp = document.querySelector('#inp'),
//     text = document.querySelector('#text');
//
// inp.addEventListener('change', function () {
//     text.innerHTML = inp.checked
// })

//задача 3
//задача 4
//Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// let inp = document.querySelector('#inp');
//
// inp.addEventListener('change', function () {
//     if(inp.value.length < 5){
//         inp.style.border = '2px solid green'
//     }else {
//         inp.style.border = '2px solid red'
//     }
// })


// Событие input в JavaScript

//задача 1
//Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.

// let inp = document.querySelector('#inp');
//
// inp.addEventListener('input', function () {
//     if(inp.value.length == 5){
//         alert('Строка равна 5 символам')
//     }
// })

//задача 2
//Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

// let inp = document.querySelector('#inp'),
//     text = document.querySelector('#text');
//
// inp.addEventListener('input', function () {
//     if(inp.value.length < 5){
//         text.innerHTML = `Осталось ввести: ${5 - inp.value.length}`
//     }else {
//         text.innerHTML = `Превышена строка на: ${inp.value.length - 5}`
//     }
// })


//Методы focus и blur в JavaScript

//задача
//Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.

// let inp_1 = document.querySelector('#inp_1'),
//     inp_2 = document.querySelector('#inp_2');
//
// inp_1.addEventListener('input', function () {
//     if(inp_1.value.length == 2){
//         inp_2.focus()
//     }
// })
//
// inp_2.addEventListener('input', function () {
//     if(inp_2.value.length == 2){
//         inp_2.blur()
//     }
// })


// Работа с выпадающими списками в JavaScript

//задача 1
//Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

// let sel = document.querySelector('#select'),
//     text = document.querySelector('#text'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     text.innerHTML = sel.value
// })

//задача 2
//Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

// let sel = document.querySelector('#select'),
//     prg = document.querySelector('#text');
//
// sel.addEventListener('change', leapYear);
//
// function leapYear() {
//     let num = this.value;
//     if (num % 4 == 0 && num % 100 != 0 || num % 400 == 0) {
//         prg.innerHTML = 'високосный';
//     } else {
//         prg.innerHTML = 'обычный';
//     }
// }


//Атрибут value

//задача 3
//Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

// let sel = document.querySelector('#select'),
//     text = document.querySelector('#text');
//
// sel.addEventListener('change', function () {
//     let val = Number(sel.value);
//     if(val > 0 && val < 6){
//         text.innerHTML = 'Рабочий'
//     }else {
//         text.innerHTML = 'Выходной'
//     }
// })


//Изменение выбранного пункта списка на JavaScript

//задача
//Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы  JavaScript по умолчанию выбирал в этом списке текущий месяц.

// let sel = document.querySelectorAll('#select option');
// let date = new Date();
// let month = date.getMonth();
//
// for (let el of sel){
//     if(el.value == month){
//         el.selected = true;
//     }
// }


//Номер выбранного пункта выпадающего списка

//задача 1
//Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// let inp = document.querySelector('#input'),
//     sel = document.querySelectorAll('#select option');
//
// inp.addEventListener('blur', function () {
//     let num = Number(inp.value);
//     for (let el of sel){
//         if (el.value == num){
//             el.selected = true;
//         }
//     }
// })


//Получение пунктов выпадающего списка на JavaScript

//задача
//Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.

// let sel = document.querySelector('#select');
//
// for (let option of sel){
//     option.innerHTML += ' ' + option.value;
// }


//Работа с пунктами выпадающего списка на JavaScript

//задача 1
//Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

// let sel = document.querySelector('#select');
//
// for (let option of sel){
//     if (option.selected === true){
//         option.innerHTML += '!'
//     }else {
//         option.innerHTML += '?'
//     }
// }


//Выбор пункта списка

//задача 2
//Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

// let sel = document.querySelector('#select'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     let res = sel.lastElementChild;
//     res.selected = true
// })


// Получение выбранного оптиона

//задача 3
//Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let sel = document.querySelector('#select'),
//     btn = document.querySelector('#btn'),
//     text = document.querySelector('#text');
//
// btn.addEventListener('click', function () {
//     let res = sel[sel.selectedIndex];
//     text.innerHTML = res.innerHTML
// })

//задача 4
//Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.

// let sel = document.querySelector('#select'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     let res = sel[sel.selectedIndex];
//     res.innerHTML += '!';
// })


// Пользовательские атрибуты в JavaScript

//задача 1
//Дан следующий код:
//
// <div id="elem" data-text="str">text</div>
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function () {
//     elem.innerHTML += elem.dataset.text
// })

//задача 2
//Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
//
// <div data-num="1">text</div>
// <div data-num="2">text</div>
// <div data-num="3">text</div>
// <div data-num="4">text</div>
// <div data-num="5">text</div>
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

// let divs = document.querySelectorAll('div');
//
// for (let el of divs){
//     el.addEventListener('click', function () {
//         this.innerHTML += this.dataset.num
//     })
// }

//задача 3
//Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.

// let click = document.querySelector('#click'),
//     show = document.querySelector('#show'),
//     text = document.querySelector('#text'),
//     counter = 0;
//
// click.addEventListener('click', function () {
//     counter++
//     click.dataset.count = counter;
// })
//
// show.addEventListener('click', function () {
//     text.innerHTML = click.dataset.count;
// })

//задача 4
//Дан инпут:
//
// <input id="elem" data-length="5">
// В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.

// let inp = document.querySelector('#elem'),
//     text = document.querySelector('#text');
//
// inp.addEventListener('blur', function () {
//     let data_res = inp.dataset.length;
//     console.log(data_res);
//     console.log(inp.value.length);
//
//     if(inp.value.length > data_res) {
//         text.innerHTML = `Вы ввели на ${inp.value.length - data_res} знака/ов больше`
//     }else if (inp.value.length < 5){
//         text.innerHTML = `Можно ввести еще ${data_res - inp.value.length } знака/ов`
//     }else {
//         text.innerHTML = 'Нужное колличество знаков'
//     }
// })


//задача 5
//Дан инпут:
//
// <input id="elem" data-min="5" data-max="10">
// В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.

// let inp = document.querySelector('#elem'),
//     text = document.querySelector('#text');
//
// inp.addEventListener('blur', function () {
//     let max = inp.dataset.max;
//     let min = inp.dataset.min;
//     if (inp.value.length >= min && inp.value.length <= max){
//         text.innerHTML = 'Попадает в диапазон'
//     }else {
//         text.innerHTML = 'Не попадает в диапазон'
//     }
// })


// Пользовательские атрибуты с дефисами в JavaScript

//задача
//Дан следующий код:
//
// <div id="elem" data-product-price="1000" data-product-amount="5">
// 	товар яблоки
// </div>
// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function () {
//     let res = elem.dataset.productPrice * elem.dataset.productAmount
//     elem.innerHTML += `Общая стоимость: ${res}`
// })


//Обращение через методы к data атрибутам в JavaScript

//задача
//Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.

// let elems = document.querySelectorAll('.elem');
//
// counter = 1;
// for (let elem of elems){
//     elem.setAttribute('data-num', counter)
//     counter++
// }


//Основы работы с объектом Event в JavaScript

//Координаты события в JavaScript

//задача
//Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора.

// let elem = document.getElementById('elem');
//
// document.addEventListener('mousemove', function (event) {
//     elem.innerHTML = event.clientX + ':' + event.clientY;
// })


//Тип события в объекте Event в JavaScript

//задача
//В следующем коде в двум событиям привязан один и тот же обработчик:
//
// <button id="elem">text</button>
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
//
// function func() {
//
// }
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
//
// function func(e) {
//     if (e.type === 'click'){
//         elem.style.background = 'green'
//     }
//     if (e.type === 'dblclick'){
//         elem.style.background = 'red'
//     }
// }


//Элемент события в объекте Event в JavaScript

//задача
//Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function (e) {
//     if(e.target.tagName.toLowerCase() == 'li'){
//         e.target.innerHTML += '!'
//     }
//     if(e.target.tagName.toLowerCase() == 'ul'){
//         e.target.innerHTML += '<li>text</li>'
//     }
//
// })


//Получение нажатых клавиш в JavaScript

//задача
//Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

// let elem = document.querySelector('#elem'),
//     inp = document.querySelector('#inp');
//
// inp.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     if(e.key == 'Enter'){
//         elem.innerHTML = inp.value;
//         inp.value = '';
//     }
// })


//Отслеживание клавиш-модификаторов в JavaScript

//задача 1
//Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.

// let btn = document.querySelector('input');
//
// btn.addEventListener('click', function (e) {
//     if(e.altKey){
//         btn.style.background = 'red'
//     }
// })

//задача 2
//Пусть у вас есть список ul с тегами li:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.

// let elem = document.getElementById('elem');
//
// elem.addEventListener('click', function (e) {
//     if(e.ctrlKey){
//         e.target.innerHTML += 1;
//     }
//     if(e.shiftKey){
//         e.target.innerHTML += 2;
//     }
// })


// Отмена действия по умолчанию в JavaScript

//задача 1
//Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.

// let links = document.querySelectorAll('a');
//
// for (let link of links){
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         link.innerHTML += ' ' + link.href
//     })
// }

//задача 2
//Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.

// let inp1 = document.querySelector('#inp_1'),
//     inp2 = document.querySelector('#inp_2'),
//     text = document.querySelector('#text'),
//     link = document.querySelector('a');
//
// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     text.innerHTML = Number(inp1.value) + Number(inp2.value)
// })


//Основы работы с контекстом в JavaScript

//Контекст непривязанной функции в JavaScript

//Потеря контекста в JavaScript

//Решение проблемы с контекстом в JavaScript

//задача 1
//Пусть дан такой код:
//
// <input id="elem" value="3">
// "use strict";
//
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
// 	alert( square() );
//
// 	function square() {
// 		return this.value * this.value;
// 	}
// }
// Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка.
//
// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
//     let sum = this;
//     alert(square());
//
//     function square() {
//         return Number(sum.value) * Number(sum.value);
//     }
// }

//задача 2
//Возьмите код из предыдущей задачи и исправьте проблему кода с помощью  второго способа.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
//     alert(square(this));
//
//     function square(param) {
//         return Number(param.value) * Number(param.value);
//     }
// }

//задача 3
//Возьмите код из предыдущей задачи и исправьте проблему кода с помощью  третьего способа.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
//
// function func() {
//
//     let square = () => {
//         return Number(this.value) * Number(this.value);
//     }
//     alert(square());
// }


// Привязывание контекста через метод call в JavaScript

//задача 1
//Дана функция:
//
// function func() {
// 	console.log(this.value);
// }
// Даны три инпута:
//
// <input id="elem1" value="text1">
// <input id="elem2" value="text2">
// <input id="elem2" value="text3">
// С помощью метода call и функции func выведите на экран value каждого из инпутов.

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3');
//
// function func() {
// 	console.log(this.value);
// }
//
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);


// Метод call с параметрами

//задача 2
//Пусть дан следующий код:
//
// <input id="elem" value="привет">
// let elem = document.querySelector('#elem');
//
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// func(); // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');
//
// function func(surname, name) {
//     console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// func.call(elem, "Иванов", "Иван");


//Привязывание контекста через метод apply в JavaScript

//задача
//Пусть дан следующий код:
//
// <input id="elem" value="привет">
// let elem = document.querySelector('#elem');
//
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// func(); // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');
//
// function func(surname, name) {
//     console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// func.apply(elem, ['Иванов', 'Иван']);


// Привязывание контекста через метод bind в JavaScript


//задача
//Пусть дан следующий код:
//
// <input id="elem" value="привет">
// let elem = document.getElementById('elem');
//
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// // Тут напишите конструкцию с bind()
//
// func('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'
// Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.

// let elem = document.getElementById('elem');
//
// function func(surname, name) {
//     console.log(this.value + ', ' + surname + ' ' + name);
// }
//
// let newFunc = func.bind(elem);
//
// newFunc('Иванов', 'Иван');
// newFunc('Петров', 'Петр');


//Основы работы с функцией setInterval в JavaScript


//задача
//Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.

// setInterval(interval, 3000);
//
// function interval() {
//     console.log('Привет')
// }


//Счетчик через функцию setInterval в JavaScript


//задача
//Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.

// let i = 100;

// setInterval(function () {
//     console.log(--i)
// }, 1000)

//второй вариант
// setInterval(() => console.log(--i), 1000);


//Остановка таймера JavaScript


//задача
//Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

// let i = 10;
//
// let timerId = setInterval(function () {
//     console.log(--i);
//
//     if (i == 0){
//         clearInterval(timerId)
//     }
// }, 1000);


//Кнопка для запуска таймера на JavaScript


//задача 1
//Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.

// let start = document.querySelector('#start'),
//     i = 100;
//
//
// start.addEventListener('click', function () {
//     let timerId = setInterval(function () {
//         console.log(--i);
//
//         if (i == 0){
//             clearInterval(timerId)
//         }
//     },1000)
// })


//задача 2
//Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.

// let start = document.querySelector('#start'),
//     i = 100;
//
// start.addEventListener('click', function func() {
//     let timerId = setInterval(function () {
//         console.log(--i);
//
//         if (i == 0){
//             clearInterval(timerId)
//         }
//     },1000);
//
//     this.removeEventListener('click', func)
// })


// Кнопки для запуска и остановки таймера на JavaScript


//задача 1
//Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер. По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

// let start = document.querySelector('#start'),
//     stop = document.querySelector('#stop'),
//     i = 10,
//     timerId;
//
// start.addEventListener('click', function func() {
//     timerId = setInterval(function () {
//         console.log(--i)
//         if (i == 0){
//             clearInterval(timerId)
//         }
//     }, 1000);
//     this.removeEventListener('click', func)
// })
//
// stop.addEventListener('click', function () {
//     clearInterval(timerId);
// })


//задача 2
//Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
//
// start.addEventListener('click', function() {
// 	let timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// start.addEventListener('click', function func() {
//     timerId = setInterval(function () {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
//     this.removeEventListener('click', func)
// });
//
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });


//задача 3
//Еще один программист также написал код для решения предыдущей задачи:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
// 	let timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// start.addEventListener('click', function func() {
//     timerId = setInterval(function() {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
//     this.removeEventListener('click', func);
// });
//
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });


//задача 4
//Еще один программист также написал код для решения предыдущей задачи:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('start');
// let stop  = document.querySelector('stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
// 	setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// start.addEventListener('click', function func() {
//     timerId = setInterval(function() {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
//     this.removeEventListener('click', func)
// });
//
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });


//задача 5
//Еще один программист также написал код для решения предыдущей задачи:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('start');
// let stop  = document.querySelector('stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
// 	let timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval();
// });
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// start.addEventListener('click', function func() {
//     timerId = setInterval(function() {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
//     this.removeEventListener('click', func )
// });
//
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });


//задача 6
//Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// function func (){
//     timerId = setInterval(function() {
//         let date = new Date;
//         console.log(date.getMinutes() + ' ' + date.getSeconds());
//     }, 1000);
//     this.removeEventListener('click', func )
// }
//
// start.addEventListener('click', func);
//
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
//     start.addEventListener('click', func);
// });


// Практика на таймеры и работу с DOM в JavaScript


//задача 1
//let elem = document.querySelector('#elem');
//
// setInterval(function() {
// 	elem.value = Number(elem.value) + 1;
// }, 1000);

//Объясните, зачем в приведенном выше коде используется функция Number. Что будет, если не написать эту функцию в данном коде?
//Объяснение - при сложении строки с числом получится конкатенация (но не математическое действие сложение), т.е 11


//задача 2
//Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.

// let elem = document.querySelector('#elem');
//
// let timerId = setInterval(() => {
//     let res = Number(elem.value - 1);
//     elem.value = res;
// }, 1000);


//задача 3
//Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.

// let elem = document.querySelector('#elem');
//
// let timerId = setInterval(() => {
//     let res = Number(elem.value - 1);
//     elem.value = res;
//     if (res == 0){
//         this.clearInterval(timerId)
//     }
// }, 1000);


// Таймеры и потеря контекста в JavaScript

//задача 1
//Пусть дан такой код:
//
// <input type="button" id="elem" value="1">
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value = Number(elem.value) + 1;
// 	}, 1000);
// });
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит.Исправьте ошибку автора кода.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     let res = this;
//     setInterval(function() {
//         res.value = Number(res.value) + 1;
//     }, 1000);
// });


// Другие способы решить проблему


//задача 2
//Исправьте проблему предыдущей задачи через стрелочную функцию.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     setInterval(() => {
//         this.value = Number(this.value) + 1;
//     }, 1000);
// });


// Решение проблемы через замыкание

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     function func(self) {
//         return function() {
//             console.log(self.value);
//         }
//     }
//
//     setInterval(func(this), 1000);
// });


// Передача контекста параметром функции setInterval


//задача 2
//Пусть дан такой код:
//
// <input type="button" id="elem" value="10">
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value--;
// 	}, 1000);
// });
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит.
//Исправьте ошибку автора кода, используя изученный в данном уроке способ.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//     setInterval(function(self) {
//         self.value--;
//     }, 1000, this);
// });


// Практика на таймеры и работу с DOM в JavaScript


//задача 1
//Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

// let start = document.querySelector('#start'),
//     text = document.querySelector('#text'),
//     i = 1;
//
// start.addEventListener('click', function () {
//     setInterval(function (self) {
//         text.innerHTML = i++
//     }, 1000, this);
// })


//задача 2
//Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.


// let start = document.querySelector('#start'),
//     text = document.querySelector('#text'),
//     i = 10,
//     timerId;
//
// start.addEventListener('click', function () {
//     timerId = setInterval(function (self) {
//         if (i == 0){
//             clearInterval(timerId);
//         }
//
//         text.innerHTML = i--;
//
//     }, 1000, this);
// })


//задача 3
//Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

// let inp = document.querySelector('#start');
//
// setInterval(function () {
//     inp.value = Number(inp.value) * Number(inp.value);
// }, 1000);


//задача 4
//Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

// let elem = document.querySelector('#elem'),
//     text = document.querySelector('#text'),
//     timerId;
//
//
// elem.addEventListener('blur', function () {
//     timer = Number(elem.value);
//     timerId = setInterval(()=> {
//         if (timer == 0){
//             clearInterval(timerId);
//         }
//         text.innerHTML = timer--;
//
//     }, 1000);
// })



//задача 5
//Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

// let inp = document.querySelector('#elem'),
//     btn = document.querySelector('#btn'),
//     text = document.querySelector('#text'),
//     timerId;
//
// btn.addEventListener('click', function () {
//     text.innerHTML = inp.value;
//     let i = Number(inp.value);
//
//     timerId = setInterval(() => {
//         if (i == 0){
//             clearInterval(timerId)
//         }
//         text.innerHTML = i--;
//     }, 1000)
// })


//задача 6
//Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.

// let text = document.querySelector('#text'),
//     start = document.querySelector('#start'),
//     stop = document.querySelector('#stop'),
//     timerId,
//     i = Number(text.innerHTML);
//
// start.addEventListener('click', function () {
//     timerId = setInterval(() => {
//         text.innerHTML = i++;
//     }, 1000);
// })
//
// stop.addEventListener('click', function () {
//     clearInterval(timerId);
// });


//задача 7
//Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

// let text = document.querySelector('#text');
//
// setInterval(function () {
//     if(text.style.background == 'red'){
//         text.style.background = 'green'
//     }else {
//         text.style.background = 'red'
//     }
// }, 1000);


//задача 8
//Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце: 16:55:11

// let time = document.querySelector('#time');
//
// function addZero(num){
//     if(num <= 9){
//         return '0'+num;
//     }else {
//         return num
//     }
// }
//
// setInterval(() => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
// }, 1000);


// Функция setTimeout в JavaScript


//задача 1
//Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.

// let text = document.querySelector('#text');
//
// setTimeout(() => {
//     text.innerHTML = 'Текст вывелся через 10 секунд'
// }, 10000);


// Запуск таймера


//задача 2
//Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.

// let i = 0;
// func()
//
// function func() {
//     console.log(++i);
//     setTimeout(func, 1000*i)
// }


//Создание и вставка элементов на JavaScript


//задача 1
//Дан ol:
// <ol id="elem"></ol>
// Вставьте ему в конец li с текстом 'пункт'.

// let elem = document.querySelector('#elem'),
//     p = document.createElement('li');
//
// p.innerHTML = 'пункт';
// elem.appendChild(p);


//задача 2
//Дан ol и кнопка:
// <ol id="elem"></ol>
// <button id="button">click me</button>
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'пункт'.

// let elem = document.querySelector('#elem'),
//     btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     tag_li = document.createElement('li');
//     tag_li.innerHTML = 'пункт';
//     elem.appendChild(tag_li);
// })


//Привязывание событий при вставке элементов


//задача
//Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.

// let elem = document.querySelector('#elem'),
//     btn = document.querySelector('#button');
//
//
// btn.addEventListener('click', function () {
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = 'пункт';
//     elem.appendChild(tag_li);
//     tag_li.addEventListener('click', () =>{
//         tag_li.innerHTML += '!';
//     })
// })


//Создание элементов в цикле на JavaScript


//задача
//Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.

// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 10; i++){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = i;
//
//     parent.appendChild(tag_li);
// }


// Навешивание обработчиков в цикле на JavaScript


// задача
//Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.

// let parent = document.querySelector('#parent'),
//     text = document.querySelector('#elem');
//
// for (let i = 1; i <= 5; i++){
//     let inp = document.createElement('input');
//     parent.appendChild(inp);
//
//     inp.addEventListener('blur', () =>{
//         text.innerHTML = inp.value;
//     })
// }


// Создание элементов из массива на JavaScript


// задача
//let parent = document.querySelector('#parent');
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.innerHTML = elem;
//
// 	parent.appendChild(p);
// }
//Модифицируйте код так, чтобы по клику на абзац к его содержимому прибавлялась единица.

// let parent = document.querySelector('#parent');
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.innerHTML = elem;
//
// 	parent.appendChild(p);
//
// 	p.addEventListener('click', function () {
//         p.innerHTML += '!';
//     })
// }


//Практика на создание списков ul на JavaScript


//задача 1
//Дан массив. Выведите его элементы в виде списка ul так, чтобы каждый элемент попал в свою li.

// let arr = [1, 2, 3, 4, 5],
//     parent = document.querySelector('#parent');
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//
//     parent.appendChild(tag_li);
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.

// let arr = [1, 2, 3, 4, 5],
//     parent = document.querySelector('#parent');
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//
//     parent.appendChild(tag_li);
//
//     tag_li.addEventListener('click', function () {
//         tag_li.innerHTML += '!';
//     })
// }


//задача 3
//Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.

// let arr = [1, 2, 3, 4, 5],
//     parent = document.querySelector('#parent');
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//
//     parent.appendChild(tag_li);
//
//     tag_li.addEventListener('click', function func() {
//         tag_li.innerHTML += '!';
//         tag_li.removeEventListener('click', func);
//     })
//
// }


//задача 4
//Дан ul:
// <ul id="elem"></ul>
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

// let tag_ul = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//     tag_ul.appendChild(tag_li);
// }


//задача 5
//Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.

// let tag_ul = document.querySelector('#elem'),
//     text = document.querySelector('#text');
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//     tag_ul.appendChild(tag_li);
//
//     tag_li.addEventListener('click', function () {
//         text.innerHTML = tag_li.innerHTML
//     })
// }


//задача 6
//Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.

// let tag_ul = document.querySelector('#elem'),
//     text = document.querySelector('#text');
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//     tag_ul.appendChild(tag_li);
//
//     tag_li.addEventListener('click', function () {
//         tag_li.innerHTML += '!'
//     })
// }


//задача 7
//Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.

// let tag_ul = document.querySelector('#elem'),
//     text = document.querySelector('#text');
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr){
//     let tag_li = document.createElement('li');
//     tag_li.innerHTML = elem;
//     tag_ul.appendChild(tag_li);
//
//     tag_li.addEventListener('click', function func() {
//         tag_li.innerHTML += '!'
//
//         tag_li.removeEventListener('click', func);
//     })
// }


//Создание HTML таблиц на JavaScript


//задача 1
//Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.

// let table = document.querySelector('#table');
//
// for (let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');
//
//     for (let i = 1; i <=5; i++){
//         let td = document.createElement('td');
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.

// let table = document.querySelector('#table');
//
// for (let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');
//
//     for (let i = 1; i <=10; i++){
//         let td = document.createElement('td');
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }


//задача 3
//Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.

// let table = document.querySelector('#table');
//
// for (let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');
//
//     for (let i = 1; i <=10; i++){
//         let td = document.createElement('td');
//         td.innerHTML = 'x';
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }


//задача 4
//Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

// let table = document.querySelector('#table'),
//     inp_h = document.querySelector('#height'),
//     inp_w = document.querySelector('#width'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', func);
//
// function func() {
//     for (let i = 1; i <= Number(inp_h.value); i++){
//         let tr = document.createElement('tr');
//         for (let i = 1; i <= Number(inp_w.value); i++){
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }


// Последовательное заполнение HTML таблиц


//задача 1
//Выведите на экран таблицу table размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.

// let table = document.querySelector('#table'),
//     k = 1;
//
// for (let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');
//
//     for (let i = 1; i <= 5; i++){
//         let td = document.createElement('td');
//         td.innerHTML = k;
//         k++
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.

// let table = document.querySelector('#table'),
//     k = 2;
//
// for (let i = 1; i <= 5; i++){
//     let tr = document.createElement('tr');
//
//     for (let i = 1; i <= 5; i++){
//             let td = document.createElement('td');
//             td.innerHTML = k;
//             k += 2;
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }


//Создание HTML таблицы из массива на JavaScript


//задача 1
//let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// Выведите элементы приведенного массива в виде HTML таблицы table.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
//
// let table = document.querySelector('#table');
//
// for (let subArr of arr){
//     let td = document.createElement('tr');
//     for (let elem of subArr){
//         let tr = document.createElement('td');
//         tr.innerHTML = elem;
//         td.appendChild(tr)
//     }
//     table.appendChild(td);
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
//
// let table = document.querySelector('#table');
//
// for (let subArr of arr){
//     let td = document.createElement('tr');
//     for (let elem of subArr){
//         let tr = document.createElement('td');
//         tr.innerHTML = elem * elem;
//         td.appendChild(tr)
//     }
//     table.appendChild(td);
// }


// Создание HTML таблицы из массива объектов


//задача 1
//Дан следующий массив с работниками:
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите элементы этого массива в виде HTML таблицы.

// let table = document.querySelector('#table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
//
// for (let empl of employees){
//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//     td1.innerHTML = empl.name;
//     tr.appendChild(td1);
//
//     let td2 = document.createElement('td');
//     td2.innerHTML = empl.age;
//     tr.appendChild(td2);
//
//     let td3 = document.createElement('td');
//     td3.innerHTML = empl.salary;
//     tr.appendChild(td3);
//
//     table.appendChild(tr)
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.

// let table = document.querySelector('#table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
//
// for (let empl of employees){
//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//     td1.innerHTML = empl.name;
//     tr.appendChild(td1);
//
//     let td2 = document.createElement('td');
//     td2.innerHTML = empl.age;
//     tr.addEventListener('click', () => {
//         td2.innerHTML = Number(td2.innerHTML) + 1;
//     })
//     tr.appendChild(td2);
//
//     let td3 = document.createElement('td');
//     td3.innerHTML = empl.salary;
//     tr.appendChild(td3);
//
//     table.appendChild(tr)
// }


//задача 3
//Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.

// let table = document.querySelector('#table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
//
// for (let empl of employees){
//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//     td1.innerHTML = empl.name;
//     tr.appendChild(td1);
//
//     let td2 = document.createElement('td');
//     td2.innerHTML = empl.age;
//     tr.addEventListener('click', () => {
//         td2.innerHTML = Number(td2.innerHTML) + 1;
//     })
//     tr.appendChild(td2);
//
//     let td3 = document.createElement('td');
//     td3.innerHTML = empl.salary;
//     td3.addEventListener('click', () => {
//         td3.innerHTML = Math.round(Number(td3.innerHTML) * 1.1)
//     })
//     tr.appendChild(td3);
//
//     table.appendChild(tr)
// }


// Добавление рядов и колонок в HTML таблицу


//задача 1
//Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

// let table = document.querySelector('#table'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', () => {
//     let tr = document.createElement('tr');
//     for (let i = 1; i <= 5; i++){
//         let td = document.createElement('td');
//         td.innerHTML = i;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// })


//задача 2
//Дана таблица размером 2 на 2:
//
// <table id="table">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>

// Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

// let table = document.querySelector('#table'),
//     btn = document.querySelector('#btn'),
//     k = 2;
//
// btn.addEventListener('click', () => {
//     let trs = document.querySelectorAll('#table tr');
//     for (let elem of trs){
//         let td = document.createElement('td');
//         elem.appendChild(td);
//     }
//
//     k++;
//     let tr = document.createElement('tr');
//     for (let i = 1; i <= k; i++){
//         let td = document.createElement('td')
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// })


// Изменение ячеек HTML таблицы на JavaScript


//задача
//Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.

// let tds = document.querySelectorAll('#table td'),
//     btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     for (let elem of tds){
//         console.log(elem);
//         let a = Number(elem.innerHTML);
//         elem.innerHTML = a + a;
//     }
// })


// Порядковый номер ячейки таблицы на JavaScript


//задача
//Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер с конца. То есть последней ячейке запишите 1, предпоследней - 2, и так далее.

// let tds = document.querySelectorAll("#table td"),
//     k = tds.length;
//
// for (let i = 0; i < tds.length; i++){
//     tds[i].innerHTML = k--
// }


// Номер колонки и ряда таблицы на JavaScript


//задача
//Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер в ряду.

// let trs = document.querySelectorAll('#table tr');
//
// for (let i = 0; i < trs.length; i++){
//     let tr = trs[i];
//     let tds = tr.querySelectorAll('td');
//
//     for (let j = 0; j < tds.length; j++){
//         let td = tds[j];
//         td.innerHTML = i + ':' + j
//     }
// }


// Порядковый номер ячейки по клику на JavaScript


//задача
//Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в эту ячейку записывался порядковый номер этой ячейки с конца таблицы.

// let tds = document.querySelectorAll('#table td'),
//     k = 0;
//
// for (let i = tds.length; i > 0; i--){
//     tds[k++].addEventListener('click', function () {
//         this.innerHTML = i;
//     })
// }


// Порядковый номер клика в ячейке HTML таблицы


//задача 1
//let tds = document.querySelectorAll('#table td');
//
// let i = 1;
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.innerHTML = i;
// 		i++;
// 	});
// }

//Модифицируйте код  так, чтобы повторное нажатие по ячейке не приводило к увеличению счетчика.
// let tds = document.querySelectorAll('#table td');
//
// let i = 1;
// for (let td of tds) {
// 	td.addEventListener('click', function func() {
// 		this.innerHTML = i;
// 		i++;
// 		td.removeEventListener('click', func);
// 	});
// }


//Чередование


//задача 2
//let tds = document.querySelectorAll('#table td');
//
// let i = 1;
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.innerHTML = i;
//
// 		if (i == 1) {
// 			i = 2;
// 		} else {
// 			i = 1;
// 		}
// 	});
// }
//Модифицируйте код так, чтобы при кликах на ячейки чередовались числа 1, 2 и 3.

// let tds = document.querySelectorAll('#table td');
//
// let i = 1;
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.innerHTML = i;
//
// 		if (i == 1) {
// 			i = 2;
// 		} else if (i == 2) {
// 			i = 3;
// 		}else if (i == 3){
// 		    i = 1;
//         }
// 	});
// }


// Удаление элементов на JavaScript


//задача 1
//Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li id="elem">2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по нажатию на кнопку удалялся элемент #elem.

// let parent = document.querySelector('#parent'),
//     elem = document.querySelector('#elem'),
//     btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     parent.removeChild(elem)
// })


//задача 2
//Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.

// let parent = document.querySelector('#parent'),
//     btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     let elem = parent.lastElementChild;
//     parent.removeChild(elem);
// })


// Без родителя


//задача 3
//Дан следующий код:
//
// <ul>
// 	<li>1</li>
// 	<li id="elem">2</li>
// 	<li>3</li>
// </ul>
// Сделайте так, чтобы по нажатию на #elem этот элемент удалился.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function () {
//     elem.parentElement.removeChild(elem)
// })


//Самоудаление элементов на JavaScript


//задача
//Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// Сделайте так, чтобы любая li удалялась по клику на нее.

// let parent = document.querySelector('#parent'),
//     elems = document.querySelectorAll('#parent li');
//
// for (let elem of elems){
//     elem.addEventListener('click', function () {
//         parent.removeChild(this);
//     })
//
// }


//Самоудаление новых элементов на JavaScript


//задача
//Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

// let parent = document.querySelector('#parent'),
//     btn = document.querySelector('#button'),
//     elems = document.querySelectorAll('#parent li'),
//     len = elems.length;
//
// function removeCh(el) {
//     el.addEventListener('click', function () {
//         parent.removeChild(this)
//     })
//
// }
//
// for (let elem of elems) {
//     removeCh(elem);
// }
//
// btn.addEventListener('click',  () => {
//     let li = document.createElement('li');
//     li.innerHTML = ++len;
//     parent.appendChild(li);
//     removeCh(li);
// })


//Ссылка на удаление элемента на JavaScript


//задача
//<div id="parent">
//     <p id="elem">text</p>
//     <a href="#" id="remove">remove</a>
// </div>
//Пусть у нас абзац. Давайте рядом с ним сделаем ссылку, с помощью которой этот абзац можно будет удалить.

// let elem = document.querySelector('#elem'),
//     remove = document.querySelector('#remove');
//
// remove.addEventListener('click', function (e) {
//     elem.parentElement.removeChild(elem);
//     e.preventDefault();
// })


//Создание ссылок для удаление элементов на JavaScript


//задача 1
//Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.

// let elems = document.querySelectorAll('#parent li');
//
// for (let elem of elems){
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.innerHTML = 'remove';
//     elem.appendChild(remove);
//
//     remove.addEventListener('click', function (e) {
//         elem.parentElement.removeChild(elem);
//         e.preventDefault();
//     })
// }


//задача 2
//Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.

// let table = document.querySelector('#table'),
//     trs = document.querySelectorAll('#table tr');
//
// for (let tr of trs){
//     let td = document.createElement('td');
//     let link = document.createElement('a');
//     link.href = '';
//     link.innerHTML = 'remove';
//     td.appendChild(link)
//     tr.appendChild(td);
//
//     link.addEventListener('click', function (e) {
//         tr.parentElement.removeChild(tr);
//         e.preventDefault();
//     })
// }


//Редактирование отдельного элемента на JavaScript


//задача 1
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.value = elem.innerHTML; // записываем в инпут текст абзаца
//
// input.addEventListener('blur', function() {
//     elem.innerHTML = this.value;
// });
//Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.value = elem.innerHTML; // записываем в инпут текст абзаца
//
// input.addEventListener('input', function() {
//     elem.innerHTML = this.value;
// });


//задача 2
//Давайте сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац, чтобы по потери фокуса в инпуте менялся текст абзаца, при
//повторном нажатии не появлялись новые инпуты

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function () {
//     let input = document.createElement('input');
//     input.value = elem.innerHTML;
//
//     input.addEventListener('blur', function () {
//         elem.innerHTML = this.value;
//         this.parentElement.removeChild(this)
//     })
//
//     elem.parentElement.appendChild(input);
// })


//Прячем текст при редактировании элемента на JavaScript


//задача
//Дан обзац - при нажатии текст абзаца появляется в инпуте для редактирования. Инпут появляется в абзаце. При потере фокуса инпута - текст инпута появляется в абзаце.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function func() {
//     let input = document.createElement('input');
//     input.value = this.innerHTML;
//     elem.innerHTML = '';
//     elem.appendChild(input);
//
//     input.addEventListener('blur', function () {
//         elem.innerHTML = this.value;
//         elem.addEventListener('click', func);
//
//     })
//
//     elem.removeEventListener('click', func);
// })


// Редактирование в группе элементов на JavaScript


//задача 1
// Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.

// let elems = document.querySelectorAll('#parent li');
//
// for (let elem of elems){
//     elem.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = elem.innerHTML;
//         elem.innerHTML = '';
//         elem.appendChild(input);
//
//         input.addEventListener('blur', function () {
//             elem.innerHTML = input.value;
//             elem.addEventListener('click', func);
//         })
//         elem.removeEventListener('click', func);
//     })
// }


//задача 2
//Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.

// let tds = document.querySelectorAll('#parent tr td');
//
// for (let elem of tds){
//     elem.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = elem.innerHTML;
//         elem.innerHTML = '';
//         elem.appendChild(input);
//
//         input.addEventListener('blur', function () {
//             elem.innerHTML = input.value;
//             elem.addEventListener('click', func);
//         })
//
//         elem.removeEventListener('click', func);
//     })
// }


// Одновременное редактирование и удаление элементов


//задача 1
//Дан следующий HTML код:
//
// <div id="parent">
// 	<p><span>text1</span></p>
// 	<p><span>text2</span></p>
// 	<p><span>text3</span></p>
// </div>
// Добавьте ссылку на удаление в конец каждого абзаца.
// Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.

let spans = document.querySelectorAll('#parent span'),
    ps = document.querySelectorAll('#parent p')

// for (let span of spans){
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.innerHTML = 'remove';
//     span.parentElement.appendChild(remove);
//
//
//     remove.addEventListener('click', function (e) {
//         span.parentElement.removeChild(span);
//         remove.parentElement.removeChild(remove);
//         e.preventDefault();
//     })
//
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.innerHTML;
//         span.innerHTML = '';
//
//         span.parentElement.appendChild(input)
//
//         input.addEventListener('blur', function () {
//             span.innerHTML = input.value;
//             input.parentElement.removeChild(input);
//             span.addEventListener('click', func)
//         })
//
//         span.removeEventListener('click', func)
//     })
// }


//задача 2
//Пусть теперь изначально тегов span нет:
//
// <div id="parent">
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>
// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.

// let parag = document.querySelectorAll('#parent p');
//
// for (let p of parag){
//     let span = document.createElement('span');
//     span.innerHTML = p.innerHTML;
//     p.innerHTML = '';
//     p.appendChild(span);
//
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.innerHTML = 'remove';
//     p.appendChild(remove);
//
//     remove.addEventListener('click', function (e) {
//         p.parentElement.removeChild(p);
//         e.preventDefault();
//     })
//
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.innerHTML;
//         span.innerHTML = '';
//         span.appendChild(input);
//
//         input.addEventListener('blur', function () {
//             span.innerHTML = input.value;
//             // input.parentElement.removeChild(input);
//             span.addEventListener('click', func);
//         })
//
//         span.removeEventListener('click', func)
//     })
// }


// Стилизация элементов на JavaScript

//задача 1
//Дан следующий HTML код:
//
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).

// let parag = document.querySelectorAll('p');
//
// for (let p of parag){
//     let span = document.createElement('span');
//     span.innerHTML = p.innerHTML;
//     p.innerHTML = '';
//     p.appendChild(span)
//
//     let link = document.createElement('a');
//     link.href = '';
//     link.innerHTML = ' перечеркнуть';
//     p.appendChild(link);
//
//     link.addEventListener('click', function (e) {
//         span.classList.toggle('cross_out');
//         e.preventDefault();
//     })
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
// let parag = document.querySelectorAll('p');
//
// for (let p of parag){
//     let span = document.createElement('span');
//     span.innerHTML = p.innerHTML;
//     p.innerHTML = '';
//     p.appendChild(span)
//
//     let link = document.createElement('a');
//     link.href = '';
//     link.innerHTML = ' перечеркнуть';
//     p.appendChild(link);
//
//     link.addEventListener('click', function (e) {
//         span.classList.add('cross_out');
//         link.parentElement.removeChild(link);
//         e.preventDefault();
//     })
// }


//задача 3
//Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.

// let trs = document.querySelectorAll('#parent tr');
//
// for (let tr of trs){
//     let new_td = document.createElement('td');
//     tr.appendChild(new_td);
//
//     let link = document.createElement('a');
//     link.href = '';
//     link.innerHTML = 'Зеленый ряд';
//     new_td.appendChild(link);
//
//     link.addEventListener('click', function (e) {
//         tr.classList.add('green');
//         e.preventDefault();
//     })
// }


//задача 4
//Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.
// let trs = document.querySelectorAll('#parent tr');
//
// for (let tr of trs){
//     let new_td = document.createElement('td');
//     tr.appendChild(new_td);
//
//     let link = document.createElement('a');
//     link.href = '';
//     link.innerHTML = 'Зеленый ряд';
//     new_td.appendChild(link);
//
//     link.addEventListener('click', function (e) {
//         tr.classList.toggle('green');
//         e.preventDefault();
//     })
// }


// Кнопки для скрытия и показа элемента на JavaScript


//задача
//Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.

// let elem = document.querySelector('#elem'),
//     show_hide = document.querySelector('#show-hide');
//
// show_hide.addEventListener('click', function () {
//     elem.classList.toggle('hidden');
// })


// Много элементов с кнопками показа на JavaScript


//задача 1
//Сделаем так, чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons){
//     button.addEventListener('click', function () {
//         let elem = document.querySelector('#' + this.dataset.elem);
//         elem.classList.toggle('hidden');
//     })
// }


//задача 2
//Cделать так, чтобы связь была по порядковому номеру: пусть первая кнопка скрывает первый абзац, вторая кнопка - второй и так далее.

// let buttons = document.querySelectorAll('button'),
//     elems = document.querySelectorAll('p');
//
// for (let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', function () {
//         elems[i].classList.toggle('hidden');
//     })
// }


//задача 3
//Aбзац, связанный с кнопкой, является ее соседом слева. Можно это использовать в качестве связи.

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons){
//     button.addEventListener('click', function () {
//         this.previousElementSibling.classList.toggle('hidden');
//     })
// }


// Активация элементов на JavaScript


//задача 1
//Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.

// let elems = document.querySelectorAll('li');
//
// for (let li of elems){
//     li.addEventListener('click', function () {
//         this.classList.add('active');
//     })
// }


//задача 2
//Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.

// let elems = document.querySelectorAll('li');
//
// for (let li of elems){
//     li.addEventListener('click', function () {
//         this.classList.toggle('active');
//     })
// }


// Чередование стилей активации на JavaScript


//задача 1
//Сделайте так, чтобы происходило чередование цветов: пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный и так далее.

// let tds = document.querySelectorAll('#table td'),
//     color = 'color1';
//
// for (let td of tds){
//     td.addEventListener('click', function () {
//         if (color == 'color1'){
//             color = 'color2'
//         }else {
//             color = 'color1'
//         }
//
//         this.classList.add(color)
//     })
// }


// Чередование многих цветов из массива


//задача 2
//Пусть теперь мы хотим чередовать не два цвета, а произвольное количество

// let tds = document.querySelectorAll('#table td'),
//     i = 0,
//     colors = ['color1', 'color2', 'color3'];
//
// for (let td of tds){
//     td.addEventListener('click', function () {
//         this.classList.add(colors[i]);
//
//         i++;
//         if (i == colors.length){
//             i = 0;
//         }
//     })
// }


// Активация ограниченного количества элементов


//задача 1
//Сделайте так, чтобы можно было активировать ограниченное количество элементов.

// let tds = document.querySelectorAll('#table td');
//
// for (let td of tds){
//     td.addEventListener('click', function () {
//         let activeTds = document.querySelectorAll('#table td.active');
//
//         if (activeTds && activeTds.length < 3){
//             this.classList.add('active');
//         }
//     })
// }


//задача 2
//Сделайте так, чтобы в одном ряду таблице можно было активировать не более 5-ти ячеек.

// let trs = document.querySelectorAll('#table tr'),
//     tds = document.querySelectorAll('#table td');
//
// for (let td of tds){
//     td.addEventListener('click', function () {
//         let i = td.parentElement.rowIndex;
//         let activeTds = trs[i].querySelectorAll('#table td.active');
//         if (activeTds && activeTds.length < 5){
//             this.classList.add('active');
//         }
//     })
// }


//задача 3
//Сделайте так, чтобы  для активированной ячейки нельзя было активировать ее соседей слева и справа.

// let tds = document.querySelectorAll('#table td');
//
// for(let td of tds) {
//     td.addEventListener('click', function (){
//         let next = this.nextElementSibling;
//         let prev = this.previousElementSibling;
//         if( ((next == null) && (!prev.classList.contains('active'))) ||
//             ((prev == null) && (!next.classList.contains('active'))) ||
//             (next != null) && (prev != null) &&
//             (!prev.classList.contains('active')) && (!next.classList.contains('active')))
//             this.classList.toggle('active');
//     });
// }


//задача 4
//Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей сверху и снизу.


let trs = document.querySelectorAll('#table tr');
for (let i = 0; i <= trs.length; i++) {
    let tds = document.querySelectorAll('#table tr:nth-child('+i+') td');
    for (let j = 0; j < tds.length; j++) {
        tds[j].addEventListener('click', function() {
            let topTd = document.querySelector('#table tr:nth-child('+Number(i-1)+') td:nth-child('+Number(j+1)+')');
            let bottomTd = document.querySelector('#table tr:nth-child('+Number(i+1)+') td:nth-child('+Number(j+1)+')');
            if ((topTd != null) && (bottomTd != null) && !topTd.classList.contains('active') && !bottomTd.classList.contains('active')
                || (topTd == null) && !bottomTd.classList.contains('active')
                || (bottomTd == null) && !topTd.classList.contains('active'))
                this.classList.toggle('active');
        });
    }
}






