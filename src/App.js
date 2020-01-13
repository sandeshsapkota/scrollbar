import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import CustomScroll from "react-custom-scroll";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <CustomScroll heightRelativeToParent="calc(100% - 20px)">
          <Content />
          </CustomScroll>
      </div>
    </div>
  );
}

export default App;
