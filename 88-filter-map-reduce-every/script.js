'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function (name) {
    return name.length < 5;
});
console.log(shortNames);

// map

let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map(item => item.toLowerCase());

// every / some

const some = [4, 'qwq', 'sdfsdfs'];
console.log(some.some(item => typeof (item) === 'number'));
console.log(some.every(item => typeof (item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];
// const result = arr.reduce((sum, current) => sum + current);
// console.log(result);

const arr = ['apple', 'pear', 'plum'];
const result = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(result);

//

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);

////////////
// Exercises

const films = [{
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return films.filter(item => item.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.reduce((acc, current) => `${typeof(acc) === 'object' ? acc.name : acc}, ${current.name}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}