import React from "react";
//import { Button } from "react-bootstrap";
import CarouselAA from "./CarouselAA.jsx";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/utop/blogstyle.js";

const useStyles = makeStyles(styles);

export default function AAgrantPost() {
    const classes = useStyles();
  return (
        <div className={classes.top}>
            <div className={classes.header}>
                <h1>UTOPian Minority Entrepreneur Fund</h1>
                
            </div>
            <div className={classes.date}>
                <h4>08/25/2023</h4>
            </div>
            <CarouselAA />
            <p className={classes.content}>
                History has shown us countless examples of individuals who are capable of greatness that just needed a little help to start. 
                Unfortunately in this world we live in, toxic social practices proliferated and locked out many such people out of prosperity for reasons beyond their control, as frivolous as the color of their skin.
                <a href="https://www.brookings.edu/articles/who-is-driving-black-business-growth-insights-from-the-latest-data-on-black-owned-businesses/">
                    For example in 2020, Black people in the USA represented 14.2% of all Americans but only 2.4% of all employer-firm owners.
                </a>
                Utopos understands the the depth of the issues minorities in the USA face and aims to do their part in undoing this imbalance with the UTOPian Minority Entrepreneur fund. 
                This effort targets entrepreneurs and creators in fields that will be essential roles within Utopos' vision of it's smart cities in the future. Farmers, engineers, architechts, tech workers and entrepreneurs are all welcome to apply. 
                Utopos pledges X UTOP tokens to supercharge and empower talented individuals from African American communities who often lack the financial support to bring their dream projects to life. 
                By upholding its value of equal access to opportunity, the Minority Entrepreneur Fund strives to provide support for members of the black community, where their local and state governments may have fallen short. 
                Through the examples we set, it is our hope that all UTOPians will consider equality and fairness in our communities going forward.
            </p>
        </div>
    );
}