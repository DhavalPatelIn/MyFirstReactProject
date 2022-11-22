import React from "react";
import '../css/blog.css';

function Blog({BlogImage, BlogTitle, BlogDate, BlogContent, BlogUrl}) {
    return(
        <div className="artical--wrap">
            <div className="artical-img">
                <img src={BlogImage} alt="Image" />
            </div>
            <h3>{BlogTitle}</h3>
            <span className="blog-date">{BlogDate}</span>
            <p>{BlogContent}</p>
            <a className="postbtn" href={BlogUrl}>Read More</a>
        </div>
    )
}
export default Blog;