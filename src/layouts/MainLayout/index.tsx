import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import useCommonStyles from "styles/common";
import { Navbar, Header } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.colors.third,
  },
  contentWrapper: {
    maxWidth: "1280px",
    margin: "auto",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
    paddingLeft: Number(theme.custom.navBar.width) + 2,
    paddingTop:
      Number(theme.custom.header.height) +
      Number(theme.custom.header.elevation),
  },
  pageWrapper: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    padding: 16,
    backgroundColor: theme.colors.white,
  },
}));

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainLayout = (props: IProps) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <Navbar />
        <Header />
        <main className={classes.content}>
          <div className={clsx(classes.pageWrapper, commonClasses.scroll)}>
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};
