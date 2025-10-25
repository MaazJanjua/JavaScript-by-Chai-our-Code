//WITH FUNCTION METHOD MORE READABLE
// const arr1 = [1, 2, 3]
// const arr2 = arr1.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);

//     return accumulator + currentValue
// },0)
//WITH ARROW METHOD
// const arr1 = [1,2,3]
// const arr2 =arr1.reduce((acc , curval ) => acc + curval ,0)
// console.log(arr2);
// let array1 =[1,2,3,4,5]
// let  array2=array1.reduce((acc , curval)=> acc + curval ,0)
// console.log(array2);


//reduce method with PRODUCT PRICE EXAMPLE
let arr1 = [
    {
        item: "course",
        RS: 699
    },
    {
        item: "course",
        RS: 799
    },
    {
        item: "course",
        RS: 899
    },
    {
        item: "course",
        RS: 999
    },
]
let arr2 =  arr1.reduce((acc , curval)=>{
    return acc + curval.RS
},0)
console.log(arr2);

