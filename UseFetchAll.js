import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios.get('https://nc-news-fz7g.onrender.com/api/articles')
            setIsPending(false)
            setData(response.data.articles)
            setError(null) 
        }
        catch (error) {
            setIsPending(false)
            setError(error.message)
        }
      }
      fetchData()
  }, [])

  return { data, isPending, error };
}

 
export default useFetch