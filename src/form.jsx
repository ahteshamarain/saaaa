import React, { useState } from "react";

function Blog() {

    let [tltle, settitle] = useState('');
    let [blog, setblog] = useState('');
    let [auther, setauther] = useState('Ahtesham');

    return (
       
        <form onSubmit={(event) => {
            event.preventDefault();
            const blogdata = {tltle,blog,auther}
        }}>

            <label>Enter Title</label>
            <input type="text" required onChange={(event) => settitle(event.target.value)} value={title} name="" id="" />
           <br />
            <label>Enter blog</label>
            <input type="text" required onChange={(event) => setblog(event.target.value)} value={blog} name="" id="" />
           <br />
            <select onChange={(event) => setauther(event.target.value)} value={auther} name="" id="">
                <option value="john">john</option>
                <option value="kelvin">kelvin</option>
               
            </select>
            <button>submit</button>
        </form>

    );
}

export default Blog;
