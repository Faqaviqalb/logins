
btn=document.querySelector('#hidden')
side=document.querySelector('.side-bar');


btn.addEventListener('click' , ()=>{
    if(side.style.display=== "none"){
        side.style.display = "inline-block";
    }else {
        side.style.display = "none";
    }
});