import React from 'react';


export default class Post extends React.Component {

  render() {
    const postId = this.props.params.postId;
    return (
      <div>
        This is a blog post with
        post id = {postId}
      </div>
    )
  }

}
