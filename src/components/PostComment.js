import React from 'react';

function PostComment({ author, content }) {
  return (
    <div className="post-item__comment">
      <img src={author.avatar} alt="" />
      <div className="post-item__comment__name-content">
        <span className="post-item__comment__name-content__name"> {author.name} </span>
        <span className="post-item__comment__name-content__content"> {content} </span>
      </div>
    </div>
  )
};

export default PostComment;