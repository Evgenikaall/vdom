import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadSideVirus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faViber} from "@fortawesome/free-brands-svg-icons";

const ContactDialogWindow = ({isOpen, onClose}) => {

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);


    return (
        <div
            className={`fixed top-0 left-0 z-50 w-screen h-screen backdrop-blur-1.5 bg-gray-800/30 flex justify-center items-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
            <div className="bg-main-color p-6 rounded-lg shadow-lg w-1/2 h-3/5 flex flex-col">
                <div className="pb-8">
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faXmark} onClick={onClose} className="cursor-pointer"/>
                    </div>
                    <div className="flex flex-col justify-around items-center">
                        <div className="py-3">
                            <FontAwesomeIcon icon={faHeadSideVirus} size="xl"/>
                        </div>
                        <div>
                            <h1 className="text-4xl">Contact us!</h1>
                            <p className="text-xs text-center text-gray-500">our contacts</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="flex w-1/2 justify-center p-5">
                        <div className="w-1/5 text-center"><FontAwesomeIcon icon={faViber} size="2xl"/></div>
                        <h1 className="w-3/5">+37388888888</h1>
                    </div>
                    <div className="flex w-1/2 justify-center p-5">
                        <div className="w-1/5 text-center"><FontAwesomeIcon icon={faViber} size="2xl"/></div>
                        <h1 className="w-3/5">+37388888888</h1>
                    </div>
                    <div className="flex w-1/2 justify-center p-5">
                        <div className="w-1/5 text-center"><FontAwesomeIcon icon={faViber} size="2xl"/></div>
                        <h1 className="w-3/5">+37388888888</h1>
                    </div>
                    <div className="flex w-1/2 justify-center p-5">
                        <div className="w-1/5 text-center"><FontAwesomeIcon icon={faViber} size="2xl"/></div>
                        <h1 className="w-3/5">+37388888888</h1>
                    </div>
                    <div className="flex w-1/2 justify-center p-5">
                        <div className="w-1/5 text-center"><FontAwesomeIcon icon={faViber} size="2xl"/></div>
                        <h1 className="w-3/5">+37388888888</h1>
                    </div>
                    <div className="flex w-1/2 justify-center p-5">
                        <div className="w-1/5 text-center"><FontAwesomeIcon icon={faViber} size="2xl"/></div>
                        <h1 className="w-3/5">+37388888888</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactDialogWindow;
