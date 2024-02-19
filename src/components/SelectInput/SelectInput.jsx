import React from 'react';
import './SelectInput.css';
import info from '../../Images/info.png';
import downArr from '../../Images/downArr.png';

function SelectInput() {
  return (
    <div className='selectInpCont'>
        <img src={info} alt="" />
        <label>Business Name *</label>
        <div className='selectCont'>
            <select>
                <option>India</option>
            </select>
            <img src={downArr} alt="" />
        </div>
    </div>
  )
}

export default SelectInput;