import React, { useState } from "react";
import "./BasicDetails.css"
import { Link } from "react-router-dom"
import { useEffect } from "react";

const PropDetails = (props) => {

  let blueColorUrl = window.location.href
  useEffect(() => {
  }, [blueColorUrl]);
  const [area, setArea] = useState('')
  const handleClick = () => {
    props.onData1({ area: area, colorUrl: blueColorUrl });
  };
  return (

    <>
      <form className="formContainer" id="formContainerForPropertyDetails"  >

        <section className="column">

          <section className="inputSection"> <label className="WideLabel" htmlFor="Length">Length</label>
            <input className="WideInput" type="number" id="Length" name="Length"
              placeholder="Length" />
          </section>
          <section className="inputSection"> <label className="WideLabel" htmlFor="TotalArea">Total Area</label>
            <input className="WideInput" type="number" id="TotalArea" name="TotalArea"
              placeholder="Total Area" onChange={(e) => { setArea(e.target.value) }} value={area} />
          </section>
          <section className="inputSection">
            <label className="WideLabel" htmlFor="NoOfBHK">No of BHK</label>
            <select className="WideInput" type="text" id="NoOfBHK" name="NoOfBHK"
              placeholder="No of BHK" >
              <option value="NoOfBHK" className="WideInput" >Select No of BHK</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection">
            <label className="WideLabel" htmlFor="Attached">Attached</label>
            <select className="WideInput" type="text" id="Attached" name="Attached"
              placeholder="Select Attached" >
              <option value="Select Attached" className="WideInput" >Select Attached</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection">
            <label className="WideLabel" htmlFor="Furnished">Furnished</label>
            <select className="WideInput" type="text" id="Furnished" name="Furnished"
              placeholder="Furnished" >
              <option value="Furnished" className="WideInput" >Select Furnished</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection">
            <label className="WideLabel" htmlFor="Lift">Lift</label>
            <select className="WideInput" type="text" id="Lift" name="Lift"
              placeholder="Lift" >
              <option value="Lift" className="WideInput" >Select Lift</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection">
            <label className="WideLabel" htmlFor="Facing">Facing</label>
            <select className="WideInput" type="text" id="Facing" name="Facing"
              placeholder="Facing" >
              <option value="NoOfBHK" className="WideInput" >Select Facing</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>


        </section>

        <section className="column">
          <section className="inputSection"> <label className="WideLabel" htmlFor="Breath">Breath</label>
            <input className="WideInput" type="number" id="Breath" name="Breath"
              placeholder="Breath" /></section>

          <section className="inputSection"> <label className="WideLabel" htmlFor="Area Unit ">Area Unit </label>
            <select className="WideInput" type="text" id="Area Unit " name="Area Unit "
              placeholder="Area Unit " >
              <option value="Area Unit " className="SelectNegotable" >Area Unit </option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection"><label className="WideLabel" htmlFor="NoOfFloor">No of Floor</label>
            <select className="WideInput" type="text" id="NoOfFloor" name="NoOfFloor"
              placeholder="NoOfFloor" >
              <option value="NoOfFloor" className="NoOfFloor" >No of Floor</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection"> <label className="WideLabel" htmlFor="WesternToilet">Western Toilet</label>
            <select className="WideInput" type="text" id="WesternToilet" name="WesternToilet"
              placeholder="WesternToilet" >
              <option value="WesternToilet" className="WesternToilet" >Western Toilet</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>
          <section className="inputSection">
            <label className="WideLabel" htmlFor="CarParking">Car Parking</label>
            <select className="WideInput" type="text" id="CarParking" name="CarParking"
              placeholder="Car Parking" >
              <option value="option1" className="CarParking" >Car Parking</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </section>

          <section className="inputSection"> <label className="WideLabel" htmlFor="Electricity">Electricity</label>
            <input className="WideInput" type="number" id="Electricity" name="Electricity"
              placeholder="Electricity" /></section>
        </section>

        <section className="buttons" id="buttonsForPropertyDetails">
          <Link to='/'>    <button onClick={handleClick} className="button1">Previous</button></Link>
          <Link to='/geninfo'> <button onClick={handleClick} className="button2">Save & Continue</button></Link>
        </section>
      </form>


    </>
  )
}
export default PropDetails;