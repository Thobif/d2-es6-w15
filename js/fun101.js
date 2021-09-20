const a = prompt("Enter any value od x:");
const b = prompt("Enter any value of Y" );
let x = parseInt(a);
let y = parseInt(b);

function  myFunction(x,y){
    let z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    document.writeln(`${x} + ${y} = ${z}`)
}

//Call function
myFunction(x,y); 