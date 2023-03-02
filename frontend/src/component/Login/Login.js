import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Login/login.css"
const Login = () => {
    const [inpval, setinpu] = useState({
        email: "",
        password: ""
    })
    const setval = (e) => {
        //console.log(e.target.value)
        const { name, value } = e.target;
        setinpu(() => {
            return {
                ...inpval,
                [name]: value
            }

        })
    }

    const adduserdata = async (e) => {
        e.preventDefault();
        const { email, password } = inpval
        if (email == "" || password == "") {
            alert("please provide valid data");
        }
        else if (!email.includes("@")) {
            alert("provide valid email");

        }
        else {
            alert("successfully login")
            const data = await fetch("http://localhost:4000/reg/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const res = await data.json();
            console.log(res);

        }
    }
    return (
        <>
            <section className="container">
                <div>
                    <h1>LOGO</h1>
                </div>
                <p>Enter your credentials to access your account</p>
                <div className="form_data">
                    <input type="email" onChange={setval} placeholder="User ID" name="email" value={inpval.email} />
                    <input type="password" onChange={setval} placeholder="Password" name="password" value={inpval.password} />
                    <div className="inputs">
                        <button className="btn" onClick={adduserdata}>Sign In</button>
                    </div>
                    <h3><NavLink to="/register">Sign Up</NavLink></h3>
                </div>
            </section>
            <div>
                <p>Don't have an account?<NavLink to="/register">Sign up</NavLink> </p>
            </div>
        </>
    )

}
export default Login;