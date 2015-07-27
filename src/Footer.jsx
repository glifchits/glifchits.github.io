import React from 'react';

require('./styles/Footer.less');


export default class Footer extends React.Component {

  render() {
    return (
      <footer>
        George Lifchits, { new Date().getUTCFullYear() }
      </footer>
    );
  }

}
