"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/store */ \"./store/store.ts\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/header */ \"./components/header.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/viewer */ \"./components/viewer.tsx\");\n/* harmony import */ var _components_loadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/loadingScreen */ \"./components/loadingScreen.tsx\");\n/* harmony import */ var _components_pleaseRotate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/pleaseRotate */ \"./components/pleaseRotate.tsx\");\n/* harmony import */ var _utils_car__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/car */ \"./utils/car.ts\");\n/* harmony import */ var _utils_sketchfab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/sketchfab */ \"./utils/sketchfab.ts\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_12___default()();\nfunction Home(param) {\n    let { data  } = param;\n    _s();\n    const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.useCarStore)((state)=>state);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const apiRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [modelId, setModelId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24523f1bb77c4b20b39d12d906938ec5\");\n    const [isModelLoaded, setIsModelLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [materials, setMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nodes, setNodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const innerHeight =  true ? window.innerHeight : 0;\n    const innerWidth =  true ? window.innerWidth : 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (materials[0] && nodes[0]) {\n            (0,_utils_sketchfab__WEBPACK_IMPORTED_MODULE_11__.initService)(apiRef.current, materials, nodes);\n            getData();\n        }\n    }, [\n        materials,\n        nodes\n    ]);\n    //Load the default car model\n    const setDefaultCar = async (newCar)=>{\n        (0,_utils_car__WEBPACK_IMPORTED_MODULE_10__.selectCar)(newCar);\n        store.updateCar(newCar);\n        setShowLoading(false);\n    };\n    const changeScenario = (val)=>{\n        setModelId(val);\n    };\n    const getData = async ()=>{\n        if (router.query.id) {\n            await axios__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(publicRuntimeConfig.NEXT_PUBLIC_CDN + \"json/\" + router.query.id + \".json\").then((param)=>{\n                let { data  } = param;\n                setDefaultCar(data.options);\n            });\n        } else {\n            setDefaultCar(store.car);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full grid grid-[1fr , 300px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bottega Veneta | Configurateur\"\n                    }, void 0, false, {\n                        fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pleaseRotate__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                showLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loadingScreen__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_viewer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    apiRef: apiRef,\n                    modelId: modelId,\n                    setIsModelLoaded: setIsModelLoaded,\n                    setMaterials: setMaterials,\n                    setNodes: setNodes\n                }, void 0, false, {\n                    fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                materials.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    changeScenario: changeScenario\n                }, void 0, false, {\n                    fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/leo/Documents/Proyectos/Demos/Bottega/pages/index.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Hgu/pT37cvAH+qAp59WLYX4YwoQ=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_4__.useCarStore,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBCO0FBRTBCO0FBQ1o7QUFDWDtBQUVlO0FBSUg7QUFDRTtBQUNGO0FBQ2M7QUFDRjtBQUViO0FBQ1E7QUFFWjtBQUNwQyxNQUFNLEVBQUVlLG9CQUFtQixFQUFFLEdBQUdELG1EQUFTQTtBQUUxQixTQUFTRSxLQUFLLEtBQWEsRUFBRTtRQUFmLEVBQUVDLEtBQUksRUFBTyxHQUFiOztJQUMzQixNQUFNQyxRQUFRWix5REFBV0EsQ0FBQyxDQUFDYSxRQUFlQTtJQUUxQyxNQUFNQyxTQUFTaEIsc0RBQVNBO0lBRXhCLE1BQU1pQixTQUFjcEIsNkNBQU1BLENBQUMsSUFBSTtJQUMvQixNQUFNLENBQUNxQixTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNzQixlQUFlQyxpQkFBaUIsR0FBR3ZCLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEQsTUFBTSxDQUFDd0IsYUFBYUMsZUFBZSxHQUFHekIsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNLENBQUMwQixXQUFXQyxhQUFhLEdBQUczQiwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xELE1BQU0sQ0FBQzRCLE9BQU9DLFNBQVMsR0FBRzdCLCtDQUFRQSxDQUFNLEVBQUU7SUFDMUMsTUFBTThCLGNBQWMsS0FBNkIsR0FBR0MsT0FBT0QsV0FBVyxHQUFHLENBQUM7SUFDMUUsTUFBTUUsYUFBYSxLQUE2QixHQUFHRCxPQUFPQyxVQUFVLEdBQUcsQ0FBQztJQUV4RS9CLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJeUIsU0FBUyxDQUFDLEVBQUUsSUFBSUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUM1QmpCLDhEQUFXQSxDQUFDUSxPQUFPYyxPQUFPLEVBQUVQLFdBQVdFO1lBQ3ZDTTtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNSO1FBQVdFO0tBQU07SUFFckIsNEJBQTRCO0lBQzVCLE1BQU1PLGdCQUFnQixPQUFPQyxTQUFnQjtRQUMzQzFCLHNEQUFTQSxDQUFDMEI7UUFDVnBCLE1BQU1xQixTQUFTLENBQUNEO1FBQ2hCWCxlQUFlLEtBQUs7SUFDdEI7SUFNQSxNQUFNYSxpQkFBaUIsQ0FBQ0MsTUFBZ0I7UUFDdENsQixXQUFXa0I7SUFDYjtJQUVBLE1BQU1MLFVBQVUsVUFBWTtRQUMxQixJQUFJaEIsT0FBT3NCLEtBQUssQ0FBQ0MsRUFBRSxFQUFFO1lBQ25CLE1BQU0zQyxrREFDQSxDQUNGZSxvQkFBb0I4QixlQUFlLEdBQ2pDLFVBQ0F6QixPQUFPc0IsS0FBSyxDQUFDQyxFQUFFLEdBQ2YsU0FFSEcsSUFBSSxDQUFDLFNBQWM7b0JBQWIsRUFBRTdCLEtBQUksRUFBRTtnQkFDYm9CLGNBQWNwQixLQUFLOEIsT0FBTztZQUM1QjtRQUNKLE9BQU87WUFDTFYsY0FBY25CLE1BQU04QixHQUFHO1FBQ3pCLENBQUM7SUFDSDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQzdDLGtEQUFJQTs4QkFDSCw0RUFBQzhDO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ3hDLGdFQUFZQTs7Ozs7OEJBQ2IsOERBQUNKLDBEQUFNQTs7Ozs7Z0JBQ05tQiw2QkFBZSw4REFBQ2hCLGlFQUFhQTs7Ozs7OEJBQzlCLDhEQUFDRCwwREFBTUE7b0JBQ0xZLFFBQVFBO29CQUNSQyxTQUFTQTtvQkFDVEcsa0JBQWtCQTtvQkFDbEJJLGNBQWNBO29CQUNkRSxVQUFVQTs7Ozs7O2dCQUVYSCxVQUFVd0IsTUFBTSxHQUFHLG1CQUNsQiw4REFBQzVDLDJEQUFPQTtvQkFBQ2dDLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7QUFLbkMsQ0FBQztHQTNFdUJ4Qjs7UUFDUlYscURBQVdBO1FBRVZGLGtEQUFTQTs7O0tBSEZZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgeyB1c2VDYXJTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5cbmltcG9ydCB7IENhciB9IGZyb20gXCJpbnRlcmZhY2VzL2dlbmVyYWxcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIkAvY29tcG9uZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvdmlld2VyXCI7XG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiQC9jb21wb25lbnRzL2xvYWRpbmdTY3JlZW5cIjtcbmltcG9ydCBQbGVhc2VSb3RhdGUgZnJvbSBcIkAvY29tcG9uZW50cy9wbGVhc2VSb3RhdGVcIjtcblxuaW1wb3J0IHsgc2VsZWN0Q2FyIH0gZnJvbSBcIkAvdXRpbHMvY2FyXCI7XG5pbXBvcnQgeyBpbml0U2VydmljZSB9IGZyb20gXCJAL3V0aWxzL3NrZXRjaGZhYlwiO1xuXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfTogYW55KSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlQ2FyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBhcGlSZWY6IGFueSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW21vZGVsSWQsIHNldE1vZGVsSWRdID0gdXNlU3RhdGUoXCIyNDUyM2YxYmI3N2M0YjIwYjM5ZDEyZDkwNjkzOGVjNVwiKTtcbiAgY29uc3QgW2lzTW9kZWxMb2FkZWQsIHNldElzTW9kZWxMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWF0ZXJpYWxzLCBzZXRNYXRlcmlhbHNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IFtub2Rlcywgc2V0Tm9kZXNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDA7XG4gIGNvbnN0IGlubmVyV2lkdGggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiAwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1hdGVyaWFsc1swXSAmJiBub2Rlc1swXSkge1xuICAgICAgaW5pdFNlcnZpY2UoYXBpUmVmLmN1cnJlbnQsIG1hdGVyaWFscywgbm9kZXMpO1xuICAgICAgZ2V0RGF0YSgpO1xuICAgIH1cbiAgfSwgW21hdGVyaWFscywgbm9kZXNdKTtcblxuICAvL0xvYWQgdGhlIGRlZmF1bHQgY2FyIG1vZGVsXG4gIGNvbnN0IHNldERlZmF1bHRDYXIgPSBhc3luYyAobmV3Q2FyOiBDYXIpID0+IHtcbiAgICBzZWxlY3RDYXIobmV3Q2FyKTtcbiAgICBzdG9yZS51cGRhdGVDYXIobmV3Q2FyKTtcbiAgICBzZXRTaG93TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaGFuZ2VTY2VuYXJpbzogKHZhbDogU3RyaW5nKSA9PiB2b2lkO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlU2NlbmFyaW8gPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRNb2RlbElkKHZhbCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFxuICAgICAgICAgIHB1YmxpY1J1bnRpbWVDb25maWcuTkVYVF9QVUJMSUNfQ0ROICtcbiAgICAgICAgICAgIFwianNvbi9cIiArXG4gICAgICAgICAgICByb3V0ZXIucXVlcnkuaWQgK1xuICAgICAgICAgICAgXCIuanNvblwiXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgc2V0RGVmYXVsdENhcihkYXRhLm9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGVmYXVsdENhcihzdG9yZS5jYXIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtWzFmciAsIDMwMHB4XVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Qm90dGVnYSBWZW5ldGEgfCBDb25maWd1cmF0ZXVyPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGxlYXNlUm90YXRlIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3Nob3dMb2FkaW5nICYmIDxMb2FkaW5nU2NyZWVuIC8+fVxuICAgICAgICA8Vmlld2VyXG4gICAgICAgICAgYXBpUmVmPXthcGlSZWZ9XG4gICAgICAgICAgbW9kZWxJZD17bW9kZWxJZH1cbiAgICAgICAgICBzZXRJc01vZGVsTG9hZGVkPXtzZXRJc01vZGVsTG9hZGVkfVxuICAgICAgICAgIHNldE1hdGVyaWFscz17c2V0TWF0ZXJpYWxzfVxuICAgICAgICAgIHNldE5vZGVzPXtzZXROb2Rlc31cbiAgICAgICAgLz5cbiAgICAgICAge21hdGVyaWFscy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8U2lkZWJhciBjaGFuZ2VTY2VuYXJpbz17Y2hhbmdlU2NlbmFyaW99PjwvU2lkZWJhcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwidXNlQ2FyU3RvcmUiLCJIZWFkZXIiLCJTaWRlYmFyIiwiVmlld2VyIiwiTG9hZGluZ1NjcmVlbiIsIlBsZWFzZVJvdGF0ZSIsInNlbGVjdENhciIsImluaXRTZXJ2aWNlIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkhvbWUiLCJkYXRhIiwic3RvcmUiLCJzdGF0ZSIsInJvdXRlciIsImFwaVJlZiIsIm1vZGVsSWQiLCJzZXRNb2RlbElkIiwiaXNNb2RlbExvYWRlZCIsInNldElzTW9kZWxMb2FkZWQiLCJzaG93TG9hZGluZyIsInNldFNob3dMb2FkaW5nIiwibWF0ZXJpYWxzIiwic2V0TWF0ZXJpYWxzIiwibm9kZXMiLCJzZXROb2RlcyIsImlubmVySGVpZ2h0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImN1cnJlbnQiLCJnZXREYXRhIiwic2V0RGVmYXVsdENhciIsIm5ld0NhciIsInVwZGF0ZUNhciIsImNoYW5nZVNjZW5hcmlvIiwidmFsIiwicXVlcnkiLCJpZCIsImdldCIsIk5FWFRfUFVCTElDX0NETiIsInRoZW4iLCJvcHRpb25zIiwiY2FyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});