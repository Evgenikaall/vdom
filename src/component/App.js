import '../index.css'
import React from "react";
import Navbar from "./navbar/Navbar";
import WorkingArea from "./workingArea/WorkingArea";

function App() {
  return (
      <React.Fragment>
        <Navbar />
        <WorkingArea />
      </React.Fragment>
  );
}

export default App;
