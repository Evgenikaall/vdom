import React from 'react';
import {faCampground} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WorkingArea() {
    return (
        <section className="flex justify-center mt-6 px-5">
            <div className="w-full h-[50vh] border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem">
                <div className="h-full flex flex-col justify-around items-center py-10 2xl:w-[80%] xl:w-[90%] mx-auto">
                    <div className="flex flex-col justify-around items-center">
                        <h1 className="text-red-800 text-5xl mb-1">Working Area</h1>
                        <p className="text font-thin">Why do we need it ?</p>
                    </div>
                    <div className="flex justify-around flex-wrap w-full py-5">
                        <div className="rounded bg-main-color px-9 py-12 mb-5 flex justify-around items-center rounded-t-[2.7rem] rounded-b-[2.7rem]">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-[1.5px] p-1 border-red-800 pr-4 text-red-800"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                        <div
                            className="rounded bg-main-color px-9 py-12 mb-5 flex justify-around items-center rounded-t-[2.7rem] rounded-b-[2.7rem]">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-[1.5px] p-1 border-red-800 pr-4 text-red-800"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                        <div
                            className="rounded bg-main-color px-9 py-12 mb-5 flex justify-around items-center rounded-t-[2.7rem] rounded-b-[2.7rem]">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-[1.5px] p-1 border-red-800 pr-4 text-red-800"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                        <div className="rounded bg-main-color px-9 py-12 mb-5 flex justify-around items-center rounded-t-[2.7rem] rounded-b-[2.7rem]">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-[1.5px] p-1 border-red-800 pr-4 text-red-800"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkingArea;
