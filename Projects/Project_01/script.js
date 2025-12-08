// alert("Hello!");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

//METHOD #1
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    const backgroundColor = e.target.id;
    const lightColors = ['white', 'blue', 'yellow'];
    body.style.backgroundColor = e.target.id;
    // if (backgroundColor === 'white'|| backgroundColor === 'blue'|| backgroundColor === 'yellow') {
    if (lightColors.includes(backgroundColor)) {
      body.style.color = 'black';
    } else {
      body.style.color = 'white';
    }
  });
})


//METHOD #2
// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });
