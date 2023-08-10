import React from 'react';
import feather from "./assets/Feather.svg"

function Info() {
    return (
        <div className="w-full my-10 mx-auto">
            <div className="w-full flex flex-wrap justify-around mx-auto max-lg:flex-col items-center">
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
            </div>
        </div>
    );
}

function InfoCard() {
    return (
        <div className="flex flex-col bg-main-color rounded-4.5rem px-10 py-5 w-[27%] max-2xl:w-[30%] max-lg:w-[60%] max-sm:w-[90%] 2xl:w-[25%] mb-4">
            <div className="flex justify-start w-full mb-1">
                <img src={feather} className="mr-2"/>
                <h4 className="font-bold text-sm">Блокировка УФ-излучения</h4>
            </div>
            <div className="flex">
                <div className="font-thin text-sm">Защищает от солнечных ожогов и предотвращает выгорание мебели</div>
            </div>
        </div>
    );
}

export default Info;