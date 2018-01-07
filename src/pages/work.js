import React from "react";
import style from "./work.module.css";

export default () =>
  <div>
    <div className={style.heading}>
      <h1 className={style.title}>screener by smallcase</h1>
      <div className={style.duration}>August 2017 - Present</div>
    </div>
    <blockquote>
      A screener for Indian stocks
    </blockquote>
    <div>
      <p>
         My work started from creating a promise-based fetch API interceptor and now I single-handedly handle the front-end feature updates. After recently having integrated the Razorpay payment gateway, my work is concentrated on integrating OAuth and refactoring the app.
      </p>
    </div>
    <div className={style.tag}>
      <div>React</div>
      <div>Redux</div>
    </div>

  </div>
