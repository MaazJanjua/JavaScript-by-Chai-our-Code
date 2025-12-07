const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`u have power of ${power}`);

}
console.log(`with less hen ${score} hp`);

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("Allow To Buy Cources");
    
    
}
if(loggedInFromEmail || loggedInFromGoogle){
console.log("Allow To Log In");

}else{
    console.log("rejected");
    
}
    