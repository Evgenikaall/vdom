import React from 'react';
import logoUrl from './assets/logo.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faViber} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer className="w-[95%] mx-auto">
        <div className="bg-main-color h-[40vh] mt-[10vh] rounded-2.5rem flex flex-col items-center justify-center mb-5">
            <img src={logoUrl} alt="Logo" className="h-20 w-fit"/>
            <div className="flex">
                <div className="flex items-center h-full">
                    <a href="src/component#" className="text-black border-t-4 py-5 text-sm font-medium">Main page</a>
                    <span className="text-black mx-10">•</span>
                    <a href="src/component#" className="text-black border-t-4 py-5 text-sm font-medium">Production</a>
                    <span className="text-black mx-10">•</span>
                    <a href="src/component#" className="text-black border-t-4 py-5 text-sm font-medium">Contacts</a>
                </div>
            </div>
            <div className="w-[30%] border-t-[0.8px] border-gray-600 pt-5 flex justify-center">
                <div className="w-[80%] flex justify-around items-center">
                    <FontAwesomeIcon icon={faViber} size="xl"/>
                    <FontAwesomeIcon icon={faViber} size="xl"/>
                    <FontAwesomeIcon icon={faViber} size="xl"/>
                    <FontAwesomeIcon icon={faViber} size="xl"/>
                    <FontAwesomeIcon icon={faViber} size="xl"/>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;