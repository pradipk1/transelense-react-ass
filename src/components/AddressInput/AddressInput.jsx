import React from 'react';
import info from '../../Images/info.png';
import locationLogo from '../../Images/locationLogo.png';
import './AddressInput.css';

function AddressInput() {
  return (
    <div className='addressInpCont'>
        <img src={info} alt="" />
        <label>Business Name *</label>
        <div className='addInpCont'>
            <img src={locationLogo} alt="" />
            <input type="text" placeholder='Enter Address'/>
        </div>
    </div>
  )
}

export default AddressInput;