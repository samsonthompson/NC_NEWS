import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/main.css'
import useFetcharticle from "../../UseFetchArticle";
import ArticleComments from "../Components/CommentCard";
import axios from "axios";
import { useState, useEffect} from "react";

const Article = () => {
    
    const { id } = useParams()
    const {article, isPending, error} = useFetcharticle(id)

    const [votes, setVotes] = useState()
    const [voteError, setVoteError] = useState(null)

    useEffect(() => {
        if(article){
            setVotes(article.votes)
        }
    }, [article])
   
    const handleVote = (event) => {
        event.preventDefault()
        setVotes((currentCount) => currentCount +1)
        axios.patch(`https://nc-news-fz7g.onrender.com/api/articles/${id}`, { inc_votes: 1 })
        .catch((error) => {
            setVotes((currentCount) => currentCount -1)
            setVoteError(error, '...ooops, looks like something went wrong, please try again.')
        })
    }

    return (
        <div className="container"> 
             {error && <div>{error}</div>}
             {isPending && <div>Loading your fake news</div>}
             {article && (
                <div className="article">
                    <p className="article-details">
                        <span className="article-topic">{article.topic}</span> |
                        posted {article.created_at} ago
                    </p>
                    <p className="username">
                        {article.author}
                    </p>
                    <h1 className="article-title">   
                        {article.title}
                    </h1>
                    <p className="article-body">
                        {article.body}
                    </p>
                    <img src={article.article_img_url} className="article-image"/>
                    <p className="article-votes">
                        <span className="votes-count"> {votes} </span>
                         <button className="vote-button" onClick={handleVote}>UPVOTE? ⬆</button>
                    </p>
                    {voteError && <p className="vote-error">{voteError}</p>}
                        <div className="comments-section">
                            <ArticleComments articleId={id} />
                        </div>

                </div>
            )}
        </div>
    )
}

export default Article