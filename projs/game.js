$(document).ready(() =>{

    let array = [1,2,3,4,5,6,7,8,9];
    let randy = [];

    for(let i=0 ; i<9 ; i++){
        let random = Math.floor(Math.random()*9)+1;
        randy.push(random);
    }

    let unique = [...new Set(randy)];

    for( n of array){
        if(!unique.includes(n)){
            unique.push(n);
        }
    }

    console.log(unique);

    var firstTarget;

    for (j = 0; j < 9; j++) {
        $(".container").append("<div " +"class='box col" + j + "'>"+ unique[j] +"</div>");
        if($('.col' + j).text() == (j+1)){
            $('.col' +j).addClass('right');
        }
        $('.col' +j).on('mousedown' , event =>{
            firstTarget = $(event.currentTarget);  
        }).on('mouseup' , event =>{
            let secondTarget = $(event.currentTarget);

            let index1 = firstTarget.index();
            let value1 = (firstTarget).text();
            let value2 = (secondTarget).text();
            let index2 = secondTarget.index();

            (firstTarget).html(value2);
            (secondTarget).html(value1);


                        
            if(index1 == (value2)-1){
                if($(firstTarget).hasClass('wrong')){
                    ($(firstTarget).removeClass('wrong'));
                }
                $(firstTarget).addClass('right');
            } else {
                (firstTarget).addClass('wrong');
            }  
            if(index2 == (value1)-1){
                if($(secondTarget).hasClass('wrong')){
                    ($(secondTarget).removeClass('wrong'));
                }
                $(secondTarget).addClass('right');
            } else {
                $(secondTarget).addClass('wrong');
            }
            
            firstTarget = null;           
        })         
    } 
})


    // var firstTarget;


    // for (j = 0; j < 9; j++) {
    //     $(".container").append("<div " + "class='box col" + j + "'>"+ unique[j] +"</div>");
    //     if($('.col' + j).text() == (j+1)){
    //         $('.col' +j).addClass('right');
    //     }
    //         $('.col' +j).on('click' , event =>{

    //             if(!firstTarget) {
    //                 firstTarget = $(event.currentTarget);
    //             } else {
    //                 let secondTarget = $(event.currentTarget);
    //                 let index1 = firstTarget.index();
    //                 let index2 = secondTarget.index();

 
    //                 if(index1 == (index2)+1 || index1 == (index2)-1 || index1 == (index2)+3 || index1 == (index2)-3 ){
    //                     let value1 = (firstTarget).text();
    //                     let value2 = (secondTarget).text();
    //                     (firstTarget).html(value2);
    //                     (secondTarget).html(value1);

                        


    //                     if(index1 == (value2)-1){
    //                         if($(firstTarget).hasClass('wrong')){
    //                             ($(firstTarget).removeClass('wrong'));
    //                         }
    //                         $(firstTarget).addClass('right');
    //                     } else {
    //                         (firstTarget).addClass('wrong');
    //                     }  
    //                     if(index2 == (value1)-1){
    //                         if($(secondTarget).hasClass('wrong')){
    //                             ($(secondTarget).removeClass('wrong'));
    //                         }
    //                         $(secondTarget).addClass('right');
    //                     } else {
    //                         $(secondTarget).addClass('wrong');
    //                 }

  
    //                 firstTarget = null;
                    
    //                 } else{ 
                        
    //                 alert('Wrong Move!')
    //                 }

     

                
    //             } 
    //         })


    // }



    
    // for(let j = 0 ; j<9 ; j++){
    //     $('.col' +j).on('click' , () =>{
    //     for (let i=0 ; i<9 ; i++){
    //             $('.col' +i).on('click' , () =>{
    //                 if( i==j+1 || i==j-1 || i==j+3 || i==j-3 ){

    //                     let value1 = $('.col' +j).text();
    //                     let value2 = $('.col' +i).text();
    //                     $('.col' +i).html(value1);
    //                     $('.col' +j).html(value2);


                        
    //                     if((value1) == (i+1)){
    //                         $('.col' +i).addClass('right');
    //                     } else{
    //                         $('.col' +i).addClass('wrong');
    //                     } 
                        
    //                     if((value2) == (j+1)){
    //                         $('.col' +j).addClass('right');
    //                     } else {
    //                         $('.col' +j).addClass('wrong');
    //                     }
    //                 } else{
    //                     alert('Wrong Move!')
    //                 }
    //             })
    //     }     
    //     }) 
    // }  

