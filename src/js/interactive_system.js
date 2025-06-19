function validation(){

const name = document.getElementById("name").value
const age = document.getElementById("age").value
const btnValidation = document.getElementById("btn-validation")

const result = document.getElementById("result").innerHTML = btnValidation


let message


if (isNaN(age)){
    message = "Error: Please enter a valid age in numbers"
}else if (age < 18){
    message = "Hello " + name + ", You're a minor. Keep learning and enjoying coding!"
}else{
    message = "Hello " + name + ", You're of legal age. Get ready for great opportunities in the world of programming!"
}

}