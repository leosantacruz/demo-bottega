"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8407);
/* harmony import */ var _utils_sketchfab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Debug = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [mainColor, setMainColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        r: 0,
        g: 0,
        b: 0
    });
    const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useCarStore */ .r)((state)=>state);
    const nodes = (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_3__/* .getNodeList */ .bS)().filter((r)=>{
        if (r.name) {
            const regex = /^(?!.*livery.*$)(?!(.*number_a.*)).*((stripe|lip|number|tail)).*$/;
            return regex.test(r.name.toLowerCase());
        }
    });
    const nodesNoDuplicates = [
        ...new Set(nodes.map((node)=>node.name))
    ];
    const updateColor = async ({ id , r , g , b , name  })=>{
        let updatedCar = store.car;
        await (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_3__/* .changeColor */ .zX)("Interior", id);
        updatedCar.mainColor = {
            name: name,
            category: "",
            r,
            g,
            b
        };
        store.updateCar(updatedCar);
    };
    const selectPart = (newPart)=>{
        let updatedCar = store.car;
        if (!store.car.parts.includes(newPart)) {
            updatedCar.parts.push(newPart);
            (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_3__/* .toggleNode */ .bh)(newPart, "show");
        } else {
            updatedCar.parts = updatedCar.parts.filter((part)=>part !== newPart);
            (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_3__/* .toggleNode */ .bh)(newPart, "hide");
        }
        store.updateCar(updatedCar);
    };
    const newColor = (ev)=>{
        const c = ev.target.value;
        const r = parseInt(c.substr(1, 2), 16);
        const g = parseInt(c.substr(3, 2), 16);
        const b = parseInt(c.substr(5, 2), 16);
        setMainColor({
            r,
            g,
            b
        });
        const color = {
            r,
            g,
            b
        };
        (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_3__/* .fastChangeMainColor */ .fN)(color);
    };
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(JSON.stringify(store.car));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "debug",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: "Main Color"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    children: [
                        "[",
                        mainColor["r"],
                        ",",
                        mainColor["g"],
                        ",",
                        mainColor["b"],
                        "]"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "inputColor",
                    type: "color",
                    onChange: newColor
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: "Car options"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "data",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            children: [
                                " ",
                                store.car.model.name
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
                            children: [
                                " ",
                                JSON.stringify(store, null, 2)
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "debugMenuBox",
                    children: nodesNoDuplicates && nodesNoDuplicates.map((n)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: store.car.parts.includes(n) ? "active" : "nada",
                                onClick: ()=>{
                                    selectPart(n);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: n
                                })
                            })
                        });
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Debug);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const logo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "header",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/images/bottega.svg",
            width: "240px"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logo);


/***/ }),

/***/ 8919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_loadingScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/elements/preloader.tsx

