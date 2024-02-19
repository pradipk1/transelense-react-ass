import React from 'react';
import './ImageFileUpload.css';
import info from '../../Images/info.png';

function ImageFileUpload() {
  return (
    <div className='imageUploadCont'>
        <img src={info} alt="" />
        <label>Business Name *</label>
        <div className='imageInpCont'>
            <input type="file" accept="image/*"/>
            {/* <label>Click to upload</label> */}
        </div>
    </div>
  )
}

export default ImageFileUpload;