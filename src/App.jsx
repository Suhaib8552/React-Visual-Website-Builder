import Canvas from "./components/Canvas";

import Sidebar from "./components/Sidebar";
import './App.css';
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [elements,setElements]=useState([]);
  return (
    <>
    <Header />
    <div className="mid-cont">
      <Sidebar setElements={setElements}/>
      <Canvas elements={elements} setElements={setElements} />
      
    </div>
      
    </>
  );
}

export default App;
