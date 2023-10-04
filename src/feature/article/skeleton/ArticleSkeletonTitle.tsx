import Skeleton from "@/components/skeleton/Skeleton";
import { authorDescription, authorImg, titleContainer, author, articleDate } from "./ArticleSkeleton.css";

const ArticleSkeletonTitle = () => {
  return (
    <div className={titleContainer}>
      <Skeleton variant="circular" className={authorImg} />
      <div className={authorDescription}>
        <Skeleton variant="rounded" className={author} />
        <Skeleton variant="rounded" className={articleDate} />
      </div>
    </div>
  );
};

export default ArticleSkeletonTitle;
