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

/***/ "./components/Transition.js":
/*!**********************************!*\
  !*** ./components/Transition.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n// framer motion\n\n\n// variants\nconst transitionVariants = {\n    initial: {\n        x: \"100%\",\n        width: \"100%\"\n    },\n    animate: {\n        x: 0,\n        width: \"0%\"\n    },\n    exit: {\n        x: [\n            \"0%\",\n            \"100%\"\n        ],\n        width: [\n            \"0%\",\n            \"100%\"\n        ]\n    }\n};\nconst Transition = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen  h-screen z-30 bg-[#2e2257]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.2,\n                    duration: 0.6,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Transition.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen  h-screen z-30 bg-[#2e2257]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.2,\n                    duration: 0.6,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Transition.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen  h-screen z-30 bg-[#2e2257]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.2,\n                    duration: 0.6,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/media/aayush/ACC0CC76C0CC48722/MERN course Practice/Aayush_portfolio/components/Transition.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Transition;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transition);\nvar _c;\n$RefreshReg$(_c, \"Transition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdCQUFnQjs7QUFDcUI7QUFFckMsV0FBVztBQUNYLE1BQU1DLHFCQUFxQjtJQUN6QkMsU0FBUztRQUNQQyxHQUFHO1FBQ0hDLE9BQU87SUFDVDtJQUNBQyxTQUFTO1FBQ1BGLEdBQUc7UUFDSEMsT0FBTztJQUNUO0lBQ0FFLE1BQU07UUFDSkgsR0FBRztZQUFDO1lBQU07U0FBTztRQUNqQkMsT0FBTztZQUFDO1lBQU07U0FBTztJQUN2QjtBQUNGO0FBRUEsTUFBTUcsYUFBYSxJQUFNO0lBQ3ZCLHFCQUNFOzswQkFDRSw4REFBQ1AscURBQVU7Z0JBQ1hTLFdBQVU7Z0JBQ2tCQyxVQUFVVDtnQkFDdENDLFNBQVE7Z0JBQVVHLFNBQVE7Z0JBQVVDLE1BQUs7Z0JBQ3pDSyxZQUFZO29CQUFDQyxPQUFPO29CQUFLQyxVQUFTO29CQUFLQyxNQUFNO2dCQUFXOzs7Ozs7MEJBRXhELDhEQUFDZCxxREFBVTtnQkFDWFMsV0FBVTtnQkFDa0JDLFVBQVVUO2dCQUN0Q0MsU0FBUTtnQkFBVUcsU0FBUTtnQkFBVUMsTUFBSztnQkFDekNLLFlBQVk7b0JBQUNDLE9BQU87b0JBQUtDLFVBQVM7b0JBQUtDLE1BQU07Z0JBQVc7Ozs7OzswQkFFeEQsOERBQUNkLHFEQUFVO2dCQUNYUyxXQUFVO2dCQUNrQkMsVUFBVVQ7Z0JBQ3RDQyxTQUFRO2dCQUFVRyxTQUFRO2dCQUFVQyxNQUFLO2dCQUN6Q0ssWUFBWTtvQkFBQ0MsT0FBTztvQkFBS0MsVUFBUztvQkFBS0MsTUFBTTtnQkFBVzs7Ozs7Ozs7QUFLOUQ7S0F4Qk1QO0FBMEJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNpdGlvbi5qcz9iMDM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyYW1lciBtb3Rpb25cbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLy8gdmFyaWFudHNcbmNvbnN0IHRyYW5zaXRpb25WYXJpYW50cyA9IHtcbiAgaW5pdGlhbDoge1xuICAgIHg6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICB4OiAwLFxuICAgIHdpZHRoOiAnMCUnLFxuICB9LFxuICBleGl0OiB7XG4gICAgeDogWycwJScsICcxMDAlJ10sXG4gICAgd2lkdGg6IFsnMCUnLCAnMTAwJSddXG4gIH0sXG59O1xuXG5jb25zdCBUcmFuc2l0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdiBcbiAgICAgIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBcbiAgICAgIGgtc2NyZWVuIHotMzAgYmctWyMyZTIyNTddJyB2YXJpYW50cz17dHJhbnNpdGlvblZhcmlhbnRzfSBcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCIgYW5pbWF0ZT1cImFuaW1hdGVcIiBleGl0PVwiZXhpdFwiIFxuICAgICAgdHJhbnNpdGlvbj17e2RlbGF5OiAwLjIsIGR1cmF0aW9uOjAuNiwgZWFzZTogJ2Vhc2VJbk91dCd9fT5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIFxuICAgICAgaC1zY3JlZW4gei0zMCBiZy1bIzJlMjI1N10nIHZhcmlhbnRzPXt0cmFuc2l0aW9uVmFyaWFudHN9IFxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiIGV4aXQ9XCJleGl0XCIgXG4gICAgICB0cmFuc2l0aW9uPXt7ZGVsYXk6IDAuMiwgZHVyYXRpb246MC42LCBlYXNlOiAnZWFzZUluT3V0J319PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICBjbGFzc05hbWU9J2ZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gXG4gICAgICBoLXNjcmVlbiB6LTMwIGJnLVsjMmUyMjU3XScgdmFyaWFudHM9e3RyYW5zaXRpb25WYXJpYW50c30gXG4gICAgICBpbml0aWFsPVwiaW5pdGlhbFwiIGFuaW1hdGU9XCJhbmltYXRlXCIgZXhpdD1cImV4aXRcIiBcbiAgICAgIHRyYW5zaXRpb249e3tkZWxheTogMC4yLCBkdXJhdGlvbjowLjYsIGVhc2U6ICdlYXNlSW5PdXQnfX0+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICBcbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb247XG4iXSwibmFtZXMiOlsibW90aW9uIiwidHJhbnNpdGlvblZhcmlhbnRzIiwiaW5pdGlhbCIsIngiLCJ3aWR0aCIsImFuaW1hdGUiLCJleGl0IiwiVHJhbnNpdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transition.js\n"));

/***/ })

});