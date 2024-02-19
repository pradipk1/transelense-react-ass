import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <>
        <div className='sidebarCont'>
            <h2>Partner with us</h2>
            <p>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>

            <div className='stepCont stepCont1'>
                <span>1</span>
                <span>Business Information</span>
            </div>
            <div className='stepLine stepLine1'></div>

            <div className='stepCont stepCont2'>
                <span>2</span>
                <span>Owner & Manager Details</span>
            </div>
            <div className='stepLine stepline2'></div>

            <div className='stepCont stepCont3'>
                <span>3</span>
                <span>PAN/Aadhaar Details</span>
            </div>
            <div className='stepLine stepline3'></div>

            <div className='stepCont stepCont4'>
                <span>4</span>
                <span>Legal Documents</span>
            </div>
            <div className='stepLine stepline4'></div>

            <div className='stepCont stepCont5'>
                <span>5</span>
                <span>Bank Details</span>
            </div>
            <div className='stepLine stepline5'></div>

            <div className='stepCont stepCont6'>
                <span>6</span>
                <span>Service Info</span>
            </div>
            <div className='stepLine stepline6'></div>
            
            <div className='stepCont stepCont7'>
                <span>7</span>
                <span>Preview Document</span>
            </div>
            <div className='stepLine stepline7'></div>

            <div className='stepCont stepCont8'>
                <span>8</span>
                <span>Reach Increased</span>
            </div>

        </div>
    </>
  )
}

export default Sidebar;