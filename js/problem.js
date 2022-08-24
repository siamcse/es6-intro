/*Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.*/

const multiply = (a,b,c) => a*b*c;
console.log(multiply(10,10,10));

/*
Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
*/
const multiLineString = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(multiLineString);

/*
Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
*/
const add = (num1,num2=0) => num1 + num2;
console.log(add(10,20));

/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
*/
const evenFriends = (friends) => {
    const evenFriend = [];
    for(let i=0;i<friends.length;i++){
        if(friends[i].length % 2 === 0){
            evenFriend.push(friends[i]);
        }
    }
    return evenFriend;
}
const friends = ['siam','alamin','krishno','sayem','shishir','emon'];
console.log(evenFriends(friends));

/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/
const averageSquare = (numbers) => {
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum = sum + Math.pow(numbers[i],2);
    }
    const average = sum / numbers.length;
    return average;
}
const numbers = [2,6,8,12];
console.log(averageSquare(numbers));

/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/
const findMax = (array1,array2) => {
    // const combine = array1.concat(array2);
    const combine = [...array1,...array2];
    const maxNum = Math.max(...combine);
    return maxNum;
}
const array1 = [24,435,34,56,23,45];
const array2 = [56,3,23,76,54];
console.log(findMax(array1,array2));
