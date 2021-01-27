import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import {
  HeaderLogo,
  HeaderNote,
  HeaderSubscribeSection,
} from "components/Header";
import { LoginButton } from "components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height:
      Number(theme.custom.header.height) +
      Number(theme.custom.header.elevation),
    backgroundColor: theme.colors.white,
    borderBottom: `${theme.custom.header.elevation}px solid ${theme.colors.gray1}`,
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  right: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

interface IProps {
  className?: string;
}

export const Header = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.left}>
        <HeaderLogo />
        <HeaderSubscribeSection />
      </div>
      <div className={classes.right}>
        <HeaderNote />
        <LoginButton />
      </div>
    </div>
  );
};
