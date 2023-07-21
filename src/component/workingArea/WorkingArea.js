import React from 'react';
import {faCampground} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WorkingArea() {
    return (
        <section className="flex justify-center mt-6">
            <div
                className="w-11/12 h-45vh border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem">
                <div
                    className="max-w-full h-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center flex-col">
                    <div className="flex flex-col justify-around items-center mb-30">
                        <h1 className="text-red-600 text-5xl mb-5">Working Area</h1>
                        <p>Why do we need it</p>
                    </div>
                    <div className="flex justify-around flex-wrap w-full">
                        <div className="rounded bg-main-color p-9 mb-5 flex justify-around items-center rounded-t-2.5rem rounded-b-2.5rem">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-2 border-red-600 pr-4 text-red-600 "/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                        <div className="rounded bg-main-color p-9 mb-5 flex justify-around items-center rounded-t-2.5rem rounded-b-2.5rem ">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-2 border-red-600 pr-4 text-red-600"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                        <div className="rounded bg-main-color p-9 mb-5 flex justify-around items-center rounded-t-2.5rem rounded-b-2.5rem">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-2 border-red-600 pr-4 text-red-600"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                        <div className="rounded bg-main-color p-9 mb-5 flex justify-around items-center rounded-t-2.5rem rounded-b-2.5rem">
                            <FontAwesomeIcon icon={faCampground} size="2xl" className="border-r-2 border-red-600 pr-4 text-red-600"/>
                            <h2 className="text-center pl-2">For camping</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkingArea;
