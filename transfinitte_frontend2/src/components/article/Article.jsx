import React from 'react'
import "./article.css"

// Parameter Destructuring
const Article = ({ imgUrl, date, title,link,Senti }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p id="textu">{date}</p>
        <h3>{title}</h3>
        <p id="textu">{link}</p>
        <p id="textu">{Senti}</p>
        
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;