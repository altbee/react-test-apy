import { makeStyles } from "@material-ui/core";
import React from "react";
import { HeroSection, SearchSection, LeaderBoardSection } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const LPRoyalePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroSection />
      <SearchSection />
      <LeaderBoardSection />
    </div>
  );
};

export default LPRoyalePage;
