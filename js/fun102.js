//Expression function
let MyFirst = function express(){
    console.log("My First Function");
    return "Return Function";
    
}
console.log(MyFirst());

//Anonymous expreesion function
let MyFunction = function(){
    console.log("My First Function")
}
// express();
MyFunction();

//Invoking function
(
    function myInvoking(){
        console.log("Self invoking functions");
    }
)();