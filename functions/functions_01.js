// function sayMyName(){
//     console.log("M");
//     console.log("a");
//     console.log("a");
//     console.log("z");
// }
// sayMyName()
// function addTwoNums(Num1, Num2){
//     console.log(Num1 + Num2);
// }
// addTwoNums(1,2)
function addTwoNums(Num1, Num2) {
    //    let result = Num1 + Num2
    //     return result
    return Num1 + Num2
}
const result = addTwoNums(2, 2)
// console.log("Result is :" , result );

function login(username) {
    return `${username} just logged in `
}
// console.log(login("Maaz"))
function login2(username2) {
    
    // if (username2 === undefined) {
    //     console.log("invalid username");
    //     return
    //    }
    //BOTH ARE SAME BUT THE SECONDONE IS MORE PROFESSIONAL
     // ! (exclimatery symbol)turns value of true into false and false into true
      
    if (!username2) {
        console.log("invalid username");
        return
       }
    return `${username2} just logged in`
}
// console.log(login2())






//WE HAVE OPTION TO PASS DEFUALT VALUES LIKE AS I PASS HERE "SAM"
// function login3(username3 = "sam") {
//     if (!username3) {
//         console.log("invalid username");
//         return
//        }
//     return `${username3} just logged in`
// }
// console.log(login3())

//BUT IF WE PASS ANY VALUE JUST LIKE MAAZ AS WE GIVE HERE THEM THE FIRST ONE (sam) IS
function login3(username3 = "sam") {
    if (!username3) {
        console.log("invalid username");
        return
       }
    return `${username3} just logged in`
}
console.log(login3("maaz"))