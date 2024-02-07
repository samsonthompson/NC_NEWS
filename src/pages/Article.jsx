import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/main.css'
import useFetcharticle from "../../UseFetchArticle";

const Article = () => {
    
    const { id } = useParams()
    const {article, isPending, error} = useFetcharticle(id)

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
                </div>
            )}
        </div>
    )
}

export default Article