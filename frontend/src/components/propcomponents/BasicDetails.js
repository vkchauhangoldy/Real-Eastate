import React from "react";
import { useState } from 'react';
import { useEffect } from "react";

import { Link } from "react-router-dom"
import "./BasicDetails.css"

const BasicDetails = (props) => {
    const [property, setProperty] = useState("")
    const handleClick = () => {
        props.onData2({ property: property, colorUrl: blueColorUrl });

    };
    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
    }, [blueColorUrl]);

    return (

        <>
            <form className="formContainer" >

                <section className="column">
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PropertyType">Property Type</label>
                        <select className="WideInput" type="text" id="PropertyType" name="PropertyType"
                            placeholder="Select Property Type" onChange={(e) => { setProperty(e.target.value) }} value={property} >
                            <option value="option1" className="WideInput" >Select Property Type</option>
                            <option value="Plot">Plot</option>
                            <option value="flat">Flat</option>
                            <option value="House">House</option>
                            <option value="Other">Other</option>

                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Price">Price</label>
                        <input className="WideInput" type="text" id="Price" name="Price"
                            placeholder="Example: 10000" /></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyAge">Property Age</label>
                        <input className="WideInput" type="text" id="PropertyAge" name="PropertyAge"
                            placeholder="Select Property Age" /></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyDescription">Property Description</label>
                        <input className="WideInput" type="text" id="PropertyDescription" name="PropertyDescription" />
                    </section>
                </section>

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Negotable">Negotable</label>
                        <select className="WideInput" type="text" id="Negotable" name="Negotable" placeholder="Select Negotable" >
                            <option value="option1" className="SelectNegotable" >Select Negotable</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Ownership">Ownership</label>
                        <select className="WideInput" type="text" id="Ownership" name="Ownership" placeholder="Ownership" >
                            <option value="option1" className="Ownership" >Ownership</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyApproved">Property Approved</label>
                        <select className="WideInput" type="text" id="PropertyApproved" name="PropertyApproved"
                            placeholder="PropertyApproved" >
                            <option value="option1" className="PropertyApproved" >Property Approved</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="BankLoan">Bank Loan</label>
                        <select className="WideInput" type="text" id="BankLoan" name="BankLoan"
                            placeholder="BankLoan" >
                            <option value="option1" className="BankLoan" >Bank Loan</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                </section>
                <section className="buttons" id="buttonsForBasicDetails">
                <Link to='/addproperties'>  <button className="button1" >Cancel</button></Link>
                <Link to='/propdetails'> <button className="button2" onClick={handleClick} >Save & Continue</button></Link>
            </section>
            </form>

           
        </>
    )
}
export default BasicDetails;