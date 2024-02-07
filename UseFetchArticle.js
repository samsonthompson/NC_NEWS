import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetcharticle = (id) => {
  
        const [article, setArticle] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);
    

  useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios
            .get(`https://nc-news-fz7g.onrender.com/api/article/${id}`)
            setIsPending(false)
            setArticle(response.data.article[0])
            setError(null) 
        }
        catch (error) {
            setIsPending(false)
            setError(error.message)
        }
      }
      fetchData()
  }, [])

  return { article, isPending, error };
}

 
export default useFetcharticle