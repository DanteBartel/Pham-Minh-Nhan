import React, { useState } from 'react';
import Block from './Block';
import prices from './prices.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const currency_names = prices.map((item) => item.currency);
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [convCurrency, setConvCurrency] = useState('USD');
  const [convAmount, setConvAmount] = useState('');
  const [rate, setRate] = useState(1);

  const handleSetCurrency = (currency) => {
    setCurrency(currency);
    let price = prices.find((item) => item.currency === currency).price;
    let convPrice = prices.find((item) => item.currency === convCurrency).price;
    setRate(price/convPrice);
  };

  const handleSetConvCurrency = (convCurrency) => {
    setConvCurrency(convCurrency);
    let price = prices.find((item) => item.currency === currency).price;
    let convPrice = prices.find((item) => item.currency === convCurrency).price;
    setRate(price/convPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    if (isNaN(parseFloat(amount))) {
      alert("Amount is not a number!!!");
      return false;
    }
    if (amount < 0) {
      alert("Amount is less than 0!!!");
      return false;
    }
    // Exchange
    setConvAmount(Number((amount*rate).toFixed(4)));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 rounded-3xl">
      <Block 
        blockName='Amount' 
        currencyNames={currency_names} 
        onCurrencyChange={handleSetCurrency}
        onAmountChange={setAmount}
      />
      <div className='relative py-4'>
        <hr className="border-t-2 border-gray-300 my-8" />
        <div className='absolute inset-0 flex justify-center items-center'>
          <button type="submit" className="w-16 h-16 bg-blue-500 hover:bg-blue-300 active:bg-blue-800 rounded-full">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </button>
        </div>
      </div>
      <Block 
        blockName='Converted Amount' 
        currencyNames={currency_names} 
        amount={convAmount}
        onCurrencyChange={handleSetConvCurrency}
        onAmountChange={()=>{}}
      />
      <div className='pt-12'>
        <div className="text-left text-base text-neutral-500">
          Indicative Exchange Rate
        </div>
        <div className="text-left text-2xl text-black">
          1 {currency} = {Number(rate.toFixed(4))} {convCurrency}
        </div>
      </div>
    </form>
  );
};

export default Form;
