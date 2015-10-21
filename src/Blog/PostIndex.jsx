import React from 'react';
import { Link } from 'react-router';


export default class PostIndex extends React.Component {

  render() {
    return (
      <div>
        This is an index of all my blog posts.
        <Link to="/">Go home</Link>
      </div>
    );
  }

}
