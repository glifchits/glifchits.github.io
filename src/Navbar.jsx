import React from 'react';


export default class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#">Education</a></li>
          <li><a href="#">Developer</a></li>
          <li><a href="#">Business-person</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }

}
