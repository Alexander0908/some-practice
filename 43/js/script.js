'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.getElementById('box'),
    oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns.style.width = '500px';

btns[1].style.borderRadius = '100%';

///
/// work with setTimeout
const btn = document.querySelector('.btn');
let timeId,
    i = 0;

btn.addEventListener('click', () => {
    // const timeId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});

clearInterval(timeId);

function logger() {
    if (i === 3) {
        clearInterval(timeId);
    }
    console.log('text');
    i++;
}

let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);