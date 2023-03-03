import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicDetails from './components/addproperty/basic/BasicDetails';
import GenInfo from './components/addproperty/general/GenInfo';
import LocateInfo from './components/addproperty/location/LocateInfo';
import PropDetails from './components/addproperty/property/PropDetails';





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

  );
}

export default App;
