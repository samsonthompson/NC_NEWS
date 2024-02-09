import React from "react";

const ArticleCard = ({ article }) => {
    return ( 
        <div className="article">
                <p className="article-details"><span className="article-topic">{article.topic}</span> | posted {article.created_at} ago</p>
                <p className="username">{article.author}</p>
                <h1 className="article-title">{article.title}</h1>
                <p className="article-body">{article.body}</p>
                <img src={article.article_img_url} className="article-image"/>
        </div>
     )
}
 
export default ArticleCard;