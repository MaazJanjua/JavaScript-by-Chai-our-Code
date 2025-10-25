
//ITERATIONS
//////variable///// ( Condition Check )//(infinite loop)


//SIMPLE LOOPS
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 hitted");

//     }
//     console.log(element);


// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);

//     for (let j = 0; j <= 10; j++ ) {
//         // console.log(`Inner loop${j}  and inner loop ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i * j)



//     }
// }


//WITH BREAK 



// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break

//     }

//     console.log(`value of i is ${index}`);

// }


//WITH CONTINUE



// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detected   ${index}`);

//         continue
//     }
//     console.log(`value of i is ${index}`);

// }


//WHILE Loops
// let i = 0
// while (i <= 20) {
//     console.log(`Value of index is ${i}`);
//     i = i + 2

// }

//WHILE LOOP[ WITH ARRAY ]
// let myarr = [`flash`, `batman`, `superman`]
// let arr = 0
// while (arr < myarr.length) {
//     console.log(`value is ${myarr[arr]}`);
//     arr = arr + 1

// }


//DO WHILE LOOP[ WITH ARRAY ]
// let initial  = 30
// do {
//     console.log(`value is ${initial}`);
//     initial = initial + 1
// } while (initial <= 20);


//Forof LOOP WITH NUMBERS 
// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);


// }


// ForOF loop with string example 
// const greetings = "fisher 3"
// for (const greets of greetings) {
//     if (greets === " ") {
//         break
//     }

//         console.log(`Each char is ${greets}`);
// }



// const map = new Map()
// map.set('PK', "Pakistan")
// map.set('TR', "Turkia")
// map.set('IN', "India")
// map.set('SA', " Saudi Arabia")
// console.log(map)

//DeStructurization off Array
// for (const [key,value] of map) {
//     console.log(key, " :- " , value);

// }



// const myObject = {
//     'game1' : " NFS ",
//     'game2' : " SpiderMan "
// }
// for (const [key , value] of myObject) {
//     console.log(key,  ' :- ', value );

// }


//forIn loop with Object 
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'

}

//ForIn loop
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)


}

//forIn loop with arrays 
const programming = ["py", "JS", "rb", "C++"]
for (const key in programming) {
    // console.log(programming[key]);




}
//ForIn Loop For Objects
//Forof Loop For arrays



// yeah loop sab say ziyada use hota han[forEach loop] 

// const coding = ["js","rb","cpp","py","'java"]

//callback function
// coding.forEach(function(items){
// console.log(items);

// })

//with arrow functions
// coding.forEach((item)=>{
//     console.log(item);

// })




// coding.forEach((item, index, array) => {
//     console.log(item,index,array);

// });


const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: ".js"
    },
    {
        languageName: "Python",
        languageFile: ".py"
    },
    {
        languageName: "C++",
        languageFile: ".cpp"
    }
];
myCoding.forEach((item) => {
    console.log(
        item.languageName);
})