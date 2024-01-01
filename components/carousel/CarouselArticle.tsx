import * as React from "react"
import Article from "../../models/Article";

interface Props {
  article: Article
  onPress: (any) => {}
}

export default ({article, onPress}: Props) => {
  return <a href={article.link}><div
    className={`carousel-article`}
    onClick={onPress}
  >
    <div className="image">
      {article.thumbnail && <img
        src={article.thumbnail}
         alt={article.description}
      />}
    </div>
    <div className="describe">
      <div className="title">
        <h4>{article.title}</h4>
      </div>
      <div className="description">
        <p>{article.description}</p>
      </div>
    </div>
  </div></a>
}