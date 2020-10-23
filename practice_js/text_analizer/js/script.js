'use strict'

let text = document.querySelector('#text'),
    div = document.querySelector('#divInf'),
    chbOne = document.querySelector('#one'),
    chbTwo = document.querySelector('#two'),
    chbThree = document.querySelector('#three'),
    chbFour = document.querySelector('#four');

text.addEventListener('blur', function func() {

    function createP() {
        let prg = document.createElement('p');
        return prg;
    }

    function divAppend(elem) {
        div.appendChild(elem);
    }

    if (chbOne.checked){

        let inform = createP();
        if (text.value.length == 0){
            inform.innerHTML = 'Введено слов: 0'
        }else {
            inform.innerHTML = 'Введено слов: '+ text.value.trim().split(' ').length;
        }
        divAppend(inform)

    }

    if (chbTwo.checked){
        let pSymb = createP();
        pSymb.innerHTML = 'Введено символов: ' + text.value.split('').length
        divAppend(pSymb);
    }

    if (chbThree.checked){
        let pWithoutSpace = createP();
        pWithoutSpace.innerHTML = 'Введено символов без пробела: ' + text.value.replace(/ /g, "").length
        divAppend(pWithoutSpace);
    }

    if (chbFour.checked){
        let numSymbol = text.value;
        let counterSymb = numSymbol.split("");
        let pCountLetter = createP();
        let res = JSON.stringify(
            counterSymb.reduce((acc, el) => {
                acc[el] = (acc[el] || 0) + 1;
                return acc;
            }, {}), null, 2);
        pCountLetter.innerHTML = `Количество вхождения каждого символа ${res}`
        divAppend(pCountLetter);
    }
    text.removeEventListener('blur', func)
})








