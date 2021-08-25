import React from 'react'
import bookImg from '../../assets/book.png'
import certificateImg from '../../assets/certificate.png'
import contractImg from '../../assets/contract.png'
import trophyImg from '../../assets/trophy.png'



const NewInternshipTimeline = () => {
    return (
        <div>
            <div className="timeline-title">
                <p className="timeline-title-topic">How will it work ?</p>
            </div>
            <div class="timeline">
            <div class="events">
                <ol>
                <ul>
                    <li>
                    <a href="#0" className="timeline-enroll">Get Enroll</a>
                    {/* <a href="#4"> </a> */}
                    </li>
                    <li>
                    <a href="#1">Learning/Training</a>
                    </li>
                    <li>
                    <a href="#2">Complition Certification</a>
                    </li>
                    <li>
                    <a href="#3">Get Placed</a>
                    </li>
                </ul>
                <ul id="timeline-pics-container">
                    <>
                    <a href="#0"><img className="timeline-pic contractImg" src={contractImg} alt="" /></a>
                    {/* <a href="#4"> </a> */}
                    </>
                    <>
                    <a href="#1"><img className="timeline-pic bookImg" src={bookImg} alt="" /></a>
                    </>
                    <>
                    <a href="#2"><img className="timeline-pic certificateImg" src={certificateImg} alt="" /></a>
                    </>
                    <>
                    <a href="#3"><img className="timeline-pic trophyImg" src={trophyImg} alt="" /></a>
                    </>
                </ul>
                </ol>
            </div>
    </div>
    <div id="newInternshipTimeline-blank">
        
    </div>
        </div>
    )
}

export default NewInternshipTimeline




























// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { yellow } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//     // background: yellow,
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown stepIndex';
//   }
// }

// export default function HorizontalLabelPositionBelowStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div className="new-internship-timeline-container">
//         {activeStep === steps.length ? (
//           <div className="new-internship-timeline-Reset">
//             <Typography className={classes.instructions}>All steps completed</Typography>
//             <Button onClick={handleReset}>Reset</Button>
//           </div>
//         ) : (
//           <div className="new-internship-timeline-Back">
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div className="new-internship-timeline-back-btn">
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className={classes.backButton}
//               >
//                 Back
//               </Button>
//               <Button variant="contained" color="primary" onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
