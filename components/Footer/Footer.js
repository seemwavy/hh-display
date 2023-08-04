/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "/styles/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img 
          src="/img/utop/Logo.png"
          alt="Utopos Logo"
          />
          
        </div>
        <div className={classes.right}>
         <p>
          Utopos aims to build the world's first futuristic, eco-friendly blockchain city where everyone can explore the city and perform everyday activities in a virtual space (Metaverse). 
          Members earn rewards from various activities in UTOP, which is its native currency. 
          Utopos blockchain city offers equal opportunities for everyone to own real estate and carry out constructions with ease.
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};