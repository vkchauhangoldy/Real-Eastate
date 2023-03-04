import React, { useState ,useEffect} from "react";
import { HiSearch } from "react-icons/hi";
import { MdPhotoLibrary, MdModeEdit } from "react-icons/md";
import { HiEye } from "react-icons/hi";
// import { Link } from "react-router-dom";
import "./Alldetails.css"
const AllDetails = () => {
    const[list,updateList]=useState([])
    debugger
    
    // getPropertyList()
    useEffect(() => {
            fetch('http://localhost:8080/h1/home',{
                  method:"Post",
                  headers: {
                      "Content-Type": "application/json"
                  }
              }).then((res)=>{return res.json()})
              .then((data)=>{
                  console.log(data)
              })
      
          }
        // updateStatus()
    ,[])
    const searchHandel = async (event) => {
        // let key = event.target.value
        // if (key) {
        //     let result = await fetch(`http://localhost:8080/h1/:key/${key}`)
        //     result = await result.json()
        //     updateList(result)
        //     console.log(result)
        // }
        // else {
        //     getPropertyList()
        // }
    }
    return (
        <div className="dashboard">
            <div className="search-addProperty">
                <span className="search-bar">
                    <input className="search-input" type="text" placeholder="search PPD ID" onChange={searchHandel} />
                    <span className="border-left-line" onClick={searchHandel}><HiSearch className='search-icon' /></span>
                </span>
             {/* <Link to={"/basic"}>
                style={{textDecoration:"none"}} */}
                <button className="add-btn">+ Add Property</button>
                {/* </Link> */}
            </div>
        <div className="property-lists">
            <table>
                <thead>
                    <td>PPD ID</td>
                    <td>Image</td>
                    <td>Property</td>
                    <td>Contact</td>
                    <td>Area</td>
                    <td>View</td>
                    <td>Status</td>
                    <td>Daysleft</td>
                    <td>Action</td>
                </thead>
                <tbody>
                  {list.map((val,index)=>{
                            let ppid=val._id
                            ppid=ppid.match(/\d+/g)
                                    ppid=ppid[0]

                    return(
                        <tr key={index}>
                                    
                            <td>{`PPD ${+ppid+1000}`}</td>
                            <td className="gray-color"><MdPhotoLibrary /></td>
                            <td>{val.property}</td>
                            <td>{val.contact}</td>
                            <td>{val.area}</td>
                            <td>{val.views}</td>
                            <td>{val.daysleft}</td>
                            <td>{val.status}</td>
                            <td><button className="action-btn" 
                                             onClick={()=>{updateList(list)}}
                                    >
                                                {val.status}
                                            </button></td>
                                            <td>{parseInt(Math.random() *90 + 10)}</td>
                                            <td><span className="gray-color action"><HiEye className="view-icon" /><MdModeEdit /></span></td>
                    </tr>
                    )
                  })}  
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default AllDetails