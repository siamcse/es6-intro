// function declaration 
function add(first,second){
    const total = first + second;
    return total;
}

//function expression
const add2 = function(first , second){
    return first + second;
}

//arrow function
const add3 = (first , second) => (first + second);

// const result = add(10,20);
// console.log(result);

// const result = add2(10,20);
// console.log(result);

const result = add3(10,20);
console.log(result);
const y = x => x*x; const z = y(5);
console.log(z);

const division= (num1, num2) => console.log(num1 /num2);
division(90,45);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2 = [...nayikas];
console.log(array2);