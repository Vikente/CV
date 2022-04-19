// function Vika(num){
//     if (num === 0) {
//         return alert('У Вики понос.')
//      }
//     else if (num % 2 === 0){
//     return alert('Я тебя люблю, Викуся!')
//     }
    
//     else {
//         return alert('Ты самая лучшая и красивая!')
//     }
// }
// Vika(34532563253)



// Переменные 

// var name1 = 'Vika' //Устарешвая переменная

// let age = 20 // Переменная которая может меняться 

// const name3 = 'Vitalik' // Постоянная переменная
// console.log(name1)



// Типы данных

// let string = 'Vikusha age = ' // String - (строка)

// let number = 3 

// let boolean = true


// let student = {
//     name1: 'Vikusya',
//     age: 20,
//     virgin: false,
// }

// console.log(student.age)




//Переменные 

//var firstName = 'Viktoria'  //string
//const lastName = 'Zinkevich'  //string
//let age = 20  //number
//const lalalend = true  //boolean
//console.log (lalalend)


//Мутирование
// console.log ('Имя человека: ' + name + ', а возраст человека: ' + age + ' лет' )
// const lastName = prompt ('Введите фамилию')
// alert (firstName + ' ' + lastName)


//Операторы
// const currentYear = 2022
// const birthYear = 2001
// console.log (currentYear - birthYear)
// const a = 5
// const b = 10
// console.log (a - b)
// console.log (a + b)
// console.log (a * b)
// console.log (a / b)



//Типы данных
// const isDada = true    - boolean 
// const name = 'Vika'    -  string
// const age = 20         - number 
// let x                  - undefind 
// console.log(typeof isDada)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null) - null



//Приоритет операторов 

// const fullAge = 20
// const currentYear = 2022
// const birthYear = 2001

// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)



//Условные операторы 

// const courseStatus = 'ready' 


// if (courseStatus === 'ready') {
//     console.log('Курс уже готов')
// }

// if (courseStatus === 'pedding') {
//     console.log('Курс еще в разработке')
// }



//Булевая логика

// &&  и
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false
// ||  или 
// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false
// !   не
// alert( !true ); // false
// alert( !0 ); // true


//Функции

// function calculateAge(year) {
//     return 2022 - year 
// }

// // const myAge = calculateAge(2001)
// // console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

// if (age > 0) {
//     console.log('Человек по имени ' + name + ' имеет возраст ' + age)
//   } else {
//       console.log('Будущее')
//   }
// }

// logInfoAbout('Vika', 2001)
// logInfoAbout('Vlad',2000)
// logInfoAbout('Lev',2026)


//Массивы

// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars)

// cars[0] = 'Порш'
// cars[3] = 'Мазда'



// Циклы

// const cars = ['Vika', 'otlicno', 'soset', 'chlen']
// for (let i = 0; i < cars.length; i++) {
// const car = cars[i]
// console.log(car);
// }
// for(let car of cars){
//     console.log(car);
// }


//Объекты

const person = {
    firstName: 'Vika',
    lastName: 'Zinkevich',
    year: 2001,
    languages: ['Ru', 'En', 'Pl'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}
console.log(person)