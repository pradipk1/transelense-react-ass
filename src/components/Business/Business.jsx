import React from 'react'
import './Business.css';
import PartnerWithUs from '../PartnerWithUs/PartnerWithUs';
import Sidebar from '../Sidebar/Sidebar';
import TextInput from '../TextInput/TextInput';
import SelectInput from '../SelectInput/SelectInput';
import AddressInput from '../AddressInput/AddressInput';
import TimeInput from '../TimeInput/TimeInput';
import SendOtpInput from '../SendOtpInput/SendOtpInput';
import ImageFileUpload from '../ImageFileUpload/ImageFileUpload';
import { useNavigate } from 'react-router-dom';

function Business() {

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        console.log('hi');
        navigate('/owner-details');
    }
  return (
    <div className='businessCont'>
        <PartnerWithUs />
        <div className='sidebar-form-cont'>
            <Sidebar />

            <div className='businessFormContMain'>
                <form className='businessFormCont'>
                    <h2>Business Information</h2>
                    <div className='formInpFlexCont'>
                        <TextInput />
                        <SelectInput />
                    </div>

                    <div className='formInpFlexCont'>
                        <SelectInput />
                        <TextInput />
                    </div>

                    <AddressInput />

                    <div className='formInpFlexCont'>
                        <TimeInput />
                        <TimeInput />
                    </div>

                    <div className='formInpFlexCont' style={{marginBottom: '90px'}}>
                        <SendOtpInput />
                        <SendOtpInput />
                    </div>

                    <div>
                        <ImageFileUpload />
                    </div>

                    <div className='formSubmitBtnCont'>
                        <button onClick={handleForm}>Proceed to Owner & Manager Details -&gt;</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Business;