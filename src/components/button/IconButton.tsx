import SvgIcon from "../SvgIcon";
import { button, buttonContainer, iconText } from "./IconButton.css";

interface Props {
  active?: boolean;
  src: string;
  id: string;
  color?: "base";
  size?: "base";
  text: string;
}

const IconButton = ({ active, src, id, color = "base", size = "base", text }: Props) => {
  return (
    <button className={`${buttonContainer} ${active ? "active" : ""}`}>
      <SvgIcon
        src={src}
        id={id}
        className={`${button({
          color,
          size,
        })}`}
      />
      <span className={iconText}>{text}</span>
    </button>
  );
};

export default IconButton;
