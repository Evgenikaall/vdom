import '../index.css'
import React from "react";
import Navbar from "./navbar/Navbar";
import WorkingArea from "./workingArea/WorkingArea";
import Workflow from "./workflow/Workflow";

function App() {
  return (
      <React.Fragment>
        <Navbar />
        <WorkingArea />
        <Workflow/>
      </React.Fragment>
  );
}

export default App;
