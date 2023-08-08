import React from 'react';
import map from './assets/delivery_map.svg'

function Delivery() {
    return (
        <section className="w-full flex justify-between flex-col">
            <h1>Delivery</h1>
            <div className="flex justify-between w-[90%] items-center">
                <img src={map} className='w-[40%]'/>
                <div className="flex flex-col w-[50%]">
                    <div>
                        <h1>Test</h1>
                        <p>Data</p>
                    </div>
                    <div>
                        <h1>Test</h1>
                        <p>Data</p>
                        <p>Data</p>
                    </div>
                </div>
            </div>
        
        </section>
    );
}


export default Delivery;
