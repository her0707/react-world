import Article from "./Article";
import type { Articles } from "@/types/article";
import { container } from "./ArticleList.css";
import TagList from "./components/TagList";
import ArticleSkeleton from "./skeleton/ArticleSkeleton";
import { CONTENT_LIMIT } from "@/constants/pagination";

interface Props {
  data: Articles;
  isLoading: boolean;
}

const ArticleList = ({ data, isLoading }: Props) => {
  return (
    <div className={container}>
      {isLoading
        ? new Array(CONTENT_LIMIT).fill(0).map((_, i) => <ArticleSkeleton key={`article-skeleton-${i}`} />)
        : data.articles.map((article, i) => (
            <Article
              key={`article-${i}`}
              favorited={article.favorited}
              favoritesCounts={article.favoritesCount}
              imgSrc={article.author.image}
              authorName={article.author.username}
              createDate={article.createdAt}
              title={article.title}
              description={article.description}
              tagComponent={<TagList tagList={article.tagList} />}
              slug={article.slug}
            ></Article>
          ))}
    </div>
  );
};

export default ArticleList;
