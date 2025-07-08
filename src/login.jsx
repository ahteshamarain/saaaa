import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // <-- import this

function Login() {
    let [email, setemail] = useState('');
    let [password, setpass] = useState('');
    const navigate = useNavigate();  // <-- initialize

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const blogdata = { email, password };
            console.log(blogdata);

            if (email === "ahteshamarain3@gmail.com" && password === "aptech") {
                console.log("Login Successful");
                navigate('/loginview');  // <-- redirect on success
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
                type="password"  // password field mein type="password" use karen
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
