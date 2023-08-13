import React, {useState} from 'react';
import mockSvg from './assets/image1.png'
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
                <div className="flex w-[95%] flex-wrap justify-evenly max-lg:w-[80%] max-sm:w-[95%] xl:w-[100%]">
                    <ExploreElement toggleTopUp={toggleTopUp} domeImg={mockSvg}/>
                    <ExploreElement toggleTopUp={toggleTopUp} domeImg={mockSvg}/>
                    <ExploreElement toggleTopUp={toggleTopUp} domeImg={mockSvg}/>
                    <ExploreElement toggleTopUp={toggleTopUp} domeImg={mockSvg}/>
                </div>
            </div>
            <ProductTopup isOpen={isTopUpOpen} onClose={toggleTopUp} domeImg={mockSvg}/>
        </section>

    );
}

function ExploreElement({toggleTopUp, domeImg}) {
    return (
        <div className="basis-1/2 max-lg:basis-full flex justify-center items-center pb-10">
            <div
                className="border-gray-600 border-2 pb-8 pt-6 px-4 mt-6 max-sm:px-4 lg:w-[85%] xl:w-[85%] 2xl:w-[80%] w-full flex rounded-2.5rem max-sm:flex-col 2xl:w-[60%] flex-col items-center">
                <div className="flex flex-col px-3 py-2 w-[100%] max-sm:w-full items-center pb-8">
                    <h1 className="text-red-600 font-bold text-4xl hover:text-red-700 hover:cursor-pointer hover:transition-colors transition-colors hover:duration-700 duration-700"
                        onClick={toggleTopUp}>The Dome - model S</h1>
                </div>
                <div
                    className={`flex justify-center w-[90%] max-sm:w-[95%] max-sm:self-center h-[25rem] items-center bg-gray-600 rounded-2xl hover:cursor-pointer hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] hover:shadow-gray-300 hover:transition-shadow transition-shadow hover:duration-700 duration-700 bg-cover bg-center bg-no-repeat `}
                    style={{backgroundImage: `url(${domeImg})`}}>
                </div>
                <h1 className="text-3xl text-red-700 font-bold pt-8">2000$</h1>
                <div className="my-5 flex items-center justify-center lg:w-[40%] xl:w-[40%] 2xl:w-[35%]">
                    <button className="bg-black rounded-2xl text-white text-xl py-3 px-5 w-full">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Explore;