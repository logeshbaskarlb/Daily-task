//display Countries names, region , sub-region , population
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
  var result = JSON.parse(request.response);
  for (var i=0;i<result.length;i++) {
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].population);
    console.log(result[i].subregion);
}
}
// for(i=0;i<name.length();i=++){
  //postalcode