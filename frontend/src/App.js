import './App.css';
//import Search from "./Components/Search"

import SearchPage from "./Components/MainPage/SearchPage"
import { useState } from 'react';
import AllDetails from './Components/MainPage/Alldetails';
import Sidenav from './Components/MainPage/Navside';
function App() {
  
  return (
    <div>
    {/* <Search/> */}
    <SearchPage/>
    <Sidenav/>
    <AllDetails/>
    
    
    
    
      
    </div>
  );
}

export default App;
