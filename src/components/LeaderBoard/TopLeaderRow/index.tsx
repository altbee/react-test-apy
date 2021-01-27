import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { ILeaderItem } from "types";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const avatarSize = 60;

const useStyles = makeStyles((theme) => ({
  root: {},
  content: { paddingTop: avatarSize / 2, position: "relative" },
  card: {
    backgroundColor: theme.colors.white,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: `calc(50% - ${avatarSize / 2}px)`,
    backgroundImage: "url(/imgs/bg1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.white,
    fontSize: 16,
  },
  username: {
    color: theme.colors.black,
    fontSize: 20,
    marginTop: avatarSize / 2,
  },
  percent: { color: theme.colors.black, fontSize: 20, marginTop: 20 },
  guildName: { color: theme.colors.gray, fontSize: 14 },
}));

interface IProps {
  className?: string;
}

export const TopLeaderRow = (props: IProps & ILeaderItem) => {
  const classes = useStyles();
  const { ranking, username, percent, guildName } = props;

  return (
    <div className={clsx(classes.root, props.className)}>
      <div style={{ height: ranking * 30 }}></div>
      <div className={classes.content}>
        <div className={classes.avatar}>
          {ranking === 1 ? <LocalCafeIcon /> : ranking}
        </div>
        <Card className={classes.card} elevation={2}>
          <CardContent>
            <Typography align="center" className={classes.username}>
              {username}
            </Typography>
            <Typography align="center" className={classes.guildName}>
              {guildName}
            </Typography>
            <Typography align="center" className={classes.percent}>
              {percent}%
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
