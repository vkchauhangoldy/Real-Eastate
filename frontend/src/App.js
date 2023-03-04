



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BasicDetails from './components/addproperty/basic/BasicDetails';
import GenInfo from './components/addproperty/general/GenInfo';
import LocateInfo from './components/addproperty/location/LocateInfo';
import PropDetails from './components/addproperty/property/PropDetails';






// import './App.css';
//import Search from "./Components/Search"
// import React from 'react';
// import SearchPage from "./Components/MainPage/SearchPage"
// import { useState } from 'react';
// import Home from './Components/MainPage/Home';

function App() {
  
  return (

    <>
      {/* <idContext.Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BasicDetails />} />
          <Route path='/prodetail' element={<PropDetails />} />
          <Route path='/geninfo' element={<GenInfo />} />
          <Route path='/location' element={<LocateInfo />} />
        </Routes>
      </BrowserRouter>
      {/* </idContext.Provider> */}
    </>


  //   <div>
  //    {/* <UpperNav/>  */}
  //    <Home/>
  //  {/* <h1>HiEye</h1> */}
  //   </div>

  );
}


export default App;
