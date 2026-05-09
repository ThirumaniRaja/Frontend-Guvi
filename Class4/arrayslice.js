
//splice(index, deleteCount, item1, item2, ...)
//slice(start, end) with out change in original array
const result = [10,20,30,40,50];
result.splice(2,1);
result.splice(2,0,25);
console.log(result);

const sliceResult = result.slice(1,4);
console.log(sliceResult);

const students = ["Thiru", "venkat", "raja", "vivek", "jagu"];
let newStudents = students.slice(0,2);
console.log(newStudents);

const address= ["90 feet", "Andheri", "Maharashtra", "India"];
let newAddress = address.join(", ");
console.log(newAddress);

const folderpath = ["home", "user", "documents", "file.txt"];
let pathUrl = folderpath.join("/");
console.log(pathUrl);