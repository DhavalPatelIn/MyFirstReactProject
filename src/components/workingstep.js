import React from "react";
import '../css/step.css';

import icon1 from "../images/icon1.png";

function WorkingStep({IconImage, StepTitle, StepContent}) {
    return (
        <div className="step-wrap">
            <div className="step--icon">
                <img src={IconImage} alt="Icon" />
            </div>
            <h3>{StepTitle}</h3>
            <p>{StepContent}</p>
        </div>
    );
}
export default WorkingStep;