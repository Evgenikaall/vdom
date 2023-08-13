import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCampground, faComments, faPersonDigging, faTruckRampBox, faTruck} from "@fortawesome/free-solid-svg-icons";

function Workflow() {
    return (
        <section className="w-full flex justify-around items-center flex-col pt-10">
            <h1 className="text-6xl mb-10">Workflow</h1>
            <div className="w-full flex px-10 justify-around max-lg:flex-col max-lg:items-center">
                <div className="w-[97%] absolute left-1/2 right-1/2 -translate-x-1/2 translate-y-1/2 h-24 border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem max-lg:hidden"></div>
                <WorkflowSlide icon={faComments} name={"Ordering"} description={"Includes construction selecting, free consultation, extra fees"}/>
                <WorkflowSlide icon={faPersonDigging} name={"Creation"} description={"Includes construction selecting, free consultation, extra fees"}/>
                <WorkflowSlide icon={faTruckRampBox} name={"Delivery preparation"} description={"Includes construction selecting, free consultation, extra fees"}/>
                <WorkflowSlide icon={faTruck} name={"Delivery to client"} description={"Includes construction selecting, free consultation, extra fees"}/>
            </div>
        </section>
    );
}

function WorkflowSlide({icon, name, description}) {
    return (
        <div className="flex w-[20%] max-lg:w-[60%] mb-10 flex bg-main-color z-10 items-start px-5 py-7 rounded-t-2rem rounded-b-2rem">
            <div className="flex flex-col items-center mx-auto">
                <FontAwesomeIcon icon={icon} className="text-red-600 self-center pb-5 lg:text-5xl text-3xl"/>
                <h1 className="text-2xl font-bold pb-3 max-sm:text-xl text-center">{name}</h1>
                <div className="flex w-[70%]">
                    <p className="">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Workflow;
