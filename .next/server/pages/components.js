"use strict";
(() => {
var exports = {};
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 2573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
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
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(8602);
;// CONCATENATED MODULE: external "nouislider"
const external_nouislider_namespaceObject = require("nouislider");
// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__(2944);
;// CONCATENATED MODULE: external "@material-ui/core/FormControlLabel"
const FormControlLabel_namespaceObject = require("@material-ui/core/FormControlLabel");
;// CONCATENATED MODULE: external "@material-ui/core/Checkbox"
const Checkbox_namespaceObject = require("@material-ui/core/Checkbox");
;// CONCATENATED MODULE: external "@material-ui/core/Radio"
const Radio_namespaceObject = require("@material-ui/core/Radio");
;// CONCATENATED MODULE: external "@material-ui/core/Switch"
const Switch_namespaceObject = require("@material-ui/core/Switch");
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__(1075);
;// CONCATENATED MODULE: external "@material-ui/icons/Check"
const Check_namespaceObject = require("@material-ui/icons/Check");
;// CONCATENATED MODULE: external "@material-ui/icons/FiberManualRecord"
const FiberManualRecord_namespaceObject = require("@material-ui/icons/FiberManualRecord");
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(6140);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "@material-ui/core/LinearProgress"
const LinearProgress_namespaceObject = require("@material-ui/core/LinearProgress");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/customLinearProgressStyle.js

const customLinearProgressStyle = {
    root: {
        height: "4px",
        marginBottom: "20px",
        overflow: "hidden"
    },
    bar: {
        height: "4px"
    },
    primary: {
        backgroundColor: nextjs_material_kit/* primaryColor */.lr
    },
    warning: {
        backgroundColor: nextjs_material_kit/* warningColor */.MA
    },
    danger: {
        backgroundColor: nextjs_material_kit/* dangerColor */.E7
    },
    success: {
        backgroundColor: nextjs_material_kit/* successColor */.nq
    },
    info: {
        backgroundColor: nextjs_material_kit/* infoColor */.bE
    },
    rose: {
        backgroundColor: nextjs_material_kit/* roseColor */.An
    },
    gray: {
        backgroundColor: nextjs_material_kit/* grayColor */.X_
    },
    primaryBackground: {
        background: "rgba(156, 39, 176, 0.2)"
    },
    warningBackground: {
        background: "rgba(255, 152, 0, 0.2)"
    },
    dangerBackground: {
        background: "rgba(244, 67, 54, 0.2)"
    },
    successBackground: {
        background: "rgba(76, 175, 80, 0.2)"
    },
    infoBackground: {
        background: "rgba(0, 188, 212, 0.2)"
    },
    roseBackground: {
        background: "rgba(233, 30, 99, 0.2)"
    },
    grayBackground: {
        background: "rgba(221, 221, 221, 0.2)"
    }
};
/* harmony default export */ const components_customLinearProgressStyle = (customLinearProgressStyle);

;// CONCATENATED MODULE: ./components/CustomLinearProgress/CustomLinearProgress.js


// nodejs library to set properties for components

// @material-ui/core components


// core components

const useStyles = (0,styles_.makeStyles)(components_customLinearProgressStyle);
function CustomLinearProgress(props) {
    const classes = useStyles();
    const { color , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
        ...rest,
        classes: {
            root: classes.root + " " + classes[color + "Background"],
            bar: classes.bar + " " + classes[color]
        }
    });
};
CustomLinearProgress.defaultProps = {
    color: "gray"
};
CustomLinearProgress.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/paginationStyle.js

const paginationStyle = {
    pagination: {
        display: "inline-block",
        paddingLeft: "0",
        margin: "0 0 20px 0",
        borderRadius: "4px"
    },
    paginationItem: {
        display: "inline"
    },
    paginationLink: {
        ":first-of-type": {
            marginleft: "0"
        },
        letterSpacing: "unset",
        border: "0",
        borderRadius: "30px !important",
        transition: "all .3s",
        padding: "0px 11px",
        margin: "0 3px",
        minWidth: "30px",
        height: "30px",
        minHeight: "auto",
        lineHeight: "30px",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        background: "transparent",
        position: "relative",
        float: "left",
        textDecoration: "none",
        boxSizing: "border-box",
        "&,&:hover,&:focus": {
            color: nextjs_material_kit/* grayColor */.X_
        },
        "&:hover,&:focus": {
            zIndex: "3",
            backgroundColor: "#eee",
            borderColor: "#ddd"
        },
        "&:hover": {
            cursor: "pointer"
        }
    },
    primary: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* primaryColor */.lr,
            borderColor: nextjs_material_kit/* primaryColor */.lr,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    info: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* infoColor */.bE,
            borderColor: nextjs_material_kit/* infoColor */.bE,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    success: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* successColor */.nq,
            borderColor: nextjs_material_kit/* successColor */.nq,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    warning: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* warningColor */.MA,
            borderColor: nextjs_material_kit/* warningColor */.MA,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    danger: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* dangerColor */.E7,
            borderColor: nextjs_material_kit/* dangerColor */.E7,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    rose: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* roseColor */.An,
            borderColor: nextjs_material_kit/* roseColor */.An,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    disabled: {
        "&,&:hover,&:focus": {
            color: "#777",
            cursor: "not-allowed",
            backgroundColor: "#fff",
            borderColor: "#ddd"
        }
    }
};
/* harmony default export */ const components_paginationStyle = (paginationStyle);

;// CONCATENATED MODULE: ./components/Pagination/Pagination.js


// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components



const Pagination_useStyles = (0,styles_.makeStyles)(components_paginationStyle);
function Pagination(props) {
    const classes = Pagination_useStyles();
    const { pages , color  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: classes.pagination,
        children: pages.map((prop, key)=>{
            const paginationLink = external_classnames_default()({
                [classes.paginationLink]: true,
                [classes[color]]: prop.active,
                [classes.disabled]: prop.disabled
            });
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: classes.paginationItem,
                children: prop.onClick !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: prop.onClick,
                    className: paginationLink,
                    children: prop.text
                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: ()=>alert("you've clicked " + prop.text),
                    className: paginationLink,
                    children: prop.text
                })
            }, key);
        })
    });
};
Pagination.defaultProps = {
    color: "primary"
};
Pagination.propTypes = {
    pages: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        active: (external_prop_types_default()).bool,
        disabled: (external_prop_types_default()).bool,
        text: external_prop_types_default().oneOfType([
            (external_prop_types_default()).number,
            external_prop_types_default().oneOf([
                "PREV",
                "NEXT",
                "..."
            ])
        ]).isRequired,
        onClick: (external_prop_types_default()).func
    })).isRequired,
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger"
    ])
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/badgeStyle.js

