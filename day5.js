//for the given json iterate over all for loops
//(for,for in, for of , forEach)
var num0 ={
    "name":"Logesh",
    "age":25,
    "address":{
        "streetAddress":"na",
        "city":"chennai",
        "state":"tamilnadu",
        "country":"india"},
        }
        console.log(num0);
//for
        for (i=0;i<num0.length;i++){
            console.log(num0);
        }
//for in
        for (var name in num0 ){
            console.log("key is "+name+" and value is"+"  "+num0[name]);
        }

//for of
let lop =[{
    "car":"lamo",
    "bike":"BMW",
    "jeep":"thar"
    }]

        for(var car of lop ){
            console.log('value is '+ car);
        }
//forEach

        const numbers = [65, 44, 12, 4];
        numbers.forEach(myFunction)
        
        function myFunction(item, index, arr) {
          arr[index] = item * 10;
          console.log(numbers);
        }