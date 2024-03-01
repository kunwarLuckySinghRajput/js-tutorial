const myNumbers = [1,2,3,4,5,6,7,8,9,10];

let newNums = myNumbers.map((nums)=>nums+10);
//console.log(newNums);

let checkNums = myNumbers.filter((nums) => {
    return nums+10;
})
//console.log(checkNums);
    let usingForEach =[];
    myNumbers.forEach((nums) =>{
        return usingForEach.push(nums+10);
    } )
    console.log(usingForEach);


    //====================chaining=======================

    const arr = [1,2,3,4,5,6,7,8,9];

    let res = arr.map((num)=>{
        return num*10;
    }).map((num)=>{
        return num-1;
    }).filter((num)=>{
        return num>40;
    })

    console.log(res);