const badgeStyle = {
    badge: {
        marginRight: "3px",
        borderRadius: "12px",
        padding: "5px 12px",
        textTransform: "uppercase",
        fontSize: "10px",
        fontWeight: "500",
        lineHeight: "1",
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        display: "inline-block"
    },
    primary: {
        backgroundColor: nextjs_material_kit/* primaryColor */.lr
    },
    warning: {
        backgroundColor: nextjs_material_kit/* warningColor */.MA
    },
    danger: {
        backgroundColor: nextjs_material_kit/* dangerColor */.E7
    },
    success: {
        backgroundColor: nextjs_material_kit/* successColor */.nq
    },
    info: {
        backgroundColor: nextjs_material_kit/* infoColor */.bE
    },
    rose: {
        backgroundColor: nextjs_material_kit/* roseColor */.An
    },
    gray: {
        backgroundColor: "#6c757d"
    }
};
/* harmony default export */ const components_badgeStyle = (badgeStyle);

;// CONCATENATED MODULE: ./components/Badge/Badge.js


// nodejs library to set properties for components

// @material-ui/core components


const Badge_useStyles = (0,styles_.makeStyles)(components_badgeStyle);
function Badge(props) {
    const classes = Badge_useStyles();
    const { color , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: classes.badge + " " + classes[color],
        children: children
    });
};
Badge.defaultProps = {
    color: "gray"
};
Badge.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js

