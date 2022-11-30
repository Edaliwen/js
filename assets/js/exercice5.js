let result = 0

let selectButtonAdd = document.querySelector("#add")
let selectButtonSubtract = document.querySelector("#sub")
selectButtonAdd.addEventListener("click", add1);
selectButtonSubtract.addEventListener("click", sub1);

document.querySelector(".result").innerHTML = result

function add1(){
    result++
    displayResult(result)
}

function sub1(){
    result--
    displayResult(result)
}

function displayResult(result){
    document.querySelector(".result").innerHTML = result
}