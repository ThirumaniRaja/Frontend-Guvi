const result = [78,79,90,99,34,65,32,56,23,45,67,89,90];
const passStudents = result.filter(score => score >= 40);
console.log(passStudents);

const failStudents = result.filter((score) => {return score < 40});
console.log(failStudents);

let passCount = result.every(score => score >= 20);
console.log(passCount);

let failCount = result.some(score => score >= 40);
console.log(failCount);