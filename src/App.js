import React from 'react'
import List from './components/List'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from './components/Summary'

const App = () => {
  
  return (
    < >
<BrowserRouter>

<Navbar />


<div className="container">
  <Routes>
    <Route exact path="/" element={  <List/>}></Route>
    <Route exact path="/Summary" element={<Summary />}></Route>


  </Routes>
</div>
</BrowserRouter>

    </>
  );

};

export default App;
