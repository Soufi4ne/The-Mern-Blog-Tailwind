import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./article-content";

const ArticlesList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-600">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articleContent.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/article/${article.name}`}>
                  <img className="lg-:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt='blog'/>
                </Link>

                <div className="p-6">
                  <Link key={index} to={`/article/${article.name}`}><h3 className="text-lg font-medium text-gray-900 mb-3">{article.title}</h3></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
