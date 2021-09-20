
function returnFive (){
    return 5;
}

function addTwo(num1 = 10, num2 = num1 + returnFive()){
    // num1 = 10; 
    // num2 = 20;
    return num1 + num2;

}
console.log(addTwo( ));
// document.writeln(addTwo());