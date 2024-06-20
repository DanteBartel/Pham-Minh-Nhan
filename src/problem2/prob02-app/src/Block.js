import React, { useState } from 'react';
import myIcon from './token_images/USD.svg';
import currencyIcons from './currencyIcons';

const Block = ({ blockName, currencyNames, amount, onCurrencyChange, onAmountChange }) => {
    const [currencyIcon, setCurrencyIcon] = useState(myIcon);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        onCurrencyChange(selectedCurrency);
        setCurrencyIcon(currencyIcons[selectedCurrency] || myIcon);
    };
    const handleAmountChange = (event) => {
        onAmountChange(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <div className="mb-2 text-left text-base text-neutral-500">
                {blockName}
            </div>
            <div className="flex flex-row items-center text-black">
                <img src={currencyIcon} alt="icon" className="w-12 h-12 object-cover" />
                <select className="border border-gray-300 rounded p-2" onChange={handleCurrencyChange} defaultValue="USD">
                    {currencyNames.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2 ml-2"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
        </div>
    );
};

export default Block;