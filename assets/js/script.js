document.addEventListener("DOMContentLoaded" , function() {
let buttons = document.getElementsByTagName("button");

for(let button of buttons){
    button.addEventListener("click" , function(){
        if (this.getAttribute("data-type") === "submit"){
            alert( "YOU CLICKED SUBMIT !");
        } else{
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        }
    })
}
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectaanswer() {

}

function incrementScore(){

}

function incremateWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}