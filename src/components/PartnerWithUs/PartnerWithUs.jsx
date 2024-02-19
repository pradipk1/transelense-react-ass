import React from 'react';
import './PartnerWithUs.css';
import image15 from '../../Images/image15.png';

function PartnerWithUs() {
  return (
    <div className='partnerWithUsCont'>
        <div className='partnerImg'></div>
        <div className='partnerTextCont'>
            <h1>Partner With Us</h1>
            <p>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>
        </div>
        <img className='odriyoImg' src={image15} alt="" />
    </div>
  )
}

export default PartnerWithUs;