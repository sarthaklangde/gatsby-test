import React from "react";
import Link from "gatsby-link";
import Resume from "../files/Sarthak_Langde_Resume.pdf";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{}}>
        <a style={{ display: `inline` }}>Sarthak Langde</a>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/work/">My Work</ListLink>
        <a href={Resume} target="_blank">Download CV</a>
      </ul>
    </header>
    {children()}
    <footer style={{ width: '100%', margin: `64px auto 4px`}}>
      <div style={{ display: `flex`, justifyContent: `center`, flexWrap: `wrap`}}>
        <div style={{ marginRight: `32px`}}><a href="mailto: sarthak.langde@gmail.com" >Email</a></div>
        <div style={{ marginRight: `32px`}}><a href="https://www.linkedin.com/in/sarthaklangde/" target="_blank">Linkedin</a></div>
        <div style={{ marginRight: `32px`}}><a href="https://github.com/sarthaklangde" target="_blank">Github</a></div>
        <div style={{ }}><a href="https://angel.co/sarthak-langde" target="_blank">Angel</a></div>
      </div>
      
      
    </footer>
  </div>
