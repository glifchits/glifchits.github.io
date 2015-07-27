import React from 'react';

require('./styles/Navbar.less');


export default class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#education">Education</a></li>
          <li><a href="#dev-skills">Developer</a></li>
          <li><a href="#biz-skills">Business-person</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }

}
