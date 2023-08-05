"use strict";
(() => {
var exports = {};
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 8593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LandingPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9152);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6356);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(4286);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 4 modules
var HeaderLinks = __webpack_require__(5500);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(8602);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/landingPage.js

const landingPageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...nextjs_material_kit/* container */.nC
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    }
};
/* harmony default export */ const landingPage = (landingPageStyle);

;// CONCATENATED MODULE: external "@material-ui/icons/Chat"
const Chat_namespaceObject = require("@material-ui/icons/Chat");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/VerifiedUser"
const VerifiedUser_namespaceObject = require("@material-ui/icons/VerifiedUser");
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Fingerprint"
const Fingerprint_namespaceObject = require("@material-ui/icons/Fingerprint");
var Fingerprint_default = /*#__PURE__*/__webpack_require__.n(Fingerprint_namespaceObject);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/infoStyle.js

const infoStyle = {
    infoArea: {
        maxWidth: "360px",
        margin: "0 auto",
        padding: "0px"
    },
    iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px"
    },
    primary: {
        color: nextjs_material_kit/* primaryColor */.lr
    },
    warning: {
        color: nextjs_material_kit/* warningColor */.MA
    },
    danger: {
        color: nextjs_material_kit/* dangerColor */.E7
    },
    success: {
        color: nextjs_material_kit/* successColor */.nq
    },
    info: {
        color: nextjs_material_kit/* infoColor */.bE
    },
    rose: {
        color: nextjs_material_kit/* roseColor */.An
    },
    gray: {
        color: nextjs_material_kit/* grayColor */.X_
    },
    icon: {
        width: "36px",
        height: "36px"
    },
    descriptionWrapper: {
        color: nextjs_material_kit/* grayColor */.X_,
        overflow: "hidden"
    },
    title: nextjs_material_kit/* title */.TN,
    description: {
        color: nextjs_material_kit/* grayColor */.X_,
        overflow: "hidden",
        marginTop: "0px",
        fontSize: "14px"
    },
    iconWrapperVertical: {
        float: "none"
    },
    iconVertical: {
        width: "61px",
        height: "61px"
    }
};
/* harmony default export */ const components_infoStyle = (infoStyle);

;// CONCATENATED MODULE: ./components/InfoArea/InfoArea.js


// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components


const useStyles = (0,styles_.makeStyles)(components_infoStyle);
function InfoArea(props) {
    const classes = useStyles();
    const { title , description , iconColor , vertical  } = props;
    const iconWrapper = external_classnames_default()({
        [classes.iconWrapper]: true,
        [classes[iconColor]]: true,
        [classes.iconWrapperVertical]: vertical
    });
    const iconClasses = external_classnames_default()({
        [classes.icon]: true,
        [classes.iconVertical]: vertical
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.infoArea,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: iconWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                    className: iconClasses
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.descriptionWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: classes.description,
                        children: description
                    })
                ]
            })
        ]
    });
};
InfoArea.defaultProps = {
    iconColor: "gray"
};
InfoArea.propTypes = {
    icon: (external_prop_types_default()).object.isRequired,
    title: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).node
    ]).isRequired,
    description: (external_prop_types_default()).string.isRequired,
    iconColor: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    vertical: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js

const productStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: "#999"
    }
};
/* harmony default export */ const landingPageSections_productStyle = (productStyle);

;// CONCATENATED MODULE: ./pages-sections/LandingPage-Sections/ProductSection.js


// @material-ui/core components

// @material-ui/icons



// core components




