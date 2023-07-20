import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-black">
                            Logo
                        </div>
                    </div>
                    <div className="hidden md:block h-full">
                        <div className="ml-4 flex items-center space-x-4 h-full">
                            <a href="#" className="text-black border-t-4 border-transparent hover:border-red-600 hover:text-red-600 hover:text-white px-3 py-5 text-sm font-medium">Main page</a>
                            <span className="text-black">•</span>
                            <a href="#" className="text-black border-t-4 border-transparent hover:border-red-600 hover:text-red-600 hover:text-white px-3 py-5 text-sm font-medium">Production</a>
                            <span className="text-black">•</span>
                            <a href="#" className="text-black border-t-4 border-transparent hover:border-red-600 hover:text-red-600 hover:text-white px-3 py-5 text-sm font-medium">Contacts</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">Language</a>
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">Phone</a>
                        </div>
                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
