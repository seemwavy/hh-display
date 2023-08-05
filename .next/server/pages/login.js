"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__(2944);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__(7886);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
;// CONCATENATED MODULE: external "@material-ui/icons/Email"
const Email_namespaceObject = require("@material-ui/icons/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__(1075);
var People_default = /*#__PURE__*/__webpack_require__.n(People_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9152);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js + 4 modules
var HeaderLinks = __webpack_require__(5500);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6356);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(4286);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(2406);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(7585);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/cardHeaderStyle.js

const cardHeaderStyle = {
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        border: "0",
        marginBottom: "0"
    },
    cardHeaderPlain: {
        marginLeft: "0px",
        marginRight: "0px"
    },
    warningCardHeader: nextjs_material_kit/* warningCardHeader */.rt,
    successCardHeader: nextjs_material_kit/* successCardHeader */.aT,
    dangerCardHeader: nextjs_material_kit/* dangerCardHeader */.yF,
    infoCardHeader: nextjs_material_kit/* infoCardHeader */.Yi,
    primaryCardHeader: nextjs_material_kit/* primaryCardHeader */.hF
};
/* harmony default export */ const components_cardHeaderStyle = (cardHeaderStyle);

;// CONCATENATED MODULE: ./components/Card/CardHeader.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

const useStyles = (0,styles_.makeStyles)(components_cardHeaderStyle);
function CardHeader(props) {
    const classes = useStyles();
    const { className , children , color , plain , ...rest } = props;
    const cardHeaderClasses = external_classnames_default()({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardHeaderClasses,
        ...rest,
        children: children
    });
};
CardHeader.propTypes = {
    className: (external_prop_types_default()).string,
    color: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary"
    ]),
    plain: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8696);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(6140);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/loginPage.js

const signupPageStyle = {
    container: {
        ...nextjs_material_kit/* container */.nC,
        zIndex: "2",
        position: "relative",
        paddingTop: "20vh",
        color: "#FFFFFF",
        paddingBottom: "200px"
    },
    cardHidden: {
        opacity: "0",
        transform: "translate3d(0, -60px, 0)"
    },
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF"
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%"
        }
    },
    form: {
        margin: "0"
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    socialIcons: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important"
    },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0"
    },
    inputIconsColor: {
        color: "#495057"
    }
};
/* harmony default export */ const loginPage = (signupPageStyle);

;// CONCATENATED MODULE: ./pages/login.js


// @material-ui/core components



// @material-ui/icons


// core components












const login_useStyles = (0,styles_.makeStyles)(loginPage);
function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = external_react_default().useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = login_useStyles();
    const { ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                absolute: true,
                color: "transparent",
                brand: "NextJS Material Kit",
                rightLinks: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {}),
                ...rest
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.pageHeader,
                style: {
                    backgroundImage: "url('/img/bg7.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justify: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes[cardAnimaton],
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: classes.form,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader, {
                                                color: "primary",
                                                className: classes.cardHeader,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: "Login"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.socialLine,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                href: "#pablo",
                                                                target: "_blank",
                                                                color: "transparent",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-twitter"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                href: "#pablo",
                                                                target: "_blank",
                                                                color: "transparent",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-facebook"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                href: "#pablo",
                                                                target: "_blank",
                                                                color: "transparent",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-google-plus-g"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: classes.divider,
                                                children: "Or Be Classical"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        labelText: "First Name...",
                                                        id: "first",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        },
                                                        inputProps: {
                                                            type: "text",
                                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                position: "end",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((People_default()), {
                                                                    className: classes.inputIconsColor
                                                                })
                                                            })
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        labelText: "Email...",
                                                        id: "email",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        },
                                                        inputProps: {
                                                            type: "email",
                                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                position: "end",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {
                                                                    className: classes.inputIconsColor
                                                                })
                                                            })
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        labelText: "Password",
                                                        id: "pass",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        },
                                                        inputProps: {
                                                            type: "password",
                                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                position: "end",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                    className: classes.inputIconsColor,
                                                                    children: "lock_outline"
                                                                })
                                                            }),
                                                            autoComplete: "off"
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                className: classes.cardFooter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    simple: true,
                                                    color: "primary",
                                                    size: "lg",
                                                    children: "Get started"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        whiteFont: true
                    })
                ]
            })
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

/***/ 2944:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputAdornment");

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

/***/ 1075:
/***/ ((module) => {

module.exports = require("@material-ui/icons/People");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,61,547,624,834,285], () => (__webpack_exec__(9908)));
module.exports = __webpack_exports__;

})();