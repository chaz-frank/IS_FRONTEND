"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/skills/page",{

/***/ "(app-pages-browser)/./app/skills/page.tsx":
/*!*****************************!*\
  !*** ./app/skills/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_api_calls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api_calls */ \"(app-pages-browser)/./app/utils/api_calls.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function getSkills() {\n    let skills = [];\n    const response = await fetch((0,_utils_api_calls__WEBPACK_IMPORTED_MODULE_1__.SKILL_GET)());\n    if (response.ok) {\n        const json = await response.json();\n        if (json.length > 0) {\n            skills = json;\n        } else {\n            console.error(\"Empty JSON response\");\n        }\n    } else {\n        console.error(\"Error fetching data: \".concat(response.status));\n    }\n    return skills;\n}\nfunction Page() {\n    _s();\n    const [skills, setSkills] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            const fetchedSkills = await getSkills();\n            setSkills(fetchedSkills);\n        })();\n    }, []);\n    const onFormSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log(formData.getAll(\"name\"));\n        const res = await fetch((0,_utils_api_calls__WEBPACK_IMPORTED_MODULE_1__.SKILL_POST)(), {\n            method: \"POST\",\n            body: formData\n        });\n        if (res.ok) {\n            const fetchedSkills = await getSkills();\n            setSkills(fetchedSkills);\n        } else {\n            console.error(\"Error submitting form: \".concat(res.status));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onFormSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Name: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Description: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            skill.name,\n                            \": \",\n                            skill.description\n                        ]\n                    }, skill.name, true, {\n                        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/charlesfrank/AIT/IS/IS_FRONTEND/app/skills/page.tsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"5GNcl9Dk8gl3IGzVJXf3o3LIPSE=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9za2lsbHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyRDtBQUNmO0FBTzVDLGVBQWVJO0lBQ1gsSUFBSUMsU0FBa0IsRUFBRTtJQUV4QixNQUFNQyxXQUFXLE1BQU1DLE1BQU1QLDJEQUFTQTtJQUN0QyxJQUFJTSxTQUFTRSxFQUFFLEVBQUU7UUFDYixNQUFNQyxPQUFPLE1BQU1ILFNBQVNHLElBQUk7UUFDaEMsSUFBSUEsS0FBS0MsTUFBTSxHQUFHLEdBQUc7WUFDakJMLFNBQVNJO1FBQ2IsT0FBTztZQUNIRSxRQUFRQyxLQUFLLENBQUM7UUFDbEI7SUFDSixPQUFPO1FBQ0hELFFBQVFDLEtBQUssQ0FBQyx3QkFBd0MsT0FBaEJOLFNBQVNPLE1BQU07SUFDekQ7SUFDQSxPQUFPUjtBQUNYO0FBRWUsU0FBU1M7O0lBQ3BCLE1BQU0sQ0FBQ1QsUUFBUVUsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBVSxFQUFFO0lBRWhEQyxnREFBU0EsQ0FBQztRQUNMO1lBQ0csTUFBTWEsZ0JBQWdCLE1BQU1aO1lBQzVCVyxVQUFVQztRQUNkO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZSxPQUFPQztRQUN4QkEsTUFBTUMsY0FBYztRQUNwQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILE1BQU1JLGFBQWE7UUFDdkRYLFFBQVFZLEdBQUcsQ0FBQ0gsU0FBU0ksTUFBTSxDQUFDO1FBRXRCLE1BQU1DLE1BQU0sTUFBTWxCLE1BQU1OLDREQUFVQSxJQUFJO1lBQ2xDeUIsUUFBUTtZQUNSQyxNQUFNUDtRQUNWO1FBRUEsSUFBSUssSUFBSWpCLEVBQUUsRUFBRTtZQUNSLE1BQU1RLGdCQUFnQixNQUFNWjtZQUM1QlcsVUFBVUM7UUFDZCxPQUFPO1lBQ0hMLFFBQVFDLEtBQUssQ0FBQywwQkFBcUMsT0FBWGEsSUFBSVosTUFBTTtRQUN0RDtJQUNKO0lBRUEscUJBQ0ksOERBQUNlOzswQkFDRyw4REFBQ0M7Z0JBQUtDLFVBQVViOztrQ0FDWiw4REFBQ2M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE1BQUs7Ozs7OztrQ0FDeEIsOERBQUNIO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3hCLDhEQUFDQzt3QkFBT0YsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0c7MEJBQ0kvQixPQUFPZ0MsR0FBRyxDQUFDLENBQUNDLHNCQUNULDhEQUFDQzs7NEJBQXFCRCxNQUFNSixJQUFJOzRCQUFDOzRCQUFHSSxNQUFNRSxXQUFXOzt1QkFBNUNGLE1BQU1KLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7R0E1Q3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NraWxscy9wYWdlLnRzeD83MTVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgU0tJTExfR0VULCBTS0lMTF9QT1NUIH0gZnJvbSAnLi4vdXRpbHMvYXBpX2NhbGxzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBTa2lsbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNraWxscygpOiBQcm9taXNlPFNraWxsW10+IHtcbiAgICBsZXQgc2tpbGxzOiBTa2lsbFtdID0gW107XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFNLSUxMX0dFVCgpKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGpzb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2tpbGxzID0ganNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VtcHR5IEpTT04gcmVzcG9uc2UnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGRhdGE6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICByZXR1cm4gc2tpbGxzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IFtza2lsbHMsIHNldFNraWxsc10gPSB1c2VTdGF0ZTxTa2lsbFtdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmV0Y2hlZFNraWxscyA9IGF3YWl0IGdldFNraWxscygpO1xuICAgICAgICAgICAgc2V0U2tpbGxzKGZldGNoZWRTa2lsbHMpO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0Y29uc29sZS5sb2coZm9ybURhdGEuZ2V0QWxsKCduYW1lJykpO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFNLSUxMX1BPU1QoKSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgY29uc3QgZmV0Y2hlZFNraWxscyA9IGF3YWl0IGdldFNraWxscygpO1xuICAgICAgICAgICAgc2V0U2tpbGxzKGZldGNoZWRTa2lsbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc3VibWl0dGluZyBmb3JtOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb246IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2tpbGwubmFtZX0+e3NraWxsLm5hbWV9OiB7c2tpbGwuZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiU0tJTExfR0VUIiwiU0tJTExfUE9TVCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2tpbGxzIiwic2tpbGxzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsIlBhZ2UiLCJzZXRTa2lsbHMiLCJmZXRjaGVkU2tpbGxzIiwib25Gb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwibG9nIiwiZ2V0QWxsIiwicmVzIiwibWV0aG9kIiwiYm9keSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiIsInVsIiwibWFwIiwic2tpbGwiLCJsaSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/skills/page.tsx\n"));

/***/ })

});