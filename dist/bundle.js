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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/draw */ \"./src/draw.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils */ \"./src/utils.js\");\n\n\n\nvar start = function start() {\n  _src_utils__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].addEventListener('click', function (e) {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"insertCell\"])(e.offsetX, e.offsetY);\n  });\n  document.getElementById(\"rngBtn\").addEventListener('click', function () {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomCells\"])();\n  });\n  document.getElementById(\"clrBtn\").addEventListener('click', function () {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"clearCells\"])();\n    Object(_src_draw__WEBPACK_IMPORTED_MODULE_0__[\"draw\"])();\n  });\n  document.getElementById(\"stepBtn\").addEventListener('click', function (e) {\n    Object(_src_draw__WEBPACK_IMPORTED_MODULE_0__[\"lifeSequence\"])();\n  });\n  document.getElementById(\"lineRange\").addEventListener('input', function (e) {\n    Object(_src_draw__WEBPACK_IMPORTED_MODULE_0__[\"setLineWidth\"])(e.target.value);\n    document.getElementById(\"rangeActualValue\").innerHTML = e.target.value;\n  });\n  document.getElementById(\"verifyBtn\").addEventListener('click', function () {\n    Object(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"lifeCycle\"])();\n\n    if (_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"verify\"]) {\n      document.getElementById(\"verifyBtn\").innerHTML = \"Pause\";\n    } else {\n      document.getElementById(\"verifyBtn\").innerHTML = \"Play\";\n    }\n  });\n};\n\nstart();\nObject(_src_draw__WEBPACK_IMPORTED_MODULE_0__[\"draw\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: draw, drawGrid, drawSquare, drawSquares, setLineWidth, lineWidth, lifeSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGrid\", function() { return drawGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquare\", function() { return drawSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquares\", function() { return drawSquares; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLineWidth\", function() { return setLineWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineWidth\", function() { return lineWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lifeSequence\", function() { return lifeSequence; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycle */ \"./src/lifecycle.js\");\n\n\nvar lineWidth = 5;\n\nvar draw = function draw() {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].clearRect(0, 0, _utils__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _utils__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n  drawGrid();\n  drawSquares();\n\n  if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"verify\"]) {\n    lifeSequence();\n  }\n\n  requestAnimationFrame(draw);\n};\n\nvar lifeSequence = function lifeSequence() {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"liveCells\"].forEach(function (cell) {\n    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"verifySurroundings\"])(cell[0], cell[1]);\n  });\n  _lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"allSurroundingList\"].forEach(function (cell) {\n    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"verifySurroundings\"])(cell[0], cell[1], false);\n  });\n  Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"killCells\"])();\n  Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"doTheMiracleOfLife\"])();\n  console.log(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"allSurroundingList\"]);\n  Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__[\"clearAllSurroundings\"])();\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"increaseIterations\"])();\n};\n\nvar drawGrid = function drawGrid() {\n  var line = 0;\n\n  while (line < 640) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].beginPath();\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].moveTo(line, 0);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].lineTo(line, 480);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].strokeStyle = \"#a8a8a8\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].stroke();\n    line += lineWidth;\n  }\n\n  line = 0;\n\n  while (line < 640) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].beginPath();\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].moveTo(0, line);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].lineTo(640, line);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].strokeStyle = \"#a8a8a8\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].stroke();\n    line += lineWidth;\n  }\n};\n\nvar drawSquares = function drawSquares() {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"liveCells\"].forEach(function (cell) {\n    return drawSquare(cell[0], cell[1]);\n  });\n};\n\nvar drawSquare = function drawSquare(x, y) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].beginPath();\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].rect(x * lineWidth, y * lineWidth, lineWidth, lineWidth);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].fillStyle = \"red\";\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"context\"].fill();\n};\n\nvar setLineWidth = function setLineWidth(val) {\n  lineWidth = parseInt(val);\n};\n\n\n\n//# sourceURL=webpack:///./src/draw.js?");

/***/ }),

/***/ "./src/lifecycle.js":
/*!**************************!*\
  !*** ./src/lifecycle.js ***!
  \**************************/
