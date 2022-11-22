import React, { useEffect } from "react";
import Slider from '../components/homeslider';
import WelCome from '../components/welcomesection';
import ServiceBox from '../components/servicesbox';
import BestServices from '../components/bestservices';
import Portfolio from '../components/portfolio';
import ImageContent from '../components/imagecontent';
import WorkingStep from '../components/workingstep';
import SingleTitle from '../components/singletitle';
import Testimonial from '../components/testimonial';
import Award from '../components/award-section';
import Blog from '../components/blog';
// Images
import MapImage from '../images/mapimage.png';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import Author from "../images/author-image.png";

// Blog Post images
import Blog1 from '../images/service1.png';
import Blog2 from '../images/service2.png';
import Blog3 from '../images/service3.png';
// Award images
import {award1, award2, award3, award4, award5, award6,} from '../components/awardimages'
const AwardData =[
    { AwardImage: award1, },
    { AwardImage: award2, },
    { AwardImage: award3, },
    { AwardImage: award4, },
    { AwardImage: award5, },
    { AwardImage: award6, },
];
// Blog Data
const BlogData =[
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
    }
]

function Home () { 
    useEffect(()=>{
        window.scrollTo(0,0);
    });
    return(
        <div>
            <Slider />
            <WelCome Subtitle="Welcome to" Title="Blubuild construction" WelcomeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem. Vestibulum feugiat eros lorem, vitae faucibus arcu aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis felis, vel luctus sapien nisi non orci. Ut laoreet ante tellus, vel hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit ac rutrum." ButtonLink={"/about"} ButtonText="About Us" />
            <ServiceBox />
            <BestServices BestServicesTitle="Our best services" />
            <Portfolio />
            <ImageContent LeftImagae={MapImage} SubTitle="Build construction" MinTitle="THE BEST WORLD TEAM" Content="text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem." ButtonUrl={"/about"} ButtonText="About Us" />
            <div className='container step--wrapper'>
                <SingleTitle SingleTitle="HOW IT’S WORKING" />
                <div className="flex-container">
                    <WorkingStep IconImage={icon1} StepTitle="PLANNING" StepContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus." />
                    <WorkingStep IconImage={icon2} StepTitle="DESIGN" StepContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus." />
                    <WorkingStep IconImage={icon3} StepTitle="BUILDING" StepContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus." />
                    <WorkingStep IconImage={icon4} StepTitle="FINISH" StepContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus." />
                </div>
            </div>
            <section className='testimonial--section'>
                <div className='container'>
                    <SingleTitle SingleTitle="WHAT THEY SAY ABOUT US" />
                    <div className='flex-container'>
                        <Testimonial TestimonialContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien." AuthorImage={Author} AuthorName="Mike angels" AuthorData="Architect" />
                        <Testimonial TestimonialContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien." AuthorImage={Author} AuthorName="Mike angels" AuthorData="Architect" />
                        <Testimonial TestimonialContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien." AuthorImage={Author} AuthorName="Mike angels" AuthorData="Architect" />
                    </div>
                </div>
            </section>
            <section className='award--section'>
            <div className='container'>
                <div className='flex-container'>
                    {AwardData.map((item, index) =>(
                        <Award AwardImage={item.AwardImage} key={item.AwardImage + index} />
                    ))}
                </div>
            </div>
            </section>
            <section className='blog--section'>
                <SingleTitle SingleTitle="WHAT THEY SAY ABOUT US" />
                <div className='container'>
                    <div className='flex-container'>
                        {BlogData.map((item, index) =>(
                            <Blog BlogImage={item.BlogImage} BlogTitle={item.BlogTitle} BlogDate={item.BlogDate} BlogContent={item.BlogContent} BlogUrl={item.BlogUrl} key={item.BlogTitle + index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;