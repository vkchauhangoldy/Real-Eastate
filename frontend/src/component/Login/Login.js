import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { NavLink, useNavigate } from "react-router-dom";
import "../Login/login.css"
const Login = () => {
    const navigate = useNavigate();
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
            if (res.status == 422 || !res) {
                window.alert("Registered first");
             } 
             else if(res.message=="Login successfully in third page"){
                window.alert("login succesfully")
                navigate("/register")//temporary provided
                setinpu({
                    email:"",
                    password:""
                })
             }
             else {
                window.alert("invalid details")
               
            }

        }
    }
    return (
        <>
            <div className="container1">
                <div>
                    <h1 className="heading">LOGO</h1>
                </div>
                <p>Enter your credentials to access your account</p>
                <div className="form_data">
                    <input type="email" onChange={setval} placeholder="User ID" name="email" value={inpval.email} />
                    <input type="password" onChange={setval} placeholder="Password" name="password" value={inpval.password} />

                    <button className="btn" onClick={adduserdata}>Sign In</button>


                    <h3><NavLink to="/register" className="sig">Sign Up</NavLink></h3>
                </div>
            </div>
            <div>
                <p className="signup">Don't have an account?<NavLink to="/register">Sign up</NavLink> </p>
            </div>

        </>
    )

}
export default Login;