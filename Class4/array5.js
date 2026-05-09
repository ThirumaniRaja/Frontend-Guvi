const arr = [1, 2, 3, 4, 5,11,56];
const arr1 = [6, 7, 8, 9, 10];
const newArr = arr.concat(arr1);
console.log(newArr);

let ispresent = newArr.includes(5);
console.log(ispresent);

const index = newArr.indexOf(8);
console.log(index);

const lastIndex = newArr.lastIndexOf(5);
console.log(lastIndex);

let result = arr.find(num => num > 3);
console.log(result);

let result1 = arr.findIndex(num => num > 3);
console.log("19-->",result1);

let result2 = arr.findLastIndex(num => num > 3);    
console.log("22-->",result2);

let result3 = arr.findLast(num => num > 3);    
console.log("25-->",result3);
