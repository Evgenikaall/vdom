import '../index.css'
import React from "react";
import Navbar from "./navbar/Navbar";
import WorkingArea from "./workingArea/WorkingArea";
import Workflow from "./workflow/Workflow";
import Explore from "./explore/Explore";
import Footer from "./footer/Footer";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <WorkingArea/>
            <Explore/>
            <Workflow/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
