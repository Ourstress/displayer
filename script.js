let number = document.querySelector("button")
let text = document.querySelector("#number")
let display = document.querySelector("#display")

number.addEventListener("click", function(event){
    event.preventDefault();
    display.textContent = text.value;
})