// const tinderUser = newObject()
const tinderUser = {}
    tinderUser.id= "123abc@gmail.com",
    tinderUser.name="Maaz",
    tinderUser.job= "Development"

// console.log(tinderUser);
const regularobj={
    email:"123@gmail.com123",
    fullname:{
        username:{
            firstname:"maaz",
            lastname:"janjua"
        }
    } 
}
// console.log(regularobj.fullname.username);
//AGHER API SAY RESPONSE ATTA HA TO PHIR HAMAIN YEAH (?) USE KERNA PERHTTA HA JEYSAY NECHAY USE HUA A 
// console.log(regularobj.fullname?.username);
const obj1 ={1 : "a" , 2 :"b"}
const obj2 ={3 : "c" , 4 :"d"}
const obj4 ={4 : "e" , 6 :"f"}
// YEAH HAM BOHOT KAM USE KERTAY HAIN 
// const obj3 = Object.assign({}, obj1 , obj2)
// sperad OPERATOR YEAH HA BOHOT AAM USE KERAIN GAY 
const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);
// yeah ham tab use kerain gay jab DATA BASE say values aain gaye tab 
const users =[
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));


