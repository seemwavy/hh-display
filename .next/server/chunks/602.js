"use strict";
exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 8602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Parallax)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/parallaxStyle.js
const parallaxStyle = (theme)=>({
        parallax: {
            height: "90vh",
            maxHeight: "1000px",
            overflow: "hidden",
            position: "relative",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
            border: "0",
            display: "flex",
            alignItems: "center"
        },
        filter: {
            "&:before": {
                background: "rgba(0, 0, 0, 0.5)"
            },
            "&:after,&:before": {
                position: "absolute",
                zIndex: "1",
                width: "100%",
                height: "100%",
                display: "block",
                left: "0",
                top: "0",
                content: "''"
            }
        },
        small: {
            height: "380px"
        },
        parallaxResponsive: {
            [theme.breakpoints.down("md")]: {
                minHeight: "660px"
            }
        }
    });
/* harmony default export */ const components_parallaxStyle = (parallaxStyle);

;// CONCATENATED MODULE: ./components/Parallax/Parallax.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// core components

const useStyles = (0,styles_.makeStyles)(components_parallaxStyle);
function Parallax(props) {
    let windowScrollTop;
    // if (window.innerWidth >= 768) {
    //   windowScrollTop = window.pageYOffset / 3;
    // } else {
    //   windowScrollTop = 0;
    // }
    const [transform, setTransform] = external_react_default().useState("translate3d(0,0px,0)");
    external_react_default().useEffect(()=>{
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = ()=>{
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { filter , className , children , style , image , small , responsive  } = props;
    const classes = useStyles();
    const parallaxClasses = external_classnames_default()({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [classes.parallaxResponsive]: responsive,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: parallaxClasses,
        style: {
            ...style,
            backgroundImage: "url(" + image + ")",
            transform: transform
        },
        children: children
    });
};
Parallax.propTypes = {
    className: (external_prop_types_default()).string,
    filter: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node,
    style: (external_prop_types_default()).string,
    image: (external_prop_types_default()).string,
    small: (external_prop_types_default()).bool,
    // this will add a min-height of 660px on small screens
    responsive: (external_prop_types_default()).bool
};


/***/ })

};
;