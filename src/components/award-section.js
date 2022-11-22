import React from "react";
import '../css/award.css';

function Award({AwardImage}){
    return(
        <div className="award--image"><img src={AwardImage} alt="Image" /></div>
    );
}
export default Award;