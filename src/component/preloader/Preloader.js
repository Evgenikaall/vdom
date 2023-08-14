import React from 'react';
import logo from './assets/logo.svg'
const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white w-screen h-screen bg-transparent">
            {/* Your animated SVG or other pre-loader content */}
            <img src={logo} alt={"Logo"} className="h-[256px] w-[256px] animate-fade opacity-0" />
        </div>
    );
};

export default Preloader;
