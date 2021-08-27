import React from 'react'
import './NInternshipLearn.css'
import InternLearn from '../../assets/study.png'
import InternEarn from '../../assets/earnings.png'
import InternGrow from '../../assets/profits.png'

const NInternshipLearn = () => {
    return (
        <div>
            <div id="ninternshipLearn-blank">
                
            </div>
            <div className="LearnEarn_container" >
                <h2>Infoidol Internship & Learning Program</h2>
                <p>A 30-days and 90-days Learning and Training Program aimed at building the leaders of tomorrow.</p>
                    <p>College students from any degree, stream, and year of study can apply for this program.</p>
            </div>
            <div className="LearnEarn">
                
                    <div className="Internship_learn">
                        <img src={InternLearn} alt=""/>
                        <h4>Learn</h4>
                        <p style={{fontSize:'17px'}}>Build your coding and designing</p>
                        <p style={{marginTop:'-1.2vh',fontSize:'17px'}}>skills from scratch.</p>


                    </div>
                    <div className="Internship_Earn">
                        <img src={InternEarn} alt=""/>
                        <h4>Earn</h4>
                        <p style={{fontSize:'17px'}}>The more you learn the </p>
                        <p style={{marginTop:'-1.2vh',fontSize:'17px'}}> more you earn.</p>


                    </div>
                    <div className="Internship_profit">
                        <img src={InternGrow} alt=""/>
                        <h4>Profit</h4>
                        <p style={{fontSize:'17px'}}>Experience professional growth by </p>
                        <p style={{marginTop:'-1.2vh',fontSize:'17px'}}> solving real-world problem.</p>

                    </div>
                
            </div>
        </div>
    )
}

export default NInternshipLearn
