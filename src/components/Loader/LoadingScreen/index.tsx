import { Box, LinearProgress, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.colors.transparent,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    minHeight: "100%",
    padding: theme.spacing(3),
  },
}));

interface IProps {
  className?: string;
}

export const LoadingScreen = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
};
