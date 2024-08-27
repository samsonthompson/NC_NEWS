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
        <div className="comments p-4 bg-white shadow-lg rounded-lg mt-8">
          <h2 className="comment-title text-2xl font-bold mb-4">Comments</h2>
      
          {isDeleting ? (
            <>
              <p className="text-gray-600 mb-4">
                We are deleting your comment; please bear with us!
              </p>
              {comments
                .filter((comment) => !deletedCommentId.includes(comment.comment_id))
                .map((comment) => (
                  <div
                    className="comment-card border-b border-gray-200 py-4 flex justify-between items-center"
                    key={comment.comment_id}
                  >
                    <div>
                      <p className="comment-author text-sm font-semibold text-gray-800">
                        {comment.author}
                      </p>
                      <p className="comment-body text-gray-700 mb-2">{comment.body}</p>
                    </div>
                    {comment.author === userName && (
                      <button
                        className="delete text-sm text-gray-800 bg-white border border-black font-semibold py-1 px-3 rounded hover:bg-gray-200 transition-colors duration-300"
                        onClick={() => handleDelete(comment.comment_id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))}
            </>
          ) : (
            comments.map((comment) => (
              <div
                className="comment-card border-b border-gray-200 py-4 flex justify-between items-center"
                key={comment.comment_id}
              >
                <div>
                  <p className="comment-author text-sm font-semibold text-gray-800">
                    {comment.author}
                  </p>
                  <p className="comment-body text-gray-700 mb-2">{comment.body}</p>
                </div>
                {comment.author === userName && (
                  <button
                    className="delete text-sm text-gray-800 bg-white border border-black font-semibold py-1 px-2 rounded hover:bg-gray-200 transition-colors duration-300"
                    onClick={() => handleDelete(comment.comment_id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))
          )}
          {deleteError && (
            <p className="text-red-500 mt-4">
              Sorry, we were unable to delete your comment. Please try again.
            </p>
          )}
        </div>
      );
      
      
}

export default CommentCard