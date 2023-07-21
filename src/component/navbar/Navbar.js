import React, {useState} from 'react';
import logoUrl from './assets/logo.svg'
import LanguageSelector from "./LanguageSelector";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePhoneFlip} from "@fortawesome/free-solid-svg-icons";
import ContactDialogWindow from "./ContactDialogWindow";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isTopUpOpen, setTopUpOpen] = useState(false);

    const toggleTopUp = () => {
        setTopUpOpen(!isTopUpOpen);
    };
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white">
            <div
                className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 w-full justify-start items-center">
                        <div className="flex items-center pr-10 md:pr-16">
                            <div className="flex-shrink-0">
                                <img src={logoUrl} alt="Logo" className="h-18 w-fit sm:h-16"/>
                            </div>
                        </div>
                        <div className="hidden md:flex h-full">
                            <div className="ml-4 flex items-center space-x-4 h-full">
                                <a href="src/component#"
                                   className="text-black border-t-4 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:border-red-600 hover:text-red-600 px-3 py-5 text-sm font-medium">Main
                                    page</a>
                                <span className="text-black">•</span>
                                <a href="src/component#"
                                   className="text-black border-t-4 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:border-red-600 hover:text-red-600 px-3 py-5 text-sm font-medium">Production</a>
                                <span className="text-black">•</span>
                                <a href="src/component#"
                                   className="text-black border-t-4 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:border-red-600 hover:text-red-600 px-3 py-5 text-sm font-medium">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <LanguageSelector/>
                            <FontAwesomeIcon icon={faSquarePhoneFlip} flip="horizontal"
                                             className="text-red-600 cursor-pointer hover:text-red-700 transition-colors duration-500"
                                             size="xl" onClick={toggleTopUp}/>
                        </div>
                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition ${isMenuOpen ? 'bg-gray-700' : ''}`}>
                            <svg
                                className={`h-5 w-5 ${isMenuOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                            <svg
                                className={`h-5 w-5 ${isMenuOpen ? 'block' : 'hidden'} z-10`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <ContactDialogWindow isOpen={isTopUpOpen} onClose={toggleTopUp}/>
            </div>
            {isMenuOpen && (
                <div
                    className={"hidden inset-0 bg-gray-300 sm:fixed sm:block h-full w-30vh transition-opacity " + (isMenuOpen ? "opacity-1" : "opacity-0")}>
                    <div className="flex flex-col justify-around items-center">
                        <img src={logoUrl} alt="Logo" className="max-w-1/2"/>
                        <div className="flex flex-col justify-items-start">
                            <a href="src/component#"
                               className="text-black border-b-2 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:text-red-600 px-3 py-5 text-sm font-medium">Main
                                page</a>
                            <a href="src/component#"
                               className="text-black border-b-2 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:text-red-600 px-3 py-5 text-sm font-medium">Main
                                page</a>
                            <a href="src/component#"
                               className="text-black border-b-2 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:text-red-600 px-3 py-5 text-sm font-medium">Main
                                page</a>
                            <a href="src/component#"
                               className="text-black border-b-2 hover:transition-colors hover:duration-500 transition-colors duration-500 border-transparent hover:text-red-600 px-3 py-5 text-sm font-medium">Main
                                page</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
