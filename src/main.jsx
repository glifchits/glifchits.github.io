import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import PostIndex from './Blog/PostIndex';
import Post from './Blog/Post';
import Content from './Home/Content';


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Content} />
      <Route path="blog" component={PostIndex} />
      <Route path="blog/:postId" component={Post} />
    </Route>
  </Router>
), document.getElementById('app'));
