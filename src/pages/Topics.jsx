import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from '../../UseFetchAll'
import { Link } from "react-router-dom";

const Topics =  () => {

    const { topicSlug } = useParams()
    const { data, isPending, error } = useFetch()

    const [filteredArticles, setFilteredArticles] = useState([]);
  
    useEffect(() => {
        if (data) {
            const filtered = data.filter(article => article.topic === topicSlug);
            setFilteredArticles(filtered);
        }
    }, [data, topicSlug]);

    if (isPending) {
        return <div>Loading articles for this topic...</div>
    }

    if (error) {
        return <div> Sorry we had some issues fetching the articles...</div>
    }

    return (
        <div>
            <h2>
                Welcome to the {topicSlug} page
            </h2>
                {filteredArticles.map(filteredArticle => (
                    <div className="article-card" key={filteredArticle.id}>
                        <Link to={`/article/${filteredArticle.article_id}`}> 
                            <h3 className="article-title">{filteredArticle.title}</h3>
                        </Link>
                            <p className="article-body">{filteredArticle.body}</p>
                            <p className="username"> {filteredArticle.author}</p>
                            <p className="article-details"> Posted:{filteredArticle.created_at}</p>
                            <img src={filteredArticle.article_img_url} className="article-image"/>
                    </div>
                ))}
        </div>
    )
}

export default Topics