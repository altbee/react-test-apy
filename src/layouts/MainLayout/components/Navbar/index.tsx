import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import useCommonStyles from "styles/common";
import { NavbarItem, ThemeSwitcher } from "components";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: 0,
    top:
      Number(theme.custom.header.height) +
      Number(theme.custom.header.elevation),
    bottom: 0,
    width: theme.custom.navBar.width,
    backgroundColor: theme.colors.white,
    borderRight: `1px solid ${theme.colors.gray}`,
  },
}));

interface IProps {
  className?: string;
}

export const Navbar = (props: IProps) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div
      className={clsx(
        classes.root,
        commonClasses.navbarScroll,
        props.className
      )}
    >
      <NavbarItem title="Home" href="/home" />
      <NavbarItem title="LP Royale" Icon={LocalCafeIcon} href="/lp-royale" />
      <NavbarItem title="All Pools" href="/all-pools" />
      <NavbarItem title="About/ FAQs" href="/faqs" />
      <NavbarItem title="Pro" href="/pro" />
      <ThemeSwitcher />
    </div>
  );
};
