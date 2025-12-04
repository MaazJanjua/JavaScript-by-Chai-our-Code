function calculateCartPrice(val1,val2,...num1){
return num1
}
// console.log(calculateCartPrice(1,2,3,4))
const user={
    uasername:"maaz",
    price:399
}
function handleObject(anyobject){
console.log(`uasername is ${anyobject.uasername} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    uasername:"majee",
    price:23
})
const myNewArray =[100,200,300,400];
function returnSecondValue(getArray) {
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))