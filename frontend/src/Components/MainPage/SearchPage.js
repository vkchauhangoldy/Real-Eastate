import React from "react"
import { useState ,useEffect} from "react"
import { HiSearch } from "react-icons/hi";
import "./Alldetails.css"

// import "./Search.css"
const Search=()=>{
    const[search,setSearch]=useState("")
    const[searchData,setSearchData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/h1/key`).then((res)=>{
           return res.json()
        }).then((data)=>{
            console.log(data)
        // res.send(data)
    })
    },[])
    const searchhandle=()=>{
        // if(search){
        //     if(search){
        //         let result= fetch(`http://localhost:3000/h1/key${search}`)
        //         result= result.json()
        //         searchData(result)
        //         console.log(result)
        //     }
    
        // }
    }
    return(
       <div className="dashboard">
        <div className="search">
            <span className="searchbar">
                <input className="search-input" type="text" placeholder="search PPD ID"
              onChange={(e)=>{setSearch(e.target.value)}} />
              <span className="searchhandle" onClick={searchhandle}><HiSearch className='search-icon'/></span>
              </span>
              <button className="add-btn">+  Add Property</button>
            
        </div>
        
       </div>
    
    )
}
export default Search