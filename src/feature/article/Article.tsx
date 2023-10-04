import {
  container,
  contentContainer,
  articleTitle,
  articleContent,
  headerContainer,
  likeIcon,
  likeButton,
  likeCount,
  articleTagContainer,
} from "./Article.css";
import SvgIcon from "@/components/SvgIcon";
import LikeIcon from "@/assets/icons/like-icon.svg";

import type { ReactNode } from "react";
import ArticleAuthor from "./components/ArticleAuthor";

interface Props {
  imgSrc: string;
  authorName: string;
  createDate: string;
  title: string;
  description: string;
  favorited: boolean;
  favoritesCounts: number;
  tagComponent: ReactNode;
  slug: string;
}

const Article = ({
  imgSrc,
  authorName,
  createDate,
  title,
  description,
  favorited,
  favoritesCounts,
  slug,
  tagComponent,
}: Props) => {
  return (
    <div className={container}>
      <div className={headerContainer}>
        <ArticleAuthor imgSrc={imgSrc} authorName={authorName} createDate={createDate} />
        <button className={`${likeButton} ${favorited ? "active" : ""}`}>
          <SvgIcon src={LikeIcon.src} id="like-icon" className={likeIcon} />
          <span className={likeCount}>{favoritesCounts}</span>
        </button>
      </div>

      <a className={contentContainer} href={`/articles/${slug}`}>
        <h5 className={articleTitle}>{title}</h5>
        <p className={articleContent}>{description}</p>
      </a>

      <div className={articleTagContainer}>{tagComponent}</div>
    </div>
  );
};

export default Article;
