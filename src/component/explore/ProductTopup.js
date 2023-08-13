import React, {useEffect} from 'react';

const ProductTopup = ({isOpen, onClose, domeImg}) => {

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
            <div className="w-[90%] 2xl:w-[70%] h-50vh max-lg:h-[70vh] bg-main-color rounded-2.5rem flex ">
                <div className="flex rounded-2.5rem items-center w-full justify-end max-lg:justify-center">
                    <div className="flex flex-col px-3 py-2 w-[50%] max-lg:w-[90%] h-[80%] justify-around max-lg:items-center">
                        <h1 className="text-red-600 font-bold text-4xl max-lg:pb-10">The Dome - model S</h1>
                        <div className="lg:hidden flex justify-center w-[80%] max-sm:w-[95%] items-center bg-gray-600 rounded-l-2xl max-lg:rounded-r-2xl h-[80%]  bg-cover bg-center bg-no-repeat" style={{
                            backgroundImage: `url(${domeImg})`
                        }}></div>
                        <div className="pt-2 max-lg:pt-5 pb-6 max-lg:w-[80%] text-lg">
                            <p className="text-gray-600">Data: 111</p>
                            <p className="text-gray-600">Data: 111</p>
                            <p className="text-gray-600">Data: 111</p>
                            <p className="text-gray-600">Data: 111</p>
                        </div>
                        <div
                            className="flex justify-between max-lg:justify-around items-center w-[45%] max-xl:w-[60%] max-lg:w-[34%] max-md:w-[45%] max-sm:w-full">
                            <h1 className="font-bold text-red-600 text-lg">2000$</h1>
                            <button className="bg-black rounded-2xl text-white text-lg py-2 px-4">Contact Us</button>
                        </div>
                    </div>
                    <div className="max-lg:hidden flex justify-center w-[45%] items-center bg-gray-600 rounded-l-2xl h-[80%]  bg-cover bg-center bg-no-repeat" style={{
                        backgroundImage: `url(${domeImg})`
                    }}>
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
