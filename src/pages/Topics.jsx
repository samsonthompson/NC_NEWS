import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Topics = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // Dummy array for skeleton placeholders
  const skeletonArticles = new Array(6).fill("loading");

  useEffect(() => {
    if (!topic) {
      setError('No topic specified.');
      setIsPending(false);
      return;
    }

    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://nc-news-fz7g.onrender.com/api/articles?topic=${topic}`);
        setArticles(response.data.articles);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchArticles();
  }, [topic]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        {topic ? `Articles on ${topic.charAt(0).toUpperCase() + topic.slice(1)}` : 'Topic Not Found'}
      </h1>

      {error && <div className="text-red-500">{error}</div>}
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {(isPending ? skeletonArticles : articles).map((article, index) => (
          <div key={isPending ? index : article.article_id} className="relative overflow-hidden rounded-lg shadow-lg">
            {isPending ? (
              <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
            ) : (
              <img
                src={article.article_img_url}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {isPending ? <div className="h-6 bg-gray-400 animate-pulse w-3/4"></div> : article.title}
              </h2>
              <p className="text-sm md:text-base text-white">
                {isPending ? <div className="h-4 bg-gray-400 animate-pulse w-1/2"></div> : article.author}
              </p>
              <p className="text-xs md:text-sm text-white">
                {isPending ? <div className="h-3 bg-gray-400 animate-pulse w-1/3"></div> : `Posted on ${new Date(article.created_at).toLocaleDateString()}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
