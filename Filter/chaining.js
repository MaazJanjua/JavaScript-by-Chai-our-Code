let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr
    .map((num) =>
        num * 2
    )
    .map((num) =>
        num + 1
    )
    .filter((num) =>
         num >= 10 && num <= 15
    )
    
console.log(newArr);



// let arr = [1, 2, 3]
// let arr2 = arr
//     .filter((num) => num > 1 && num < 3)
//     .map((num) => num + 1)

// console.log(arr2)