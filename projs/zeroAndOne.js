

let rowIn = document.querySelector('#rowIn');
let colIn = document.querySelector('#colIn');

let btn = document.querySelector('#btn');

let box = document.querySelector('#box');

btn.addEventListener('click' , ()=>{
    rowVal = rowIN.value;
    colVal = colIN.value;

    const myArray = [];

    function getRandom(){
        let num=Math.random();
        if(num < 0.25){
            return 0;
        }   
        else{
            return 1;
        } 
    }
    for(let i=0 ; i<rowVal ; i++){
        myArray[i] = [];
        for(let j=0 ; j<colVal ;j++){
            myArray[i][j] = getRandom();
        }
    }    
    
    console.log(myArray);
    for(let i=0 ;i<rowVal ; i++){
            box.innerHTML += myArray[i]+"<br>";
    } 
 
})
    
