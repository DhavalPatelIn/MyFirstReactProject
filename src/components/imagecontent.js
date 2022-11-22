import React from "react";
import {Link} from "react-router-dom";
import "../css/imagecontent.css"

function ImageContent({LeftImagae, SubTitle, MinTitle, Content, ButtonUrl, ButtonText}){
    return (
        <div>
            <section className="image--content--section">
                <div className="container">
                    <div className="flex-container">
                        <div className="left-image">
                            <img src={LeftImagae} alt="Map image" />
                        </div>
                        <div className="right--content">
                            <h4>{SubTitle}</h4>
                            <h2>{MinTitle}</h2>
                            <p>{Content}</p>
                            <div className="ctm-button">
                                <Link to={ButtonUrl}>{ButtonText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ImageContent;