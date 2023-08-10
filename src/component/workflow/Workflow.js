import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCampground} from "@fortawesome/free-solid-svg-icons";

function Workflow() {
    return (
        <section className="w-full flex justify-around items-center flex-col pt-10">
            <h1 className="text-6xl mb-10">Workflow</h1>
            <div className="w-full flex px-10 justify-around max-lg:flex-col max-lg:items-center ">
                <div className="w-[97%] absolute left-1/2 right-1/2 -translate-x-1/2 translate-y-1/2 h-24 border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem max-lg:hidden"></div>
                <WorkflowSlide/>
                <WorkflowSlide/>
                <WorkflowSlide/>
                <WorkflowSlide/>
            </div>
        </section>
    );
}

function WorkflowSlide() {
    return (
        <div className="flex-col w-[20%] max-lg:w-[80%] mb-5 flex bg-main-color z-10 items-start px-5 py-7 rounded-t-2rem rounded-b-2rem">
            <FontAwesomeIcon icon={faCampground} className="text-red-600 self-center pb-5" size="2xl"/>
            <h1 className="text-2xl font-bold pb-3">Ordering</h1>
            <p>Includes construction selecting, free consultation, extra fees</p>
        </div>
    )
}

export default Workflow;
