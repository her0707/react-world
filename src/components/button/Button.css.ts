import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonContainer = style({
  display: "flex",

  fontWeight: 700,
  color: "#fff",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  alignItems: "center",
  appearance: "none",
  MozAppearance: "none",
  WebkitAppearance: "none",
  border: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  justifyContent: "center",
  margin: "0",
  outline: "none",
  overflow: "visible",

  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  transitionDelay: "0s",
  transitionDuration: ".2s",
  transitionProperty: "border-width,border-color,border-style,background-color,color",
  transitionTimingFunction: "ease-in-out",
  columnGap: 4,
});

export const buttonText = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const buttonPrefixIcon = style({
  width: 14,
  height: 14,
});

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const buttonSpinner = style({
  animationName: spin,
  animationDuration: "500ms",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  width: 14,
  height: 14,
});

export const buttonContent = recipe({
  variants: {
    color: {
      primary: {
        color: "white",
        selectors: {
          [`${buttonContainer}:disabled &`]: {
            color: "rgba(31,32,36,.4)",
          },
        },
      },
      secondary: {
        color: "#1F2024",
        selectors: {
          [`${buttonContainer}:disabled &`]: {
            color: "rgba(31,32,36,0.4)",
          },
        },
      },
      negative: {
        color: "white",
        selectors: {
          [`${buttonContainer}:disabled &`]: {
            color: "rgba(31,32,36,0.4)",
          },
        },
      },
      none: {
        color: "#0bb25f",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const buttonIcon = recipe({
  variants: {
    size: {
      lg: {
        width: 24,
        height: 24,
      },
      base: {
        width: 20,
        height: 20,
      },
      sm: {
        width: 16,
        height: 16,
      },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export const button = recipe({
  variants: {
    color: {
      primary: {
        background: "#0bb25f",
        selectors: {
          ["&:hover:not([disabled])"]: {
            backgroundColor: "rgba(10,162,87,1)",
          },
        },

        ":disabled": {
          backgroundColor: "rgba(240,242,245,.6)",
          borderColor: "rgba(31,32,36,.4)",

          cursor: "not-allowed",
        },
      },
      secondary: {
        background: "rgba(240,242,245,.6)",
        selectors: {
          ["&:hover:not([disabled])"]: {
            backgroundColor: "rgba(233,235,238,1)",
          },
        },

        ":disabled": {
          cursor: "not-allowed",
          backgroundColor: "rgba(240,242,245,0.6)",
          borderColor: "rgba(31,32,36,0.4)",
        },
      },
      none: {
        background: "none",
      },
      negative: {
        background: "#CF1124",
        selectors: {
          ["&:hover:not([disabled])"]: {
            backgroundColor: "rgba(169,14,30,1)",
          },
        },

        ":disabled": {
          cursor: "not-allowed",
          backgroundColor: "rgba(240,242,245,0.6)",
          borderColor: "rgba(31,32,36,0.4)",
        },
      },
    },
    size: {
      lg: {
        minWidth: 120,
        minHeight: 45,
        padding: "8px",
        letterSpacing: "-.02em",
        lineHeight: 1.5,
        fontSize: "1.2rem",
      },
      base: {
        minWidth: 70,
        minHeight: 35,
        padding: "6px 8px",
        letterSpacing: "-.02em",
        lineHeight: 1.4,
        fontSize: "1rem",
      },
      sm: {
        minHeight: 35,
        padding: "6px",
        letterSpacing: "-.02em",
        lineHeight: 1.3,
        fontSize: "0.8rem",
      },
    },
    rounded: {
      lg: {
        borderRadius: "12px",
      },
      base: {
        borderRadius: 8,
      },
      sm: {
        borderRadius: 6,
      },
    },
    width: {
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "lg",
    rounded: "base",
  },
});
