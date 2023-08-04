/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload, Home } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TelegramIcon from '@mui/icons-material/Telegram';
// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Utopos Home"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Home}
          dropdownList={[
            <Link href="https://www.utopos.io">
              <a className={classes.dropdownLink}>Homepage</a>
            </Link>,
            <a
              href="https://utopos.io/assets/utopos_whitepaper.pdf"
              target="_blank"
              className={classes.dropdownLink}
            >
              Whitepaper
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://utoswap.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         <CurrencyExchangeIcon /> Get $UTOP
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="utoposcity@protonmail.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
        <EmailIcon />Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.twitter.com/utoposcity"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
           
            <i className={classes.socialIcons + " fab fa-twitter"} />Twitter/X
          </Button>  
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/utoposblockchain/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          Facebook</Button> 
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Join our Telegram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://t.me/utoposofficialgroup"
            target="_blank"
            className={classes.navLink}
          >
          <TelegramIcon />
          Telegram</Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}