import React from 'react';
import feather from "./assets/Feather.svg"
function Info(props) {
    return (
        <div className="lg:flex flex-wrap  content-center justify-around max-w-full h-60  md:flex  h-80  sm:hidden">
            <div className="flex bg-main-color h-32 w-96 rounded-4.5rem item-center ">
                <img src={feather} className="self-center ml-8"/>
                <div className="self-center">
                    <h4 className=" font-bold text-center">Блокировка УФ-излучения</h4>
                    <div className="text-center">Защищает от солнечных ожогов и предотвращает выгорание мебели</div>
                </div>
            </div>
            <div className="flex bg-main-color h-32 w-96 rounded-4.5rem item-center ">
                <img src={feather} className="self-center ml-8"/>
                <div className="self-center">
                    <h4 className=" font-bold text-center">Блокировка УФ-излучения</h4>
                    <div className="text-center">Защищает от солнечных ожогов и предотвращает выгорание мебели</div>
                </div>
            </div>
            <div className="flex bg-main-color h-32 w-96 rounded-4.5rem item-center ">
                <img src={feather} className="self-center ml-8"/>
                <div className="self-center">
                    <h4 className=" font-bold text-center">Блокировка УФ-излучения</h4>
                    <div className="text-center">Защищает от солнечных ожогов и предотвращает выгорание мебели</div>
                </div>
            </div>
        </div>
    );
}

export default Info;