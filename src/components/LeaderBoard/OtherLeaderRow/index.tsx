import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ILeaderItem } from "types";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: { backgroundColor: theme.colors.white },
  cardContent: { display: "flex", alignItems: "center" },
  avatar: {
    backgroundImage: "url(/imgs/bg1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.white,
    fontSize: 16,
    width: 36,
    borderRadius: 4,
    height: 36,
  },
  middle: {
    flex: 1,
    height: "100%",
    marginLeft: 16,
  },
  username: {
    color: theme.colors.black,
    fontSize: 14,
  },
  percent: { color: theme.colors.primary, fontSize: 14, marginTop: 20 },
  guildName: { color: theme.colors.gray, fontSize: 12 },
}));

interface IProps {
  className?: string;
}

export const OtherLeaderRow = (props: IProps & ILeaderItem) => {
  const classes = useStyles();
  const { ranking, username, percent, guildName } = props;

  return (
    <div className={clsx(classes.root, props.className)}>
      <Card className={classes.card} elevation={1} square>
        <CardContent className={classes.cardContent}>
          <div className={classes.avatar}>{ranking}</div>
          <div className={classes.middle}>
            <Typography className={classes.username} component="div">
              {username}
            </Typography>
            <Typography className={classes.guildName} component="div">
              {guildName}
            </Typography>
          </div>
          <Typography className={classes.percent}>{percent}%</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
