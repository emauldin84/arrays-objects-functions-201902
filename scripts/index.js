// add your solutions here

// Positive Numbers
// let arr = [1, -2, 3, 0, -55, -65, 444]

// function returnsPositives (fullArr) {
//     let newArr = [];
    
//     fullArr.forEach(function (element) {
//         if (element > 0) {
//             newArr.push(element);
//         }
        
//     })
//     return newArr
// }

// Even Numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function returnsEvens (fullArr) {
//     let newArr = [];
    
//     fullArr.forEach(function (element) {
//         if (element % 2 === 0) {
//             newArr.push(element);
//         }
        
//     })
//     return newArr
// }

// Square the Numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function square(fullArr) {
//     let newArr = [];
    
//     fullArr.forEach(function (element) {
        
//         newArr.push(element * element);
        
//     })
//     return newArr
// }

// Cities 1
// const cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ];

// function coolCities(book) {
//     newArray = [];
//     book.forEach(function (element) {
//         if (element.temperature > 70) {
//             newArray.push(element.name)
//         }
//     })
//     return newArray
// }

// Cities 2
// const cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ];

// function coolCities(book) {
//     newArray = [];
//     book.forEach(function (element) {
    
//         newArray.push(element.name)
        
//     })
//     return newArray
// }

// Good Job!
// const people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
// ];
// function goodJob(peepsArray) {
//     peepsArray.forEach(function (element) {
//         console.log(`Good Job ${element}!`)
//     }
//     )}

// 3 Times
// function fun() {
// console.log('Hello, World!')
// }
// function call3Times(fun) {
//     fun();
//     fun();
//     fun();
// }

// n Times
// function fun() {
//     return 'Hello, World!';
//     }

// function callNTimes(times, fun) {
//     let i = 0;
//     while(i < times) {
//         console.log(fun);
//         i++;
//     }
// }

//Str Multiply
// function strMultiply(str, times) {
//     let arr = [];

//     function range(min, max) {
//         for (let i = min; i < max; i++) {
//             arr.push(str);
//         }
//         return arr;
//     }
//     range(0, times)
//     let newString = arr.join('');
//     return newString;
// }

// Sort an Array
// const people = [
//         'Dom',
//         'Lyn',
//         'Kirk',
//         'Autumn',
//         'Trista',
//         'Jesslyn',
//         'Kevin',
//         'John',
//         'Eli',
//         'Juan',
//         'Robert',
//         'Keyur',
//         'Jason',
//         'Che',
//         'Ben'
//     ];
// people.sort()
// console.log(people);

// Sort an array 2
const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

let sortByLength = people.sort(function(a,b) {
    return ( b.length - a.length );
})

