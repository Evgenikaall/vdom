import React, {useState} from 'react';

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({id: 1, label: 'Ru'});

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    const dropdownItems = [
        {id: 1, label: 'Ru'},
        {id: 2, label: 'En'},
        {id: 3, label: 'Ro'},
        // Add more items as needed
    ];

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    onClick={toggleDropdown}
                >
                    {selectedItem.label}
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {dropdownItems.map((item) => (
                            <button
                                key={item.id}
                                className={`block px-4 py-2 text-sm ${
                                    selectedItem === item ? 'text-white bg-gray-800' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                                role="menuitem"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
