import React from 'react';

require('./styles/Header.less');


export default class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>George Lifchits</h1>
        <h3>A hacker who means business.</h3>
      </header>
    );
  }

}
