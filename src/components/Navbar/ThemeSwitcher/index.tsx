import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";
import { EMembership, ETheme } from "utils/enums";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.custom.navBar.width,
    height: theme.custom.navBar.width,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: theme.colors.white,
    transition: "all 0.3s",
    textDecoration: "none",
  },
  membership: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    width: 50,
    padding: "2px 4px",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 13,
    marginBottom: 10,
    transition: "all 0.3s",
    "&.pro": {
      alignSelf: "flex-end",
    },
    "&.free": {
      alignSelf: "flex-start",
    },
  },
  switcher: {
    height: 25,
    backgroundColor: theme.colors.primary,
    width: 48,
    borderRadius: 12,
    padding: 2,
    userSelect: "none",

    cursor: "pointer",
  },
  switcherCircle: {
    backgroundColor: theme.colors.white,
    width: 21,
    height: 21,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s",
    position: "relative",
    "& svg": {
      fontSize: 16,
    },
    "&.light": {
      left: 0,
      "& svg": {
        color: theme.colors.yellow,
      },
    },
    "&.dark": {
      left: 22,
      "& svg": {
        color: theme.colors.gray2,
      },
    },
  },
}));

interface IProps {
  className?: string;
}

interface IState {
  theme: ETheme;
  membership: EMembership;
}

export const ThemeSwitcher = (props: IProps) => {
  const classes = useStyles();
  const [state, setState] = useState<IState>({
    theme: ETheme.Light,
    membership: EMembership.Free,
  });

  const setTheme = (theme: ETheme) => {
    setState((prev) => ({ ...prev, theme }));
  };

  const setMembership = (membership: EMembership) => {
    setState((prev) => ({ ...prev, membership }));
  };

  const toggleTheme = () => {
    if (state.theme === ETheme.Light) {
      setTheme(ETheme.Dark);
    } else {
      setTheme(ETheme.Light);
    }
  };

  return (
    <div className={clsx(classes.root, props.className)}>
      <div
        className={clsx(
          classes.membership,
          state.membership === EMembership.Free ? "free" : "pro"
        )}
      >
        {state.membership}
      </div>
      <div className={classes.switcher} onClick={toggleTheme}>
        <div
          className={clsx(
            classes.switcherCircle,
            state.theme === ETheme.Light ? "light" : "dark"
          )}
        >
          {state.theme === ETheme.Light ? <WbSunnyIcon /> : <Brightness2Icon />}
        </div>
      </div>
    </div>
  );
};
