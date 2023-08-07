import React, {useState} from 'react';
import mockSvg from './assets/mock-svg.svg'
import ProductTopup from "./ProductTopup";

const Explore = () => {

    const [isTopUpOpen, setTopUpOpen] = useState(false);

    const toggleTopUp = () => {
        setTopUpOpen(!isTopUpOpen);
    };

    return (
        <section className="bg-white my-20">
            <div className="flex flex-col items-center">
                <h1 className="py-5 text-5xl">Explore</h1>
                <div className="flex w-[95%] flex-wrap justify-around max-lg:w-[70%] max-sm:w-[95%]">
                    <div className="border-gray-600 border-2 py-5 mt-6 px-8 lg:w-[45%] w-full  flex rounded-2.5rem justify-between">
                        <div className="flex flex-col px-3 py-2 w-[50%] justify-between">
                            <h1 className="text-red-600 font-bold hover:text-red-700 hover:cursor-pointer hover:transition-colors transition-colors hover:duration-700 duration-700" onClick={toggleTopUp}>The Dome - model S</h1>
                            <div className="pt-2 pb-6">
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                            </div>
                            <div
                                className="flex justify-between w-[70%] items-center max-lg:w-[65%] max-md:w-[80%] max-sm:w-full max-xl:w-[90%]">
                                <h1 className="text-xs font-bold">2000$</h1>
                                <button className="bg-black rounded-2xl text-white text-xs py-1 px-3">Contact Us</button>
                            </div>
                        </div>
                        <div
                            className="flex justify-center w-[45%] items-center bg-gray-600 rounded-2xl hover:cursor-pointer hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] hover:shadow-gray-300 hover:transition-shadow transition-shadow hover:duration-700 duration-700">
                            <img src={mockSvg} onClick={toggleTopUp} alt="Logo" className="rotate-90 h-20vh w-[5.25rem] text-white"/>
                        </div>
                    </div>
                    <div className="border-gray-600 border-2 py-5 mt-6 px-8 lg:w-[45%] w-full  flex rounded-2.5rem justify-between">
                        <div className="flex-col px-3 py-2 w-[50%] justify-between">
                            <h1 className="text-red-600 font-bold hover:text-red-700 hover:cursor-pointer hover:transition-colors transition-colors hover:duration-700 duration-700" onClick={toggleTopUp}>The Dome - model S</h1>
                            <div className="pt-2 pb-6">
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                            </div>
                            <div
                                className="flex justify-between w-[70%] items-center max-lg:w-[65%] max-md:w-[80%] max-sm:w-full max-xl:w-[90%]">
                                <h1 className="text-xs font-bold">2000$</h1>
                                <button className="bg-black rounded-2xl text-white text-xs py-1 px-3">Contact Us</button>
                            </div>
                        </div>
                        <div
                            className="flex justify-center w-[45%] items-center bg-gray-600 rounded-2xl hover:cursor-pointer hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] hover:shadow-gray-300 hover:transition-shadow transition-shadow hover:duration-700 duration-700">
                            <img src={mockSvg} onClick={toggleTopUp} alt="Logo" className="rotate-90 h-20vh w-[5.25rem] text-white"/>
                        </div>
                    </div>
                    <div className="border-gray-600 border-2 py-5 mt-6 px-8 lg:w-[45%] w-full  flex rounded-2.5rem justify-between">
                        <div className="flex-col px-3 py-2 w-[50%] justify-between">
                            <h1 className="text-red-600 font-bold hover:text-red-700 hover:cursor-pointer hover:transition-colors transition-colors hover:duration-700 duration-700" onClick={toggleTopUp}>The Dome - model S</h1>
                            <div className="pt-2 pb-6">
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                            </div>
                            <div
                                className="flex justify-between w-[70%] items-center max-lg:w-[65%] max-md:w-[80%] max-sm:w-full max-xl:w-[90%]">
                                <h1 className="text-xs font-bold">2000$</h1>
                                <button className="bg-black rounded-2xl text-white text-xs py-1 px-3">Contact Us</button>
                            </div>
                        </div>
                        <div
                            className="flex justify-center w-[45%] items-center bg-gray-600 rounded-2xl hover:cursor-pointer hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] hover:shadow-gray-300 hover:transition-shadow transition-shadow hover:duration-700 duration-700">
                            <img src={mockSvg} onClick={toggleTopUp} alt="Logo" className="rotate-90 h-20vh w-[5.25rem] text-white"/>
                        </div>
                    </div>
                    <div className="border-gray-600 border-2 py-5 mt-6 px-8 lg:w-[45%] w-full  flex rounded-2.5rem justify-between">
                        <div className="flex-col px-3 py-2 w-[50%] justify-between">
                            <h1 className="text-red-600 font-bold hover:text-red-700 hover:cursor-pointer hover:transition-colors transition-colors hover:duration-700 duration-700" onClick={toggleTopUp}>The Dome - model S</h1>
                            <div className="pt-2 pb-6">
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                                <p className="text-xs text-gray-600">Data: 111</p>
                            </div>
                            <div
                                className="flex justify-between w-[70%] items-center max-lg:w-[65%] max-md:w-[80%] max-sm:w-full max-xl:w-[90%]">
                                <h1 className="text-xs font-bold">2000$</h1>
                                <button className="bg-black rounded-2xl text-white text-xs py-1 px-3">Contact Us</button>
                            </div>
                        </div>
                        <div
                            className="flex justify-center w-[45%] items-center bg-gray-600 rounded-2xl hover:cursor-pointer hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] hover:shadow-gray-300 hover:transition-shadow transition-shadow hover:duration-700 duration-700">
                            <img src={mockSvg} onClick={toggleTopUp} alt="Logo" className="rotate-90 h-20vh w-[5.25rem] text-white"/>
                        </div>
                    </div>
                </div>
            </div>
            <ProductTopup isOpen={isTopUpOpen} onClose={toggleTopUp}/>
        </section>

    );
}

export default Explore;