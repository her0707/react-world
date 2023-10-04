import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const buttonContainer = style({
  display: "flex",
  columnGap: "8px",
  alignItems: "center",
  backgroundColor: "#eee",
  border: "none",
  borderRadius: "16px",
  padding: "8px 12px",
  selectors: {
    "&.active": {
      backgroundColor: "red",
    },
    "&:hover": {
      border: "1px solid #919191",
      backgroundColor: "#fff",
    },
  },
});

export const button = recipe({
  variants: {
    color: {
      base: {
        color: vars.color.red,
      },
    },
    size: {
      base: {
        width: 16,
        height: 16,
      },
    },
  },
  defaultVariants: {
    color: "base",
    size: "base",
  },
});

export const iconText = style({
  fontSize: "0.8rem",
});
