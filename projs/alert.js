// login Form

const submit = document.querySelector('#submit'); 
const txt = document.querySelector("#txt");
const input = document.querySelector('#input');

const txtTwo = document.querySelector("#txtTwo");
const inputTwo = document.querySelector('#inputTwo');

submit.addEventListener('click' , ()=>{
    if (input.value.length === 0 ){
        txt.style.display = "block";
    }else if (inputTwo.value.length === 0 ){
        txtTwo.style.display = "block";
    }else {
        document.querySelector('#fill').style.display= 'block';
    }
});




// SigUp Form

const submitTwo = document.querySelector('#submitTwo'); 
const txtThree = document.querySelector("#txtThree");
const inputThree = document.querySelector('#inputThree');

const txtFour = document.querySelector("#txtFour");
const inputFour = document.querySelector('#inputFour');

const txtFive = document.querySelector("#txtFive");
const inputFive = document.querySelector('#inputFive');

const txtSeven = document.querySelector("#txtSeven");

const radio = document.querySelector('.radio');
const radioBtn = document.querySelector('.radioBtn');
const rules = document.querySelector('input[type="checkbox"]');

submitTwo.addEventListener('click' , ()=>{
    if (inputThree.value.length === 0 ){
        txtThree.style.display = "block";
    }else if (inputFour.value.length === 0 ){
        txtFour.style.display = "block";
    }else if (inputFive.value.length === 0 ){
        txtFive.style.display = "block";
    }else if (!radio.checked && !radioBtn.checked){
        txtSix.style.display = 'block';
    }else if(!rules.checked){
        txtSeven.style.display = 'block';
    }
    else {
        document.querySelector('#fillUp').style.display= 'block';
    }
});



// for(radioButton of radioButtons){
//     if(!radioButton.checked){
//         txtSeven.style.display= block;
// }

