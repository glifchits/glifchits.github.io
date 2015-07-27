import React from 'react';


export default class Footer extends React.Component {

  render() {
    return (
      <footer>
        George Lifchits, { new Date().getUTCFullYear() }
      </footer>
    );
  }

}
