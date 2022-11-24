

const btn = document.querySelector('#button');
const ans = document.querySelector('#ans');

let factorialize = n =>{
    let result = n;
    if (n == 0 || n == 1){
        return 1;
    }else if( n<0 ){
        return -1;
    }else{
        while(n>1){
            n--;
            result = result*n;
        }
    }
    return result;
}


btn.addEventListener('click' ,()=>{
    let number= input.value;
    ans.innerHTML = factorialize(number);
})
