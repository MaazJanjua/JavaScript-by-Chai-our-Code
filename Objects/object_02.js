//OBJECT DE-STRUCTURE AND JSON API INTRO
//yeah kam ham bohot baar kerain gay 

const course ={
    coursename :"js in hindi",
    price:"0000$",
    CourseInstructure :"Hitesh"
}
//yeah ham nay value ko de-structure keyah ha {courseInstructure to instructure}
const {CourseInstructure : instructure } = course 
console.log(instructure);
