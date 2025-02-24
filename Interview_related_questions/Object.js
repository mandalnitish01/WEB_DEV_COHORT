let student = {
    name:"niraj mandal",
    course :{
        math :{
            grade : "A"
        },
    },
}
// const studentdata1 = student.course.history.grade;
// console.log(studentdata1); //Cannot read properties of undefined (reading 'grade')
//this will give error because the property history is not present in the object
//so to avoid this error we can use optional chaining

//here optional chaining is used to avoid error if the property is not present
//optinal chaining is used when the code note read the undefined property
const studentdata = student.course?.history?.grade;
console.log(studentdata); //undefined