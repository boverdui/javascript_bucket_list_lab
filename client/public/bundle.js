/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CountryData = __webpack_require__(/*! ./models/country_data.js */ \"./client/src/models/country_data.js\");\nconst CountryView = __webpack_require__(/*! ./views/country_view.js */ \"./client/src/views/country_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const countryData = new CountryData();\n  countryData.getData((data) => {\n    countryView.populateDropdown(data);\n  });\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/models/country_data.js":
/*!*******************************************!*\
  !*** ./client/src/models/country_data.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../services/request.js */ \"./client/src/services/request.js\");\n\nconst CountryData = function() {\n  this.url = 'https://restcountries.eu/rest/v2/all';\n  this.data = null;\n}\n\nCountryData.prototype.getData = function(onComplete) {\n  const request = new Request(this.url);\n  request.get((data) => {\n    this.data = data;\n    onComplete(data);\n  });\n}\n\nmodule.exports = CountryData;\n\n\n//# sourceURL=webpack:///./client/src/models/country_data.js?");

/***/ }),

/***/ "./client/src/services/request.js":
/*!****************************************!*\
  !*** ./client/src/services/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n}\n\nRequest.prototype.get = function(onComplete) {\n  const request = new XMLHttpRequest();\n  request.open('GET', this.url);\n  request.addEventListener('load', function() {\n    if(this.status !== 200) {\n      return;\n    }\n    const responseBody = JSON.parse(this.responseText);\n    onComplete(responseBody);\n  });\n  request.send();\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/services/request.js?");

/***/ }),

/***/ "./client/src/views/country_view.js":
/*!******************************************!*\
  !*** ./client/src/views/country_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CountryView = function() {\n}\n\nCountryView.prototype.populateDropdown = function (countries) {\n  const dropdown = document.querySelector('#dropdown-countries');\n  for(let i = 0; i < countries.length; i++) {\n    let option;\n    option = document.createElement('option');\n    option.text = countries[i].name;\n    option.value = i;\n    dropdown.add(option);\n  }\n}\n\nmodule.exports = CountryView;\n\n\n//# sourceURL=webpack:///./client/src/views/country_view.js?");

/***/ })

/******/ });