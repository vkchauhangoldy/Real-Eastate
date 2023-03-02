import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BasicDetails from './components/propcomponents/BasicDetails';
import GenInfo from './components/propcomponents/GenInfo';
import LocateInfo from './components/propcomponents/LocateInfo';
import PropDetails from './components/propcomponents/PropDetails';




function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<BasicDetails />} />
            <Route path='/propdetails' element={<PropDetails/>} />
            <Route path='/geninfo' element={<GenInfo/>} />
            <Route path='/location' element={<LocateInfo/>} />
        </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
