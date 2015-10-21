import React from 'react';
import $ from 'jquery';

require('../styles/Navbar.less');


class HashLink extends React.Component {

  onClick(evt) {
    evt.preventDefault();
    const href = this.props.href;
    const offset = 71;
    const target = $(href);
    $('body').animate({
      scrollTop: target.offset().top - offset
    }, 300);
  }

  render() {
    const { href, children, ...props } = this.props;
    return (
      <a href={href} onClick={this.onClick.bind(this)}>{children}</a>
    );
  }

}


export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li><HashLink href="#education">Education</HashLink></li>
          <li><HashLink href="#dev-skills">Developer</HashLink></li>
          <li><HashLink href="#biz-skills">Business-person</HashLink></li>
          <li><HashLink href="#resume">Resume</HashLink></li>
          <li><HashLink href="#contact">Contact</HashLink></li>
        </ul>
      </nav>
    );
  }

}
