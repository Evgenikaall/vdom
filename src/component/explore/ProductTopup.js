import React, {useEffect} from 'react';
import mockSvg from './assets/mock-svg.svg'

const ProductTopup = ({isOpen, onClose}) => {

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);


    return (
        <div
            className={`fixed top-0 left-0 z-50 w-screen h-screen backdrop-blur-1.5 bg-gray-800/30 flex justify-center items-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
            <div className="w-[80%] h-50vh bg-main-color rounded-2.5rem flex ">
                <div className="flex rounded-2.5rem items-center w-full justify-end">
                    <div className="flex flex-col px-3 py-2 w-[50%] h-[80%] justify-around">
                        <h1 className="text-red-600 font-bold text-4xl">The Dome - model S</h1>
                        <div className="pt-2 pb-6">
                            <p className="text-gray-600">Data: 111</p>
                            <p className="text-gray-600">Data: 111</p>
                            <p className="text-gray-600">Data: 111</p>
                            <p className="text-gray-600">Data: 111</p>
                        </div>
                        <div
                            className="flex justify-between w-[30%] items-center max-lg:w-[65%] max-md:w-[80%] max-sm:w-full max-xl:w-[40%]">
                            <h1 className="font-bold text-red-600">2000$</h1>
                            <button className="bg-black rounded-2xl text-white text-xs py-1 px-3">Contact Us</button>
                        </div>
                    </div>
                    <div
                        className="flex justify-center w-[45%] items-center bg-gray-600 rounded-l-2xl h-[80%]">
                        <img src={mockSvg} alt="Logo" className="rotate-90 h-20vh w-[5.25rem] text-white"/>
                    </div>
                </div>
            </div>
            <button className="fixed top-0 right-0 m-4 p-2 text-white rounded-lg" onClick={onClose}>
                <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white hover:text-gray-400 hover:transition-colors hover:duration-500 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </button>
        </div>

    );
};

export default ProductTopup;
