import Skeleton from "@/components/skeleton/Skeleton";
import { container, contentContainer, articleTitle, articleContent, articleTagContainer } from "./ArticleSkeleton.css";
import ArticleSkeletonTitle from "./ArticleSkeletonTitle";

const ArticleSkeleton = () => {
  return (
    <div className={container}>
      <ArticleSkeletonTitle />

      <a className={contentContainer}>
        <Skeleton variant="rounded" className={articleTitle} />
        <Skeleton variant="rounded" className={articleContent} />
      </a>

      <Skeleton variant="rounded" className={articleTagContainer} />
    </div>
  );
};

export default ArticleSkeleton;
