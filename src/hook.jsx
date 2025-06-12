import React , {usestate} from "react";

function Addhook(){
    let [like,setlike]=usestate(10);
    return(
        <div>
       <button onClick={() => {setlike(like+1);
        console.log(like)}}>Like</button>
        <h1>{like}</h1>
        </div>
    );
}
export default Addhook;