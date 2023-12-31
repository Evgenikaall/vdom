import React from 'react';
import logoUrl from './assets/logo.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faViber, faTelegram, faInstagram, faFacebook, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer className="w-[95%] mx-auto mt-28 mb-5">
        <div className="bg-main-color rounded-2.5rem flex flex-col items-center justify-center pb-10 pt-7">
            <img src={logoUrl} alt="Logo" className="h-20 w-fit"/>
            <div className="flex">
                <div className="flex max-sm:hidden items-center h-full">
                    <a href="src/component#" className="text-black border-t-4 py-5 text-sm font-medium">Main page</a>
                    <span className="text-black mx-10">•</span>
                    <a href="src/component#" className="text-black border-t-4 py-5 text-sm font-medium">Production</a>
                    <span className="text-black mx-10">•</span>
                    <a href="src/component#" className="text-black border-t-4 py-5 text-sm font-medium">Contacts</a>
                </div>
            </div>
            <div className="w-[30%] border-t-[0.8px] border-gray-600 pt-5 max-lg:w-[40%] max-md:w-[45%] flex justify-center">
                <div className="w-[80%] flex justify-around items-center">
                    <FontAwesomeIcon icon={faTelegram} className="text-2xl text-[#0088CC]"/>
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl"/>
                    <FontAwesomeIcon icon={faViber} className="text-2xl text-[##59267c]"/>
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl text-[#3b5998]"/>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl"/>
                    <FontAwesomeIcon icon={faYoutube} className="text-2xl text-[#FF0000]"/>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;