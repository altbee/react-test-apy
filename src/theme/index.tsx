import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import _ from "lodash";
import custom from "./custom";

import customColor from "./colors";
import { strongShadows } from "./shadows";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

const themeOptions = {
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
    MuiButton: {
      root: {
        padding: "14px 20px",
        borderRadius: "6px",
      },
    },
  },
  palette: {
    type: "dark",
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
    },
    background: {
      default: "#030616",
      dark: "#1c2025",
      paper: "#282C34",
    },
    primary: {
      main: "#8348D4",
    },
    secondary: {
      main: "#36ACD5",
    },
    text: {
      primary: "#8348D4",
      secondary: "#36ACD5",
    },
  },
  shadows: strongShadows,
};

export const createTheme = () => {
  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { custom },
      { colors: customColor }
    ) as any
  );

  theme = responsiveFontSizes(theme);

  return theme;
};
