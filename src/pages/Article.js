import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find(function take(article) {
    return article.name === name;
  });
  if (!article) return <h1>We do not have uploaded this article yet</h1>
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-600">
        Article about {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Article;
