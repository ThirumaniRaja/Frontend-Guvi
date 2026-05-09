
const searchFiles = function (files, target) {
    for (let i = 0; i < files.length; i++) {
        if (files[i] === target) {
            return "file found: " + files[i];
        } 
}
return "file not found";
}

let files = [
    "Class3/hof.js",
    "Class3/iife.js",
    "Class3/distance.js",
    "Class2/object.js"
];

console.log(searchFiles(files, "Class2/object.js")); // Output: ["Class3/distance.js"]
