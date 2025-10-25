// Aapko ye karna hai:

// 1 =. filter() use karke sirf students jinke marks 50 ya usse zyada hain alag karo.

// 2 =. map() use karke un sab ke naam ke sath string banao "Name: Ali, Marks: 75".

// 3=.  reduce() use karke sab students ke marks ka total nikalna hai.

// const students = [
//     { name: "Ali", marks: 75 },
//     { name: "Raja", marks: 45 },
//     { name: "Sara", marks: 90 },
//     { name: "Ahmed", marks: 32 },
//     { name: "Zara", marks: 60 }
// ];


// 1ST SOLUTION
// let newstudents = students.filter(( stu )=>{
//   return stu.marks> 50
// })
// console.log(newstudents);


//REDUCE FUNCTION

// const students = [
//     { name: "Ali", marks: 75 },
//     { name: "Raja", marks: 45 },
//     { name: "Sara", marks: 90 },
//     { name: "Ahmed", marks: 32 },
//     { name: "Zara", marks: 60 }
// ];
// const newstudents = students
// .map((stud)=>{
//      return stud.marks % 5
// })
// .reduce((acc , stu)=>{
//     return acc + stu
// },0)

// console.log(newstudents);




//MAP SOLUTIONN
//  const newstudents =  students.map((stu)=>{
//     return "Name " + stu.name + " Marks " + stu.marks
//  })
//  console.log(newstudents);


// 👉 Aapko karna hai ek hi chain me:
// filter() se sirf wo students nikaalo jinke marks >= 50 hain.
// map() se unke marks ka square banao.
// reduce() se sab squares ka sum nikal lo.
const students = [
    { name: "Ali", marks: 75 },
    { name: "Raja", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 32 },
    { name: "Zara", marks: 60 }
];
const newstudents = students
    .filter((stu) => {
        return stu.marks > 50
    })
    .map((stu) => {
        return stu.marks * stu.marks;
    })
    .reduce((acc, marks) => {
        return acc + marks
    }, 0)
console.log(newstudents);


