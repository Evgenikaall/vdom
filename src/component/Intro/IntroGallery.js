import React, {useEffect, useState} from 'react';
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'

function IntroGallery() {
    const images = [image1, image2, image3]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(0);
    const nextImage = () => {
        setPrevImageIndex(currentImageIndex);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    useEffect(() => {
        const interval = setInterval(nextImage, 10000); // Измените интервал на необходимый (в миллисекундах)

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (buttonIndex) => {
        setPrevImageIndex(currentImageIndex);
        setCurrentImageIndex(buttonIndex);
    };

    return (
        <div className=" bg-neutral-600 rounded-l-4.5rem w-6/12 h-4/6 absolute right-0 top-1/2 transform -translate-y-1/2  lg:flex sm:hidden md:hidden">
            <div>
                <img src={images[currentImageIndex]} alt="Slider Image" className="h-5/5 w-4/5  py-10"/>
            </div>
            <div className="flex flex-col self-center text-8xl space-y-11 pr-8 ">
                <button
                    type="button"
                    className={`slider-button ${currentImageIndex === 0 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(0)}
                >
                    <div
                        className={`h-2 w-2 rounded-full bg-white ${currentImageIndex === 0 ? 'outline outline-white outline-offset-4' : ''} hover:opacity-75 hover:outline outline-white outline-offset-4 `}
                    ></div>
                </button>
                <button
                    className={`slider-button ${currentImageIndex === 1 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    <div
                        className={`h-2 w-2 rounded-full bg-white ${currentImageIndex === 1 ? 'outline outline-white outline-offset-4 ' : ''} hover:opacity-75 hover:outline outline-white outline-offset-4 `}></div>
                </button>
                <button
                    className={`slider-button ${currentImageIndex === 2 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >
                    <div
                        className={`h-2 w-2 rounded-full bg-white ${currentImageIndex === 2 ? 'outline outline-white outline-offset-4' : ''}hover:opacity-75 hover:outline outline-white outline-offset-4`}></div>
                </button>
            </div>
        </div>);
}

export default IntroGallery;