const ProductSection_useStyles = (0,styles_.makeStyles)(landingPageSections_productStyle);
function ProductSection() {
    const classes = ProductSection_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                justify: "center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 8,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: classes.title,
                            children: [
                                "Let",
                                "'",
                                "s talk product"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                            className: classes.description,
                            children: [
                                "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn",
                                "'",
                                "t scroll to get here. Add a button if you want the user to see more."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea, {
                                title: "Free Chat",
                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                icon: (Chat_default()),
                                iconColor: "info",
                                vertical: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea, {
                                title: "Verified Users",
                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                icon: (VerifiedUser_default()),
                                iconColor: "success",
                                vertical: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea, {
                                title: "Fingerprint",
                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                icon: (Fingerprint_default()),
                                iconColor: "danger",
                                vertical: true
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(2406);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(7585);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8696);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit/imagesStyles.js
var imagesStyles = __webpack_require__(266);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js


const teamStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    ...imagesStyles/* default */.Z,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle: nextjs_material_kit/* cardTitle */.X5,
    smallTitle: {
        color: "#6c757d"
    },
    description: {
        color: "#999"
    },
    justifyCenter: {
        justifyContent: "center !important"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    margin5: {
        margin: "5px"
    }
};
/* harmony default export */ const landingPageSections_teamStyle = (teamStyle);

;// CONCATENATED MODULE: ./pages-sections/LandingPage-Sections/TeamSection.js


// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui/icons
// core components







const TeamSection_useStyles = (0,styles_.makeStyles)(landingPageSections_teamStyle);
function TeamSection() {
    const classes = TeamSection_useStyles();
    const imageClasses = external_classnames_default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: classes.title,
                children: "Here is our team"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                plain: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        className: classes.itemGrid,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: imageClasses
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        className: classes.cardTitle,
                                        children: [
                                            "Gigi Hadid",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: classes.smallTitle,
                                                children: "Model"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    children: "links"
                                                }),
                                                " for people to be able to follow them outside the site."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        className: classes.justifyCenter,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-facebook"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                plain: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        className: classes.itemGrid,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/christian.jpg",
                                            alt: "...",
                                            className: imageClasses
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        className: classes.cardTitle,
                                        children: [
                                            "Christian Louboutin",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: classes.smallTitle,
                                                children: "Designer"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    children: "links"
                                                }),
                                                " for people to be able to follow them outside the site."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        className: classes.justifyCenter,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-linkedin"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                plain: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        className: classes.itemGrid,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/kendall.jpg",
                                            alt: "...",
                                            className: imageClasses
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        className: classes.cardTitle,
                                        children: [
                                            "Kendall Jenner",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: classes.smallTitle,
                                                children: "Model"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    children: "links"
                                                }),
                                                " for people to be able to follow them outside the site."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        className: classes.justifyCenter,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                color: "transparent",
                                                className: classes.margin5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socials + " fab fa-facebook"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(6140);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js

const workStyle = {
    section: {
        padding: "70px 0"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginBottom: "50px",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: "center"
    },
    description: {
        color: "#999",
        textAlign: "center"
    },
    textCenter: {
        textAlign: "center"
    },
    textArea: {
        marginRight: "15px",
        marginLeft: "15px"
    }
};
/* harmony default export */ const landingPageSections_workStyle = (workStyle);

;// CONCATENATED MODULE: ./pages-sections/LandingPage-Sections/WorkSection.js


// @material-ui/core components

// @material-ui/icons
// core components





const WorkSection_useStyles = (0,styles_.makeStyles)(landingPageSections_workStyle);
function WorkSection() {
    const classes = WorkSection_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
            justify: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                cs: 12,
                sm: 12,
                md: 8,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: classes.title,
                        children: "Work with us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.description,
                        children: "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "Your Name",
                                        id: "name",
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "Your Email",
                                        id: "email",
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                    labelText: "Your Message",
                                    id: "message",
                                    formControlProps: {
                                        fullWidth: true,
                                        className: classes.textArea
                                    },
                                    inputProps: {
                                        multiline: true,
                                        rows: 5
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 4,
                                    className: classes.textCenter,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Send Message"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/landing.js


// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui/icons
// core components








// Sections for this page



const dashboardRoutes = [];
const landing_useStyles = (0,styles_.makeStyles)(landingPage);
function LandingPage(props) {
    const classes = landing_useStyles();
    const { ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                color: "transparent",
                routes: dashboardRoutes,
                brand: "NextJS Material Kit",
                rightLinks: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {}),
                fixed: true,
                changeColorOnScroll: {
                    height: 400,
                    color: "white"
                },
                ...rest
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                filter: true,
                responsive: true,
                image: "/img/landing-bg.jpg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: classes.title,
                                    children: "Your Story Starts With Us."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    children: [
                                        "Every landing page needs a small description after the big bold title, that",
                                        "'",
                                        "s why we added this text here. Add here all the information that can make you or your product create the first impression."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                    color: "danger",
                                    size: "lg",
                                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-play"
                                        }),
                                        "Watch video"
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ProductSection, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(TeamSection, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(WorkSection, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};


/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 8736:
/***/ ((module) => {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 2610:
/***/ ((module) => {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ 2217:
/***/ ((module) => {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ 5555:
/***/ ((module) => {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ 5811:
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ 3266:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 6491:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ 6403:
/***/ ((module) => {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ 7886:
/***/ ((module) => {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ 3974:
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 3302:
/***/ ((module) => {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ 8190:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 6256:
/***/ ((module) => {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ 73:
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ 2767:
/***/ ((module) => {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ 5722:
/***/ ((module) => {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ 9641:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3386:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ 2105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 5652:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ 9899:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ 4176:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 2602:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CurrencyExchange");

/***/ }),

/***/ 9226:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Email");

/***/ }),

/***/ 6269:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Telegram");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,270,61,547,624,834,602,285,266], () => (__webpack_exec__(8593)));
module.exports = __webpack_exports__;

})();