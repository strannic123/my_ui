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































