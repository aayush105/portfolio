"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navData\": function() { return /* binding */ navData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi2 */ \"./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// icons\n\nvar _s = $RefreshSig$();\n\n// nav data\nconst navData = [\n    {\n        name: \"home\",\n        path: \"/\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiHome, {}, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 13,\n            columnNumber: 36\n        }, undefined)\n    },\n    {\n        name: \"about\",\n        path: \"/about\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiUser, {}, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 14,\n            columnNumber: 42\n        }, undefined)\n    },\n    {\n        name: \"services\",\n        path: \"/services\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiRectangleGroup, {}, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 15,\n            columnNumber: 48\n        }, undefined)\n    },\n    {\n        name: \"work\",\n        path: \"/work\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiViewColumns, {}, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 16,\n            columnNumber: 40\n        }, undefined)\n    },\n    {\n        name: \"testimonials\",\n        path: \"/testimonials\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiChatBubbleBottomCenterText, {}, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        name: \"contact\",\n        path: \"/contact\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiEnvelope, {}, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, undefined)\n    }\n];\n// next link\n\n//next router\n\nconst Nav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathname = router.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full xl:flex-col items-center justify-between xl:justify-center  gap-y-10 px-4 md:px-40 xl:px-0 h-80 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl\",\n            children: navData.map((link, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: link.path,\n                    children: link.icon\n                }, void 0, false, {\n                    fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n                    lineNumber: 44,\n                    columnNumber: 16\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Nav.js\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFFBQVE7OztBQVFpQjtBQUV6QixXQUFXO0FBQ0osTUFBTU0sVUFBVTtJQUNyQjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07UUFBS0Msb0JBQU0sOERBQUNULG1EQUFNQTs7Ozs7SUFBSTtJQUM1QztRQUFFTyxNQUFNO1FBQVNDLE1BQU07UUFBVUMsb0JBQU0sOERBQUNSLG1EQUFNQTs7Ozs7SUFBSTtJQUNsRDtRQUFFTSxNQUFNO1FBQVlDLE1BQU07UUFBYUMsb0JBQU0sOERBQUNOLDZEQUFnQkE7Ozs7O0lBQUk7SUFDbEU7UUFBRUksTUFBTTtRQUFRQyxNQUFNO1FBQVNDLG9CQUFNLDhEQUFDUCwwREFBYUE7Ozs7O0lBQUk7SUFDdkQ7UUFDRUssTUFBTTtRQUNOQyxNQUFNO1FBQ05DLG9CQUFNLDhEQUFDTCx5RUFBNEJBOzs7OztJQUNyQztJQUNBO1FBQ0VHLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxvQkFBTSw4REFBQ0osdURBQVVBOzs7OztJQUNuQjtDQUNELENBQUM7QUFFRixZQUFZO0FBQ2lCO0FBRTdCLGFBQWE7QUFDMkI7QUFFeEMsTUFBTU8sTUFBTSxJQUFNOztJQUNoQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTUcsV0FBV0QsT0FBT0MsUUFBUTtJQUNoQyxxQkFDQSw4REFBQ0M7a0JBRUMsNEVBQUNDO1lBQUlDLFdBQVU7c0JBRVpYLFFBQVFZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO2dCQUM1QixxQkFBTyw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFNRixLQUFLWCxJQUFJOzhCQUFHVyxLQUFLVixJQUFJOzs7Ozs7WUFDeEM7Ozs7Ozs7Ozs7O0FBSVI7R0FkTUc7O1FBQ1dELGtEQUFTQTs7O0tBRHBCQztBQWdCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGljb25zXG5pbXBvcnQge1xuICBIaUhvbWUsXG4gIEhpVXNlcixcbiAgSGlWaWV3Q29sdW1ucyxcbiAgSGlSZWN0YW5nbGVHcm91cCxcbiAgSGlDaGF0QnViYmxlQm90dG9tQ2VudGVyVGV4dCxcbiAgSGlFbnZlbG9wZSxcbn0gZnJvbSAncmVhY3QtaWNvbnMvaGkyJztcblxuLy8gbmF2IGRhdGFcbmV4cG9ydCBjb25zdCBuYXZEYXRhID0gW1xuICB7IG5hbWU6ICdob21lJywgcGF0aDogJy8nLCBpY29uOiA8SGlIb21lIC8+IH0sXG4gIHsgbmFtZTogJ2Fib3V0JywgcGF0aDogJy9hYm91dCcsIGljb246IDxIaVVzZXIgLz4gfSxcbiAgeyBuYW1lOiAnc2VydmljZXMnLCBwYXRoOiAnL3NlcnZpY2VzJywgaWNvbjogPEhpUmVjdGFuZ2xlR3JvdXAgLz4gfSxcbiAgeyBuYW1lOiAnd29yaycsIHBhdGg6ICcvd29yaycsIGljb246IDxIaVZpZXdDb2x1bW5zIC8+IH0sXG4gIHtcbiAgICBuYW1lOiAndGVzdGltb25pYWxzJyxcbiAgICBwYXRoOiAnL3Rlc3RpbW9uaWFscycsXG4gICAgaWNvbjogPEhpQ2hhdEJ1YmJsZUJvdHRvbUNlbnRlclRleHQgLz4sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY29udGFjdCcsXG4gICAgcGF0aDogJy9jb250YWN0JyxcbiAgICBpY29uOiA8SGlFbnZlbG9wZSAvPixcbiAgfSxcbl07XG5cbi8vIG5leHQgbGlua1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy9uZXh0IHJvdXRlclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZTtcbiAgcmV0dXJuIChcbiAgPG5hdj5cbiAgICB7LyogaW5uZXIgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIHhsOmZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4geGw6anVzdGlmeS1jZW50ZXIgXG4gICAgZ2FwLXktMTAgcHgtNCBtZDpweC00MCB4bDpweC0wIGgtODAgeGw6aC1tYXggcHktOCBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLXNtIHRleHQtM3hsIHhsOnRleHQteGwnPlxuICAgICAge25hdkRhdGEubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17bGluay5wYXRofT57bGluay5pY29ufTwvTGluaz5cbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sIm5hbWVzIjpbIkhpSG9tZSIsIkhpVXNlciIsIkhpVmlld0NvbHVtbnMiLCJIaVJlY3RhbmdsZUdyb3VwIiwiSGlDaGF0QnViYmxlQm90dG9tQ2VudGVyVGV4dCIsIkhpRW52ZWxvcGUiLCJuYXZEYXRhIiwibmFtZSIsInBhdGgiLCJpY29uIiwiTGluayIsInVzZVJvdXRlciIsIk5hdiIsInJvdXRlciIsInBhdGhuYW1lIiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibGluayIsImluZGV4IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});