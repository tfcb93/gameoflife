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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/draw */ \"./src/draw.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils */ \"./src/utils.js\");\n\n\n\nvar start = function start() {\n  _src_utils__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].addEventListener('click', function (e) {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"insertCell\"])(e.offsetX, e.offsetY);\n  });\n  document.getElementById(\"rngBtn\").addEventListener('click', function () {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomCells\"])();\n  });\n  document.getElementById(\"clrBtn\").addEventListener('click', function () {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"clearCells\"])();\n    Object(_src_draw__WEBPACK_IMPORTED_MODULE_0__[\"draw\"])();\n  });\n};\n\nstart();\nObject(_src_draw__WEBPACK_IMPORTED_MODULE_0__[\"draw\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: draw, drawGrid, drawSquare, drawSquares */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGrid\", function() { return drawGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquare\", function() { return drawSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquares\", function() { return drawSquares; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nvar draw = function draw() {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].clearRect(0, 0, _utils__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _utils__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n  drawGrid();\n  drawSquares();\n  requestAnimationFrame(draw);\n};\n\nvar drawGrid = function drawGrid() {\n  var line = 0;\n\n  while (line < 640) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].beginPath();\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].moveTo(line, 0);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].lineTo(line, 480);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].strokeStyle = \"#a8a8a8\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].stroke();\n    line += 5;\n  }\n\n  line = 0;\n\n  while (line < 640) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].beginPath();\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].moveTo(0, line);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].lineTo(640, line);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].strokeStyle = \"#a8a8a8\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].stroke();\n    line += 5;\n  }\n};\n\nvar drawSquares = function drawSquares() {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"liveCells\"].forEach(function (cell) {\n    return drawSquare(cell[0], cell[1]);\n  });\n};\n\nvar drawSquare = function drawSquare(x, y) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].beginPath();\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].rect(x * 5, y * 5, 5, 5);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].fillStyle = \"red\";\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].fill();\n};\n\n\n\n//# sourceURL=webpack:///./src/draw.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: canvas, context, insertCell, randomCells, liveCells, clearCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"context\", function() { return context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertCell\", function() { return insertCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomCells\", function() { return randomCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liveCells\", function() { return liveCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCells\", function() { return clearCells; });\nvar canvas = document.getElementById(\"game\");\nvar context = canvas.getContext(\"2d\");\nvar liveCells = [];\n\nvar insertCell = function insertCell(x, y) {\n  var mouseActualPos = [parseInt(x / 5), parseInt(y / 5)];\n\n  if (checkSquareAlreadyDrawed(mouseActualPos[0], mouseActualPos[1])) {\n    liveCells = liveCells.filter(function (c) {\n      return c[0] !== mouseActualPos[0] || c[1] !== mouseActualPos[1];\n    });\n  } else {\n    liveCells.push([mouseActualPos[0], mouseActualPos[1]]);\n  }\n};\n\nvar randomCells = function randomCells() {\n  liveCells = [];\n  var seedQtd = Math.floor(Math.random() * 10 + 1);\n\n  for (var seeder = 0; seeder < seedQtd; seeder++) {\n    var cellX = parseInt(Math.floor(Math.random() * canvas.width) / 5);\n    var cellY = parseInt(Math.floor(Math.random() * canvas.height) / 5);\n    liveCells.push([cellX, cellY]);\n  }\n};\n\nvar checkSquareAlreadyDrawed = function checkSquareAlreadyDrawed(x, y) {\n  if (liveCells.find(function (c) {\n    return c[0] === x && c[1] === y;\n  }) !== undefined) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar clearCells = function clearCells() {\n  liveCells = [];\n};\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });