'use strict'

let text = document.querySelector('#write'),
    keys = document.querySelectorAll('li'),
    tabs = document.querySelector('.tab'),
    deletes = document.querySelector('.delete'),
    capsLock = document.querySelector('.capslock'),
    spaces = document.querySelector('.space'),
    shiftLeft = document.querySelector('.left-shift'),
    shiftRight = document.querySelector('.right-shift'),
    returns = document.querySelector('.return'),
    caps = false;


for (let key of keys){
    key.addEventListener('click', function (e) {

        if (e.target == capsLock ){
            caps = !caps;
            for (let key of keys){
                if (key.classList.contains('letter')){
                    if (caps){
                        key.innerHTML = key.innerHTML.toUpperCase();
                    }else {
                        key.innerHTML = key.innerHTML.toLowerCase();
                    }
                }
            }
        }

        if (e.target === tabs){
            text.value += '    ';
        }

        if (e.target === deletes){
            let del = text.value;
            let delRes = del.slice(0, -1);
            text.value = delRes;
        }

        if (e.target === spaces){
            text.value += ' ';
        }

        if (e.target != capsLock && e.target != tabs && e.target != deletes && e.target != spaces &&
            e.target != shiftLeft && e.target != shiftRight && e.target != returns){
            text.value += key.innerHTML;
        }

    })
}

