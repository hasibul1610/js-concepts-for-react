//Templete String

const description = `My name is Shanto
Currently I am doing my MSc in
Khulna University of Engineering & Technology
`;
// console.log(description);

const person = {
    name: "Md Hasibul Islam",
    designation: 'Junior Web Developer',
    salary: 15000,
    address: {
        vill : 'syedpur',
        upazilla: 'Gopalpur'
    }
}

const output = `
    Hello This is ${person.name} I am a ${person.designation} My salary is ${person.salary} my village name is ${person.address.vill}
`;
// console.log(output);

//Spread Operator
const numbers = [5,6,8,4,2];

const newNumbers = [...numbers,78];
// console.log(newNumbers);

//Arroe function
const getNumber = () => 9;
// console.log(getNumber());

const getMultiple = num1 => num1*12;
// console.log(getMultiple(3));

const multiLine = (num1,num2) =>{
    const result = (num1*5)+(num2*5);
    return result ;
}
// console.log(multiLine(1,2));