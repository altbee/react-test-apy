import {
  Button,
  Input,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { ILeaderItem } from "types";
import { OtherLeaderRow, TopLeaderRow } from "components";

const mockInfo: ILeaderItem[] = [
  {
    ranking: 1,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 2,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 3,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 4,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 5,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 6,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 7,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 8,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 9,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
  {
    ranking: 10,
    username: "Username",
    percent: "12.57",
    guildName: "Guild name",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "32px 0",

    padding: "24px 0",
  },
  content: {},
  title: {
    color: theme.colors.black,
    fontWeight: 500,
    fontSize: 24,
  },
  topWrapper: { marginTop: 32, display: "flex", alignItems: "center" },
  topItem: { flex: 1, "& + &": { marginLeft: 20 } },
  otherWrapper: { marginTop: 32, width: "60%", margin: "auto", minWidth: 400 },
}));

interface IProps {
  className?: string;
}

export const LeaderBoardSection = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.content}>
        <Typography align="center" className={classes.title}>
          Current leaderboard
        </Typography>
        <div className={classes.topWrapper}>
          <TopLeaderRow className={classes.topItem} {...mockInfo[1]} />
          <TopLeaderRow className={classes.topItem} {...mockInfo[0]} />
          <TopLeaderRow className={classes.topItem} {...mockInfo[2]} />
        </div>
        <div className={classes.otherWrapper}>
          {mockInfo.slice(3).map((row) => (
            <OtherLeaderRow key={row.ranking} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
};
