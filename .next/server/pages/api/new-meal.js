"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meal";
exports.ids = ["pages/api/new-meal"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meal.js":
/*!*******************************!*\
  !*** ./pages/api/new-meal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const DATABASE_NAME = \"FoodApp\";\n    const DATABASE_PASSWORD = \"1234567H\";\n    if (req.method === \"POST\") {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://aleksandr04635:df368ie90@cluster0.vkcz0.mongodb.net/next-food-app?retryWrites=true&w=majority`);\n        const db = client.db();\n        const mealsCollection = db.collection(\"meals\");\n        await mealsCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"Meal inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFVBQVUsT0FBT0MsS0FBS0M7SUFDMUIsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU1DLG9CQUFvQjtJQUUxQixJQUFJSCxJQUFJSSxXQUFXLFFBQVE7UUFDdkIsTUFBTUMsU0FBUyxNQUFNUCx3REFBbUJRLENBQ3RDLENBQUMsMkdBQTJHLENBQUM7UUFHakgsTUFBTUMsS0FBS0YsT0FBT0U7UUFDbEIsTUFBTUMsa0JBQWtCRCxHQUFHRSxXQUFXO1FBQ3RDLE1BQU1ELGdCQUFnQkUsVUFBVVYsSUFBSVc7UUFFcENOLE9BQU9PO1FBRVBYLElBQUlZLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxTQUFTO1FBQWdCO0lBQ2xEO0FBQ0Y7QUFFQSxpRUFBZWhCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZvb2QtYXBwLW1vbmdvb3NlLTIvLi9wYWdlcy9hcGkvbmV3LW1lYWwuanM/MGYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgREFUQUJBU0VfTkFNRSA9IFwiRm9vZEFwcFwiO1xyXG4gIGNvbnN0IERBVEFCQVNFX1BBU1NXT1JEID0gXCIxMjM0NTY3SFwiO1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICBgbW9uZ29kYitzcnY6Ly9hbGVrc2FuZHIwNDYzNTpkZjM2OGllOTBAY2x1c3RlcjAudmtjejAubW9uZ29kYi5uZXQvbmV4dC1mb29kLWFwcD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXHJcbiAgICAgLy8gYG1vbmdvZGIrc3J2Oi8vbWFzdToke0RBVEFCQVNFX1BBU1NXT1JEfUBmb29kYXBwLjB0cG9wLm1vbmdvZGIubmV0LyR7REFUQUJBU0VfTkFNRX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWFsc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVhbHNcIik7XHJcbiAgICBhd2FpdCBtZWFsc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHJlcS5ib2R5KTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuc2VuZCh7IE1lc3NhZ2U6IFwiTWVhbCBpbnNlcnRlZFwiIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIkRBVEFCQVNFX05BTUUiLCJEQVRBQkFTRV9QQVNTV09SRCIsIm1ldGhvZCIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lYWxzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJib2R5IiwiY2xvc2UiLCJzdGF0dXMiLCJzZW5kIiwiTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meal.js"));
module.exports = __webpack_exports__;

})();