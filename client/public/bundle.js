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

eval("const Request = __webpack_require__(/*! ./services/request.js */ \"./client/src/services/request.js\");\nconst CountriesData = __webpack_require__(/*! ./models/countries_data.js */ \"./client/src/models/countries_data.js\");\nconst CountriesView = __webpack_require__(/*! ./views/countries_view.js */ \"./client/src/views/countries_view.js\");\n\nconst request = new Request('http://localhost:3000/db/countries');\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const countrySelect = document.querySelector('#country-select');\n\n  const countriesData = new CountriesData();\n  const countriesView = new CountriesView(countrySelect);\n\n  countriesView.countriesDropdown.addEventListener('change', (event) => {\n    const index = event.target.value;\n    const country = countriesData.data[index];\n    request.post(country, (returned_country) => {\n      countriesView.renderBucketCountryDetail(returned_country);\n    });\n  });\n\n  const bucketCountriesData = request.get((countries) => {\n    countries.forEach((country) => {\n      countriesView.renderBucketCountryDetail(country);\n    });\n  });\n\n  countriesData.getData((data) => {\n    countriesView.renderCountriesDropdown(data);\n  });\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/models/countries_data.js":
/*!*********************************************!*\
  !*** ./client/src/models/countries_data.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../services/request.js */ \"./client/src/services/request.js\")\n\nconst CountriesData = function () {\n  this.url = 'https://restcountries.eu/rest/v2/all';\n}\n\nCountriesData.prototype.getData = function (onComplete){\n  const request = new Request(this.url);\n  request.get((data) => {\n   this.data = data;\n   onComplete(data);\n });\n\n};\n\nmodule.exports = CountriesData;\n\n\n//# sourceURL=webpack:///./client/src/models/countries_data.js?");

/***/ }),

/***/ "./client/src/services/request.js":
/*!****************************************!*\
  !*** ./client/src/services/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function(onApiRequestComplete) {\n  const req = new XMLHttpRequest();\n  req.open('GET', this.url);\n  req.addEventListener('load', function () {\n    if(this.status !== 200) {\n      return;\n    }\n\n    const responseBody = JSON.parse(this.responseText);\n    onApiRequestComplete(responseBody);\n  });\n  req.send();\n};\n\nRequest.prototype.post = function(data, onComplete) {\n  const req = new XMLHttpRequest();\n  req.open('POST', this.url);\n\n  req.setRequestHeader('Content-Type', 'application/json');\n\n  req.addEventListener('load', function() {\n    if (req.status !== 201) return;\n\n    const response = JSON.parse(req.responseText);\n\n    onComplete(response);\n  });\n\n  const jsonData = JSON.stringify(data);\n  req.send(jsonData);\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/services/request.js?");

/***/ }),

/***/ "./client/src/views/countries_view.js":
/*!********************************************!*\
  !*** ./client/src/views/countries_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CountriesView = function (countriesDropdown) {\n  this.countriesDropdown = countriesDropdown;\n}\n\nCountriesView.prototype.renderCountriesDropdown = function (countriesData) {\n  countriesData.forEach((country, index) => {\n    const option = document.createElement('option');\n    option.textContent = country.name;\n    option.value = index;\n    this.countriesDropdown.appendChild(option);\n  });\n}\n\nCountriesView.prototype.renderBucketCountryDetail = function(country) {\n  const ul = document.querySelector('#bucket-list');\n  const li = document.createElement('li');\n  const div = document.createElement('div');\n  div.classList.add('country-detail');\n\n  const name = document.createElement('h3');\n  name.textContent = country.name;\n  div.appendChild(name);\n\n  const flagImage = document.createElement('img');\n  flagImage.src = country.flag;\n  flagImage.classList.add('flag');\n  div.appendChild(flagImage);\n\n  li.appendChild(div);\n  ul.appendChild(li);\n}\n\nmodule.exports = CountriesView;\n\n\n//# sourceURL=webpack:///./client/src/views/countries_view.js?");

/***/ })

/******/ });