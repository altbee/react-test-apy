import { Theme } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom: {
      header: {
        height: React.CSSProperties["height"];
        elevation: React.CSSProperties["height"];
      };
      navBar: {
        width: React.CSSProperties["width"];
      };
    };
    colors: {
      transparent: string;
      white: string;
      black: string;
      primary: string;
      secondary: string;
      third: string;
      gray: string;
      gray1: string;
      gray2: string;
      yellow: string;
      blue: string;
    };
  }
}
