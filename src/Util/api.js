import axios from "axios";

const api = axios.create({
    baseURL: `https://nc-news-fz7g.onrender.com/api/`
})

export const fetchArticle = (id) => {
    console.log('...fetching article');
    return api.get(`article/${id}`)
    .then((response) => {
        console.log(response.data.article[0], '<<<response in the fetch article');
       return response.data.article[0]
    })
    .catch ((error) => {
        console.log('Error message:', error)
    })
}

export const fetchAllArticles = () => {
console.log('...fetching all articles');
    api.get('articles')
    .then((response) => {
        console.log(response.data.articles, '<<<< response for the FETCHALLARTICLES');
       return response.data.articles
    })
    .catch ((error) => {
        console.log('Error message:', error)
    })
}

