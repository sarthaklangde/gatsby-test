import React from "react";
import style from "./work.module.css";

export default () =>
  <div>
    <WorkWrapper
      title="screener"
      duration="August 2017 - Present"
      tagline="A screener for Indian stocks"
      description="My work started from creating a promise-based fetch API interceptor and now I single-handedly handle the front-end feature updates. After recently having integrated the Razorpay payment gateway, my work is concentrated on integrating OAuth and refactoring the app."
      tags={['React 15', 'Redux', 'React-Router 3']}
    />
    <WorkWrapper
      title="smallcase"
      duration="August 2017 - Present"
      tagline="The best thematic stock investment platform"
      description="Fixing bugs and adding smooth transitions to a few pages allowed me to understand the whole platform, its complexity. Writing services and factories was challenging and fun but after trying a few pages in Vue and React we have decided to port the entire app. Wise or not? Hang on to know."
      tags={['AngularJS 1.5', 'React 16', 'Redux', 'React-Router 4']}
    />
  </div>

  const WorkWrapper = (props) => {
    return (
      <div>
        <div className={style.heading}>
          <h1 className={style.title}>{props.title}</h1>
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
