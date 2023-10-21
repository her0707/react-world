import type { ButtonHTMLAttributes } from "react";

import { buttonContainer, buttonText, buttonSpinner, button, buttonContent } from "@/components/button/Button.css";
import SvgIcon from "@/components/SvgIcon";
import LoadingIcon from "@/assets/icons/loading.svg";

export type Size = "lg" | "base" | "sm";
export type Color = "primary" | "secondary" | "none" | "negative";

interface Props {
  text?: string;
  loading?: boolean;
  size: Size;
  color: Color;
  width: "full" | "half";
  rounded: "lg" | "base" | "sm";
}
const Button = (props: ButtonHTMLAttributes<HTMLButtonElement> & Props) => {
  const { loading, color, size, width, rounded, ...otherProps } = props;
  return (
    <button
      className={`${buttonContainer} ${button({
        color,
        size,
        rounded,
        width,
      })}`}
      {...otherProps}
    >
      <div
        className={`${buttonText} ${buttonContent({
          color,
        })}`}
      >
        {!loading ? props.children : <SvgIcon src={LoadingIcon.src} id="loading-icon" className={buttonSpinner} />}{" "}
      </div>
    </button>
  );
};

export default Button;
