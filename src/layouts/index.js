import React from "react";
import Link from "gatsby-link";
import Resume from "../files/Sarthak_Langde_Resume.pdf";
import style from "./index.module.css";

export default ({ children }) =>
  <div className={style.page}>
    <header className={style.header}>
      <div>
        <Link to="/">Sarthak Langde</Link>
      </div>
      <div>
        <Link className={style.link} to="/work/">My Work</Link>
        <a className={style.link} href={Resume} target="_blank">Download CV</a>
        <a  className={style.link} href="#contact">Contact</a>
      </div>
    </header>
    {children()}
    <footer id="contact" style={{ width: '100%', margin: `64px auto 4px`}}>
      <div style={{ display: `flex`, justifyContent: `center`, flexWrap: `wrap`}}>
        <div style={{ marginRight: `32px`}}><a href="mailto: sarthak.langde@gmail.com" >Email</a></div>
        <div style={{ marginRight: `32px`}}><a href="https://www.linkedin.com/in/sarthaklangde/" target="_blank">Linkedin</a></div>
        <div style={{ marginRight: `32px`}}><a href="https://github.com/sarthaklangde" target="_blank">Github</a></div>
        <div style={{ }}><a href="https://angel.co/sarthak-langde" target="_blank">Angel</a></div>
      </div>
      
      
    </footer>
  </div>
