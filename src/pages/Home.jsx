import React from "react";
import "../Styles/main.css";
import { Link } from "react-router-dom";
import useFetch from "../../UseFetchAll";

const Home = () => {
  const { data, isPending, error } = useFetch();

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const limitedData = data ? shuffleArray([...data]).slice(0, 6) : [];

  return (
    <div className="home-container p-8">
      {error && <div>{error}</div>}
      {isPending && <div>Loading your fake news</div>}

      {limitedData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
          {limitedData[0] && (
            <div
              key={limitedData[0].article_id}
              className="relative rounded-lg overflow-hidden shadow-lg md:col-span-2 md:row-span-2"
            >
              <img
                src={limitedData[0].article_img_url}
                alt={limitedData[0].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <Link to={`/article/${limitedData[0].article_id}`}>
                  <h3 className="text-white text-2xl font-bold">
                    {limitedData[0].title}
                  </h3>
                </Link>
                <p className="text-gray-300 text-lg mt-2">
                  {limitedData[0].topic.toUpperCase()}
                </p>
              </div>
            </div>
          )}

          {limitedData.slice(1, 3).map((article) => (
            <div
              key={article.article_id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={article.article_img_url}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <Link to={`/article/${article.article_id}`}>
                  <h3 className="text-white text-xl font-bold">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-300 text-sm mt-2">
                  {article.topic.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col gap-6 md:col-span-1 md:row-span-2">
            {limitedData.slice(3, 5).map((article) => (
              <div
                key={article.article_id}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={article.article_img_url}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <Link to={`/article/${article.article_id}`}>
                    <h3 className="text-white text-xl font-bold">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-300 text-sm mt-2">
                    {article.topic.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {limitedData[5] && (
            <div
              key={limitedData[5].article_id}
              className="relative rounded-lg overflow-hidden shadow-lg md:col-span-2 md:row-span-2"
            >
              <img
                src={limitedData[5].article_img_url}
                alt={limitedData[5].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <Link to={`/article/${limitedData[5].article_id}`}>
                  <h3 className="text-white text-2xl font-bold">
                    {limitedData[5].title}
                  </h3>
                </Link>
                <p className="text-gray-300 text-lg mt-2">
                  {limitedData[5].topic.toUpperCase()}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
