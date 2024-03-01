const myArr = [0,1,2,3,4,];
//console.log(myArr);
// myArr.push(5);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(6);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);
//+++++++++++++++++++++++ slice vs splice ++++++++++++++++++++++++++++++++

// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log(myArr);

// const myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log(myArr);

//Array part2
//+++++++++++++++++++++++++++++++++++++++++++++

const MarvelHeros = ["ironman" , "hulk" , "thor"];
const dcHeros = ["superman" , "batman" , "flash"];
// MarvelHeros.push(dcHeros);
// console.log(MarvelHeros);
// const allHeros = MarvelHeros.concat(dcHeros);
// console.log(allHeros);

// const allNewHeros = [...MarvelHeros,...dcHeros];//spread opreadtor
// console.log(allNewHeros);

// ????????????????????????????? flat() ???????????????????????????
const newArray = [0,1,2,3,[1,2,3],5,6,[1,2,3,4,[2,5,8,9]]];
// console.log(newArray);
// console.log(newArray.flat(Infinity));

////////////////////////////////////////////

let fname = `lucky`;
// console.log(Array.isArray(fname));

// console.log(Array.from(fname));

// console.log(Array.from({name:"luckyji"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2 , score3 , score4));

//................................end................................