import React from "react";
import { useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import '../Styles/main.css'

import UserContext from "../Contexts/StaticUserContext";
import useFetcharticle from "../../UseFetchArticle";
import postComment from "../Util/CustomHooks/postComment";
import patchVotes from "../Util/CustomHooks/patchVotes";
import CommentCard from "../Components/CommentCard";
import ArticleCard from "../Components/ArticleCard";


const Article = () => {
    
    const { id } = useParams()
    
    const {article, isPending, error} = useFetcharticle(id)
    
    const [votes, setVotes] = useState()
    const [voteError, setVoteError] = useState(null)
    const [voteButtonClicked, setVoteButtonClicked] = useState(false)
    const [voteSuccess, setVoteSuccess] = useState(false)
    
    const [commentError, setCommentError] = useState(null);
    const [commentPosted, setCommentPosted] = useState(false)
    const [commentBody, setCommentBody] = useState('')
    const [showCommentForm, setShowCommentForm] = useState(false)
    const userName = useContext(UserContext)
    

    useEffect(() => {
        if(article){
            setVotes(article.votes)
        }
    }, [article])
   
    const handleVote = (event) => {
        event.preventDefault()
        setVoteButtonClicked(true)
        patchVotes(id, setVotes, setVoteError, setVoteSuccess)  
    }

    const handleToggleCommentForm = () => {
        setShowCommentForm(true)
    }

    const handleCancelCommentForm = () => {
        setShowCommentForm(false)
    }

    const handleChange = (event) => {
        setCommentBody(event.target.value)
    }

    const handlePostComment = (event) => {
        event.preventDefault()
        postComment(id, setCommentError, setCommentPosted, userName, commentBody)
        setCommentBody('')
        setShowCommentForm(false)
    }

    return (
        <div className="container"> 
             {error && <div>{error}</div>}
             {isPending && <div>Loading your fake news</div>}
             {article && (
                <div>
                < ArticleCard article={article} />
               
                <p className="article-votes">
                    <span className="votes-count"> {votes} </span>
                        <button className="vote-button" onClick={handleVote} disabled={voteButtonClicked}>UPVOTE? ⬆</button>
                </p>
                    {voteSuccess && <p>Thanks for upvoting this article </p>}
                    {voteError && <p className="vote-error">Sorry there was an issue with your upvote, please try again</p>}

                <button onClick={handleToggleCommentForm}>Add a comment?</button>
                    {showCommentForm && (
                        <form className="comment-form">
                            <textarea
                            className="'comment-input"
                            placeholder="Type your comment"
                            rows={7}
                            onChange={handleChange}></textarea>
                                <div className="button-group">
                                    <button className="post-comment-button" onClick={handlePostComment}>
                                        POST COMMENT 
                                    </button>
                                    <button className="cancel-comment-button" onClick={handleCancelCommentForm}>
                                        CANCEL
                                    </button>
                                </div>
                        </form>
                    )}
                        
                    {commentError && <p>Your comment has to be more than one character, please try again</p>}
                    {commentPosted && <p>Thank you for your comment</p>}

                        <div className="comments-section">
                            < CommentCard articleId={id} userName={userName} />
                        </div>

                </div>
                        )}
        </div>
            )

}

export default Article