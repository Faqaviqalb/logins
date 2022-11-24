const box = document.querySelector('.box');

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const forth = document.querySelector("#forth");
const fifth = document.querySelector("#fifth");





let array = [first,second,third,forth,fifth];

let myArray = [firstDown,secondDown,thirdDown,forthDown,fifthDown];


let randomLoop = arr =>{
    for(let i=0 ; i<arr.length ; i++){
        let random = Math.floor(Math.random()*51);
        arr[i].innerHTML = random;
    }
}

randomLoop(array);
randomLoop(myArray);

const twoDimensional = document.querySelector(".twoDimensional");

const myArray1 = [];
const myArrayu=[];
for(let i=0 ; i<2 ; i++){
    myArrayu[i] = [];
    for(let j=0 ; j<5 ;j++){
        myArrayu[i][j] = Math.floor(Math.random()*51);
        
    }   
}
myArray1.push(myArrayu);
console.log(myArray1);

twoDimensional.innerHTML ="[" + myArray1[0][0] + "]"+"<br>" +"["+myArray1[0][1]+ "]";



// merge

const one = document.querySelector('#containerOne');
const two = document.querySelector('#containerTwo');
const containerThree = document.querySelector('#containerThree');
const containerFour = document.querySelector('#containerFour');
const containerFive = document.querySelector('#containerFive');

const btn = document.querySelector('#button');


const boxOne = document.querySelector('#boxOne');
const boxTwo = document.querySelector('#boxTwo');
const boxThree = document.querySelector('#boxThree');
const boxFour = document.querySelector('#boxFour');
const boxFive = document.querySelector('#boxFive');




btn.addEventListener('click' , ()=>{
    let inputOne = one.value;
    let inputTwo = two.value;

    let arr1 = [];
    while(inputOne>0){
        let rand = Math.floor(Math.random()*20);
        // if(!arr1.includes(rand)){
            arr1.push(rand);
        // } else{
        //     continue;
        // }
        inputOne--;
    }

    let dup1 = arr1.filter((e, i, a) => a.indexOf(e) !== i)

    boxOne.innerHTML= "["+ arr1 + "]";

    let arr2 = [];
    while(inputTwo>0){
        let randy = Math.floor((Math.random()*50));
        // if(!arr2.includes(randy)){
            arr2.push(randy);
        // } else{
        //     continue;
        // }
        inputTwo--;
    }
    let dup2 = arr2.filter((l, m, n) => n.indexOf(l) !== m)

    boxTwo.innerHTML= "["+ arr2 + "]";

    const arr3 = arr1.concat(arr2);
    boxThree.innerHTML= "["+ arr3 + "]";


    const arr4 = [];
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
      if (arr1[i] !== undefined) {
        arr4.push(arr1[i]);
      }
      if (arr2[i] !== undefined) {
        arr4.push(arr2[i]);
      }
    }


    boxFour.innerHTML= "["+ arr4 + "]";

    let arr5 = [];
    const length = Math.max(arr1.length, arr2.length);  
    for (let i = 0; i < length; i++){
        let j = Math.floor(Math.random() * (i + 1));
        if (arr1[j] !== undefined) {
            arr5.push(arr1[j]);
          }
          if (arr2[j] !== undefined) {
            arr5.push(arr2[j]);
          }
    }
    let unique = [...new Set(arr5)];

    for( n of arr3){
        if(!unique.includes(n)){
            unique.push(n);
        }
    }

    if(dup1.length!==0){
        for(i=0 ; i<dup1.length ;i++)
        unique.push(dup1[i])
    }
    if(dup2.length!==0){
        for(j=0 ; j<dup2.length ;j++)
        unique.push(dup2[j])
    }



    boxFive.innerHTML= "["+ unique+ "]";
})
