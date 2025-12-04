//THIS METHOD
const user = {
    username: "maaz",
    age: 21,
    Wellcomemessage: function () {
        console.log(`${this.username}, welcome to wensite`);
      console.log(this);
      
    }
}
// user.Wellcomemessage()
// user.username="majee"
// user.Wellcomemessage()
// console.log(this);

const chai =()=>{
  let username ="maaz"
  console.log(this);
}
// chai()
//EXPLECTIVE RETURN
const Arrow = (Num1 , Num2)=>{
return Num1 + Num2
}
// console.log(Arrow(1,1))
//IMPLESITIVE RETURN 
const newArrow = (Num1,Num2)=>Num1 + Num2
// console.log(newArrow(1,2));
const newArrow2 = (Num1,Num2)=> (Num1 + Num2)
// console.log(newArrow2(1,2));
// JS main agahr ham koi object{} return kerwa rahay hain to iss ko parenthises() main rakhna zaruri hoga 
const newArrow3 =(Num1,Num2)=>({username :"maaz"})
console.log(newArrow3(3,3));

