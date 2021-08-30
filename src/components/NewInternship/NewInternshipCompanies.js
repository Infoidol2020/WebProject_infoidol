import React from 'react'
import mapPic from '../../assets/mapBack.png'
import companiesList from '../../assets/companiesList.svg'
import './NewInternshipCompanies.css'


const NewInternshipCompanies = () => {
    return (
        <div id="NewInternshipCompaniesContainer">
            <section className="InternshipCompanies">
                <p className="InternshipCompanies-Partners">
                Top Hiring Companies
                </p>
                <p className="InternshipCompanies-slogan">
                Coming together is a beginning, staying <br /> together is progress, and working <br /> together is success.
                </p>
                <p className="InternshipCompany-author">
                - Henry Ford
                </p>
            </section>
            <section className="InternshipCompanies">
                <img src={companiesList} alt="broken-Bg" className="Internship-companies" />
            </section>
        </div>
    )
}

export default NewInternshipCompanies
