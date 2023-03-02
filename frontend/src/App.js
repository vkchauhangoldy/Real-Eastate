import React from "react"
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
 <>
 <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
 </Routes>
 
 </>
  )};
export default App;
