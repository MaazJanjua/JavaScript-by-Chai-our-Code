const userEmail = []
if (userEmail) {
    console.log(`got user Email`);
    
}
else{
    console.log(`didnot get user email`);
    
}
// TRUTHY VALUES
[],{},"0"," ",function(){},"false"
// FALSY VALUES
0,-0,false,BigInt,0n ,NaN,undefined,null,""