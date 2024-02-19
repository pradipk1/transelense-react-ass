import React from 'react';
import './TimeInput.css';


function TimeInput() {
  return (
    <div className='timeInpCont'>
        <label>Business Name *</label>
        <input type="time" value='10:00'/>
    </div>
  )
}

export default TimeInput;