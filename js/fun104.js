//FIrst Class function
const sayHello = function (){
    return "Hello";
}
console.log(sayHello());

function greeting(sayLa,name){
    console.log(sayLa(),name);
}
greeting(sayHello,"Callback");