import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 20,
  },
  label: {
    color: theme.colors.blue,
    fontSize: 14,
    marginBottom: 4,
  },
  iconsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: theme.colors.blue,
    "& + &": { marginLeft: 8 },
    cursor: "pointer",
  },
}));

interface IProps {
  className?: string;
}

export const HeaderSubscribeSection = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <Typography className={classes.label} component="div">
        Subscribe To Updates!
      </Typography>
      <div className={classes.iconsWrapper}>
        <TwitterIcon className={classes.icon} />
        <MailOutlineIcon className={classes.icon} />
        <ChatIcon className={classes.icon} />
      </div>
    </div>
  );
};
