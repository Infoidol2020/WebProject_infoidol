import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import uuid from 'react-uuid'


import './CourseonemonthForm.css'
import infoidolLogo from '../../assets/InfoidolLogo.png'
import opportunity from '../../assets/opportunity.gif'

import { hitInternshipRegistration } from '../../redux/InternshipRegisteration/InternshipRegisterationAction'
import { fetchInternshipRegisterMap } from '../../redux/InternshipRegisterMap/InternshipRegisterMapAction'
import {fetchemiDetail} from '../../redux/EMIDetail/EMIDetailAction'



const CourseonemonthForm = (props) => {
  const [price, setPrice] = useState()
  const [registerId, setRegisterId] = useState()
  const [emiDetail, setemiDetail] =useState([]);
  console.log('Prps',props)

  useEffect(() => {
    if(props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisterationSuccess
      && props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisteration.response_code){
        // setPrice(props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisteration.data.price)
        console.log('setPrice',props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi)
        const internshipPrice = Math.floor(props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisteration.data.price/2)

        setRegisterId(props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisteration.data.register_id)
        sessionStorage.setItem('internshipOrderId', uuid())
        sessionStorage.setItem('registerId', props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisteration.data.register_id)
        sessionStorage.setItem('internshipPrice', internshipPrice)
        sessionStorage.setItem('internFirstName', formDetails.firstName)
        sessionStorage.setItem('internphoneNo', formDetails.phoneNo)
        sessionStorage.setItem('internEmail', formDetails.email)
        props.history.push({  pathname: '/internship-pricing'});
    }
  }, [props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisterationSuccess])
  console.log('prrrr', props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi)

  useEffect(() =>{
    if(props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisterationSuccess
      && props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisteration.response_code){
        
        props.fetchInternshipRegisterMap(sessionStorage.getItem('internshipOrderId'),sessionStorage.getItem('registerId'))
        console.log('console fetch Internship Register Map',sessionStorage.getItem('registerId'),sessionStorage.getItem('internshipOrderId'))
      }
  }, [props.InternshipRegisterationApi.internshipRegisteration.internshipRegisterationGetApi.internshipRegisterationSuccess])
  // const hitInternshipRegistrationApi = props.location.intershipProps.hitInternshipRegistration()
  const [formDetails, setFormDetails] = useState({
        firstName: '',
        phoneNo: '',
        email: '', 
        gender: ''
        // usn: '',
        // college: '',
        // university: '',
        // semester: '',
        // branch: '',
        // degree: 'graduate'


  })
  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.hitInternshipRegistration(formDetails, sessionStorage.getItem('internshipPackageId'), sessionStorage.getItem('emiStatus'))
    console.log('console by register api',sessionStorage.getItem('internshipPackageId'), sessionStorage.getItem('emiStatus'))
  }

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setFormDetails({...formDetails, 
      [e.target.name]: e.target.value });

  }
    return (
        <div>
            <div className="InternshipForm_background">
  <div className="InternshipForm_container">
    <div className="InternshipForm_screen">
      <div className="screen-header">
        <div className="screen-header-left">
          {/* <div className="screen-header-button close"></div> */}
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <img className="Internship_Form_logo" src={infoidolLogo} alt="logo-infoidol" />
            <span>Learning</span>
            <span>Program</span>
          </div>
          <div className="IF_Banner">
            <img src={opportunity} alt="" className="IF_BannerImg"/>
          </div>
          <div className="app-contact">FOR ANY FURTHER INQUIRY CONTACT : +91 93807 27561</div>
        </div>
        <div className="screen-body-item">
          <form onSubmit={handleFormSubmit}>
          <div className="app-form">
            <div className="app-form-group">
              <input onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="FIRST NAME *" name="firstName" required />
            </div>
            
            <div className="app-form-group">
              <input type="number" onChange={(e) => {handleInputChange(e)}} className="app-form-control" type="tel" placeholder="CONTACT NO. *" maxLength="10" name="phoneNo" required />
            </div>
            <div className="app-form-group">
              <input type="email" onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="Email *" name="email" required />
            </div>
            <div className="app-form-group">
                <p className="IF_Gender_Title">GENDER *</p>
                <input onChange={(e) => {handleInputChange(e)}} type="radio" value="male"  name="gender" required/>
                <label className="IF_Gender_Container">Male</label>
                
                <input onChange={(e) => {handleInputChange(e)}} type="radio" value="female" name="gender" required/>
                <label className="IF_Gender_Container">Female</label>
                
                <input onChange={(e) => {handleInputChange(e)}} type="radio" value="others" name="gender" required/>
                <label className="IF_Gender_Container">Other</label>
                
            </div>
            {/* <div className="app-form-group">
              <input onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="USN" name="usn" />
            </div>
            <div className="app-form-group ">
              <input onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="COLLEGE" name="college" />
            </div>
            <div className="app-form-group">
              <input onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="UNIVERSITY" name="university" />
            </div>
            <div className="app-form-group">
              <input onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="SEMESTER" name="semester" />
            </div>
            <div className="app-form-group">
              <input onChange={(e) => {handleInputChange(e)}} className="app-form-control" placeholder="BRANCH" name="branch"  />
            </div> */}
            <div className="app-form-group buttons">
              {/* <button className="app-form-button">CANCEL</button> */}
              <button className="app-form-button">Submit Details</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    {/* <div className="credits">
      inspired by
      <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        Gururaj
      </a>
    </div> */}
  </div>
</div>

        </div>
    )
}

// export default InternshipForm
const mapStateToProps = (state) => {
  // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
return{
  InternshipRegisterationApi :state
}
}
const mapDispatchToProps = dispatch => {
return {

  hitInternshipRegistration : (data, internshipPackageId, emiStatus) => dispatch(hitInternshipRegistration(data, internshipPackageId, emiStatus)),
  fetchInternshipRegisterMap : (internshipOrderId, registerId) => dispatch(fetchInternshipRegisterMap(internshipOrderId, registerId)),
  fetchemiDetail : (package_id) => dispatch(fetchemiDetail(package_id))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseonemonthForm)

