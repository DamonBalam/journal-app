import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry '>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg)',
                }}></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>Un nuevo día</p>
                <p className='journal__entry-content'>lorem aasd asda dasdas asdasd asdasdasda</p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
