
import React, {useEffect, useRef} from 'react'
import { connect } from 'react-redux';

import InfoidolLogo from '../../assets/InfoidolLogo.png'
const OtpPopup = (props) => {
  const btnModal = useRef();
  // console.log('clickedd outside')
  // btnModal && btnModal.current && btnModal.current.click();

  props.UserRegistration.userRegistration.userRegistrationResponse.date !== undefined && props.UserRegistration.userRegistration.userRegistrationResponse.date.otp !== '' && btnModal && btnModal.current && btnModal.current.click()
useEffect(() => {
  // btnModal.current.click();
  // console.log('clickedd from useEffect')
  // document.getElementById('Modalbtn').click()
}, [])
    return (
        <div>
            <button style={{display: 'none'}} id="Modalbtn" ref={btnModal} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">open PopUp</button>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style={{border:'4px solid tomato'}}>
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Infoidol</h5>
                    <img src={InfoidolLogo} alt="Infoidol" style={{height:'9rem',width:'25rem',marginLeft:'13rem'}}/>
                  </div>

                  <div class="modal-body">
                  <input type="text" class="form-control" id="recipient-name" placeholder="Enter your one time OTP"/>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Resend OTP</button>
                    <button type="button" class="btn btn-primary">Verify OTP</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
  // console.log('state', state.UserRegistration.userRegistration.userRegistrationSuccess);
  return{
      registeredUserFromAPI: state
  }
}


const mapDispatchToProps = dispatch => {
  return {
      // newUserRegistration: (data) => dispatch(newUserRegistration(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpPopup)
