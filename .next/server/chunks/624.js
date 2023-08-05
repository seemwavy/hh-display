"use strict";
exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 4286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__(3386);
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/buttonStyle.js

const buttonStyle = {
    button: {
        minHeight: "auto",
        minWidth: "auto",
        backgroundColor: nextjs_material_kit/* grayColor */.X_,
        color: "#FFFFFF",
        boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            backgroundColor: nextjs_material_kit/* grayColor */.X_,
            boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            display: "inline-block",
            top: "0",
            fontSize: "1.1rem",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "& svg": {
            position: "relative",
            display: "inline-block",
            top: "0",
            width: "18px",
            height: "18px",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                marginRight: "0px",
                position: "absolute",
                width: "100%",
                transform: "none",
                left: "0px",
                top: "0px",
                height: "100%",
                lineHeight: "41px",
                fontSize: "20px"
            }
        }
    },
    fullWidth: {
        width: "100%"
    },
    primary: {
        backgroundColor: nextjs_material_kit/* primaryColor */.lr,
        boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.12)}`,
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* primaryColor */.lr,
            boxShadow: `0 14px 26px -12px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.2)}`
        }
    },
    info: {
        backgroundColor: nextjs_material_kit/* infoColor */.bE,
        boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.12)}`,
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* infoColor */.bE,
            boxShadow: `0 14px 26px -12px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.2)}`
        }
    },
    success: {
        backgroundColor: nextjs_material_kit/* successColor */.nq,
        boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.12)}`,
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* successColor */.nq,
            boxShadow: `0 14px 26px -12px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.2)}`
        }
    },
    warning: {
        backgroundColor: nextjs_material_kit/* warningColor */.MA,
        boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.12)}`,
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* warningColor */.MA,
            boxShadow: `0 14px 26px -12px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.2)}`
        }
    },
    danger: {
        backgroundColor: nextjs_material_kit/* dangerColor */.E7,
        boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.12)}`,
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* dangerColor */.E7,
            boxShadow: `0 14px 26px -12px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.2)}`
        }
    },
    rose: {
        backgroundColor: nextjs_material_kit/* roseColor */.An,
        boxShadow: `0 2px 2px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.14)}, 0 3px 1px -2px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.2)}, 0 1px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.12)}`,
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* roseColor */.An,
            boxShadow: `0 14px 26px -12px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.2)}`
        }
    },
    white: {
        "&,&:focus,&:hover,&:visited": {
            backgroundColor: "#FFFFFF",
            color: nextjs_material_kit/* grayColor */.X_
        }
    },
    twitter: {
        backgroundColor: "#55acee",
        color: "#fff",
        boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
        "&:hover,&:focus,&:visited": {
            backgroundColor: "#55acee",
            color: "#fff",
            boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
        }
    },
    facebook: {
        backgroundColor: "#3b5998",
        color: "#fff",
        boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#3b5998",
            color: "#fff",
            boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
        }
    },
    google: {
        backgroundColor: "#dd4b39",
        color: "#fff",
        boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#dd4b39",
            color: "#fff",
            boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
        }
    },
    github: {
        backgroundColor: "#333333",
        color: "#fff",
        boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#333333",
            color: "#fff",
            boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
        }
    },
    simple: {
        "&,&:focus,&:hover,&:visited": {
            color: "#FFFFFF",
            background: "transparent",
            boxShadow: "none"
        },
        "&$primary": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit/* primaryColor */.lr
            }
        },
        "&$info": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit/* infoColor */.bE
            }
        },
        "&$success": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit/* successColor */.nq
            }
        },
        "&$warning": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit/* warningColor */.MA
            }
        },
        "&$rose": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit/* roseColor */.An
            }
        },
        "&$danger": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit/* dangerColor */.E7
            }
        },
        "&$twitter": {
            "&,&:focus,&:hover,&:visited": {
                color: "#55acee"
            }
        },
        "&$facebook": {
            "&,&:focus,&:hover,&:visited": {
                color: "#3b5998"
            }
        },
        "&$google": {
            "&,&:focus,&:hover,&:visited": {
                color: "#dd4b39"
            }
        },
        "&$github": {
            "&,&:focus,&:hover,&:visited": {
                color: "#333333"
            }
        }
    },
    transparent: {
        "&,&:focus,&:hover,&:visited": {
            color: "inherit",
            background: "transparent",
            boxShadow: "none"
        }
    },
    disabled: {
        opacity: "0.65",
        pointerEvents: "none"
    },
    lg: {
        padding: "1.125rem 2.25rem",
        fontSize: "0.875rem",
        lineHeight: "1.333333",
        borderRadius: "0.2rem"
    },
    sm: {
        padding: "0.40625rem 1.25rem",
        fontSize: "0.6875rem",
        lineHeight: "1.5",
        borderRadius: "0.2rem"
    },
    round: {
        borderRadius: "30px"
    },
    block: {
        width: "100% !important"
    },
    link: {
        "&,&:hover,&:focus": {
            backgroundColor: "transparent",
            color: "#999999",
            boxShadow: "none"
        }
    },
    justIcon: {
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "20px",
        height: "41px",
        minWidth: "41px",
        width: "41px",
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
            marginRight: "0px"
        },
        "&$lg": {
            height: "57px",
            minWidth: "57px",
            width: "57px",
            lineHeight: "56px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "32px",
                lineHeight: "56px"
            },
            "& svg": {
                width: "32px",
                height: "32px"
            }
        },
        "&$sm": {
            height: "30px",
            minWidth: "30px",
            width: "30px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "17px",
                lineHeight: "29px"
            },
            "& svg": {
                width: "17px",
                height: "17px"
            }
        }
    }
};
/* harmony default export */ const components_buttonStyle = (buttonStyle);

;// CONCATENATED MODULE: ./components/CustomButtons/Button.js


// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components


// core components

const makeComponentStyles = makeStyles_default()(()=>({
        ...components_buttonStyle
    }));
const RegularButton = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { color , round , children , fullWidth , disabled , simple , size , block , link , justIcon , className , ...rest } = props;
    const classes = makeComponentStyles();
    const btnClasses = external_classnames_default()({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        ...rest,
        ref: ref,
        classes: {
            root: btnClasses
        },
        children: children
    });
});
RegularButton.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ]),
    size: external_prop_types_default().oneOf([
        "sm",
        "lg"
    ]),
    simple: (external_prop_types_default()).bool,
    round: (external_prop_types_default()).bool,
    fullWidth: (external_prop_types_default()).bool,
    disabled: (external_prop_types_default()).bool,
    block: (external_prop_types_default()).bool,
    link: (external_prop_types_default()).bool,
    justIcon: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node,
    className: (external_prop_types_default()).string
};
/* harmony default export */ const Button = (RegularButton);


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/footerStyle.js

const footerStyle = {
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right!important"
    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative"
    },
    a: {
        color: nextjs_material_kit/* primaryColor */.lr,
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    footerWhiteFont: {
        "&,&:hover,&:focus": {
            color: "#FFFFFF"
        }
    },
    container: nextjs_material_kit/* container */.nC,
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px"
    }
};
/* harmony default export */ const components_footerStyle = (footerStyle);

;// CONCATENATED MODULE: ./components/Footer/Footer.js
/*eslint-disable*/ 

// nodejs library to set properties for components

// nodejs library that concatenates classes

// material-ui core components


// @material-ui/icons


const useStyles = (0,styles_.makeStyles)(components_footerStyle);
function Footer(props) {
    const classes = useStyles();
    const { whiteFont  } = props;
    const footerClasses = external_classnames_default()({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = external_classnames_default()({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: footerClasses,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.left,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/img/utop/Logo.png",
                        alt: "Utopos Logo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.right,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Utopos aims to build the world's first futuristic, eco-friendly blockchain city where everyone can explore the city and perform everyday activities in a virtual space (Metaverse). Members earn rewards from various activities in UTOP, which is its native currency. Utopos blockchain city offers equal opportunities for everyone to own real estate and carry out constructions with ease."
                    })
                })
            ]
        })
    });
};
Footer.propTypes = {
    whiteFont: (external_prop_types_default()).bool
};


/***/ }),

/***/ 4041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GridContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


// nodejs library to set properties for components

// @material-ui/core components


const styles = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto"
    }
};
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(styles);
function GridContainer(props) {
    const classes = useStyles();
    const { children , className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
        container: true,
        ...rest,
        className: classes.grid + " " + className,
        children: children
    });
};
GridContainer.defaultProps = {
    className: ""
};
GridContainer.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};


/***/ }),

/***/ 6680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


// nodejs library to set properties for components

// @material-ui/core components


const styles = {
    grid: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto"
    }
};
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(styles);
function GridItem(props) {
    const classes = useStyles();
    const { children , className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
        item: true,
        ...rest,
        className: classes.grid + " " + className,
        children: children
    });
};
GridItem.defaultProps = {
    className: ""
};
GridItem.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};


/***/ }),

/***/ 9152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(8736);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(5722);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__(6403);
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);
// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(5555);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(4176);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/headerStyle.js

const headerStyle = {
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: "unset"
    },
    absolute: {
        position: "absolute",
        zIndex: "1100"
    },
    fixed: {
        position: "fixed",
        zIndex: "1100"
    },
    container: {
        ...nextjs_material_kit/* container */.nC,
        minHeight: "50px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap"
    },
    flex: {
        flex: 1
    },
    title: {
        ...nextjs_material_kit/* defaultFont */.Df,
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        padding: "8px 16px",
        letterSpacing: "unset",
        "&:hover,&:focus": {
            color: "inherit",
            background: "transparent"
        }
    },
    appResponsive: {
        margin: "20px 10px"
    },
    primary: {
        backgroundColor: nextjs_material_kit/* primaryColor */.lr,
        color: "#FFFFFF",
        boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.46)}`
    },
    info: {
        backgroundColor: nextjs_material_kit/* infoColor */.bE,
        color: "#FFFFFF",
        boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.46)}`
    },
    success: {
        backgroundColor: nextjs_material_kit/* successColor */.nq,
        color: "#FFFFFF",
        boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.46)}`
    },
    warning: {
        backgroundColor: nextjs_material_kit/* warningColor */.MA,
        color: "#FFFFFF",
        boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.46)}`
    },
    danger: {
        backgroundColor: nextjs_material_kit/* dangerColor */.E7,
        color: "#FFFFFF",
        boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.46)}`
    },
    rose: {
        backgroundColor: nextjs_material_kit/* roseColor */.An,
        color: "#FFFFFF",
        boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.46)}`
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF"
    },
    dark: {
        color: "#FFFFFF",
        backgroundColor: "#212121 !important",
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        backgroundColor: "#fff !important",
        boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
    drawerPaper: {
        border: "none",
        bottom: "0",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        width: nextjs_material_kit/* drawerWidth */.RK,
        ...nextjs_material_kit/* boxShadow */.Wn,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "0",
        left: "auto",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        ...nextjs_material_kit/* transition */.eR
    }
};
/* harmony default export */ const components_headerStyle = (headerStyle);

;// CONCATENATED MODULE: ./components/Header/Header.js




// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components







// @material-ui/icons

// core components

const useStyles = (0,styles_.makeStyles)(components_headerStyle);
function Header(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const headerColorChange = ()=>{
        const { color , changeColorOnScroll  } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    const { color , rightLinks , leftLinks , brand , fixed , absolute  } = props;
    const appBarClasses = external_classnames_default()({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });
    const brandComponent = /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/components",
        as: "/components",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
            className: classes.title,
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/img/utop/Logo.png",
                alt: "Utopos Logo",
                width: 160,
                height: 50,
                className: classes.logo
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        className: appBarClasses,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                className: classes.container,
                children: [
                    leftLinks !== undefined ? brandComponent : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.flex,
                        children: leftLinks !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                            smDown: true,
                            implementation: "css",
                            children: leftLinks
                        }) : brandComponent
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        smDown: true,
                        implementation: "css",
                        children: rightLinks
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        mdUp: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerToggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                mdUp: true,
                implementation: "js",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                    variant: "temporary",
                    anchor: "right",
                    open: mobileOpen,
                    classes: {
                        paper: classes.drawerPaper
                    },
                    onClose: handleDrawerToggle,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.appResponsive,
                        children: [
                            leftLinks,
                            rightLinks
                        ]
                    })
                })
            })
        ]
    });
};
Header.defaultProp = {
    color: "white"
};
Header.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    rightLinks: (external_prop_types_default()).node,
    leftLinks: (external_prop_types_default()).node,
    brand: (external_prop_types_default()).string,
    fixed: (external_prop_types_default()).bool,
    absolute: (external_prop_types_default()).bool,
    // this will cause the sidebar to change the color from
    // props.color (see above) to changeColorOnScroll.color
    // when the window.pageYOffset is heigher or equal to
    // changeColorOnScroll.height and then when it is smaller than
    // changeColorOnScroll.height change it back to
    // props.color (see above)
    changeColorOnScroll: external_prop_types_default().shape({
        height: (external_prop_types_default()).number.isRequired,
        color: external_prop_types_default().oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};


/***/ }),

/***/ 5500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeaderLinks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(9641);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__(7886);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__(5652);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
// EXTERNAL MODULE: external "@mui/icons-material/Email"
var Email_ = __webpack_require__(9226);
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);
// EXTERNAL MODULE: external "@mui/icons-material/CurrencyExchange"
var CurrencyExchange_ = __webpack_require__(2602);
var CurrencyExchange_default = /*#__PURE__*/__webpack_require__.n(CurrencyExchange_);
// EXTERNAL MODULE: external "@mui/icons-material/Telegram"
var Telegram_ = __webpack_require__(6269);
var Telegram_default = /*#__PURE__*/__webpack_require__.n(Telegram_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(8250);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__(73);
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);
// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__(7730);
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(640);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__(6491);
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);
// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(2217);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__(2767);
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(4286);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/customDropdownStyle.js

const customDropdownStyle = (theme)=>({
        popperClose: {
            pointerEvents: "none"
        },
        pooperNav: {
            [theme.breakpoints.down("sm")]: {
                position: "static !important",
                left: "unset !important",
                top: "unset !important",
                transform: "none !important",
                willChange: "none !important",
                "& > div": {
                    boxShadow: "none !important",
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                    transition: "none !important",
                    marginTop: "0px !important",
                    marginBottom: "5px !important",
                    padding: "0px !important"
                }
            }
        },
        dropdown: {
            borderRadius: "3px",
            border: "0",
            boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
            top: "100%",
            zIndex: "1000",
            minWidth: "160px",
            padding: "5px 0",
            margin: "2px 0 0",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: "#fff",
            backgroundClip: "padding-box"
        },
        menuList: {
            padding: "0"
        },
        popperResponsive: {
            zIndex: "1200",
            position: "absolute !important",
            [theme.breakpoints.down("sm")]: {
                zIndex: "1640",
                position: "static !important",
                float: "none",
                width: "auto",
                marginTop: "0",
                backgroundColor: "transparent",
                border: "0",
                boxShadow: "none",
                color: "black"
            }
        },
        dropdownItem: {
            ...nextjs_material_kit/* defaultFont */.Df,
            fontSize: "13px",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "2px",
            position: "relative",
            transition: "all 150ms linear",
            display: "block",
            clear: "both",
            fontWeight: "400",
            height: "fit-content",
            color: "#333",
            whiteSpace: "nowrap",
            minHeight: "unset"
        },
        blackHover: {
            "&:hover": {
                boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
                backgroundColor: "#212121",
                color: "#fff"
            }
        },
        primaryHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit/* primaryColor */.lr,
                color: "#FFFFFF",
                ...nextjs_material_kit/* primaryBoxShadow */.kY
            }
        },
        infoHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit/* infoColor */.bE,
                color: "#FFFFFF",
                ...nextjs_material_kit/* infoBoxShadow */.ur
            }
        },
        successHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit/* successColor */.nq,
                color: "#FFFFFF",
                ...nextjs_material_kit/* successBoxShadow */.TI
            }
        },
        warningHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit/* warningColor */.MA,
                color: "#FFFFFF",
                ...nextjs_material_kit/* warningBoxShadow */.D6
            }
        },
        dangerHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit/* dangerColor */.E7,
                color: "#FFFFFF",
                ...nextjs_material_kit/* dangerBoxShadow */.iW
            }
        },
        roseHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit/* roseColor */.An,
                color: "#FFFFFF",
                ...nextjs_material_kit/* roseBoxShadow */.cq
            }
        },
        dropdownItemRTL: {
            textAlign: "right"
        },
        dropdownDividerItem: {
            margin: "5px 0",
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            height: "1px",
            overflow: "hidden"
        },
        buttonIcon: {
            width: "20px",
            height: "20px"
        },
        caret: {
            transition: "all 150ms ease-in",
            display: "inline-block",
            width: "0",
            height: "0",
            marginLeft: "4px",
            verticalAlign: "middle",
            borderTop: "4px solid",
            borderRight: "4px solid transparent",
            borderLeft: "4px solid transparent"
        },
        caretActive: {
            transform: "rotate(180deg)"
        },
        caretRTL: {
            marginRight: "4px"
        },
        dropdownHeader: {
            display: "block",
            padding: "0.1875rem 1.25rem",
            fontSize: "0.75rem",
            lineHeight: "1.428571",
            color: "#777",
            whiteSpace: "nowrap",
            fontWeight: "inherit",
            marginTop: "10px",
            minHeight: "unset",
            "&:hover,&:focus": {
                backgroundColor: "transparent",
                cursor: "auto"
            }
        },
        noLiPadding: {
            padding: "0"
        }
    });
/* harmony default export */ const components_customDropdownStyle = (customDropdownStyle);

;// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components









// core components


const useStyles = (0,styles_.makeStyles)(components_customDropdownStyle);
function CustomDropdown(props) {
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const handleClick = (event)=>{
        if (anchorEl && anchorEl.contains(event.target)) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = (param)=>{
        setAnchorEl(null);
        if (props && props.onClick) {
            props.onClick(param);
        }
    };
    const handleCloseAway = (event)=>{
        if (anchorEl.contains(event.target)) {
            return;
        }
        setAnchorEl(null);
    };
    const classes = useStyles();
    const { buttonText , buttonIcon , dropdownList , buttonProps , dropup , dropdownHeader , caret , hoverColor , left , rtlActive , noLiPadding , navDropdown  } = props;
    const caretClasses = external_classnames_default()({
        [classes.caret]: true,
        [classes.caretActive]: Boolean(anchorEl),
        [classes.caretRTL]: rtlActive
    });
    const dropdownItem = external_classnames_default()({
        [classes.dropdownItem]: true,
        [classes[hoverColor + "Hover"]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive
    });
    let icon = null;
    switch(typeof buttonIcon){
        case "object":
            icon = /*#__PURE__*/ jsx_runtime_.jsx(props.buttonIcon, {
                className: classes.buttonIcon
            });
            break;
        case "string":
            icon = /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                className: classes.buttonIcon,
                children: props.buttonIcon
            });
            break;
        default:
            icon = null;
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                    "aria-label": "Notifications",
                    "aria-owns": anchorEl ? "menu-list" : null,
                    "aria-haspopup": "true",
                    ...buttonProps,
                    onClick: handleClick,
                    children: [
                        icon,
                        buttonText !== undefined ? buttonText : null,
                        caret ? /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            className: caretClasses
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
                open: Boolean(anchorEl),
                anchorEl: anchorEl,
                transition: true,
                disablePortal: true,
                placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
                className: external_classnames_default()({
                    [classes.popperClose]: !anchorEl,
                    [classes.popperResponsive]: true,
                    [classes.pooperNav]: Boolean(anchorEl) && navDropdown
                }),
                children: ()=>/*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                        in: Boolean(anchorEl),
                        id: "menu-list",
                        style: dropup ? {
                            transformOrigin: "0 100% 0"
                        } : {
                            transformOrigin: "0 0 0"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                            className: classes.dropdown,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ClickAwayListener_default()), {
                                onClickAway: handleCloseAway,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuList_default()), {
                                    role: "menu",
                                    className: classes.menuList,
                                    children: [
                                        dropdownHeader !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            onClick: ()=>handleClose(dropdownHeader),
                                            className: classes.dropdownHeader,
                                            children: dropdownHeader
                                        }) : null,
                                        dropdownList.map((prop, key)=>{
                                            if (prop.divider) {
                                                return /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                    onClick: ()=>handleClose("divider"),
                                                    className: classes.dropdownDividerItem
                                                }, key);
                                            }
                                            return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: ()=>handleClose(prop),
                                                className: dropdownItem,
                                                children: prop
                                            }, key);
                                        })
                                    ]
                                })
                            })
                        })
                    })
            })
        ]
    });
};
CustomDropdown.defaultProps = {
    caret: true,
    hoverColor: "primary"
};
CustomDropdown.propTypes = {
    hoverColor: external_prop_types_default().oneOf([
        "black",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    buttonText: (external_prop_types_default()).node,
    buttonIcon: external_prop_types_default().oneOfType([
        (external_prop_types_default()).object,
        (external_prop_types_default()).string
    ]),
    dropdownList: (external_prop_types_default()).array,
    buttonProps: (external_prop_types_default()).object,
    dropup: (external_prop_types_default()).bool,
    dropdownHeader: (external_prop_types_default()).node,
    rtlActive: (external_prop_types_default()).bool,
    caret: (external_prop_types_default()).bool,
    left: (external_prop_types_default()).bool,
    noLiPadding: (external_prop_types_default()).bool,
    navDropdown: (external_prop_types_default()).bool,
    // function that retuns the selected item
    onClick: (external_prop_types_default()).func
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/tooltipsStyle.js
const tooltipsStyle = {
    tooltip: {
        padding: "10px 15px",
        minWidth: "130px",
        color: "#555555",
        lineHeight: "1.7em",
        background: "#FFFFFF",
        border: "none",
        borderRadius: "3px",
        boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
    }
};
/* harmony default export */ const nextjs_material_kit_tooltipsStyle = (tooltipsStyle);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/headerLinksStyle.js


const headerLinksStyle = (theme)=>({
        list: {
            ...nextjs_material_kit/* defaultFont */.Df,
            fontSize: "14px",
            margin: 0,
            paddingLeft: "0",
            listStyle: "none",
            paddingTop: "0",
            paddingBottom: "0",
            color: "inherit"
        },
        listItem: {
            float: "left",
            color: "inherit",
            position: "relative",
            display: "block",
            width: "auto",
            margin: "0",
            padding: "0",
            [theme.breakpoints.down("sm")]: {
                width: "100%",
                "&:after": {
                    width: "calc(100% - 30px)",
                    content: '""',
                    display: "block",
                    height: "1px",
                    marginLeft: "15px",
                    backgroundColor: "#e5e5e5"
                }
            }
        },
        listItemText: {
            padding: "0 !important"
        },
        navLink: {
            color: "inherit",
            position: "relative",
            padding: "0.9375rem",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            "&:hover,&:focus": {
                color: "inherit",
                background: "rgba(200, 200, 200, 0.2)"
            },
            [theme.breakpoints.down("sm")]: {
                width: "calc(100% - 30px)",
                marginLeft: "15px",
                marginBottom: "8px",
                marginTop: "8px",
                textAlign: "left",
                "& > span:first-child": {
                    justifyContent: "flex-start"
                }
            }
        },
        notificationNavLink: {
            [theme.breakpoints.down("md")]: {
                top: "0",
                margin: "5px 15px"
            },
            color: "#FFF",
            padding: "0.9375rem",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            top: "4px"
        },
        registerNavLink: {
            [theme.breakpoints.down("md")]: {
                top: "0",
                margin: "5px 15px"
            },
            top: "3px",
            position: "relative",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex"
        },
        navLinkActive: {
            color: "inherit",
            backgroundColor: "rgba(255, 255, 255, 0.1)"
        },
        icons: {
            width: "20px",
            height: "20px",
            marginRight: "3px"
        },
        socialIcons: {
            position: "relative",
            fontSize: "20px !important",
            marginRight: "4px"
        },
        dropdownLink: {
            "&,&:hover,&:focus": {
                color: "inherit",
                textDecoration: "none",
                display: "block",
                padding: "10px 20px"
            }
        },
        ...nextjs_material_kit_tooltipsStyle,
        marginRight5: {
            marginRight: "5px"
        }
    });
/* harmony default export */ const components_headerLinksStyle = (headerLinksStyle);

;// CONCATENATED MODULE: ./components/Header/HeaderLinks.js
/*eslint-disable*/ 


// @material-ui/core components





// @material-ui/icons






// core components



const HeaderLinks_useStyles = (0,styles_.makeStyles)(components_headerLinksStyle);
function HeaderLinks(props) {
    const classes = HeaderLinks_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
        className: classes.list,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown, {
                    noLiPadding: true,
                    navDropdown: true,
                    buttonText: "Utopos Home",
                    buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                    },
                    buttonIcon: icons_.Home,
                    dropdownList: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://www.utopos.io",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: classes.dropdownLink,
                                children: "Homepage"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://utopos.io/assets/utopos_whitepaper.pdf",
                            target: "_blank",
                            className: classes.dropdownLink,
                            children: "Whitepaper"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                    href: "https://utoswap.com",
                    color: "transparent",
                    target: "_blank",
                    className: classes.navLink,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CurrencyExchange_default()), {}),
                        " Get $UTOP"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                    href: "utoposcity@protonmail.com",
                    color: "transparent",
                    target: "_blank",
                    className: classes.navLink,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {}),
                        "Contact Us"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                    id: "instagram-twitter",
                    title: "Follow us on twitter",
                    placement: "top",
                    classes: {
                        tooltip: classes.tooltip
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                        href: "https://www.twitter.com/utoposcity",
                        target: "_blank",
                        color: "transparent",
                        className: classes.navLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: classes.socialIcons + " fab fa-twitter"
                            }),
                            "Twitter/X"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                    id: "instagram-facebook",
                    title: "Follow us on facebook",
                    placement: "top",
                    classes: {
                        tooltip: classes.tooltip
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                        color: "transparent",
                        href: "https://www.facebook.com/utoposblockchain/",
                        target: "_blank",
                        className: classes.navLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: classes.socialIcons + " fab fa-facebook"
                            }),
                            "Facebook"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                    id: "instagram-tooltip",
                    title: "Join our Telegram",
                    placement: "top",
                    classes: {
                        tooltip: classes.tooltip
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                        color: "transparent",
                        href: "https://t.me/utoposofficialgroup",
                        target: "_blank",
                        className: classes.navLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Telegram_default()), {}),
                            "Telegram"
                        ]
                    })
                })
            })
        ]
    });
};


/***/ })

};
;