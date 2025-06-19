let btnValidation = document.getElementById("btn-validation")
let result = document.getElementById("result")

btnValidation.addEventListener("click", function () {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    let message


    if (isNaN(age)) {
        message = "Error: Please enter a valid age in numbers"
    } else if (age < 18) {
        message = "Hello " + name + ", You're a minor. Keep learning and enjoying coding!"
    } else {
        message = "Hello " + name + ", You're of legal age. Get ready for great opportunities in the world of programming!"
    }

})


