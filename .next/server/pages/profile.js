"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 7311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProfilePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: external "@material-ui/icons/Camera"
const Camera_namespaceObject = require("@material-ui/icons/Camera");
var Camera_default = /*#__PURE__*/__webpack_require__.n(Camera_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Palette"
const Palette_namespaceObject = require("@material-ui/icons/Palette");
var Palette_default = /*#__PURE__*/__webpack_require__.n(Palette_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9152);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6356);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(4286);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 4 modules
var HeaderLinks = __webpack_require__(5500);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "@material-ui/core/Tabs"
const Tabs_namespaceObject = require("@material-ui/core/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Tab"
const Tab_namespaceObject = require("@material-ui/core/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/navPillsStyle.js

const navPillsStyle = (theme)=>({
        root: {
            marginTop: "20px",
            paddingLeft: "0",
            marginBottom: "0",
            overflow: "visible !important",
            lineHeight: "24px",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "500",
            position: "relative",
            display: "block",
            color: "inherit"
        },
        flexContainer: {
            [theme.breakpoints.down("xs")]: {
                display: "flex",
                flexWrap: "wrap"
            }
        },
        displayNone: {
            display: "none !important"
        },
        fixed: {
            overflow: "visible !important"
        },
        horizontalDisplay: {
            display: "block"
        },
        pills: {
            float: "left",
            position: "relative",
            display: "block",
            borderRadius: "30px",
            minWidth: "100px",
            textAlign: "center",
            transition: "all .3s",
            padding: "10px 15px",
            color: "#555555",
            height: "auto",
            opacity: "1",
            maxWidth: "100%",
            margin: "0 5px"
        },
        pillsWithIcons: {
            borderRadius: "4px"
        },
        tabIcon: {
            width: "30px",
            height: "30px",
            display: "block",
            margin: "15px 0 !important",
            "&, & *": {
                letterSpacing: "normal !important"
            }
        },
        horizontalPills: {
            width: "100%",
            float: "none !important",
            "& + button": {
                margin: "10px 0"
            }
        },
        contentWrapper: {
            marginTop: "20px"
        },
        primary: {
            "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: nextjs_material_kit/* primaryColor */.lr,
                boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.4)}`
            }
        },
        info: {
            "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: nextjs_material_kit/* infoColor */.bE,
                boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.4)}`
            }
        },
        success: {
            "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: nextjs_material_kit/* successColor */.nq,
                boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.12)}`
            }
        },
        warning: {
            "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: nextjs_material_kit/* warningColor */.MA,
                boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.4)}`
            }
        },
        danger: {
            "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: nextjs_material_kit/* dangerColor */.E7,
                boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.4)}`
            }
        },
        rose: {
            "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: nextjs_material_kit/* roseColor */.An,
                boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.4)}`
            }
        },
        alignCenter: {
            alignItems: "center",
            justifyContent: "center"
        },
        tabWrapper: {
            color: "inherit",
            position: "relative",
            fontSize: "12px",
            lineHeight: "24px",
            fontWeight: "500",
            textTransform: "uppercase",
            "&,& *": {
                letterSpacing: "normal"
            }
        }
    });
/* harmony default export */ const components_navPillsStyle = (navPillsStyle);

;// CONCATENATED MODULE: ./components/NavPills/NavPills.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components



// core components



