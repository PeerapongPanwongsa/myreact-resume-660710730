import React from 'react';

const Clock = () => {
    // สามารถมี JavaScript logic ก่อน return
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    const dateString = now.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    // Return JSX
    return (
        <div className="clock">
            <h3>🕒 ตารางกิจกรรมวันนี้</h3>
            <p className="date">{dateString}</p>
            <p className="time">เวลา:{timeString}</p>
        </div>
    );
};

export default Clock;