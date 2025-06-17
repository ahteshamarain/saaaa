import React, { useState } from "react";

function Login() {

    let [email, setemail] = useState('');
    let [password, setpass] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const blogdata = { email, password };
            console.log(blogdata); // Logs email & password

            if (email === "ahteshamarain3@gmail.com" && password === "aptech") {
                console.log("Login Successful");
            } else {
                console.log("Invalid Credentials");
            }
        }}>

            <label>Enter Email</label>
            <input 
                type="text" 
                required 
                onChange={(event) => setemail(event.target.value)} 
                value={email} 
            />
            <br />

            <label>Enter Password</label>
            <input 
                type="text" 
                required 
                onChange={(event) => setpass(event.target.value)} 
                value={password} 
            />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
