import React, { useState } from "react";

function Blog() {

    let [title, settitle] = useState('');
    let [blog, setblog] = useState('');
    let [auther, setauther] = useState('Ahtesham');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const blogdata = { title, blog, auther };
            console.log(blogdata); // Checkout here: blog data logs correctly
        }}>

            <label>Enter Title</label>
            <input 
                type="text" 
                required 
                onChange={(event) => settitle(event.target.value)} 
                value={title} 
            />
            <br />

            <label>Enter Blog</label>
            <input 
                type="text" 
                required 
                onChange={(event) => setblog(event.target.value)} 
                value={blog} 
            />
            <br />

            <select 
                onChange={(event) => setauther(event.target.value)} 
                value={auther}
            >
                <option value="john">john</option>
                <option value="kelvin">kelvin</option>
            </select>
            <br />
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default Blog;
