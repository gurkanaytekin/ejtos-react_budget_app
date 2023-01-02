import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Arrow from '../assets/icons/arrow-icon-bottom.png'

const Currency = () => {
    const { currencyName, currency, currencyList, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (selected) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selected.currency,
        })
    }

    return (
        <div className="dropdown">
            <button>Currency {currency} {currencyName} <img src={Arrow} className='currencyList-img' alt="" /></button>
            <div className="dropdown-options">
                {
                    currencyList.map((item) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a onClick={() => handleCurrencyChange(item)}>{item.currency} {item.currencyName}</a>
                    ))
                }
            </div>
        </div>
    );
};

export default Currency;