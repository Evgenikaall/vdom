import React from 'react';
import {faCampground} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WorkingArea() {
    return (
        <section className="flex justify-center mt-6 px-5">
            <div className="w-full border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem">
                <div className="h-full flex flex-col justify-around items-center py-10 lg:w-[98%] mx-auto">
                    <div className="flex flex-col justify-around items-center pb-5">
                        <h1 className="text-red-800 text-5xl mb-1 text-center">Working Area</h1>
                        <p className="text font-thin text-center">Why do we need it ?</p>
                    </div>
                    <div className="flex justify-between flex-wrap py-5 max-md:flex-col max-lg:w-[80%] w-full">
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                        <WorkingAreaSide/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorkingAreaSide() {
    return (
        <div className="rounded bg-main-color px-8 py-12 mb-5 flex justify-center items-center rounded-t-[2.7rem] rounded-b-[2.7rem] w-[100%] lg:w-[24%] lg:px-6 lg:py-10 md:w-[45%]">
            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-[1.5px] p-1 border-red-800 pr-4 text-red-800"/>
            <h2 className="text-center pl-2">For camping</h2>
        </div>
    )
}

export default WorkingArea;
