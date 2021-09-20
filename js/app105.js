let person ={
    name: 'Mark',
    age: '30'
}
let address = {
    city: " Rayong", 
    people: " 100000"

};

console.log(person)

let p1 = person;
let p2 = {...person, ...address};


p1.name = "x";
p2.age = "35";

console.log(p1,)
console.log(p2)