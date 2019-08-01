    
import React from "react";
import StarRatingComponent from 'react-star-rating-component';

export default function Comment(props) {
  const { username,film, comment, time, rating } = props.comment;

  return (
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{username}</h6>
        {film} <br/>
        {comment} <br />
        <StarRatingComponent
                        starColor={'#28CDE9'}
                        starCount={5}
                        value={rating}
                        editing={false}
                    />
      </div>
    
  );
}