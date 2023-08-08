import '../index.css'
import React from "react";
import Navbar from "./navbar/Navbar";
import WorkingArea from "./workingArea/WorkingArea";
import Intro from "./Intro/Intro";
import Info from "./Info/Info";
import Workflow from "./workflow/Workflow";
import Explore from "./explore/Explore";
import Footer from "./footer/Footer";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Intro/>
            <Info/>
            <WorkingArea/>
            <Explore/>
            <Workflow/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
