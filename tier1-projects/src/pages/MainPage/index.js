import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function MainPage() {
    return (
        <div className='background-main'>
            <div className='main-container'>
                <div className='btn-container'>
                    <Link to="/bin2dec">
                        <button className='btn-idea'>Bin2Dec</button>
                    </Link>
                    <button className='btn-idea'>Border Radius Preview</button>
                    <button className='btn-idea'>Pomodoro</button>
                    <button className='btn-idea'>Calculator</button>
                    <button className='btn-idea'>Christmas Light</button>
                    <button className='btn-idea'>Color Cycle</button>
                </div>
            </div>
        </div>  
    )
}