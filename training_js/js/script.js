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


















