import React from 'react';
import InnerBanner from '../components/innerbanner';
import Blog from '../components/blog';


// Blog Post images
import Blog1 from '../images/service1.png';
import Blog2 from '../images/service2.png';
import Blog3 from '../images/service3.png';


const BlogData = [
    {
        BlogImage: Blog1,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog2,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog3,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog1,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog2,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog3,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog1,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog2,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
    {
        BlogImage: Blog3,
        BlogTitle: "Great projects",
        BlogDate: "19 March 2018 / Super User",
        BlogContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        BlogUrl: '/blog',
    },
]
function Blogpage(){
    return(
        <div className="blogpage">
            <InnerBanner PageTitle="Blog page" />
            <section className='blog--section'>
                <div className='container'>
                    <div className='flex-container'>
                        {BlogData.map((item, index) =>(
                            <Blog BlogImage={item.BlogImage} BlogTitle={item.BlogTitle} BlogDate={item.BlogDate} BlogContent={item.BlogContent} BlogUrl={item.BlogUrl} key={item.BlogTitle + index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Blogpage;