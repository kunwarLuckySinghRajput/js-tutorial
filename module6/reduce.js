const arr = [1,2,3];

// const totalval = arr.reduce(function (acc,currVal){
//         console.log(`accumulator : ${acc} & Curent Value : ${currVal}`);
//         return acc+currVal;
// },0);
// console.log(totalval);

//using arrow function

const resVal = arr.reduce((acc,currVal)=>{
    console.log(`accumulator : ${acc} & Curent Value : ${currVal}`);
    return acc+currVal;
},0);

console.log(resVal);

//:::::::::::::::::::::::shopping cart::::::::::::::::::::::::::::::::

const shopping = [
    {
        courseName : " js course",
        price : 3999
    },
    {
        courseName : " py course",
        price : 4999
    },
    {
        courseName : " java course",
        price : 2999
    },
    {
        courseName : " cpp course",
        price : 1999
    },
]

const totalAmt = shopping.reduce((acc, item)=> acc+item.price,0);
console.log(totalAmt);