const customCheckboxRadioSwitch = {
    checkRoot: {
        padding: "12px",
        "&:hover": {
            backgroundColor: (0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.04) + "!important"
        }
    },
    radioRoot: {
        padding: "12px",
        "&:hover": {
            backgroundColor: (0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.04) + "!important"
        }
    },
    labelRoot: {
        marginLeft: "-14px"
    },
    checkboxAndRadio: {
        position: "relative",
        display: "block",
        marginTop: "10px",
        marginBottom: "10px"
    },
    checkboxAndRadioHorizontal: {
        position: "relative",
        display: "block",
        "&:first-child": {
            marginTop: "10px"
        },
        "&:not(:first-child)": {
            marginTop: "-14px"
        },
        marginTop: "0",
        marginBottom: "0"
    },
    checked: {
        color: nextjs_material_kit/* primaryColor */.lr + "!important"
    },
    checkedIcon: {
        width: "20px",
        height: "20px",
        border: "1px solid rgba(0, 0, 0, .54)",
        borderRadius: "3px"
    },
    uncheckedIcon: {
        width: "0px",
        height: "0px",
        padding: "9px",
        border: "1px solid rgba(0, 0, 0, .54)",
        borderRadius: "3px"
    },
    disabledCheckboxAndRadio: {
        opacity: "0.45"
    },
    label: {
        cursor: "pointer",
        paddingLeft: "0",
        color: "rgba(0, 0, 0, 0.26)",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        display: "inline-flex",
        transition: "0.3s ease all",
        letterSpacing: "unset"
    },
    labelHorizontal: {
        color: "rgba(0, 0, 0, 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "39px",
        marginRight: "0",
        "@media (min-width: 992px)": {
            float: "right"
        }
    },
    labelHorizontalRadioCheckbox: {
        paddingTop: "22px"
    },
    labelLeftHorizontal: {
        color: "rgba(0, 0, 0, 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "22px",
        marginRight: "0"
    },
    labelError: {
        color: nextjs_material_kit/* dangerColor */.E7
    },
    radio: {
        color: nextjs_material_kit/* primaryColor */.lr + "!important"
    },
    radioChecked: {
        width: "16px",
        height: "16px",
        border: "1px solid " + nextjs_material_kit/* primaryColor */.lr,
        borderRadius: "50%"
    },
    radioUnchecked: {
        width: "0px",
        height: "0px",
        padding: "7px",
        border: "1px solid rgba(0, 0, 0, .54)",
        borderRadius: "50%"
    },
    inlineChecks: {
        marginTop: "8px"
    },
    iconCheckbox: {
        height: "116px",
        width: "116px",
        color: nextjs_material_kit/* grayColor */.X_,
        "& > span:first-child": {
            borderWidth: "4px",
            borderStyle: "solid",
            borderColor: "#CCCCCC",
            textAlign: "center",
            verticalAlign: "middle",
            borderRadius: "50%",
            color: "inherit",
            margin: "0 auto 20px",
            transition: "all 0.2s"
        },
        "&:hover": {
            color: nextjs_material_kit/* roseColor */.An,
            "& > span:first-child": {
                borderColor: nextjs_material_kit/* roseColor */.An
            }
        }
    },
    iconCheckboxChecked: {
        color: nextjs_material_kit/* roseColor */.An,
        "& > span:first-child": {
            borderColor: nextjs_material_kit/* roseColor */.An
        }
    },
    iconCheckboxIcon: {
        fontSize: "40px",
        lineHeight: "111px"
    },
    switchBase: {
        color: nextjs_material_kit/* primaryColor */.lr + "!important"
    },
    switchIcon: {
        boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
        color: "#FFFFFF !important",
        border: "1px solid rgba(0, 0, 0, .54)"
    },
    switchBar: {
        width: "30px",
        height: "15px",
        backgroundColor: "rgb(80, 80, 80)",
        borderRadius: "15px",
        opacity: "0.7!important"
    },
    switchChecked: {
        "& + $switchBar": {
            backgroundColor: "rgba(156, 39, 176, 1) !important"
        },
        "& $switchIcon": {
            borderColor: "#9c27b0"
        }
    },
    switchRoot: {
        height: "48px"
    }
};
/* harmony default export */ const nextjs_material_kit_customCheckboxRadioSwitch = (customCheckboxRadioSwitch);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js


