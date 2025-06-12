import React from "react";

function Football(){
    const shoot = (a,b) =>{
        alert(b.type = a);
    }
    return(
        <button onClick={(event) => shoot("goal" , event)}>Take the shoot</button>
    )
}
function Football(){
   function handleClick(){
    let bodystyle = document.body.style;
    if(bodystyle.backgroundColor === 'black'){
        bodystyle.backgroundColor = 'white';
    }
    else{
        bodystyle.backgroundColor = 'black'
    }
   }

    return(
        <button onClick={handleClick}>toogle light</button>
    )
}
export default Football;