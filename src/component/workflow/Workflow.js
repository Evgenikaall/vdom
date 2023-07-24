import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCampground} from "@fortawesome/free-solid-svg-icons";

function Workflow() {
    return (
        <section className="w-full h-50vh flex justify-around items-center flex-col mt-10">
            <h1 className="text-6xl mb">Workflow</h1>
            <div className="w-11/12 h-30vh flex px-10 justify-around ">
                <div className="w-full absolute left-1/2 right-1/2 -translate-x-1/2 translate-y-1/2 h-15vh border-2 border-gray-500 rounded-t-4.5rem rounded-b-4.5rem"></div>
                <div className="flex-col flex basis-1/6 bg-main-color z-10 items-start px-5 py-7 rounded-t-2rem rounded-b-2rem">
                    <FontAwesomeIcon icon={faCampground} className="text-red-600 self-center pb-5" size="2xl"/>
                    <h1 className="text-2xl font-bold pb-3">text</h1>
                    <p>fndasfnadsj fasdjlfn ajlsdnf jlasdf jlasdfn jadsfn kadsnf kadskasdkf</p>
                </div>
                <div className="flex-col flex basis-1/6 bg-main-color z-10 items-start px-5 py-7 rounded-t-2rem rounded-b-2rem">
                    <FontAwesomeIcon icon={faCampground} className="text-red-600 self-center pb-5" size="2xl"/>
                    <h1 className="text-2xl font-bold pb-3">text</h1>
                    <p>fndasfnadsj fasdjlfn ajlsdnf jlasdf jlasdfn jadsfn kadsnf kadskasdkf</p>
                </div>
                <div className="flex-col flex basis-1/6 bg-main-color z-10 items-start px-5 py-7 rounded-t-2rem rounded-b-2rem">
                    <FontAwesomeIcon icon={faCampground} className="text-red-600 self-center pb-5" size="2xl"/>
                    <h1 className="text-2xl font-bold pb-3">text</h1>
                    <p>fndasfnadsj fasdjlfn ajlsdnf jlasdf jlasdfn jadsfn kadsnf kadskasdkf</p>
                </div>
                <div className="flex-col flex basis-1/6 bg-main-color z-10 items-start px-5 py-7 rounded-t-2rem rounded-b-2rem">
                    <FontAwesomeIcon icon={faCampground} className="text-red-600 self-center pb-5" size="2xl"/>
                    <h1 className="text-2xl font-bold pb-3">text</h1>
                    <p>fndasfnadsj fasdjlfn ajlsdnf jlasdf jlasdfn jadsfn kadsnf kadskasdkf</p>
                </div>
            </div>

        </section>
    );
}

export default Workflow;