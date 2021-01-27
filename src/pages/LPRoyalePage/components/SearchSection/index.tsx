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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "32px 0",
    backgroundImage: "url(/imgs/bg1.png)",
    padding: "24px 0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
  },
  content: {
    margin: "auto",
    width: "70%",
  },
  title: {
    color: theme.colors.white,
    fontWeight: 500,
    fontSize: 20,
  },
  description: { color: theme.colors.white, fontWeight: 200, fontSize: 14 },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "12px 0",
    "& > * + *": {
      marginLeft: 16,
    },
  },
  username: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    padding: "10px 8px",
    fontSize: 14,
    fontWeight: 200,
  },
  select: {
    width: 300,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
    fontWeight: 200,
  },
  button: {
    textTransform: "none",
    borderWidth: 2,
    height: 48,
    color: theme.colors.white,
  },
}));

interface IProps {
  className?: string;
}

export const SearchSection = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.content}>
        <Typography className={classes.title}>
          To get started, pick a username and a guild
        </Typography>
        <div className={classes.searchWrapper}>
          <Input
            className={classes.username}
            disableUnderline
            placeholder="Your cool username"
          />
          <TextField
            className={classes.select}
            select
            InputProps={{ disableUnderline: true }}
            placeholder="Pick a guild"
          >
            <MenuItem value="0">Pick a guild</MenuItem>
            <MenuItem value="1">Pick a guild1</MenuItem>
          </TextField>
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
          >
            Get Started
          </Button>
        </div>

        <Typography className={classes.description}>
          Already signed-up?{" "}
          <u>
            <span>Connect your wallet to login</span>
          </u>
        </Typography>
      </div>
    </div>
  );
};
