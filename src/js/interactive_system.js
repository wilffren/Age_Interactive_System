/* The principal variables for button and section message was created */
let btnValidation = document.getElementById("btn-validation")
let result = document.getElementById("result")

/*Button with function click, was created */
btnValidation.addEventListener("click", function () {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
//Message variable for the distint messages depend of condition.
    let message

//Conditional for validation of age
    if (isNaN(age) || age <= 0) { //isNaN for isn't a number or age invalid
        message = "Error: Please enter a valid age in numbers"
    } else if (age < 18) {
        message = "Hello " + name + ", You're a minor. Keep learning and enjoying coding!"
    } else {
        message = "Hello " + name + ", You're of legal age. Get ready for great opportunities in the world of programming!"
    }
//Finally, show the answer in the variable result
    result.textContent = message
})