const basicsStyle = {
    sections: {
        padding: "70px 0"
    },
    container: nextjs_material_kit/* container */.nC,
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    icons: {
        width: "17px",
        height: "17px",
        color: "#FFFFFF"
    },
    ...nextjs_material_kit_customCheckboxRadioSwitch
};
/* harmony default export */ const componentsSections_basicsStyle = (basicsStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionBasics.js



// @material-ui/core components






// @material-ui/icons




// core components








const SectionBasics_useStyles = (0,styles_.makeStyles)(componentsSections_basicsStyle);
function SectionBasics() {
    const classes = SectionBasics_useStyles();
    const [checked, setChecked] = external_react_default().useState([
        24,
        22
    ]);
    const [selectedEnabled, setSelectedEnabled] = external_react_default().useState("b");
    const [checkedA, setCheckedA] = external_react_default().useState(true);
    const [checkedB, setCheckedB] = external_react_default().useState(false);
    /*React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });*/ const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.sections,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Current Events"
                })
            })
        })
    });
};

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(2406);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js

const carouselStyle = {
    section: {
        padding: "70px 0"
    },
    container: nextjs_material_kit/* container */.nC,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    },
    caption: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#ffffff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Add text shadow for better visibility
    }
};
/* harmony default export */ const componentsSections_carouselStyle = (carouselStyle);

;// CONCATENATED MODULE: ./pages-sections/humanitiesContent/CarouselAA.jsx








