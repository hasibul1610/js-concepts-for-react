let a = 6;
a=8;
// console.log(a);

const name = "Md. Hasibul Islam Shanto";
// console.log(name);

const num1 = 8;
const num2 = 'nine';

if(num1 === 8 && num2 === "eight"){
    // console.log("The statement is correct");
}else{
    // console.log("Statement is not correct");
}

if(num1>5){
    // console.log("Statement is true");
}
else if(num1<10){
    // console.log("Statement is true");
}
else if(num1 === 8){
    // console.log("Statement is ture");
}
else{
    // console.log("Statement is false");
}


const numbers = [1,2,3,4,5,6,7];
// console.log(numbers.length);
// console.log(numbers.includes(5));
// console.log(numbers.indexOf(5));

//Pushing element is array
// numbers.push(8);
// console.log(numbers);

//Poping element in array
// numbers.pop();
// console.log(numbers);


// While loop

while(5<7){
    // console.log("The statement is true");
    break;
}

//For Loop
for(let i=0; i<10; i++){
    // console.log(i);
}

for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i]);
}


//Function
function add(num1,num2){
    return(num1+num2);
}
// console.log(add(6,9));

// Objects 
const person ={
    name: "Shanto",
    age: 23,
    education: 'MSc'
}
// console.log(person);
//Three ways to access property of object

// console.log(person.name);
// console.log(person['name']);
const myName = 'name';
console.log(person[myName]);



