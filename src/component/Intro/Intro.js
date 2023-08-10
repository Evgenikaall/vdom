import React from 'react';
import down from './assets/Group.svg'
import IntroGallery from "./IntroGallery";
import {faCloudRain} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Intro() {

    return (
        <section className="bg-white mt-5">
            <div className="w-full">
                <div className="w-full px-10">
                    <div className="relative flex flex-col bg-main-color rounded-4.5rem h-full mb-5">
                        <div className="flex flex-col w-[40%] pl-16">
                            <h3 className="text-8xl pt-32 pb-7 self-start">
                                dome.
                            </h3>
                            <p className="text-xl font-thin pb-5">
                                Купольные беседки в стиле иглу - объединение<br/>
                                качества, долговечности и эстетики
                            </p>
                            <div className="flex justify-around w-[40%] pb-10">
                                <FontAwesomeIcon icon={faCloudRain} size="xl"/>
                                <FontAwesomeIcon icon={faCloudRain} size="xl"/>
                                <FontAwesomeIcon icon={faCloudRain} size="xl"/>
                                <FontAwesomeIcon icon={faCloudRain} size="xl"/>
                            </div>
                            <div className="flex">
                                <a href="/catalog" className="flex">
                                    <button className="bg-white justify-self-start border rounded-full hover:bg-red-600 transition-all px-5 py-2">
                                        <p className="text-sm">Каталог товаров</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="self-center pt-32 pb-6">
                            <img src={down} alt='Down' className="animate-bounce"/>
                        </div>
                        <IntroGallery />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;