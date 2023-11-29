
//// JavaScript pro Karolis Lapienis
//// js loops atsiskaitymas 

"use strict"

///////////////////// 1 ////////////////////////////////////

// for(;;) {
//     let num = parseInt(prompt("Iveskite skaiciu"))
//     if (num < 0) {
//         console.log(`Rastas pirmas neigiamas skaicius: ${num}`)
//         break
//     }
// }

//////////////// 2 ///////////////////////////////////////

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 !== 0) {
//         console.log(i)
//     }
// }

/////////////// 3 /////////////////////////////////////////

// for (let i = 2; i <= 12; i++) {
//     let kubas = i ** 2
//     console.log(kubas)
// }

/////////////// 4 /////////////////////////////////////////

// const persons = {
//     jonas: 30,
//     petras: 26,
//     ona: 45,
//     maryte: 36,
//     antanas: 77,
//     "teta zita": 86,
// }

// for (let key in persons) {
//     console.log(`Name: ${key}, age: ${persons[key]}`)
// }

////////////// 5 ////////////////////////////////////////////

// const dogBaris = {
//     name: "baris",
//     heigth: 40,
//     weigth: 35,
//     age: 20,
//     "eye color": "brown",
//     color: "tiger-striped",
// }
// let attributeCount = 0

// for (let attribute in dogBaris) {
//     attributeCount ++
// }

// console.log(attributeCount)

///////////// 6 /////////////////////////////////////////////

// let sentence = prompt("Įveskite sakinį:")
// let wordsFromSentence = sentence.match(/[a-zA-Z]+/g)

// for (let word of wordsFromSentence) {
//     console.log(word)
// }

///////////////// 7 ////////////////////////////////////////

// const sentence = "Laba diena su vistiena"
// let characterCount = 0

// for (let character of sentence) {
//     console.log(character)
//     characterCount ++
// }

// console.log(`ciklo suskaiciuotas simboliu kiekis: ${characterCount}, length suskaiciuotas simboliu kiekis: ${sentence.length}`)

//////////////////// 8 ////////////////////////////////////////

// let num = 20

// while (num <= 50) {
//     if (num % 2 == 0) {
//         console.log(num)
//     }
//     num++
// }

/////////////////// 9 ////////////////////////////////////////

// while (true) {
//     let num = parseInt(prompt("Iveskite skaiciu"))
//     if (num < 0) {
//         alert("Ivestas nelyginis skaicius, ciklas nutraukiamas")
//         break
//     }
// }

//////////////////////// 10 //////////////////////////////////

// let sum = 0
// let num = 0

// do {
//     num = parseInt(prompt("Iveskite skaiciu"))
//     sum += num
// } while (num !== 0)

// console.log(sum)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////// nutraukimoSkaicius = 0. Kad nepridetu nutraukimoSkaiciaus galima butu daryti taip:  /////////////////////
////                                                                                                ///////////////
//// do {                                                                                           ///////////////
////     num = parseInt(prompt("Iveskite skaiciu"))                                                 ///////////////
////     if (num !== nutraukimoSkaicius) {                                                          ///////////////
////         sum += num                                                                             ///////////////
////     }                                                                                          ///////////////
//// } while (num !== nutraukimoSkaicius)                                                           ///////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////