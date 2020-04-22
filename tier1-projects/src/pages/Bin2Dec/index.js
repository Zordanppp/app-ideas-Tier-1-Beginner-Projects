import React, { useState } from 'react';

import './styles.css';

export default function Bin2Dec(){
    const [dec, setDec] = useState('00');
    const [bin, setBin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



    function convert(event) {
        event.preventDefault();

        if(bin.length > 8){
            setErrorMessage('Error - The input must have only EIGHT binarys numbers.');
            setDec('X');
            return;
        }

        if(bin.match(/^[0-1]+$/g) === null){
            setErrorMessage('Error - The input must be only numbers 0 and 1.');
            setDec('X');
            return;
        }

        setErrorMessage('');

        const reverseBin = bin.split('').map(Number).reverse();

        const result = reverseBin.reduce(
            (somatorio, valorBinario, index) => 
                somatorio + valorBinario * Math.pow(2, index)
        );

        setDec(result);
    }

    return (
        <div className="bin2dec-controller">
            <div className="bin2dec-container">
                <section className="form">
                    {errorMessage && <span>{errorMessage}</span>}
                    <form onSubmit={convert}>
                        <h1>Binary To Decimal Converter</h1>
                        <div>
                            <input 
                                type='text' 
                                placeholder="Binary Number" 
                                value={bin}
                                onChange={e => setBin(e.target.value)}    
                            />
                            <button type="submit">Convert</button>
                        </div>
                        <h1>Result: {dec}</h1>
                    </form>
                </section>
            </div>
        </div>
    )
}