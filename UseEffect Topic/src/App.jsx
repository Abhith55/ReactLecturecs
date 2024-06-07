import React from "react";
import FetchdataFromApi from "./componetns/FetchdataFromApi";
import FormHandlng from "./componetns/FormHandlng";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseEffect from "./componetns/UseEffect";

const App = () => {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<UseEffect/>} />
          <Route path="/api" element={<FetchdataFromApi/>}/>
          <Route path ="/form" element={<FormHandlng />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
