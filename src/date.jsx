import React from "react";

function Datec(){

    const fname = "AhteshamArain";
    let current = new Date();
    current = current.getHours();
    var randonnum = Math.radom();
    const cssStyle = {};
    let greet = "";

    if(current>=1 && current < 12){
     greet = "Good Morning";
     cssStyle.color = "red";
     document.body.style.backgroundColor = "lightyellow";
    }
    else if (current>=12 && current < 19){
        greet = "Good Afternoon";
        cssStyle.color = "red";
        document.body.style.backgroundColor = "lightblue";

       }



    return(
        <h1>
        {randonnum}
        <br />
        {current}
        <br />
        {greet}
        
        
        
        </h1>
    )
}
export default Datec;