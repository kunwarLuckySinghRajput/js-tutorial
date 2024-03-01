// const promiseOne = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         console.log('Async promiseOne executed');
//         resolve();
//     },1000);
    
// })

// promiseOne.then(()=>{
//     console.log("successfully executed");
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async promiseTwo executed');
//         resolve();
//     },1000);
// }).then(()=>{
//     console.log('successful execution');
// })



// const promiseThree = new Promise((resolve,reject)=>{
//     console.log("promise three is created")
//     resolve({name : 'lucky' , branch : 'csbs' , college : 'oist'});

// });

// promiseThree.then((data)=>{
//     console.log(data.name);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     console.log('promise Four created');
//     let error = false;
//     if(!error){
//         resolve({name : 'lucky' , branch : 'csbs' , college : 'oist'});
//     }
//     else{
//         reject('Error : Something went wrong');
//     }
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.name;
// }).then((username)=>{
//     console.log(username);
// }).catch((error1)=>{
//     console.log(error1);
// }).finally

// const promiseFive = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //console.log('promiseFive executed ');
//         },1000)
//         let error = true;
//         if(!error){
//             resolve({name : 'lucky' , branch : 'csbs' , college : 'oist'});
//         }
//         else{
//             reject('Error : Something went wrong');
//         }
// })

// async function consumeFive(){
//     //let response = await promiseFive;
//     //console.log(response);
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumeFive();


////////////////////////////////////////////////////////
// let arr = [];
// async function getAllUsers(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         //console.log(typeof data);
//          data.forEach((i)=>{
//            // console.log(i.company.name);
//             arr.push(i.company.name);
//         });
//         console.log(arr);
        
//     } catch (error) {
//         console.log(error,'ERROR 406');
//     }
// }
// getAllUsers();


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
       return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
