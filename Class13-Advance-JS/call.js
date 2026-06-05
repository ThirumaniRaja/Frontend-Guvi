function getStudent(callback){
    console.log("Fetching student....");
    const student = {
        id: 1, 
        name: "Thiru"
    }
    callback(student)
}

function getCourse(student){
    const course = {
        id: 101,
        title: "JavaScript"
    }
    console.log(`Fetching course for ${student.name}...for course id ${course.title}`);
    // callback(course)
}

function handleStudent(student){
    getCourse(student)
}

getStudent(handleStudent);