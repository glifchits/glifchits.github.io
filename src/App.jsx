import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Header />
          <Content />
        </div>
      </div>
    )
  }

}
