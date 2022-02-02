/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Data = {\r\n    key : '75ca701220c90ca023b334a8eaafed66'\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://modern-js-weather-app/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\nconst button = document.querySelector(\"input[type='submit']\")\r\n\r\nconst ctx = document.getElementById(\"myChart\");\r\nconst myChart = new Chart(ctx, {\r\n    type: 'bar',\r\n    data: {\r\n        labels: \"\",\r\n        datasets: [{\r\n            label: 'Temperature in °C',\r\n            data: \"\",\r\n            backgroundColor: [\r\n                'rgba(54, 162, 235, 0.2)',\r\n            ],\r\n            borderColor: [\r\n                'rgba(54, 162, 235, 1)'\r\n            ],\r\n            borderWidth: 1\r\n        }]\r\n    },\r\n    options: {\r\n        scales: {\r\n            y: {\r\n                beginAtZero: true\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\nconst fetchDataFromCoord = (lat, lon, lables, graphdata) => {\r\n    fetch(\"https://api.openweathermap.org/data/2.5/onecall?lat=\" + lat + \"&lon=\" + lon + \"&exclude=minutely,hourly&units=metric&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        processData(data, lables, graphdata)\r\n    })\r\n}\r\n\r\nconst processData = (data, lables, graphdata) => {\r\n    const weekdata = data.daily;\r\n\r\n    for (let i = 0; i < weekdata.length; i++) {\r\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addCard)(weekdata, i, lables, graphdata);\r\n    }\r\n    \r\n    document.querySelector(\".chart\").style.display = \"block\"\r\n    updateConfigByMutating(myChart, lables, graphdata);\r\n    loadImgs()\r\n}\r\n\r\nconst updateConfigByMutating = (chart, lables, graphdata) => {\r\n    chart.data.labels = lables;\r\n    chart.data.datasets.forEach((dataset) => {\r\n        dataset.data = graphdata;\r\n    });\r\n    chart.update();\r\n}\r\n\r\nbutton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault()\r\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__.cardcontainer.innerHTML = \"\";\r\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDiv.children[0].innerHTML = \"\";\r\n    // variables for graphJS\r\n    let lables = new Array();\r\n    let graphdata = new Array();\r\n    const cityInput = document.querySelector(\"#cityInput\")\r\n    fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=\" + cityInput.value + \"&units=metric&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            // display the city name\r\n            console.log(data)\r\n            var nameValue = data['city']['name']\r\n            const titleElement = _utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDiv.children[0];\r\n            titleElement.innerHTML = nameValue;\r\n\r\n            // get the lat and lon of the location\r\n            const lat = data[\"city\"][\"coord\"].lat;\r\n            const lon = data[\"city\"][\"coord\"].lon;\r\n            console.log(lat, lon)\r\n\r\n            fetchDataFromCoord(lat, lon, lables, graphdata)\r\n            \r\n        })\r\n\r\n        .catch(err => alert(\"Wrong city name!\"))\r\n\r\n})\r\n\r\nconst loadImgs = () => {\r\n    const imgcontainer = document.querySelector(\".pictures\")\r\n\r\n    const key = \"U-X2th9ZLuaaQOCfH-Ygn1F_WooQcKjcXUjzlWX5FoA\"\r\n    const url = \"https://api.unsplash.com/search/photos?query=\" + cityInput.value + \"&client_id=\" + key;\r\n\r\n    fetch(url)\r\n    .then (response => response.json())\r\n    .then (data => {\r\n        console.log(data.results);\r\n        const imgList = data.results;\r\n\r\n        for (let i = 0; i< imgList.length ; i++) {\r\n\r\n        \r\n        const img = document.createElement(\"img\")\r\n        img.className = \"img\"\r\n        img.setAttribute(\"src\", imgList[i].urls.regular)\r\n        imgcontainer.appendChild(img)\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://modern-js-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"displayDiv\": () => (/* binding */ displayDiv),\n/* harmony export */   \"cardcontainer\": () => (/* binding */ cardcontainer)\n/* harmony export */ });\nconst displayDiv = document.querySelector(\".displayData\")\r\nconst cardcontainer = displayDiv.children[1]\r\n\r\nconst getNameDay = (datee) => {\r\n    const names = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\r\n    return names[datee.getDay()]\r\n}\r\n\r\nconst getNameMonth = (datee) => {\r\n    const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\r\n    return months[datee.getMonth()]\r\n}\r\n\r\n\r\nconst addCard = (weekdata, i, lables, graphdata) => {\r\n    const newCard = document.createElement(\"div\");\r\n    newCard.className = \"card\";\r\n    const dayHeader = document.createElement(\"div\")\r\n    dayHeader.className = \"dateinfo\"\r\n    const cardTitle = document.createElement(\"p\")\r\n    cardTitle.className = \"day\"\r\n    const dayInMonth = document.createElement(\"p\")\r\n    dayInMonth.className = \"dayinmonth\"\r\n    const month = document.createElement(\"p\")\r\n    month.className = \"month\"\r\n\r\n    const unixtime = weekdata[i].dt;\r\n    const daydate = new Date(unixtime * 1000); // converts the unix time to miliseconds unix time so it can work with Date()\r\n\r\n    // adding values to variables for GraphJS\r\n    lables.push(getNameDay(daydate))\r\n    graphdata.push(Math.round(weekdata[i].temp.day))\r\n\r\n    cardTitle.innerText = getNameDay(daydate);\r\n    dayInMonth.innerText = daydate.getDate();\r\n    month.innerText = getNameMonth(daydate);\r\n    dayHeader.append(cardTitle, dayInMonth, month);\r\n    newCard.appendChild(dayHeader);\r\n    \r\n    // Rest of card information v\r\n    const descpara = document.createElement(\"p\")\r\n    descpara.className = \"description\"\r\n    const descimg = document.createElement(\"img\");\r\n    descimg.setAttribute(\"width\", \"100px\");\r\n    const iconid = weekdata[i].weather[0].icon;\r\n    const iconurl = \"http://openweathermap.org/img/wn/\" + iconid + \"@2x.png\";\r\n    const desc = weekdata[i].weather[0].description;\r\n    descimg.setAttribute(\"src\", iconurl);\r\n\r\n    descpara.innerText = desc;\r\n    newCard.append(descpara, descimg);\r\n\r\n    const tempEl = document.createElement(\"p\");\r\n    tempEl.className = \"temp\";\r\n    tempEl.innerText = Math.round(weekdata[i].temp.day) + \"°C\";\r\n    newCard.appendChild(tempEl);\r\n\r\n    cardcontainer.appendChild(newCard);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://modern-js-weather-app/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;