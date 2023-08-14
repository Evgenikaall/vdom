import '../index.css'
import React, {useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";
import WorkingArea from "./workingArea/WorkingArea";
import Intro from "./Intro/Intro";
import Info from "./Info/Info";
import Workflow from "./workflow/Workflow";
import Explore from "./explore/Explore";
import Footer from "./footer/Footer";
import Delivery from './delivery/Delivery';
import QuestionList from "./question/QuestionList";
import Preloader from "./preloader/Preloader";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an async operation, like fetching data
        setTimeout(() => {
            setLoading(false);
        }, 1600);
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className={`transition-opacity duration-[1800ms] ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <Navbar/>
                <Intro/>
                <Info/>
                <WorkingArea/>
                <Explore/>
                <Workflow/>
                <Delivery/>
                <QuestionList/>
                <Footer/>
            </div>
            <div className={`transition-opacity duration-[1800ms] ${loading ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <Preloader/>
            </div>
        </div>
    )
}

export default App;