/*! exports provided: verifySurroundings, clearAllSurroundings, killCells, doTheMiracleOfLife, allSurroundingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifySurroundings\", function() { return verifySurroundings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAllSurroundings\", function() { return clearAllSurroundings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"killCells\", function() { return killCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doTheMiracleOfLife\", function() { return doTheMiracleOfLife; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allSurroundingList\", function() { return allSurroundingList; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar allSurroundingList = [];\nvar deadCells = [];\nvar bornCells = [];\n\nvar verifySurroundings = function verifySurroundings(x, y) {\n  var isVerifyingLiveCells = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var surroundings = [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]];\n\n  if (isVerifyingLiveCells) {\n    var surroundingsAliveQtd = surroundings.map(function (s) {\n      includeSurrougings(s[0], s[1]);\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"checkSquareAlreadyDrawed\"])(s[0], s[1]);\n    }).filter(function (s) {\n      return s === true;\n    }).length;\n\n    if (surroundingsAliveQtd < 2 || surroundingsAliveQtd > 3) {\n      deadCells.push([x, y]);\n    }\n  } else {\n    var _surroundingsAliveQtd = surroundings.map(function (s) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"checkSquareAlreadyDrawed\"])(s[0], s[1]);\n    }).filter(function (s) {\n      return s === true;\n    }).length;\n\n    if (_surroundingsAliveQtd === 3) {\n      bornCells.push([x, y]);\n    }\n  }\n};\n/**\r\n * It might have a better way to do that, but for now, I gonna let this way.\r\n * \r\n * I also need to check if the surrounding is already over the live cells since I don't want to recompute it\r\n */\n\n\nvar includeSurrougings = function includeSurrougings(x, y) {\n  if (allSurroundingList.find(function (cell) {\n    return cell[0] === x && cell[1] === y;\n  }) || _utils__WEBPACK_IMPORTED_MODULE_0__[\"liveCells\"].find(function (cell) {\n    return cell[0] === x && cell[1] === y;\n  })) {\n    return;\n  } else {\n    allSurroundingList.push([x, y]);\n  }\n};\n\nvar clearAllSurroundings = function clearAllSurroundings() {\n  allSurroundingList = [];\n};\n\nvar killCells = function killCells() {\n  deadCells.forEach(function (cell) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeLiveCells\"])(cell[0], cell[1]);\n  });\n  deadCells = [];\n};\n\nvar doTheMiracleOfLife = function doTheMiracleOfLife() {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"addLiveCells\"])(bornCells);\n  bornCells = [];\n};\n\n\n\n//# sourceURL=webpack:///./src/lifecycle.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: canvas, context, insertCell, randomCells, liveCells, clearCells, verify, lifeCycle, checkSquareAlreadyDrawed, removeLiveCells, addLiveCells, increaseIterations, getIterations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"context\", function() { return context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertCell\", function() { return insertCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomCells\", function() { return randomCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liveCells\", function() { return liveCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCells\", function() { return clearCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verify\", function() { return verify; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lifeCycle\", function() { return lifeCycle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkSquareAlreadyDrawed\", function() { return checkSquareAlreadyDrawed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLiveCells\", function() { return removeLiveCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLiveCells\", function() { return addLiveCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseIterations\", function() { return increaseIterations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIterations\", function() { return getIterations; });\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/draw.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar canvas = document.getElementById(\"game\");\nvar context = canvas.getContext(\"2d\");\nvar liveCells = [];\nvar verify = false;\nvar iterations = 0;\n\nvar increaseIterations = function increaseIterations() {\n  iterations++;\n};\n\nvar getIterations = function getIterations() {\n  return iterations;\n};\n\nvar insertCell = function insertCell(x, y) {\n  var mouseActualPos = [parseInt(x / _draw__WEBPACK_IMPORTED_MODULE_0__[\"lineWidth\"]), parseInt(y / _draw__WEBPACK_IMPORTED_MODULE_0__[\"lineWidth\"])];\n\n  if (checkSquareAlreadyDrawed(mouseActualPos[0], mouseActualPos[1])) {\n    liveCells = liveCells.filter(function (c) {\n      return c[0] !== mouseActualPos[0] || c[1] !== mouseActualPos[1];\n    });\n  } else {\n    liveCells.push([mouseActualPos[0], mouseActualPos[1]]);\n  }\n};\n\nvar randomCells = function randomCells() {\n  liveCells = [];\n  var seedQtd = Math.floor(Math.random() * 10 + 1);\n\n  for (var seeder = 0; seeder < seedQtd; seeder++) {\n    var cellX = parseInt(Math.floor(Math.random() * canvas.width) / _draw__WEBPACK_IMPORTED_MODULE_0__[\"lineWidth\"]);\n    var cellY = parseInt(Math.floor(Math.random() * canvas.height) / _draw__WEBPACK_IMPORTED_MODULE_0__[\"lineWidth\"]);\n    liveCells.push([cellX, cellY]);\n  }\n};\n\nvar checkSquareAlreadyDrawed = function checkSquareAlreadyDrawed(x, y) {\n  if (liveCells.find(function (c) {\n    return c[0] === x && c[1] === y;\n  }) !== undefined) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar clearCells = function clearCells() {\n  liveCells = [];\n};\n\nvar addLiveCells = function addLiveCells() {\n  var newCells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  liveCells = [].concat(_toConsumableArray(liveCells), _toConsumableArray(newCells));\n};\n\nvar removeLiveCells = function removeLiveCells(x, y) {\n  liveCells = liveCells.filter(function (cell) {\n    return cell[0] !== x || cell[1] !== y;\n  });\n};\n\nvar lifeCycle = function lifeCycle() {\n  if (verify) {\n    verify = false;\n  } else {\n    verify = true;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });