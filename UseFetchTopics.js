import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchTopics = () => {
  
        const [topics, setTopics] = useState([]);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios
            .get(`https://nc-news-fz7g.onrender.com/api/topics`)
            setIsPending(false)
            setTopics(response.data.topics)
            setError(null) 
        }
        catch (error) {
            setIsPending(false)
            setError(error.message)
        }
      }
      fetchData()
  }, [])

  return { topics, isPending, error };
}

 
export default useFetchTopics