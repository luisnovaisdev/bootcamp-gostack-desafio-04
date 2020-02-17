import React from 'react';
import PostComment from './PostComment';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post-item">
      <div className="post-item__account-information">
        <img src={author.avatar} alt="" />
        <div className="post-item__account-infomation__name-date">
          <span className="post-item__account-infomation__name-date__name"> {author.name} </span>
          <span className="post-item__account-infomation__name-date__date"> {date} </span>
        </div>
      </div>
      <p> {content} </p>
      <div className="post-item__comments">
        {
          comments.map(comment => <PostComment key={comment.id} {...comment} />)
        }
      </div>
    </div>
  )
};

export default PostItem;