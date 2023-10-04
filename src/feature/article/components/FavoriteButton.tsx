import IconButton from "@/components/button/IconButton";
import PlusIcon from "@/assets/icons/plus.svg";
import LikeIcon from "@/assets/icons/like-icon.svg";
import { favoriteButtonContainer } from "./FavoriteButton.css";

interface Props {
  isFollow: boolean;
  isLike: boolean;
}

const FavoriteButton = ({ isFollow, isLike }: Props) => {
  return (
    <div className={favoriteButtonContainer}>
      <IconButton src={PlusIcon.src} id="plus" text={isFollow ? "Unfollow" : "Follow"} />
      <IconButton src={LikeIcon.src} id="like-icon" text={isLike ? "Unlike" : "Like"} />
    </div>
  );
};

export default FavoriteButton;
