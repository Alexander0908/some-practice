'use script';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    surname = 'Petrenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

// function User1(name, age) {
//     this.name = name;
//     let userAge = age;

//     say = () => {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     }

//     this.getAge = function () {
//         return this._age;
//     }

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

const ivan = new User('Ivan', 27);
console.log(ivan.surname);

ivan.say();