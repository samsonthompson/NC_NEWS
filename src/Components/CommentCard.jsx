import React from "react";
import useFetchComments from "../../UseFetchComments";

const CommentCard = ({articleId})  => {
    
    const { comments, isPending, error } = useFetchComments(articleId)

    if(isPending) {
        return <div>Loading comments...</div>
    }

    if (error) {
        return <div> {error} </div>
    }

    return (
        <div className="comments">
            <h2 className="comment-title">Comments</h2>
            {comments.map((comment) => (
              <div className="comment-card" key={comment.comment_id}>
                <p className="comment-author"> {comment.author}</p>
                <p className="comment-body"> {comment.body}</p>
                </div>  
            ))}
        </div>
    )
}

export default CommentCard