const mySym = Symbol("key1");

const JSUser = {
    name : "lucky",
    "full name" : "lucky singh rajput",
    age :18,
    location : "narmadapuram",
    email : "lucky@accenture.com",
    isLoggedin : false,
    lastLoggedin : ["monday" , "tuesday","saturday"],
    [mySym]: "my-Symbol1",
}
// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

JSUser.greeting  = function(){
    console.log(` hello JS User,${this["full name"]}`);
}
console.log(JSUser.greeting());
