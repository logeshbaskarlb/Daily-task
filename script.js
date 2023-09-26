/*
//Step 01: Create a XHR Objects
//var variableName: userdefined your choice
var request = new XMLHttpRequest();
//Step 02: Specifiy the API
request.open("GET", "https://restcountries.com/v2/all");
//Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //whatever conversion has to be done here only
    //not outside
}*/

let obj1 = {
    name:"Person 1",
    age:5
};
let obj2 ={
    age: 5,
    name:"Person 1"
};

JSON.stringify(obj1) === JSON.stringify(obj2)
// false
    
.isEqual(obj1, obj2)
// true
