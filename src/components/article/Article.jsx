import React from "react";
import "./article.css";
const Article = ({
  image,
  date = "Sep 26, 2021",
  text = "GPT-3 and Open  AI is the future. Let us exlore how it is?",
}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={image} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{text}</h3>

        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
