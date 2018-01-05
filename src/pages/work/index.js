import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


export default () =>
  <div>
    <h1>My Work</h1>
    <div>
      <blockquote>
          I have always been the tinkerer. When I was a lil kid, I wanted to be an innovator; now that I am a young man, I belive I have become one. Instead of a chemical laboratory (watched too much Dexter), the web has become my playground.
      </blockquote>
      <ListLink to="/work/thepetshop/">The Pet Shop</ListLink>
    </div>



  </div>
