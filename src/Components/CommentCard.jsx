import React, { useState } from "react";
import useFetchComments from "../../UseFetchComments";
import deleteComment from "../Util/CustomHooks/deleteComment";

const CommentCard = ({articleId, userName})  => {
    
    const { comments, isPending, error } = useFetchComments(articleId)

    const [deleteError, setDeleteError] = useState(null)
    const [isDeleting, setIsDeleting] =useState(false)
    const [deletedCommentId, setdeletedCommentId] = useState([])
    
    const handleDelete = (comment_id) => {
        setIsDeleting(true)
        deleteComment(comment_id, setDeleteError, setIsDeleting)
        setDeletedCommentId((prevDeletedCommentIds) => [
            ...prevDeletedCommentIds,
            comment_id
        ])
    }
    
    if(isPending) {
        return <div>Loading comments...</div>
    }
    
    if (error) {
        return <div> {error} </div>
    }
    
    return (
        <div className="comments">
            <h2 className="comment-title">Comments</h2>
            
            {isDeleting ? (
                <>
                    <p>We are deleting your comment please bear with us !</p>
                    {comments
                        .filter(comment => !deletedCommentId.includes(comment.comment_id))
                        .map(comment => (
                            <div className="comment-card" key={comment.comment_id}>
                                <p className="comment-author">{comment.author}</p>
                                <p className="comment-body">{comment.body}</p>
                                {comment.author === userName && (
                                    <button
                                        className="delete"
                                        onClick={() => handleDelete(comment.comment_id)}
                                    >
                                        DELETE
                                    </button>
                                )}
                            </div>
                        ))}
                </>
            ) : (
                comments.map(comment => (
                    <div className="comment-card" key={comment.comment_id}>
                        <p className="comment-author">{comment.author}</p>
                        <p className="comment-body">{comment.body}</p>
                        {comment.author === userName && (
                            <button
                                className="delete"
                                onClick={() => handleDelete(comment.comment_id)}
                            >
                                DELETE
                            </button>
                        )}
                    </div>
                ))
            )}
        {deleteError && <p>Sorry we we're unable to delete your comment please try again</p>}
        </div>
    )
}

export default CommentCard