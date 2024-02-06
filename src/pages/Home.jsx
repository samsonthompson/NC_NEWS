import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../Styles/Home.css'


const Home = () => {
    
    
    const [homeArticles, setHomeArticles] = useState([])


    useEffect(() => {
        axios.get('https://nc-news-fz7g.onrender.com/api/articles')
        .then(({data}) => {
        console.log(data, '<<< consoling the useEffect')
        setHomeArticles(data.articles)
      
    })
    .catch((error)=>{
    console.log('Error fetching articles:', error)
  })
}, [])

console.log(homeArticles, '<<<<home articles')

const calculateTimeAgo = (timePosted) => {
    const currentTime = new Date()
    const postedTime = new Date(timePosted)
    const differenceMs = currentTime - postedTime
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24))
    if (differenceDays > 365) {
        return (Math.floor(differenceDays/365)) + ` years ago`
    }
    return differenceDays + ` days ago`
}

console.log(calculateTimeAgo(homeArticles[0].created_at))

    return (
        <div className="home-container">
          {homeArticles.map((article) => (
            <div className="article" key={article.article_id}>
                 <h3 className="article-title"> {article.title} </h3>
                     <p className="articledetails">
                        /<span className="article-topics">{article.topic}</span> |
                        Posted {calculateTimeAgo(article.created_at)}
                    </p>
            </div>
          ))}
        </div>
        )
    }
    
    
    export default Home
       
       
       
       
       
       
       
       
       
       
       
       
    