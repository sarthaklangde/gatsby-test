import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Sarthak Langde</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/work/">Work</ListLink>
      </ul>
    </header>
    {children()}
    <footer style={{ position: `fixed`, bottom: `2rem`, width: '100%', maxWidth: 850}}>
      <div style={{ display: `flex`, justifyContent: `space-around`}}>
        <div><a href="javascript:void(0)" >sarthak.langde@gmail.com</a></div>
        <div><a href="https://www.linkedin.com/in/sarthaklangde/" target="_blank">Linkedin</a></div>
        <div><a href="https://github.com/sarthaklangde" target="_blank">Github</a></div>
        <div><a href="https://angel.co/sarthak-langde" target="_blank">Angel</a></div>
      </div>
      
      
    </footer>
  </div>
