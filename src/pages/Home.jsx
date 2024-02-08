import React from "react";
import '../Styles/main.css'
import { Link } from 'react-router-dom'
import useFetch from "../../UseFetchAll";

const Home = () => {
     
    const { data, isPending, error } = useFetch()
    
    return (
    
            <div className="home-container">
                {error && <div>{error}</div>}
                {isPending && <div>Loading your fake news</div>}
                {data && data.map((article) => (
                    <div className="article" key={article.article_id}>
                        <Link to={`/article/${article.article_id}`}> 
                            <h3 className="article-title"> {article.title} </h3>
                        </Link>
                        <p className="articledetails">
                            /<span className="article-topics">{article.topic}</span> |
                            Posted {article.created_at}
                        </p>
                    </div>
                    ))}
            </div>
            )
        }
        
    export default Home
    
    
    
    
    
    
    
    
    
       
       
       
       
    