"use strict";
$(document).ready(() => {
    //declare an empty array
    let bugList = [];
    
    //2 inputs with 2 properties need to go into that array
    $(document).on("click", "button", (event) => {
        let stuff = {};
            let stuff1 = $("input").eq(0).val() ;
            let stuff2 = $("input").eq(1).val();
            stuff["title"] = stuff1;                //gave stuff an attr then assigned it the input values
            stuff["descr"] = stuff2;

        bugList.push(stuff);
        console.log(bugList);

    //    $('.input').each(function(){
    //         bugList.push($(this).val());
    //         console.log(bugList);
    //         (this).val("");
    //    });
       
        
       
    });

     //display last index of the array in the DOM
        $(".bottom").append(`
       <section> ${bugList[0].val()} </section>`)
    

    

    //checkbox class shift();
});
