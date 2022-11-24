
// right


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

const input = document.querySelector('#input');
const txt = document.querySelector('#txt');
const inputTwo = document.querySelector('#inputTwo');
const txtTwo = document.querySelector('#txtTwo');
const final = document.querySelector('#final')


const inputsOne = document.querySelector('.inputsOne');
const inputsTwo = document.querySelector('.inputsTwo');

let result = input + inputTwo; 

plus.addEventListener('click' , ()=>{
    if(input.value.length===0){
        txt.style.display = 'block';
    }else if (inputTwo.value.length ===0){
        txtTwo.style.display = 'block';
    } else{
        console.log(input.target);
        inputsOne.innerHTML = input.value;
        inputsTwo.innerHTML = inputTwo.value;
        final.innerHTML = parseInt(input.value)+ parseInt(inputTwo.value);
    }
})

minus.addEventListener('click' , ()=>{
    console.log(input.value.length)
    if(input.value.length===0){
        txt.style.display = 'block';
    }else if (inputTwo.value.length ===0){
        txtTwo.style.display = 'block';
    } else{
        console.log(input.target);
        inputsOne.innerHTML = input.value;
        inputsTwo.innerHTML = inputTwo.value;
        final.innerHTML = parseInt(input.value) - parseInt(inputTwo.value);
    }
})

multiply.addEventListener('click' , ()=>{
    console.log(input.value.length)
    if(input.value.length===0){
        txt.style.display = 'block';
    }else if (inputTwo.value.length ===0){
        txtTwo.style.display = 'block';
    } else{
        console.log(input.target);
        inputsOne.innerHTML = input.value;
        inputsTwo.innerHTML = inputTwo.value;
        final.innerHTML = parseInt(input.value) * parseInt(inputTwo.value);
    }
})

divide.addEventListener('click' , ()=>{
    if(input.value.length===0){
        txt.style.display = 'block';
    }else if (inputTwo.value.length ===0){
        txtTwo.style.display = 'block';
    } else{
        console.log(input.target);
        inputsOne.innerHTML = input.value;
        inputsTwo.innerHTML = inputTwo.value;
        final.innerHTML = parseInt(input.value) / parseInt(inputTwo.value);
    }
})

// left

const inputDown = document.querySelector('.inputDown');
const hideMe = document.querySelector('.hideMe');
const inputsOneDown = document.querySelector('.inputsOneDown');
const inputsTwoDown = document.querySelector('.inputsTwoDown')



plus.addEventListener('click' , ()=>{
    let array = inputDown.value.split("-");
    if(inputDown.value.length===0){
        hideMe.style.display = 'block';
    }else if (inputDown.value.length ===1){
        hideMe.style.display = 'block';
    } else{
        inputsOneDown.innerHTML = array[0];
        inputsTwoDown.innerHTML = array[1];
        finalDown.innerHTML = parseInt(array[0]) + parseInt(array[1]);
    }
})
minus.addEventListener('click' , ()=>{
    let array = inputDown.value.split("-");
    if(inputDown.value.length===0){
        hideMe.style.display = 'block';
    }else if (inputDown.value.length ===1){
        hideMe.style.display = 'block';
    } else{
        inputsOneDown.innerHTML = array[0];
        inputsTwoDown.innerHTML = array[1];
        finalDown.innerHTML = parseInt(array[0]) - parseInt(array[1]);
    }
})
multiply.addEventListener('click' , ()=>{
    let array = inputDown.value.split("-");
    if(inputDown.value.length===0){
        hideMe.style.display = 'block';
    }else if (inputDown.value.length ===1){
        hideMe.style.display = 'block';
    } else{
        inputsOneDown.innerHTML = array[0];
        inputsTwoDown.innerHTML = array[1];
        finalDown.innerHTML = parseInt(array[0]) * parseInt(array[1]);
    }
})
divide.addEventListener('click' , ()=>{
    let array = inputDown.value.split("-");
    if(inputDown.value.length===0){
        hideMe.style.display = 'block';
    }else if (inputDown.value.length ===1){
        hideMe.style.display = 'block';
    } else{
        inputsOneDown.innerHTML = array[0];
        inputsTwoDown.innerHTML = array[1];
        finalDown.innerHTML = parseInt(array[0]) / parseInt(array[1]);
    }
})