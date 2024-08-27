import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../Styles/main.css';

import UserContext from "../Contexts/StaticUserContext";
import useFetcharticle from "../../UseFetchArticle";
import postComment from "../Util/CustomHooks/postComment";
import patchVotes from "../Util/CustomHooks/patchVotes";
import CommentCard from "../Components/CommentCard";
import ArticleCard from "../Components/ArticleCard";

const Article = () => {
  const { id } = useParams();
  const { article, isPending, error } = useFetcharticle(id);

  const [votes, setVotes] = useState();
  const [voteError, setVoteError] = useState(null);
  const [voteButtonClicked, setVoteButtonClicked] = useState(false);
  const [voteSuccess, setVoteSuccess] = useState(false);

  const [commentError, setCommentError] = useState(null);
  const [commentPosted, setCommentPosted] = useState(false);
  const [commentBody, setCommentBody] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);
  const userName = useContext(UserContext);

  useEffect(() => {
    if (article) {
      setVotes(article.votes);
    }
  }, [article]);

  const handleVote = (event) => {
    event.preventDefault();
    setVoteButtonClicked(true);
    patchVotes(id, setVotes, setVoteError, setVoteSuccess);
  };

  const handleToggleCommentForm = () => {
    setShowCommentForm(true);
  };

  const handleCancelCommentForm = () => {
    setShowCommentForm(false);
  };

  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };

  const handlePostComment = (event) => {
    event.preventDefault();
    postComment(id, setCommentError, setCommentPosted, userName, commentBody);
    setCommentBody('');
    setShowCommentForm(false);
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      {error && <div className="text-red-500">{error}</div>}
      {isPending && <div>Loading your fake news...</div>}
      {article && (
        <div>
         
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
            {article.title}
          </h1>
  
          <p className="text-lg text-gray-600 mb-4">
            {article.body}
          </p>
  
          <div className="w-full mb-4">
          <img
            src={article.article_img_url}
            alt={article.title}
            className="w-full h-auto max-w-full object-cover rounded-lg"
          />
          </div>
  
    
          <div className="text-left text-sm text-gray-500 mb-8">
            <p>By {article.author}</p>
            <p>{new Date(article.created_at).toLocaleDateString()}</p>
          </div>
  
       
          <div className="mt-6 flex items-left">
            <p className="flex items-center">
              <span className="text-med text-gray-800 mr-4">
                {votes} VOTES
              </span>
              <button
                className="vote-button bg-white text-black font-medium py-2 px-4 border border-black rounded"
                onClick={handleVote}
                disabled={voteButtonClicked}
              >
                upvote ⬆
              </button>
            </p>
            {voteSuccess && (
              <p className="text-green-500 mt-2">
                Thanks for upvoting this article!
              </p>
            )}
            {voteError && (
              <p className="text-red-500 mt-2">
                Sorry, there was an issue with your upvote. Please try again.
              </p>
            )}
          </div>
  
          
          <button
            onClick={handleToggleCommentForm}
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add a comment?
          </button>
  
          {showCommentForm && (
            <form className="comment-form mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <textarea
                className="comment-input w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Type your comment"
                rows={5}
                onChange={handleChange}
                value={commentBody}
              ></textarea>
              <div className="button-group flex justify-end mt-4">
                <button
                  className="post-comment-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handlePostComment}
                >
                  POST COMMENT
                </button>
                <button
                  className="cancel-comment-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelCommentForm}
                >
                  CANCEL
                </button>
              </div>
            </form>
          )}
  
          {commentError && (
            <p className="text-red-500 mt-4">
              Your comment must be more than one character. Please try again.
            </p>
          )}
          {commentPosted && (
            <p className="text-green-500 mt-4">Thank-you for your comment!</p>
          )}
  
          <div className="comments-section mt-8">
            <CommentCard articleId={id} userName={userName} />
          </div>
        </div>

      )}
    </div>
  );
  
  
};

export default Article;
