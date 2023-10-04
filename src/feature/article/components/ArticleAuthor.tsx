import { authorDescription, authorImg, titleContainer, author, articleDate } from "../Article.css";
import { formatDate } from "@/utils/date-format";

interface Props {
  imgSrc: string;
  authorName: string;
  createDate: string;
}

const ArticleAuthor = ({ imgSrc, authorName, createDate }: Props) => {
  return (
    <div className={titleContainer}>
      <img src={imgSrc} width={32} height={32} className={authorImg} />
      <div className={authorDescription}>
        <a className={author}>{authorName}</a>
        <span className={articleDate}>{formatDate(createDate)}</span>
      </div>
    </div>
  );
};

export default ArticleAuthor;
