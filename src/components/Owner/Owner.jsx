import React, { useState } from 'react';
import '../Business/Business.css';
import PartnerWithUs from '../PartnerWithUs/PartnerWithUs';
import Sidebar from '../Sidebar/Sidebar';
import TextInput from '../TextInput/TextInput';
import SelectInput from '../SelectInput/SelectInput';
import AddressInput from '../AddressInput/AddressInput';
import SendOtpInput from '../SendOtpInput/SendOtpInput';
import ImageFileUpload from '../ImageFileUpload/ImageFileUpload';
import './Owner.css';

function Owner() {

    const [fillForm, setFillForm] = useState(true);

    const handleForm = () => {
        console.log('hi');
    }
  return (
    <div className='businessCont ownerDetailsCont'>
        <PartnerWithUs />
        <div className='sidebar-form-cont owner-sidebar-form-cont'>
            <Sidebar />

            <div className='businessFormContMain'>
                <form className='businessFormCont ownerFormCont'>
                    <h2>Owner & Manager Details</h2>
                    <p>Owner Details</p>

                    <div className='formInpFlexCont'>
                        <div className='ownerFlexColCont'>
                            <TextInput />
                            <SelectInput />
                        </div>
                        <div className='ownerImagePickerCont'>
                            <ImageFileUpload />
                        </div>
                    </div>

                    <div className='formInpFlexCont'>
                        <TextInput />
                        <TextInput />
                    </div>

                    <AddressInput />

                    <div className='formInpFlexCont' style={{marginBottom: '90px'}}>
                        <div>
                            <SendOtpInput />
                            <div className='ownerRadioInpCont'>
                                <label>Same as business e-mail</label>
                                <input type="radio" />
                            </div>
                        </div>
                        <div>
                            <SendOtpInput />
                            <div className='ownerRadioInpCont'>
                                <label>Same as business mobile number</label>
                                <input type="radio" />
                            </div>
                        </div>
                    </div>

                    <div className='ownerDoYouWantCont'>
                        <div className='doYouWantTextCont'>
                            <span>Do you want to fill manager details?</span>
                            <button onClick={(e) => {e.preventDefault()}}>Yes</button>
                        </div>
                        {
                            fillForm ? <div className='ownerNoBtnCont'>
                            <button onClick={(e) => {e.preventDefault(); setFillForm(false)}}>No</button>
                        </div> : <div className='ownerNavigateBtnCont'>
                            <button onClick={(e) => {e.preventDefault()}}>Proceed to PAN & Aadhar Details -&gt;</button>
                        </div>
                        }
                        
                    </div>
                    
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Owner;