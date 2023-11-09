'use strict';

const box = document.querySelector('.box');

let observe = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);
});

observe.observe(box, {
    childList: true
});