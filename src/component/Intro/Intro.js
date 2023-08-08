import React from 'react';
import icons from './assets/icons.svg'
import down from './assets/Group.svg'
import IntroGallery from "./IntroGallery";

function Intro() {

    return (
        <section className="bg-white max-w-full">
            <div className="w-full">
                <div className="w-full px-10 ">
                    <div className="flex h-90vh bg-main-color rounded-4.5rem ">
                        <div className="flex flex-col text-left items-center mb-30">
                            <h3 className=" text-12xl   pb-15   ml-24 mt-24 ">
                                dome.
                            </h3>
                            <p className="text-2xl    ml-20">
                                Купольные беседки в стиле иглу - объединение<br/>
                                качества, долговечности и эстетики
                            </p>
                            <div className="self-start ml-20">
                                <img src={icons} alt="icons" className="h-7 w-52 sm:h-16"/>
                            </div>
                            <div className="flex">
                                <a href="/catalog" className="flex">
                                    <button
                                        className="bg-white justify-self-start mt-24 mr-52 w-56 h-11  border rounded-full hover:bg-red-600 transition-all">
                                        Каталог товаров
                                    </button>
                                </a>
                            </div>

                        </div>
                        <div className="absolute w-11 h-8 inset-x-1/2 bottom-16">
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