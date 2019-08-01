import React from "react";
import Comment from "../Components/DiscussionComments.component.js"

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4 pt-2">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-infoo">
          Be the first to comment
        </div>
      ) : null}

      {props.comments.reverse().map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}