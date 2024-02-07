import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchComments = (articleId) => {
  
        const [comments, setComments] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios
            .get(`https://nc-news-fz7g.onrender.com/api/articles/${articleId}/comments`)
            setIsPending(false)
            setComments(response.data.comments)
            setError(null) 
        }
        catch (error) {
            setIsPending(false)
            setError(error.message)
        }
      }
      fetchData()
  }, [])

  return { comments, isPending, error };
}

 
export default useFetchComments