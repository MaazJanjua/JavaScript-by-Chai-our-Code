//FOR INTERVIEW POINT
const sym = Symbol("mykey1")
const obj={
   [sym] : "mysym1",
   name :"maaz"
}

// console.log(typeof sym); SYMBOL 
// console.log(typeof [sym]); OBJECT
// console.log(typeof obj[sym]); VALUES IN OCJECT [VALUES]

const myobj={
    email:"123@gmail.com"
    
}
// console.log(myobj ["email"]);
myobj.email = "maaz123@gmail.com "
//THIS IS HOW TO FREEZ ANYOBJ
// console.log(myobj["email"]);

Object.freeze(myobj)

//SINGLE TEND OBJ
// const tinderUser = new Object ()
const taindUser = new Object()
taindUser.id = "123abc"
taindUser.name = "maaz"
taindUser.isloggedin = false

// console.log(taindUser);
const regularobj = {
    email: "maazx@abc",
    fullname: {
        userfullname: {
            firstname: "maaz",
            lastname: "janjua"
        }
    }

}
// console.log(regularobj.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1, obj2)
// we use spreateMethod [easy][simple][latest]
// const obj3={...obj1,...obj2}
// WHEN VALUES COMES FROM DataBase THEN WE USE THIS METHOD
const users =[
    {
        id:"abc123",
        email:"abc@gmail"
    },
    {
        id:"abc123",
        email:"abc@gmail"
    },
    {
        id:"abc123",
        email:"abc@gmail"
    },
]
// users[1].email
// console.log(taindUser);
// console.log(Object.keys(taindUser));
// console.log(Object.values(taindUser));
// console.log(Object.entries(taindUser));
// console.log(taindUser.hasOwnProperty('isloggedin'));




// console.log(obj3);
// console.log(myobj);
// console.log(obj);
obj.greetings = function(){
    console.log("hello js objects chanper");
    
}
obj.greetingsTwo = function(){
    console.log(`hello js objects chanpe,${this.name}`);
    
}
console.log(obj.greetings());
console.log(obj.greetingsTwo());
