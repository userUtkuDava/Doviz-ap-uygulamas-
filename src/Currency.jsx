import React, { useState } from 'react'
import './css/currency.css'
import axios from 'axios';
const Currency = () => {
    const APIKEY = "fca_live_tJmKnRVtHm1kKYW0SNtb1hbRLoqXrOUUbivBIDbj";
    const DB = "https://api.freecurrencyapi.com/v1/latest";



    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
    const cevir = async () => {
        const response = await axios.get(`${DB}?apikey=${APIKEY}&base_currency=${fromCurrency}`);

        setResult((response.data.data[toCurrency] * amount).toFixed(2))
    }
    return (
        <>
            <div className="currency-div">
                <div className="currency-title">
                    <h3>Doviz Kuru Uygulaması</h3>

                </div>
                <div className="inputs">
                    <input onChange={(e) => setAmount(e.target.value)} Value={amount} type='number' className='Para-Miktarı' />

                    <select onChange={(e) => setFromCurrency(e.target.value)} className='Doviz-Birimi'>
                        <option>USD</option>
                        <option>TRY</option>
                        <option>EUR</option>

                    </select>
                    <select onChange={(e) => setToCurrency(e.target.value)} className='Doviz-Birimi'>
                        <option>TRY</option>
                        <option>USD</option>
                        <option>EUR</option>

                    </select>
                    <input Value={result} className='Para-Miktarı sonuc' />

                </div>
                <div className="btn-div">
                    <button onClick={cevir} className='btn-process'>Çevir</button>

                </div>
            </div>


        </>
    )
}

export default Currency