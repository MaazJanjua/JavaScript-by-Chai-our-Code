// const form = document.querySelector('form')
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')

//     if (height === " " || height < 0 || isNaN(height) || weight <= 0 || isNaN(weight) || weight === " ") {
//         results.innerHTML = "plese give us a valid height / weight"
//         results.style.color = "red"
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2)
//         let message = `<span style="color:green">your bmi : <strong>${bmi}</strong></span>`
//         if (bmi > 24.9) {
//             message += `<span style="color:orange;">(OverWeight)</span>`
//         }
//         results.innerHTML = message    
//     }
// })
// results.innerHTML = `<span>Your BMI: <strong>${bmi}</strong></s  pan>`;
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === " " || height <= 0 || isNaN(height) || weight === " " || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "plese give us a valid height / weight"

    } else {

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let message = `<span style="color:green">Your BMI : <strong>${bmi}</strong></span>`
        if (bmi > 24.9) {
            message += `<span style="color:orange">(OverWeight)</span>`
        }
        else if (bmi < 18.6) {
            message += `<span style="color:orange">(UnderWeight)</span>`
        }
        else if ( bmi >= 18.6 && bmi <= 24.8) {
            message += `<span style="color:orange">(Normel Range)</span>`
        }

        results.innerHTML = message

    }

})