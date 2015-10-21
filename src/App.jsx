import React from 'react';
import Header from './Header';
import Footer from './Footer';

require('./styles/normalize.css');
require('./styles/style.less');


export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }

}
