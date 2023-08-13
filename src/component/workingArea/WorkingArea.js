import React from 'react';
import {faCampground, faUtensils, faHouse, faHandsHoldingChild, faSnowflake, faWaterLadder, faWarehouse, faPersonShelter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WorkingArea() {
    return (
        <section className="flex justify-center mt-6 px-5">
            <div className="w-full border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem">
                <div className="h-full flex flex-col justify-around items-center py-10 lg:w-[98%] mx-auto">
                    <div className="flex flex-col justify-around items-center pb-5">
                        <h1 className="text-red-800 text-5xl mb-1 text-center">Working area</h1>
                        <p className="text font-thin text-center">Why do we need it ?</p>
                    </div>
                    <div className="flex justify-between flex-wrap py-5 max-md:flex-col max-lg:w-[80%] w-full">
                        <WorkingAreaSide icon={faUtensils} description={"For restaurants"}/>
                        <WorkingAreaSide icon={faHouse} description={"For home"}/>
                        <WorkingAreaSide icon={faHandsHoldingChild} description={"For children"}/>
                        <WorkingAreaSide icon={faSnowflake} description={"For Winter"}/>
                        <WorkingAreaSide icon={faCampground} description={"For camping"}/>
                        <WorkingAreaSide icon={faWaterLadder} description={"For pool"}/>
                        <WorkingAreaSide icon={faWarehouse} description={"For warehouse"}/>
                        <WorkingAreaSide icon={faPersonShelter} description={"For roof"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorkingAreaSide({icon, description}) {
    return (
        <div className="py-14 px-3rounded bg-main-color mb-5 flex justify-center items-center rounded-t-[2.7rem] rounded-b-[2.7rem] w-[100%] lg:w-[22%] xl:w-[22%] md:w-[45%]">
            <div className="flex items-center">
                <FontAwesomeIcon icon={icon} className="text-4xl lg:text-5xl border-r-[1.5px] p-1 border-red-800 pr-6 text-red-800"/>
                <h2 className="text-left lg:text-xl max-lg:text-2xl xl:text-2xl pl-4 w-[8rem]">{description}</h2>
            </div>
        </div>
    )
}

export default WorkingArea;
