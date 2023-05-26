
const ogHBOX = document.querySelector(".HBox");
const Form = document.querySelector(".InputForm");



Form.addEventListener("submit",function(event){
    event.preventDefault();
    let num = document.querySelector(".EnterNum").value;
    console.log(num);
})