const useStyles = (0,styles_.makeStyles)(components_navPillsStyle);
function NavPills(props) {
    const [active, setActive] = external_react_default().useState(props.active);
    const handleChange = (event, active)=>{
        setActive(active);
    };
    const handleChangeIndex = (index)=>{
        setActive(index);
    };
    const classes = useStyles();
    const { tabs , color , horizontal , alignCenter  } = props;
    const flexContainerClasses = external_classnames_default()({
        [classes.flexContainer]: true,
        [classes.horizontalDisplay]: horizontal !== undefined
    });
    const tabButtons = /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
        classes: {
            root: classes.root,
            fixed: classes.fixed,
            flexContainer: flexContainerClasses,
            indicator: classes.displayNone
        },
        value: active,
        onChange: handleChange,
        centered: alignCenter,
        children: tabs.map((prop, key)=>{
            var icon = {};
            if (prop.tabIcon !== undefined) {
                icon["icon"] = /*#__PURE__*/ jsx_runtime_.jsx(prop.tabIcon, {
                    className: classes.tabIcon
                });
            }
            const pillsClasses = external_classnames_default()({
                [classes.pills]: true,
                [classes.horizontalPills]: horizontal !== undefined,
                [classes.pillsWithIcons]: prop.tabIcon !== undefined
            });
            return /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                label: prop.tabButton,
                ...icon,
                classes: {
                    root: pillsClasses,
                    selected: classes[color],
                    wrapper: classes.tabWrapper
                }
            }, key);
        })
    });
    const tabContent = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.contentWrapper,
        children: tabs.map((prop, key)=>{
            if (key !== active) {
                return null;
            } else {
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.tabContent,
                    children: prop.tabContent
                }, key);
            }
        })
    });
    return horizontal !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                ...horizontal.tabsGrid,
                children: tabButtons
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                ...horizontal.contentGrid,
                children: tabContent
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            tabButtons,
            tabContent
        ]
    });
};
NavPills.defaultProps = {
    active: 0,
    color: "primary"
};
NavPills.propTypes = {
    // index of the default active pill
    active: (external_prop_types_default()).number,
    tabs: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        tabButton: (external_prop_types_default()).string,
        tabIcon: (external_prop_types_default()).object,
        tabContent: (external_prop_types_default()).node
    })).isRequired,
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ]),
    horizontal: external_prop_types_default().shape({
        tabsGrid: (external_prop_types_default()).object,
        contentGrid: (external_prop_types_default()).object
    }),
    alignCenter: (external_prop_types_default()).bool
};

// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(8602);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit/imagesStyles.js
var imagesStyles = __webpack_require__(266);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/profilePage.js


const profilePageStyle = {
    container: nextjs_material_kit/* container */.nC,
    profile: {
        textAlign: "center",
        "& img": {
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)"
        }
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    },
    name: {
        marginTop: "-80px"
    },
    ...imagesStyles/* default */.Z,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
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
    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    }
};
/* harmony default export */ const profilePage = (profilePageStyle);

;// CONCATENATED MODULE: ./pages/profile.js


// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui/icons



// core components









const profile_useStyles = (0,styles_.makeStyles)(profilePage);
function ProfilePage(props) {
    const classes = profile_useStyles();
    const { ...rest } = props;
    const imageClasses = external_classnames_default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
    const navImageClasses = external_classnames_default()(classes.imgRounded, classes.imgGallery);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                color: "transparent",
                brand: "NextJS Material Kit",
                rightLinks: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {}),
                fixed: true,
                changeColorOnScroll: {
                    height: 200,
                    color: "white"
                },
                ...rest
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                small: true,
                filter: true,
                image: "/img/profile-bg.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.profile,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/christian.jpg",
                                                    alt: "...",
                                                    className: imageClasses
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classes.name,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.title,
                                                        children: "Christian Louboutin"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        children: "DESIGNER"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        link: true,
                                                        className: classes.margin5,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        link: true,
                                                        className: classes.margin5,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-instagram"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        link: true,
                                                        className: classes.margin5,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.description,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.",
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 8,
                                    className: classes.navWrapper,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavPills, {
                                        alignCenter: true,
                                        color: "primary",
                                        tabs: [
                                            {
                                                tabButton: "Studio",
                                                tabIcon: (Camera_default()),
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                    justify: "center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                            xs: 12,
                                                            sm: 12,
                                                            md: 4,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/studio-1.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/studio-2.jpg",
                                                                    className: navImageClasses
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                            xs: 12,
                                                            sm: 12,
                                                            md: 4,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/studio-5.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/studio-4.jpg",
                                                                    className: navImageClasses
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Work",
                                                tabIcon: (Palette_default()),
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                    justify: "center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                            xs: 12,
                                                            sm: 12,
                                                            md: 4,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/olu-eletu.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/clem-onojeghuo.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/cynthia-del-rio.jpg",
                                                                    className: navImageClasses
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                            xs: 12,
                                                            sm: 12,
                                                            md: 4,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/mariya-georgieva.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/clem-onojegaw.jpg",
                                                                    className: navImageClasses
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Favorite",
                                                tabIcon: (Favorite_default()),
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                    justify: "center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                            xs: 12,
                                                            sm: 12,
                                                            md: 4,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/mariya-georgieva.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/studio-3.jpg",
                                                                    className: navImageClasses
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                            xs: 12,
                                                            sm: 12,
                                                            md: 4,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/clem-onojeghuo.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/olu-eletu.jpg",
                                                                    className: navImageClasses
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "...",
                                                                    src: "/img/examples/studio-1.jpg",
                                                                    className: navImageClasses
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }
                                        ]
                                    })
                                })
                            })
                        ]
                    })
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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,61,547,624,602,266], () => (__webpack_exec__(7311)));
module.exports = __webpack_exports__;

})();