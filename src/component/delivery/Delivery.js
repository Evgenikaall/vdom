import React from 'react';
import map from './assets/delivery_map.svg'
import {faCampground} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Delivery() {
    return (
        <section className="w-[85%] max-lg:w-full flex justify-center flex-col my-10 mx-auto items-center">
            <h1 className="text-center text-6xl">Delivery</h1>
            <div className="flex justify-around w-[90%] max-md:flex-col items-center">
                <img src={map} className='w-[60%] max-md:w-[80%]' alt="Map of delivery"/>
                <div className="flex flex-col max-md:w-[90%] w-[25%] pt-[10%] max-md:justify-between">
                    <div className="flex flex-col pb-10">
                        <h1 className="text-red-600 text-2xl md:text-3xl lg:text-4xl pb-10">Delivery: </h1>
                        <DeliveryMethodItem/>
                    </div>
                    <div className="flex flex-col pb-10">
                        <h1 className="text-red-600 text-2xl md:text-3xl lg:text-4xl pb-10">Delivery: </h1>
                        <DeliveryMethodItem/>
                        <DeliveryMethodItem/>
                    </div>
                </div>
            </div>

        </section>
    );
}

function DeliveryMethodItem() {
    return (
        <div className="flex flex-col mb-5 ">
            <div className="flex items-center pb-3">
                <FontAwesomeIcon icon={faCampground} className="text-red-600 self-center mr-2 text-[1.8rem]"/>
                <h2 className="lg:text-2xl md:text-xl">Phone</h2>
            </div>
            <p className="text-md text-gray-600 font-thin">Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum</p>
        </div>
    );
}


export default Delivery;