const CarouselAA_useStyles = (0,styles_.makeStyles)(componentsSections_carouselStyle);
function CarouselAA() {
    const classes = CarouselAA_useStyles();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        interval: 4000,
        animation: "fade"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 8,
                    className: classes.marginAuto,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                        carousel: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/utop/aa1.jpg",
                                            alt: "First slide",
                                            className: "slick-image",
                                            width: 800,
                                            height: 400
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.caption,
                                                children: "Scientists"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/utop/aa2.jpg",
                                            alt: "Second slide",
                                            className: "slick-image",
                                            width: 800,
                                            height: 400
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.caption,
                                                children: "Entrepreneurs"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/utop/aa3.jpg",
                                            alt: "Third slide",
                                            className: "slick-image",
                                            width: 800,
                                            height: 400
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.caption,
                                                children: "Architects"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/utop/aa4.jpg",
                                            alt: "Fourth slide",
                                            className: "slick-image",
                                            width: 800,
                                            height: 400
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.caption,
                                                children: "Farmers"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/utop/blogstyle.js
const blogStyle = {
    header: {
        textAlign: "center",
        marginBottom: "20px"
    },
    date: {
        textAlign: "center",
        marginBottom: "30px"
    },
    content: {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#333333",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px 0",
        textAlign: "center"
    },
    top: {
        border: "1px solid #000000",
        padding: "5px"
    }
};
/* harmony default export */ const blogstyle = (blogStyle);

;// CONCATENATED MODULE: ./pages-sections/humanitiesContent/GrantAA.jsx


//import { Button } from "react-bootstrap";



const GrantAA_useStyles = (0,styles_.makeStyles)(blogstyle);
function AAgrantPost() {
    const classes = GrantAA_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.top,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "UTOPian Minority Entrepreneur Fund"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.date,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "08/25/2023"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarouselAA, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: classes.content,
                children: [
                    "History has shown us countless examples of individuals who are capable of greatness that just needed a little help to start. Unfortunately in this world we live in, toxic social practices proliferated and locked out many such people out of prosperity for reasons beyond their control, as frivolous as the color of their skin.",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.brookings.edu/articles/who-is-driving-black-business-growth-insights-from-the-latest-data-on-black-owned-businesses/",
                        children: "For example in 2020, Black people in the USA represented 14.2% of all Americans but only 2.4% of all employer-firm owners."
                    }),
                    "Utopos understands the the depth of the issues minorities in the USA face and aims to do their part in undoing this imbalance with the UTOPian Minority Entrepreneur fund. This effort targets entrepreneurs and creators in fields that will be essential roles within Utopos' vision of it's smart cities in the future. Farmers, engineers, architechts, tech workers and entrepreneurs are all welcome to apply. Utopos pledges X UTOP tokens to supercharge and empower talented individuals from African American communities who often lack the financial support to bring their dream projects to life. By upholding its value of equal access to opportunity, the Minority Entrepreneur Fund strives to provide support for members of the black community, where their local and state governments may have fallen short. Through the examples we set, it is our hope that all UTOPians will consider equality and fairness in our communities going forward."
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages-sections/humanitiesContent/CarouselVets.jsx








const CarouselVets_useStyles = (0,styles_.makeStyles)(componentsSections_carouselStyle);
function CarouselVets() {
    const classes = CarouselVets_useStyles();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        interval: 4000,
        animation: "fade"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 8,
                    className: classes.marginAuto,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                        carousel: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/utop/vet.jpg",
                                        alt: "First slide",
                                        className: "slick-image",
                                        width: 800,
                                        height: 400
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/utop/vet2.webp",
                                        alt: "Second slide",
                                        className: "slick-image",
                                        width: 800,
                                        height: 400
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/utop/vet3.jpg",
                                        alt: "Third slide",
                                        className: "slick-image",
                                        width: 800,
                                        height: 400
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/utop/vet4.jpg",
                                        alt: "Fourth slide",
                                        className: "slick-image",
                                        width: 800,
                                        height: 400
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages-sections/humanitiesContent/GrantVets.jsx


//import { Button } from "react-bootstrap";



const GrantVets_useStyles = (0,styles_.makeStyles)(blogstyle);
function VetGrantPost() {
    const classes = GrantVets_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.top,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Utopos Homeless Veterans Helping Hand"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.date,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "09/25/2023"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarouselVets, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: classes.content,
                children: [
                    "The Utopos team is proud to announce the launch of the first initiative undertaken by the Humanities Hub. A grant for the United States' homeless veterans. This initiative aligns with Utopos' value of giving back, specifically to men and women who have selflessly put their lives on the line for their country. Unfortunately, many brave veterans find themselves without proper care and support after their service. Shockingly,",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://news.va.gov/press-room/va-announces-goal-to-house-38000-veterans-experiencing-homelessness-in-2023/#:~:text=VA%20announces%20goal%20to%20house%2038%2C000%2B%20Veterans%20experiencing%20homelessness%20in%202023,-For%20immediate%20release&text=WASHINGTON%20%E2%80%94%20Today%2C%20the%20Department%20of,experiencing%20homelessness%20into%20permanent%20housing.",
                        children: "over 38,000 military veterans are homeless"
                    }),
                    " , potentially grappling with PTSD, substance abuse, depression, and other service-related disabilities. These challenges not only make it harder for them to lead normal lives, but also hinder their ability to learn and participate in emerging technologies that are changing our lives every day. The Utopos Helping Hand plans to assist veterans not only with funds via airdrops of tokens, but also with free training on how to utilize emerging technologies like Web3, ensuring they are not left behind in the revolutionary advancements it brings."
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/components.js

const componentsStyle = {
    container: nextjs_material_kit/* container */.nC,
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "510px",
        margin: "10px 0 0"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "10px",
            marginRight: "10px"
        }
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    }
};
/* harmony default export */ const components = (componentsStyle);

;// CONCATENATED MODULE: ./pages/components.js


// nodejs library that concatenates classes

// react components for routing our app without refresh

// @material-ui/core components

// @material-ui/icons
// core components







// sections for this page




const components_useStyles = (0,styles_.makeStyles)(components);
function Components(props) {
    const classes = components_useStyles();
    const { ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                brand: "Utopos Humanities Hub",
                rightLinks: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {}),
                fixed: true,
                color: "transparent",
                changeColorOnScroll: {
                    height: 400,
                    color: "white"
                },
                ...rest
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/nextjs_header.jpg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.brand,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: classes.title,
                                        children: "Utopos Humanities Hub"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: classes.subtitle,
                                        children: [
                                            "Welcome to the Utopos Humanities Hub! This department is responsible for managing all Utopos approved humanitarian and charitable efforts from within the ecosystem that matches our values of altruism, helpfulness, giving back, providing equity and fairness. Below is a list of ongoing and past efforts. For information on how you can help out, ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "click here."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionBasics, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(AAgrantPost, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(VetGrantPost, {})
                ]
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
var __webpack_exports__ = __webpack_require__.X(0, [952,270,61,547,624,834,602], () => (__webpack_exec__(2573)));
module.exports = __webpack_exports__;

})();