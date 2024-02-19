import React from 'react';
import './SendOtpInput.css';
import info from '../../Images/info.png';

function SendOtpInput() {
  return (
    <div className='sendOtpInpCont'>
        <img src={info} alt="" />
        <label>Business Name *</label>
        <div className='sendOtpCont'>
            <button>Send OTP</button>
            <input type="email" placeholder='Enter email'/>
        </div>
    </div>
  )
}

export default SendOtpInput;