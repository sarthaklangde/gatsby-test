import React from "react";
import style from "./work.module.css";

export default () =>
  <div>
    <WorkWrapper
      title="smallcase"
      duration="August 2017 - Present"
      tagline="The best thematic stock investment platform"
      description="Fixing bugs and adding smooth transitions to a few pages allowed me to understand the whole platform, its complexity. Writing services and factories was challenging and fun but after trying a few pages in Vue and React we have decided to port the entire app. Wise or not? Hang on to know."
      tags={['AngularJS 1.5', 'React 16', 'Redux', 'React-Router 4']}
      ctaText="Site"
    />
    <WorkWrapper
      title="screener"
      duration="August 2017 - Present"
      tagline="A screener for Indian stocks"
      description="My work started from creating a promise-based fetch API interceptor and now I single-handedly handle the front-end feature updates. After recently having integrated the Razorpay payment gateway, my work is concentrated on integrating OAuth and refactoring the app."
      tags={['React 15', 'Redux', 'React-Router 3']}
    />
    <WorkWrapper
      title="Climate Modeling using NARX"
      duration="July 2016 - March 2017"
      tagline="Capstone project - Application of Machine Learning for Climate Modeling"
      description="After analysis of 110 years of rainfall for India in R and Python (ARIMA, Holt Winters, Time Series Decomposition), a neural network was created in MATLAB using seven parameters of atmosphere as input and the rainfall for next 4 years was predicted at once with accuracy of almost 90% (correlation)"
      tags={['Machine Learning', 'R', 'Python', 'MATLAB']}
    />
    <WorkWrapper
      title="BSE SENSEX Prediction using NN"
      duration="June 2016 - August 2016"
      tagline="Research project under Dr. K C Gouda, Senior Scientist, CSIR - 4PI"
      description="A NARX network was able to predict the BSE SENSEX index values accurately with correlation of 89%."
      tags={['Machine Learning', 'R', 'Python', 'MATLAB']}
    />

    <WorkWrapper
      title="Virtual Reality 360° Image Gallery "
      duration="May 2017"
      tagline="A mini-project aimed at demonstrating the power of AFrame VR by Mozilla"
      description="On load, you are greeted with a scenic view of the beaches on your VR-compatible device and you are free to change the scenery just by pointing at the hovering images in the gallery"
      tags={['A-FRAME', 'React', 'Redux', 'Axios']}
    />

    <WorkWrapper
      title="Online Transcript Application System"
      duration="February 2016 - March 2016"
      tagline="A live-system at RAIT for generation student transcripts"
      description="Before: Manually generated transcript takes 10-15 days, hard-copies of documents have to be submitted in-person. After: Apply online, takes 15-20 minutes for the document verification, only soft copies needed, can be filled and delivered even overseas"
      tags={['PHP', 'Bootstrap', 'jQuery', 'MySQL']}
    />


    <WorkWrapper
      title="E-Attedance System"
      duration="September 2015 - March 2016"
      tagline="A live-system at RAIT for attendance management"
      description="Tracking attendance of over 2000 students is tedious, involves a lot of paperwork and, did I mention time? This system has made it exponentially faster. There are multiple views for different levels of users. Data visualization, schedule planning, defaulter list generation and what not. There's nothing to dislike here. Amazing team of 5 people. Amazing product loved by everyone (except, some students)"
      tags={['PHP', 'Bootstrap', 'jQuery', 'MySQL']}
    />


  </div>

  const WorkWrapper = (props) => {
    return (
      <div className={style.workWrapper}>
        <div className={style.heading}>
          <h2 className={style.title}>{props.title}</h2>
          <div className={style.duration}>{props.duration}</div>
        </div>
        <blockquote>
          {props.tagline}
        </blockquote>
        <div>
          <p dangerouslySetInnerHTML={{ __html: props.description }}>
          </p>
        </div>
        <div className={style.tag}>
          {props.tags.map((tag, idx) => {
            return <div key={idx}>{tag}</div>
          })}
        </div>

      </div>
    )
  }
