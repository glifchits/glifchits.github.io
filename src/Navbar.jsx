import React from 'react';
import $ from 'jquery';

require('./styles/Navbar.less');


export default class Navbar extends React.Component {

  componentDidMount() {
    var sectionHeightOffset = ($('div.picture')[0].clientHeight / 2) + 17;
    $('a[href*=#]').click(function() {
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top - sectionHeightOffset
      }, 300);
      return false;
    });
  }

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
