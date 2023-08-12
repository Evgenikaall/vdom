import React, {useEffect, useState} from 'react';
import IntroGallery from "./IntroGallery";
import {faAnglesDown, faCloudRain} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Intro() {
    const images = ["image1.png", "image2.png", "image3.png"];
    /* TODO: keep this lines of code for future implementation

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    */

    return (
        <section className="bg-white mt-5">
            <div className="w-full">
                <div className="w-full px-10">
                    <div className={`relative flex flex-col bg-main-color rounded-4.5rem h-full mb-5 bg-center bg-cover max-lg:bg-[url("component/Intro/assets/img.png")]`}>
                        <div className="flex flex-col w-[40%] pl-16 max-lg:pl-8 max-lg:w-[60%]">
                            <h3 className="text-7xl max-sm:text-5xl font-bold pt-20 pb-5 lg:text-8xl lg:pt-32 lg:pb-7 lg:self-start">
                                dome.
                            </h3>
                            <p className="text-xl font-thin pb-5 max-sm:text-xs max-md:text-[1rem]">
                                Купольные беседки в стиле иглу - объединение<br/>
                                качества, долговечности и эстетики
                            </p>
                            <div className="flex justify-between w-[40%] pb-10 max-md:w-[60%] max-sm:w-[70%]">
                                <FontAwesomeIcon icon={faCloudRain} className="text-2xl max-md:text-xl"/>
                                <FontAwesomeIcon icon={faCloudRain} className="text-2xl max-md:text-xl"/>
                                <FontAwesomeIcon icon={faCloudRain} className="text-2xl max-md:text-xl"/>
                                <FontAwesomeIcon icon={faCloudRain} className="text-2xl max-md:text-xl"/>
                            </div>
                            <div className="flex max-lg:hidden">
                                <a href="/catalog" className="flex">
                                    <button className="bg-white justify-self-start border rounded-full hover:bg-red-600 transition-all px-5 py-2">
                                        <p className="text-sm">Каталог товаров</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="self-center pt-32 pb-6">
                            <FontAwesomeIcon icon={faAnglesDown} className="animate-bounce text-red-600 text-5xl max-lg:text-4xl max-md:text-3xl"/>
                        </div>
                        <IntroGallery />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;