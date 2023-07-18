import React from 'react';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light text-center my-4 py-4 w-100'>
            <h3>Q-Zone</h3>
            <div>
                <img className='w-100 p-2' src={QZone1} alt="" />
                <img className='w-100 p-2' src={QZone2} alt="" />
                <img className='w-100 p-2' src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;