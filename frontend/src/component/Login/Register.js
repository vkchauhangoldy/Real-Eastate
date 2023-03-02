import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Login/Register.css";
const Register = () => {
 const [inpval, setinpu] = useState({
        email: "",
        password: "",
        cpassword: ""

    })
    const setval = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setinpu(() => {
            return {
                ...inpval,
                [name]: value
            }

        })
    }
    const adduserdata = async(e) => {
        e.preventDefault();
        const { email, password, cpassword } = inpval
        if (email == "" || password == "" || cpassword == "") {
            alert("please provide valid data");
        }
        else if (!email.includes("@")) {
            alert("provide valid email");

        }
        // else if(password.length<=6 && cpassword<=6){
        // alert(" Provide password length at least 6")
        // }
        else if (password != cpassword) {
            alert("password should be same")
        }
        else {
         //console.log("hello");
            const data = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password, cpassword
                })
            });
            const res = await data.json();
            console.log(res);

        }
    }
        return (
            <>
                <section>
                    <div>
                        <h1>LOGO</h1>
                    </div>
                    <p>Create New Account</p>
                    <div className="form_data">
                        
                            <input type="email" onChange={setval} placeholder="Mail ID" name="email" value={inpval.email} />
                        
                        
                            <input type="password" onChange={setval} placeholder="Password" name="password" value={inpval.password} />
                        
                        
                            <input type="password" onChange={setval} placeholder="Confirm Password" name="cpassword" value={inpval.cpassword} />
                        
                        <div>
                            <button onClick={adduserdata}>Sign up</button>
                        </div>

                    </div>
                </section>

                <div>
                    <h3><NavLink to="/">Sign in</NavLink></h3>
                </div>
            </>
        )
    
}    
export default Register;