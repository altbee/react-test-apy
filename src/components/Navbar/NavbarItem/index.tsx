import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { matchPath, NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.custom.navBar.width,
    height: theme.custom.navBar.width,
    borderBottom: `1px solid ${theme.colors.gray}`,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: theme.colors.white,
    transition: "all 0.3s",
    textDecoration: "none",
    "&.active": {
      backgroundColor: theme.colors.primary,
      borderBottom: `none`,
    },
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    color: theme.colors.black,
    transition: "all 0.3s",
    "&.active": {
      color: theme.colors.white,
    },
  },
  label: {
    color: theme.colors.black,
    lineHeight: 1.125,
    fontSize: 14,
    transition: "all 0.3s",
    fontWeight: 200,
    "&.active": {
      color: theme.colors.white,
    },
  },
}));

interface IProps {
  className?: string;
  title: string;
  href: string;
  Icon?: React.ElementType;
}

export const NavbarItem = (props: IProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { title, href, Icon } = props;

  const isActive = () =>
    !!matchPath(history.location.pathname, {
      path: href,
      exact: true,
    });

  return (
    <NavLink
      to={href}
      className={clsx(classes.root, props.className)}
      isActive={isActive}
    >
      {Icon ? (
        <Icon className={clsx(classes.icon, isActive() ? "active" : "")} />
      ) : (
        <div className={classes.icon} />
      )}
      <Typography
        align="center"
        className={clsx(classes.label, isActive() ? "active" : "")}
        component="div"
      >
        {title}
      </Typography>
    </NavLink>
  );
};
