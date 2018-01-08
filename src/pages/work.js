import React from "react";
import style from "./work.module.css";

export default () =>
  <div>
    <WorkWrapper
      title="screener by smallcase"
      duration="August 2017 - Present"
      tagline="A screener for Indian stocks"
      description="My work started from creating a promise-based fetch API interceptor and now I single-handedly handle the front-end feature updates. After recently having integrated the Razorpay payment gateway, my work is concentrated on integrating OAuth and refactoring the app."
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
          <div>React</div>
          <div>Redux</div>
        </div>
      </div>
    )
  }