const Preloader = ({ width , height  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "loading",
            width: width,
            height: height,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(0 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.9166666666666666s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(30 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.8333333333333334s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(60 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.75s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(90 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.6666666666666666s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(120 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.5833333333333334s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(150 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.5s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(180 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.4166666666666667s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(210 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.3333333333333333s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(240 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.25s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(270 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.16666666666666666s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(300 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "-0.08333333333333333s",
                            repeatCount: "indefinite"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "rotate(330 50 50)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "47",
                        y: "24",
                        rx: "3",
                        ry: "6",
                        width: "6",
                        height: "12",
                        fill: "#000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            keyTimes: "0;1",
                            dur: "1s",
                            begin: "0s",
                            repeatCount: "indefinite"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const preloader = (Preloader);

;// CONCATENATED MODULE: ./components/loadingScreen.tsx


const loadingScreen = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "loadingScreen",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/bottega.svg",
                        width: "300px"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(preloader, {
                        width: "50px",
                        height: "50px"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Chargement de la sc\xe8ne..."
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_loadingScreen = (loadingScreen);


/***/ }),

/***/ 2368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PleaseRotate = ()=>{
    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRotate(window.innerHeight > window.innerWidth ? true : false);
        window.addEventListener("resize", function(event) {
            setRotate(window.innerHeight > window.innerWidth ? true : false);
        }, true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: rotate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "pleaseRotate",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rotateContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "150",
                        version: "1.1",
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 400 400",
                        enableBackground: "new 0 0 400 400",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#020202",
                                    d: "M227.9,5.8c5.7,1.8,11.8,2,17.6,3.7c32.9,9.7,56,30.2,69.5,61.7c4.7,11.1,7.2,22.7,7.6,34.8 c0.1,2.2,0.9,2.8,3,2.7c5-0.1,9.9,0,14.9,0c1.8,0,3.3,0.4,4.1,2.2c0.7,1.7-0.3,3-1.4,4.1c-10.3,10.4-20.7,20.7-31,31 c-2,2-3.9,2.1-5.9,0.1c-10.3-10.3-20.7-20.7-31-31c-1.2-1.2-2-2.7-1.2-4.5c0.7-1.7,2.3-1.9,3.9-1.9c4.8,0,9.7-0.1,14.5,0.1 c2.4,0.1,2.9-0.7,2.8-3c-1.4-29.1-22-57-49.3-67.1c-8.7-3.2-17.6-4.7-26.8-5.2c-8.1-0.4-13.3-4.8-14.5-11.9 c-0.8-5.1,2.1-13,10.1-15.1c0.2,0,0.3-0.4,0.4-0.6C219.3,5.8,223.6,5.8,227.9,5.8z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#020202",
                                    d: "M14,241.5c0-41.7,0.1-83.5,0-125.2c0-12.2,4.7-21.3,15.6-27.1c4.4-2.3,9.2-2.9,14-2.9c43.5,0,87,0,130.5,0 c14.9,0,25.2,7.6,28.9,21.1c0.8,3.1,1,6.3,1,9.4c0,83.1,0,166.1,0,249.2c0,19.1-11.6,30.6-30.7,30.6c-43.3,0-86.5,0-129.8,0 c-14.8,0-25.4-8-28.9-21.7c-0.8-3-0.7-6.1-0.7-9.1C14,324.4,14,282.9,14,241.5z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#020202",
                                    d: "M223.8,396.6c4.8-8.3,7.2-16.8,7.7-25.8c0.1-1.5,0.7-2,2.1-1.9c0.9,0.1,1.8,0,2.7,0 c40.2,0,80.4,0,120.6,0.1c3.1,0,4-0.6,4-3.9c-0.1-42.4-0.1-84.7,0-127.1c0-3.1-0.7-4-3.9-4c-40.4,0.1-80.9,0-121.3,0.1 c-3.5,0-4.2-1-4-4.2c0.3-6.9,0.2-13.7,0-20.6c0-2.2,0.4-3,2.9-3c41.8,0.1,83.7,0,125.5,0.1c16.8,0.1,28.3,12,28.4,29.2 c0.1,24.2,0,48.3,0,72.5c0,19.3-0.3,38.7,0.1,58c0.4,18.2-13,30.6-30.5,30.4c-43.4-0.4-86.7-0.1-130.1-0.1 C226.8,396.6,225.6,396.6,223.8,396.6z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#FEFEFE",
                                    d: "M176.2,227.6c0,36.5-0.1,73,0.1,109.5c0,3.5-0.9,4.1-4.2,4.1c-42.2-0.1-84.5-0.1-126.7,0 c-3.3,0-3.9-0.9-3.9-4c0.1-73.1,0.1-146.3,0-219.4c0-3.2,0.7-3.9,3.9-3.9c42.4,0.2,84.7,0.2,127.1,0.1c2.9,0,3.8,0.7,3.7,3.7 C176.2,154.4,176.2,191,176.2,227.6C176.2,227.6,176.2,227.6,176.2,227.6z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#FEFEFE",
                                    d: "M123.5,368.2c0,8-6.6,14.6-14.5,14.6c-8.1,0-14.7-6.7-14.6-14.9c0.1-8,6.7-14.4,14.8-14.3 C117.2,353.7,123.5,360.1,123.5,368.2z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Please rotate your screen"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PleaseRotate);


/***/ }),

/***/ 3859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4573);


const Sidebar = (props)=>{
    const emissionHoveranimation = (part)=>{
        (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__/* .emissionAnimation */ .$K)(part);
    };
    const colors = [
        {
            name: "white",
            r: 255,
            g: 247,
            b: 232
        },
        {
            name: "black",
            r: 0,
            g: 0,
            b: 0
        },
        {
            name: "green",
            r: 25,
            g: 61,
            b: 50
        },
        {
            name: "red",
            r: 83,
            g: 32,
            b: 44
        }
    ];
    const defaultTextureUid = (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__/* .getMaterials */ .aS)().filter((r)=>{
        return r.name == "Leather_001";
    })[0]?.channels.NormalMap.texture.uid || "";
    const updateColor = async (name, r, g, b)=>{
        //let textureUID = "";
        let bumpMapUID = defaultTextureUid;
        if (name == "green") {
            bumpMapUID = await (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__/* .addTexture */ .iF)("https://i.imgur.com/Tn2UYDu.jpg");
        //textureUID = await addTexture("https://i.imgur.com/wHFrCPy.jpg");
        }
        //setTexture("Leather_001", textureUID);
        console.log(bumpMapUID);
        (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__/* .setBumpMap */ .Tx)("Leather_001", bumpMapUID);
        (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__/* .changeColor */ .zX)("Leather_001", {
            r,
            g,
            b
        });
        (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_1__/* .changeColor */ .zX)("Leather_002", {
            r,
            g,
            b
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
            className: "flex flex-col text-left p-10 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl mt-10",
                    children: "Sardine"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-2xl mt-3",
                    children: "3500 €"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "my-10 text-xl",
                    children: "Bag made from supple lambskin leather using Intrecciato Craftsmanship featuring sculptural Read more"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "font-bold text-xl",
                    children: [
                        "Colors:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap gap-5 my-4",
                            children: colors.map(({ name , r , g , b  })=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        updateColor(name, r, g, b);
                                    },
                                    className: "w-[40px] h-[40px] rounded-full cursor-pointer hover:opacity-70",
                                    style: {
                                        backgroundColor: `rgb(${r},${g},${b})`
                                    }
                                });
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-[300px] flex flex-col mt-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "p-3 border border-2 border-solid border-black",
                            children: "Add to bag"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "p-3 mt-5 bg-black text-white border border-2 border-solid border-black",
                            children: "Check in-store availability"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 2801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_debug__WEBPACK_IMPORTED_MODULE_3__]);
_components_debug__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Viewer = ({ apiRef , modelId , setIsModelLoaded , setMaterials , setNodes  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let iframe = document.getElementById("api-frame");
        let client = new window.Sketchfab(iframe);
        client.init(modelId, {
            autostart: 1,
            navigation: 0,
            ui_controls: 0,
            ui_stop: 0,
            ui_animations: 0,
            ui_general_controls: 0,
            ui_infos: 0,
            ui_loading: 0,
            ui_watermark: 0,
            transparent: 0,
            success: (callback)=>{
                apiRef.current = callback;
                callback.addEventListener("viewerready", function() {
                    setIsModelLoaded(true);
                    apiRef.current.getNodeMap((err, nodes)=>{
                        if (!err) {
                            let nodeList = Object.values(nodes).map((item)=>{
                                return {
                                    instanceID: item.instanceID,
                                    name: item.name
                                };
                            });
                            setNodes(nodeList);
                        }
                    });
                    apiRef.current.getMaterialList(function(err, materials) {
                        if (!err) {
                            setMaterials(materials);
                        }
                    });
                });
            }
        });
    }, [
        apiRef,
        modelId,
        setIsModelLoaded,
        setMaterials
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "viewer",
            children: [
                router.query.debug && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_debug__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "numbers",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                        width: "400",
                        height: "400",
                        id: "numberCanvas"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    title: "Sketchfab Viewer",
                    src: "",
                    id: "api-frame",
                    width: "400"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Viewer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8407);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4320);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3859);
/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2801);
/* harmony import */ var _components_loadingScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8919);
/* harmony import */ var _components_pleaseRotate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2368);
/* harmony import */ var _utils_car__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(325);
/* harmony import */ var _utils_sketchfab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4573);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _store_store__WEBPACK_IMPORTED_MODULE_5__, _components_viewer__WEBPACK_IMPORTED_MODULE_8__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _store_store__WEBPACK_IMPORTED_MODULE_5__, _components_viewer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";














const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_12___default()();
function Home({ data  }) {
    const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__/* .useCarStore */ .r)((state)=>state);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const apiRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [modelId, setModelId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("24523f1bb77c4b20b39d12d906938ec5");
    const [isModelLoaded, setIsModelLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [materials, setMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [nodes, setNodes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const innerHeight =  false ? 0 : 0;
    const innerWidth =  false ? 0 : 0;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (materials[0] && nodes[0]) {
            (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_13__/* .initService */ .Qc)(apiRef.current, materials, nodes);
            getData();
        }
    }, [
        materials,
        nodes
    ]);
    //Load the default car model
    const setDefaultCar = async (newCar)=>{
        (0,_utils_car__WEBPACK_IMPORTED_MODULE_11__/* .selectCar */ .PR)(newCar);
        store.updateCar(newCar);
        setShowLoading(false);
    };
    const changeScenario = (val)=>{
        setModelId(val);
    };
    const getData = async ()=>{
        if (router.query.id) {
            await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(publicRuntimeConfig.NEXT_PUBLIC_CDN + "json/" + router.query.id + ".json").then(({ data  })=>{
                setDefaultCar(data.options);
            });
        } else {
            setDefaultCar(store.car);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full grid grid-cols-[1fr,550px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Bottega Veneta | Configurateur"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pleaseRotate__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                showLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loadingScreen__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_viewer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    apiRef: apiRef,
                    modelId: modelId,
                    setIsModelLoaded: setIsModelLoaded,
                    setMaterials: setMaterials,
                    setNodes: setNodes
                }),
                materials.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    changeScenario: changeScenario
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useCarStore)
/* harmony export */ });
/* unused harmony export useModelStore */
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useCarStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        car: {
            model: {
                id: 1,
                name: "LM 01A"
            },
            URL: "LM 01A.jpeg",
            Paintwork: {
                id: 15
            },
            Livery: {
                id: 4
            },
            LiveryExtra: {
                id: 33
            },
            Interior: {
                id: 41
            },
            Piping: {
                id: 55
            },
            Tonneau: {
                id: 53
            },
            radiatorNumber: {
                show: false,
                parts: [
                    "Number_6",
                    "Number_7"
                ],
                number: "",
                type: "transparent",
                numberColor: {
                    id: 33
                },
                typography: "Acumin Variable Concept Condensed Black",
                fontSize: "195px"
            },
            roundelNumber: {
                show: false,
                parts: [
                    "Number_6",
                    "Number_7"
                ],
                number: "",
                type: "transparent",
                numberColor: {
                    id: 33
                },
                typography: "Acumin Variable Concept Condensed Black",
                fontSize: "195px"
            },
            flag: {
                show: false,
                parts: [
                    "Number_6",
                    "Number_7"
                ]
            },
            parts: [
                "Lip_1",
                "Lip_2"
            ],
            racePack: "Base",
            borranniUpgrade: false
        },
        updateCar: (val)=>set(()=>({
                    car: val
                }))
    }));
const useModelStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        modelType: "Historic Liveries",
        colorCategory: "Paintwork",
        updateModelType: (val)=>set(()=>({
                    modelType: val
                })),
        updateColorCategory: (val)=>set(()=>({
                    colorCategory: val
                }))
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PR": () => (/* binding */ selectCar)
});

// UNUSED EXPORTS: setDefaultCar, toggleBorranni, toggleNumber, toggleRacePack, validateColor

;// CONCATENATED MODULE: ./data/nodes.ts
const nodesToHide = [
    "Stripe_1",
    "Stripe_2",
    "Stripe_3",
    "Stripe_4",
    "Stripe_5",
    "Stripe_6",
    "Lip_1",
    "Lip_2",
    "Lip_3",
    "Tail_1",
    "Number_1",
    "Number_2",
    "Number_3",
    "Number_4",
    "Number_5",
    "Number_6",
    "Number_7"
];

// EXTERNAL MODULE: ./utils/sketchfab.ts
var sketchfab = __webpack_require__(4573);
;// CONCATENATED MODULE: ./data/colors.ts
const categories = [
    {
        name: "Paintwork",
        id: "Carroceria"
    },
    {
        name: "Livery",
        id: "Livery_1"
    },
    {
        name: "Interior",
        id: "Asiento"
    },
    {
        name: "Piping",
        id: "Pipin"
    },
    {
        name: "Tonneau",
        id: "Textura_lona"
    }
];
const colors_colorList = [
    //Exterior
    {
        id: 1,
        name: "Bianco Avus",
        r: 223,
        g: 223,
        b: 213,
        metallic: false
    },
    {
        id: 2,
        name: "Giallo Modena",
        r: 221,
        g: 188,
        b: 0,
        metallic: false
    },
    {
        id: 3,
        name: "Rosso Scuderia",
        r: 251,
        g: 0,
        b: 0,
        metallic: false
    },
    {
        id: 4,
        name: "Rosso Corsa",
        r: 237,
        g: 0,
        b: 7,
        metallic: false
    },
    {
        id: 5,
        name: "Rosso Mugello",
        r: 187,
        g: 0,
        b: 35,
        metallic: false
    },
    {
        id: 6,
        name: "Grigio Ingrid",
        r: 181,
        g: 177,
        b: 166,
        metallic: true
    },
    {
        id: 7,
        name: "Argento Nurburgring",
        r: 233,
        g: 226,
        b: 221,
        metallic: true
    },
    {
        id: 8,
        name: "Grigio Titanio",
        r: 198,
        g: 196,
        b: 195,
        metallic: true
    },
    {
        id: 9,
        name: "Grigio Silverstone",
        r: 79,
        g: 73,
        b: 70,
        metallic: false
    },
    {
        id: 10,
        name: "Grigio Alloy",
        r: 234,
        g: 234,
        b: 235,
        metallic: true
    },
    {
        id: 11,
        name: "Blu Tour de France",
        r: 47,
        g: 33,
        b: 118,
        metallic: true
    },
    {
        id: 12,
        name: "Blu Abu Dhabi",
        r: 23,
        g: 31,
        b: 69,
        metallic: false
    },
    {
        id: 13,
        name: "Blu Mirabeau",
        r: 59,
        g: 74,
        b: 126,
        metallic: false
    },
    {
        id: 14,
        name: "Blu Pozzi",
        r: 33,
        g: 35,
        b: 46,
        metallic: false
    },
    {
        id: 15,
        name: "Nero Ds",
        r: 29,
        g: 29,
        b: 27,
        metallic: false
    },
    {
        id: 16,
        name: "Nero Daytona",
        r: 43,
        g: 43,
        b: 41,
        metallic: false
    },
    {
        id: 17,
        name: "Blu Scozia",
        r: 0,
        g: 14,
        b: 57,
        metallic: false
    },
    {
        id: 18,
        name: "Vinaccia",
        r: 43,
        g: 10,
        b: 28,
        metallic: false
    },
    {
        id: 19,
        name: "Verde Abetone",
        r: 4,
        g: 38,
        b: 26,
        metallic: false
    },
    {
        id: 20,
        name: "Grigio Scuro",
        r: 65,
        g: 60,
        b: 58,
        metallic: false
    },
    {
        id: 21,
        name: "Grigio Ferro Met ",
        r: 160,
        g: 151,
        b: 146,
        metallic: true
    },
    {
        id: 22,
        name: "Grigio Medio",
        r: 89,
        g: 108,
        b: 107,
        metallic: false
    },
    {
        id: 23,
        name: "Azzurro Met",
        r: 139,
        g: 184,
        b: 216,
        metallic: true
    },
    {
        id: 24,
        name: "Avio Met",
        r: 131,
        g: 170,
        b: 219,
        metallic: false
    },
    {
        id: 25,
        name: "Celeste Met",
        r: 150,
        g: 172,
        b: 179,
        metallic: true
    },
    {
        id: 26,
        name: "Avorio",
        r: 203,
        g: 197,
        b: 174,
        metallic: false
    },
    {
        id: 27,
        name: "Blu Nart",
        r: 31,
        g: 57,
        b: 100,
        metallic: false
    },
    {
        id: 28,
        name: "Verde British Racing Green",
        r: 22,
        g: 50,
        b: 22,
        metallic: false
    },
    {
        id: 29,
        name: "Rubino Micalizzato",
        r: 69,
        g: 0,
        b: 3,
        metallic: true
    },
    {
        id: 30,
        name: "Blu Le Mans FER",
        r: 31,
        g: 17,
        b: 76,
        metallic: true
    },
    {
        id: 31,
        name: "Rosso Dino",
        r: 252,
        g: 40,
        b: 0,
        metallic: false
    },
    {
        id: 32,
        name: "Rosso Barchetta",
        r: 122,
        g: 15,
        b: 47,
        metallic: false
    },
    {
        id: 33,
        name: "Bianco Cervino",
        r: 206,
        g: 213,
        b: 209,
        metallic: false
    },
    {
        id: 34,
        name: "Blu Corsa",
        r: 0,
        g: 123,
        b: 224,
        metallic: true
    },
    {
        id: 35,
        name: "Giallo Triplostrato",
        r: 241,
        g: 192,
        b: 0,
        metallic: false
    },
    //Interior
    {
        id: 36,
        name: "Nero",
        r: 23,
        g: 19,
        b: 18,
        metallic: false
    },
    {
        id: 37,
        name: "Charcoal",
        r: 72,
        g: 68,
        b: 70,
        metallic: false
    },
    {
        id: 38,
        name: "Blu Sterling",
        r: 32,
        g: 47,
        b: 78,
        metallic: false
    },
    {
        id: 39,
        name: "Blu Medio",
        r: 38,
        g: 58,
        b: 105,
        metallic: false
    },
    {
        id: 40,
        name: "Carta Da Zucchero",
        r: 70,
        g: 92,
        b: 122,
        metallic: false
    },
    {
        id: 41,
        name: "Rosso",
        r: 192,
        g: 61,
        b: 49,
        metallic: false
    },
    {
        id: 42,
        name: "Bordeaux",
        r: 128,
        g: 50,
        b: 52,
        metallic: false
    },
    {
        id: 43,
        name: "Cioccolato",
        r: 103,
        g: 65,
        b: 40,
        metallic: false
    },
    {
        id: 44,
        name: "Iroko",
        r: 127,
        g: 79,
        b: 51,
        metallic: false
    },
    {
        id: 45,
        name: "Terra Bruciata",
        r: 127,
        g: 79,
        b: 51,
        metallic: false
    },
    {
        id: 46,
        name: "Tortora",
        r: 172,
        g: 160,
        b: 151,
        metallic: false
    },
    {
        id: 47,
        name: "Cuoio",
        r: 185,
        g: 111,
        b: 65,
        metallic: false
    },
    {
        id: 48,
        name: "Beige Tradizione",
        r: 165,
        g: 111,
        b: 65,
        metallic: false
    },
    {
        id: 49,
        name: "Sabbia",
        r: 233,
        g: 216,
        b: 188,
        metallic: false
    },
    {
        id: 50,
        name: "Crema",
        r: 248,
        g: 246,
        b: 220,
        metallic: false
    },
    //Tonneau
    {
        id: 51,
        name: "Rosso",
        r: 192,
        g: 61,
        b: 49,
        metallic: false
    },
    {
        id: 52,
        name: "Nero",
        r: 34,
        g: 44,
        b: 44,
        metallic: false
    },
    //Pipings
    {
        id: 53,
        name: "Bordeaux",
        r: 103,
        g: 47,
        b: 49,
        metallic: false
    },
    {
        id: 54,
        name: "Nero",
        r: 34,
        g: 44,
        b: 44,
        metallic: false
    },
    {
        id: 55,
        name: "White",
        r: 232,
        g: 232,
        b: 232,
        metallic: false
    },
    //Livery
    {
        id: 56,
        name: "Giallo Modena",
        r: 229,
        g: 192,
        b: 21,
        metallic: false
    },
    {
        id: 57,
        name: "Verde British Racing Green",
        r: 38,
        g: 49,
        b: 38,
        metallic: false
    },
    {
        id: 58,
        name: "Bianco Cervino",
        r: 200,
        g: 195,
        b: 194,
        metallic: false
    },
    {
        id: 59,
        name: "Blu Le Mans FER",
        r: 31,
        g: 18,
        b: 75,
        metallic: false
    },
    {
        id: 60,
        name: "Rosso Barchetta",
        r: 122,
        g: 15,
        b: 47,
        metallic: false
    },
    {
        id: 61,
        name: "Rosso Corsa",
        r: 237,
        g: 0,
        b: 7,
        metallic: false
    },
    {
        id: 62,
        name: "Rosso Mugello",
        r: 187,
        g: 0,
        b: 35,
        metallic: false
    },
    {
        id: 63,
        name: "Blu Nart",
        r: 31,
        g: 57,
        b: 100,
        metallic: false
    },
    {
        id: 64,
        name: "BP Green",
        r: 47,
        g: 161,
        b: 85,
        metallic: false
    },
    //Fix
    {
        id: 65,
        name: "Bianco Italia",
        r: 246,
        g: 245,
        b: 249,
        metallic: true
    },
    {
        id: 66,
        name: "Canna Di Fucile",
        r: 72,
        g: 72,
        b: 80,
        metallic: false
    },
    {
        id: 67,
        name: "Rosso Fiorano Fer",
        r: 117,
        g: 0,
        b: 0,
        metallic: false
    }
];
const colors_matrix = [
    {
        id: 4,
        Livery: [
            33,
            27,
            29
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    55
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    55
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    55
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    55
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54,
                    55
                ]
            }
        ]
    },
    {
        id: 3,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 31,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: false,
                id: 48,
                p: [
                    48
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 5,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 67,
        Livery: [
            33,
            27,
            29
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    55
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    55
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    55
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    55
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54,
                    55
                ]
            }
        ]
    },
    {
        id: 32,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 29,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 18,
        Livery: [
            15
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 35,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 2,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 28,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    54
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 19,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    54
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 34,
        Livery: [
            56
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 23,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 25,
        Livery: [
            33
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 24,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 13,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: false,
                id: 48,
                p: [
                    48
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 27,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 11,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: false,
                id: 48,
                p: [
                    48
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 30,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 14,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 12,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: false,
                id: 48,
                p: [
                    48
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 17,
        Livery: [
            56
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 10,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 37,
                p: [
                    37
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: false,
                id: 48,
                p: [
                    48
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 8,
        Livery: [
            17,
            56
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: false,
                id: 43,
                p: [
                    43
                ]
            },
            {
                available: false,
                id: 44,
                p: [
                    44
                ]
            },
            {
                available: false,
                id: 45,
                p: [
                    45
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: false,
                id: 47,
                p: [
                    47
                ]
            },
            {
                available: false,
                id: 48,
                p: [
                    48
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 7,
        Livery: [
            32,
            63
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 26,
        Livery: [
            32
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    54
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: false,
                id: 41,
                p: [
                    41
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 6,
        Livery: [
            33
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 37,
                p: [
                    37
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    54
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 21,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 22,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 38,
                p: [
                    38
                ]
            },
            {
                available: false,
                id: 39,
                p: [
                    39
                ]
            },
            {
                available: false,
                id: 40,
                p: [
                    40
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: false,
                id: 42,
                p: [
                    42
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    54
                ]
            },
            {
                available: false,
                id: 46,
                p: [
                    46
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 9,
        Livery: [
            33
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 66,
        Livery: [
            65
        ],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 20,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    54
                ]
            },
            {
                available: false,
                id: 49,
                p: [
                    49
                ]
            },
            {
                available: false,
                id: 50,
                p: [
                    50
                ]
            }
        ]
    },
    {
        id: 16,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 15,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 65,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 33,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    54
                ]
            }
        ]
    },
    {
        id: 1,
        Livery: [],
        Interior: [
            {
                available: true,
                id: 36,
                p: [
                    36,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 37,
                p: [
                    37,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 38,
                p: [
                    38,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 39,
                p: [
                    39,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 40,
                p: [
                    40,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 41,
                p: [
                    41,
                    53,
                    54,
                    55
                ]
            },
            {
                available: true,
                id: 42,
                p: [
                    42,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 43,
                p: [
                    43,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 44,
                p: [
                    44,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 45,
                p: [
                    45,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 46,
                p: [
                    46,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 47,
                p: [
                    47,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 48,
                p: [
                    48,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 49,
                p: [
                    49,
                    53,
                    54
                ]
            },
            {
                available: true,
                id: 50,
                p: [
                    50,
                    53,
                    54
                ]
            }
        ]
    }
];

;// CONCATENATED MODULE: ./utils/number.ts
const printNumber = ({ type , color , val , background , typography , fontSize  })=>{
    let canvas = document.getElementById("numberCanvas");
    canvas.style.backgroundColor = "black";
    let ctx = canvas.getContext("2d");
    ctx.font = `${fontSize} ${typography}`;
    ctx.textAlign = "center";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (type == "mask") {
        ctx.font = `${fontSize} ${typography}`;
        ctx.fillStyle = `rgb(${background.r},${background.g},${background.b})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`;
    ctx.fillText(val, canvas.width / 2, 270);
    return canvas.toDataURL();
};
/* harmony default export */ const number = (printNumber);

;// CONCATENATED MODULE: ./utils/car.ts




const selectCar = async (newCar)=>{
    return;
    const nodesToShow = newCar.parts;
    nodesToHide.forEach((node)=>{
        (0,sketchfab/* toggleNode */.bh)(node, "hide");
    });
    nodesToShow.forEach((node)=>{
        (0,sketchfab/* toggleNode */.bh)(node, "show");
    });
    toggleRacePack(newCar.racePack);
    toggleNumber(newCar.radiatorNumber.parts, newCar.radiatorNumber.show);
    toggleBorranni(newCar.borranniUpgrade);
    (0,sketchfab/* changeColor */.zX)("Livery_1", newCar["Livery"].id);
    (0,sketchfab/* changeColor */.zX)("Livery_2", newCar["LiveryExtra"].id);
    (0,sketchfab/* changeColor */.zX)("Pipin", newCar["Piping"].id);
    (0,sketchfab/* changeColor */.zX)("Carroceria", newCar.Paintwork.id);
    (0,sketchfab/* changeColor */.zX)("Number_A", newCar.Paintwork.id);
    (0,sketchfab/* changeColor */.zX)("Asiento", newCar.Interior.id);
    (0,sketchfab/* changeColor */.zX)("Textura_lona", newCar.Tonneau.id);
    const image = number({
        type: "mask",
        color: colors_colorList[newCar.radiatorNumber.numberColor.id - 1],
        val: newCar.radiatorNumber.number,
        background: newCar.radiatorNumber.type == "circle" ? {
            r: 0,
            g: 255,
            b: 255
        } : colors_colorList[newCar.Paintwork.id - 1],
        typography: newCar.radiatorNumber.typography,
        fontSize: newCar.radiatorNumber.fontSize
    });
    const textureUid = await (0,sketchfab/* addTexture */.iF)(image);
    (0,sketchfab/* setTexture */.wu)("Number_A", textureUid);
};
const setDefaultCar = ()=>{
    changeColor("Livery_1", 33);
    changeColor("Pipin", 54);
    changeColor("Carroceria", 4);
    changeColor("Asiento", 36);
    changeColor("Number_A", 33);
};
const validateColor = (car)=>{
    let selectedPaintWork = matrix.filter((r)=>{
        return r.id == car.Paintwork.id;
    })[0];
    const result = selectedPaintWork.Interior.find((i)=>{
        return i.id == car.Interior.id;
    });
    let defaultInteriorId = selectedPaintWork.Interior[0].id;
    let defaultInteriorColor = colorList[defaultInteriorId - 1];
    return {
        available: result.available,
        Interior: defaultInteriorColor
    };
};
const toggleRacePack = (val)=>{
    const defaultNodes = [
        "Head",
        "Frenos"
    ];
    defaultNodes.forEach((node)=>{
        (0,sketchfab/* toggleNode */.bh)(node, val == "Pacco Gara" ? "hide" : "show");
    });
    (0,sketchfab/* toggleNode */.bh)("Gara", val == "Pacco Gara" ? "show" : "hide");
};
const toggleBorranni = (val)=>{
    (0,sketchfab/* toggleNode */.bh)("Llantas", val ? "hide" : "show");
    (0,sketchfab/* toggleNode */.bh)("Gara_Borranis", val ? "show" : "hide");
};
const toggleNumber = (nodes, val)=>{
    if (!val) {
        nodes = [
            "Number_1",
            "Number_2",
            "Number_3",
            "Number_4",
            "Number_5",
            "Number_6",
            "Number_7"
        ];
    }
    nodes.forEach((node)=>{
        (0,sketchfab/* toggleNode */.bh)(node, val ? "show" : "hide");
    });
};


/***/ }),

/***/ 4573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$K": () => (/* binding */ emissionAnimation),
/* harmony export */   "Qc": () => (/* binding */ initService),
/* harmony export */   "Tx": () => (/* binding */ setBumpMap),
/* harmony export */   "aS": () => (/* binding */ getMaterials),
/* harmony export */   "bS": () => (/* binding */ getNodeList),
/* harmony export */   "bh": () => (/* binding */ toggleNode),
/* harmony export */   "fN": () => (/* binding */ fastChangeMainColor),
/* harmony export */   "iF": () => (/* binding */ addTexture),
/* harmony export */   "wu": () => (/* binding */ setTexture),
/* harmony export */   "zX": () => (/* binding */ changeColor)
/* harmony export */ });
/* unused harmony exports generateScreenshot, setMetallic, setUVscale, getCamera, setCamera */
let api = null;
let materials = [];
let nodes = [];
//Set Sektfhcab API to make it available
const initService = (apiRef, materialList, nodeList)=>{
    api = apiRef;
    materials = materialList;
    nodes = nodeList;
    console.log(materials);
};
const getMaterials = ()=>{
    return materials;
};
const getNodeList = ()=>{
    return nodes;
};
const getCamera = ()=>{
    api.getCameraLookAt(function(err, camera) {
        console.log(camera.position); // [x, y, z]
        console.log(camera.target); // [x, y, z]
    });
};
const setCamera = ({ position , target  })=>{
    api.setCameraLookAt(position, target, 2);
};
const changeColor = async (part, colorCode)=>{
    let index = materials.findIndex((m)=>{
        return m.name === part;
    });
    materials[index].channels.AlbedoPBR.color = [
        convertRGBtoLinear(colorCode.r),
        convertRGBtoLinear(colorCode.g),
        convertRGBtoLinear(colorCode.b)
    ];
    await api.setMaterial(materials[index]);
};
const fastChangeMainColor = ({ r , g , b  })=>{
    materials[13].channels.AlbedoPBR.color = [
        convertRGBtoLinear(r),
        convertRGBtoLinear(g),
        convertRGBtoLinear(b)
    ];
    api.setMaterial(materials[13]);
};
const addTexture = async (base64)=>{
    return new Promise((resolve, reject)=>{
        api.addTexture(base64, function(err, id) {
            if (!err) {
                resolve(id);
            } else {
                reject(err);
            }
        });
    });
};
const setTexture = (part, textureUid)=>{
    let index = materials.findIndex((m)=>{
        return m.name === part;
    });
    if (textureUid) {
        materials[index].channels.AlbedoPBR = {
            texture: {
                uid: textureUid
            }
        };
        materials[index].channels.AlbedoPBR.factor = 1;
    } else {
        materials[index].channels.AlbedoPBR = {
            texture: ""
        };
    }
    api.setMaterial(materials[index], ()=>{});
};
const setBumpMap = (part, textureUid)=>{
    let index = materials.findIndex((m)=>{
        return m.name === part;
    });
    materials[index].channels.NormalMap = {
        enable: true,
        factor: 1,
        texture: {
            uid: textureUid
        }
    };
    api.setMaterial(materials[index], ()=>{});
};
const setUVscale = (part)=>{
    let index = materials.findIndex((m)=>{
        return m.name === part;
    });
    api.setUVScale(materials[index], "AlbedoPBR", 10, 10);
};
const toggleNode = (node, action)=>{
    let instanceID = nodes.filter((r)=>{
        return r.name === node;
    });
    if (instanceID[0]) {
        if (action == "show") {
            api.show(instanceID[0].instanceID);
        } else {
            api.hide(instanceID[0].instanceID);
        }
    }
};
function convertColor(color) {
    return [
        color.r,
        color.g,
        color.b
    ];
}
const generateScreenshot = async ()=>{
    let camera = {
        position: [
            -71.71309445654904,
            -57.16881106698193,
            32.2789393429998
        ],
        target: [
            2.701051515138964,
            0.00007667749023099191,
            4.360299098332644
        ]
    };
    await api.setCameraLookAt(camera.position, camera.target, 0);
    let screenshot = await makeScreenshot();
    return screenshot;
};
const makeScreenshot = async ()=>{
    return new Promise((resolve, reject)=>{
        api.getScreenShot(700, 394, "image/png", function(error, result) {
            if (error) {
                reject(error);
            } else {
                const base64WithoutHeader = result.substring(result.indexOf(",") + 1);
                resolve(base64WithoutHeader);
            }
        });
    });
};
function convertRGBtoLinear(color) {
    let value = color / 255;
    if (value <= 0 && value <= 0.04045) {
        return value / 12.92;
    } else {
        return ((value + 0.055) / 1.055) ** 2.4;
    }
}
async function setMetallic(material, value) {
    if (value) {
        material.channels.MetalnessPBR.factor = 1;
        material.channels.RoughnessPBR.factor = 0.6;
    } else {
        material.channels.MetalnessPBR.factor = 0;
        material.channels.RoughnessPBR.factor = 0.2;
    }
    await api.setMaterial(materials[13]);
}
function emissionAnimation(part) {
    let index = materials.findIndex((m)=>{
        return m.name === part;
    });
    function changeEmitFactor(i) {
        materials[index].channels.EmitColor.enable = true;
        materials[index].channels.EmitColor.factor = i;
        api.setMaterial(materials[index], ()=>{});
    }
    let number = 0;
    let increment = 0.025;
    function animateNumber() {
        number += increment;
        if (number >= 0.4) {
            increment = -increment;
        }
        if (number > 0) {
            setTimeout(animateNumber, 10); // Llamar a la función nuevamente después de 10 milisegundos
        }
        changeEmitFactor(number);
    }
    animateNumber();
}



/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4186));
module.exports = __webpack_exports__;

})();