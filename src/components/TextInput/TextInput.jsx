import React from 'react';
import './TextInput.css';
import info from '../../Images/info.png';

function TextInput() {
  return (
    <div className='textInpCont'>
        <img src={info} alt="" />
        <label>Business Name *</label>
        <input type="text" placeholder='Domino’s Pizza'/>
    </div>
  )
}

export default TextInput;