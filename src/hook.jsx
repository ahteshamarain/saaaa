import React, { useState } from "react";

function Addhook() {

    let [like, setLike] = useState(10);

    return (
        <div>
            <button onClick={() => { setLike(like + 1); console.log(like) }}>
                Like
            </button>
            <h1>{like}</h1>
        </div>
    );
}

export default Addhook;
