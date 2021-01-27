import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginRight: 40,
  },
  note: {
    color: theme.colors.secondary,
    border: `1px solid ${theme.colors.secondary}`,
    borderRadius: 4,
    height: 30,
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 16px",
    "& + &": {
      marginLeft: 20,
    },
  },
}));

interface IProps {
  className?: string;
}

export const HeaderNote = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.note}>ETH $1226.49 USD</div>
      <div className={classes.note}>
        <AccessAlarmIcon />
        &nbsp;70 gwei
      </div>
    </div>
  );
};
