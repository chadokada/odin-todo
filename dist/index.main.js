/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300,100italic,100);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    height: 100vh;\n}\n\n.container{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100%;\n    font-family: Roboto;\n}\n\n.header{\n    display: grid;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: rgb(219, 60, 50);\n    color: white;\n    height: 50px;\n    box-shadow: 0px 3px 7px -5px #94a3b8;\n}\n\n/* Sidebar Styles*/\n\n.sidebar{\n    display: grid;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: rgb(250, 250, 250);\n    width: 250px;\n    box-shadow: 3px 0px 7px -5px #94a3b8;\n    grid-template-rows: auto 1fr;\n    padding: 20px;\n}\n\n.nav-button,\n.user-task-collapsed{\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n.tasks-by-date{\n    display: grid;\n}\n.nav-icon{\n    width: 19px;\n}\n\n.tasks-by-project{\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.project-heading > img{\n    width: 15px;\n}\n\n.project-heading{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    font-weight: bold;\n    align-items: center;\n}\n\n.fa-plus{\n    color: blue;\n    font-size: 1.5em;\n    font-weight: 300;\n}\n\n.add-project-container{\n    display: grid;\n    grid-template-rows: 1fr auto;\n    gap: 10px;\n}\n\n.project-name-input{\n    border: 1px solid;\n    border-radius: 5px;\n    height: 25px;\n}\n\n/* Main content styles */\n\n.display-container{\n    grid-row: 2/3;\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    padding: 40px;\n    gap: 10px;\n}\n\n.section-title{\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.section-content .fa-plus{\n    color: rgb(219, 60, 50);\n}\n\n.section-content .create-task{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    font-size: .95em;\n    color: rgb(100, 100, 100)\n}\n\n.task-container{\n    /*\n    display: grid;\n    grid-template-columns: auto 1fr;\n    */\n}\n\n.task-description{\n    font-size: .98em;\n    font-weight: 400;\n}\n.fa-circle{\n    color: rgb(100, 100, 100);\n}\n\n/* Styles for Add Task Input Window*/\n\n.add-task-form-container{\n    display: grid;\n    grid-template-rows: 1fr auto;\n    gap: 10px;\n    width: 500px; /*Update later*/\n}\n\n.add-task-input-container{\n    border: 1px solid rgb(200, 200, 200);\n    border-radius: 10px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    padding: 5px;\n}\n\n.task-name-input{\n    height: 25px;\n}\n\n.taskDescInput{\n    height: 75px;\n}\n\ninput,\ntextarea{\n    border: none;\n    box-sizing: border-box;\n    font-family: Roboto;\n    font-size: .95em;\n}    \n\ntextarea{\n    resize: none;\n}\n\nbutton{\n    border: none;\n    border-radius: 10px;\n    height: 35px;\n    font-size: .90em;\n    font-weight: bold;\n    width: fit-content;\n    padding: 0 10px 0 10px;\n    background-color: rgb(200, 200, 200);\n    margin: 0;\n}\n.submit-task,\n.submit-project{\n    background-color: red;\n    color: white;\n}\n\n.add-project-buttons,\n.add-task-buttons{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 5px;\n}\n\n/* Footer */\n\n.footer{\n    display: grid;\n    grid-row: 3/4;\n    grid-column: 1/3;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,iCAAiC;IACjC,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,oCAAoC;AACxC;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,oCAAoC;IACpC,YAAY;IACZ,oCAAoC;IACpC,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;AACA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA,wBAAwB;;AAExB;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,gBAAgB;IAChB;AACJ;;AAEA;IACI;;;KAGC;AACL;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA,oCAAoC;;AAEpC;IACI,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,YAAY,EAAE,eAAe;AACjC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,oCAAoC;IACpC,SAAS;AACb;AACA;;IAEI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,+BAA+B;IAC/B,QAAQ;AACZ;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB","sourcesContent":["@import url(http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300,100italic,100);\n\nbody{\n    margin: 0;\n    height: 100vh;\n}\n\n.container{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100%;\n    font-family: Roboto;\n}\n\n.header{\n    display: grid;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: rgb(219, 60, 50);\n    color: white;\n    height: 50px;\n    box-shadow: 0px 3px 7px -5px #94a3b8;\n}\n\n/* Sidebar Styles*/\n\n.sidebar{\n    display: grid;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: rgb(250, 250, 250);\n    width: 250px;\n    box-shadow: 3px 0px 7px -5px #94a3b8;\n    grid-template-rows: auto 1fr;\n    padding: 20px;\n}\n\n.nav-button,\n.user-task-collapsed{\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n.tasks-by-date{\n    display: grid;\n}\n.nav-icon{\n    width: 19px;\n}\n\n.tasks-by-project{\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.project-heading > img{\n    width: 15px;\n}\n\n.project-heading{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    font-weight: bold;\n    align-items: center;\n}\n\n.fa-plus{\n    color: blue;\n    font-size: 1.5em;\n    font-weight: 300;\n}\n\n.add-project-container{\n    display: grid;\n    grid-template-rows: 1fr auto;\n    gap: 10px;\n}\n\n.project-name-input{\n    border: 1px solid;\n    border-radius: 5px;\n    height: 25px;\n}\n\n/* Main content styles */\n\n.display-container{\n    grid-row: 2/3;\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    padding: 40px;\n    gap: 10px;\n}\n\n.section-title{\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\n.section-content .fa-plus{\n    color: rgb(219, 60, 50);\n}\n\n.section-content .create-task{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    font-size: .95em;\n    color: rgb(100, 100, 100)\n}\n\n.task-container{\n    /*\n    display: grid;\n    grid-template-columns: auto 1fr;\n    */\n}\n\n.task-description{\n    font-size: .98em;\n    font-weight: 400;\n}\n.fa-circle{\n    color: rgb(100, 100, 100);\n}\n\n/* Styles for Add Task Input Window*/\n\n.add-task-form-container{\n    display: grid;\n    grid-template-rows: 1fr auto;\n    gap: 10px;\n    width: 500px; /*Update later*/\n}\n\n.add-task-input-container{\n    border: 1px solid rgb(200, 200, 200);\n    border-radius: 10px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    padding: 5px;\n}\n\n.task-name-input{\n    height: 25px;\n}\n\n.taskDescInput{\n    height: 75px;\n}\n\ninput,\ntextarea{\n    border: none;\n    box-sizing: border-box;\n    font-family: Roboto;\n    font-size: .95em;\n}    \n\ntextarea{\n    resize: none;\n}\n\nbutton{\n    border: none;\n    border-radius: 10px;\n    height: 35px;\n    font-size: .90em;\n    font-weight: bold;\n    width: fit-content;\n    padding: 0 10px 0 10px;\n    background-color: rgb(200, 200, 200);\n    margin: 0;\n}\n.submit-task,\n.submit-project{\n    background-color: red;\n    color: white;\n}\n\n.add-project-buttons,\n.add-task-buttons{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 5px;\n}\n\n/* Footer */\n\n.footer{\n    display: grid;\n    grid-row: 3/4;\n    grid-column: 1/3;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddTaskBtn": () => (/* binding */ createAddTaskBtn),
/* harmony export */   "createAddTaskForm": () => (/* binding */ createAddTaskForm),
/* harmony export */   "createAddTaskFormBtns": () => (/* binding */ createAddTaskFormBtns),
/* harmony export */   "createAddTaskFormInputs": () => (/* binding */ createAddTaskFormInputs),
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "showAddProjectForm": () => (/* binding */ showAddProjectForm),
/* harmony export */   "showAddTaskForm": () => (/* binding */ showAddTaskForm),
/* harmony export */   "showProject": () => (/* binding */ showProject)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/modules/todolist.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _pageelements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageelements.js */ "./src/modules/pageelements.js");




const inbox = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.Project('inbox');

let projects = {'inbox': inbox};


//
// Add Projects
//

function createAddProjectButtons(){
    const addProjectButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-project-buttons').get;
    const submitProjectBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button', 'submit-project', 'Add Project').get;
    const cancelProjectBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button', 'cancel-project','Cancel').get;

    [submitProjectBtn, cancelProjectBtn].forEach(element => 
        addProjectButtons.appendChild(element));

    return addProjectButtons;
}

function createAddProjectForm(){
    const addProjectContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement("div","add-project-container").get;
    const projectNameInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('input', 'project-name-input','','','text').get;
    const addProjectbuttons = createAddProjectButtons();
    
    [projectNameInput, addProjectbuttons].forEach(element => 
        addProjectContainer.appendChild(element));
    return addProjectContainer;
}

function showAddProjectForm(){
    const projectSidebar = document.querySelector('.project-sidebar');
    const addProjectContainer = createAddProjectForm();
    projectSidebar.appendChild(addProjectContainer);
    addProjectFormEventListeners();
}

function addProjectFormEventListeners(){
    const submitProjectBtn = document.querySelector('.submit-project');
    const cancelProjectBtn = document.querySelector('.cancel-project');
    submitProjectBtn.addEventListener('click', () => addProject());
    cancelProjectBtn.addEventListener('click', () => hideAddProjectForm());
}

function addProject(){
    const projectName = document.querySelector('input[class="project-name-input"]').value;
    const newProject = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName)///, projectIndex);
    projects[projectName] = newProject

    const projectSidebar = document.querySelector('.project-sidebar');
    const projectBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','user-project',projectName,projectName,'',projectName).get;
    projectSidebar.appendChild(projectBtn);
    projectBtn.addEventListener('click', (event) => showProject(event))
    hideAddProjectForm();
}

function hideAddProjectForm(){
    const addProjectContainer = document.querySelector('.add-project-container');
    addProjectContainer.remove();
    //addTaskListener();
}


function showProject(event){
    const sectionTitleDiv = document.querySelector('.section-title');
    const target = event.currentTarget;
    const sectionTitle = target.getAttribute('name');
    sectionTitleDiv.id = target.id;
    sectionTitleDiv.innerHTML = sectionTitle;
    clearTasks()
    if (sectionTitle != 'Today' || sectionTitle != 'Upcoming'){
        loadTasks();
    }
    
}

//
// Show Add Task Form Button Functionality
//

function createAddTaskBtn(){
    const createTask = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div', 'create-task').get;
    const addSymbol = document.createElement('i');
    addSymbol.className = 'fa-thin fa-plus';

    const createDesc = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','','Add Task').get;
    [addSymbol, createDesc].forEach(element => createTask.appendChild(element));
    return createTask;
}

function showAddTaskForm(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskPopupBtn = document.querySelector('.create-task');
    const addTaskContainer = createAddTaskForm();
    
    addTaskPopupBtn.remove();
    sectionContent.appendChild(addTaskContainer);
    addTaskFormEventListeners();
}

function addTaskListener(){
    const createTask = document.querySelector('.create-task');
    createTask.addEventListener('click', showAddTaskForm);
}

//
// Add Task Form Functionality
//
function createAddTaskFormInputs(){
    const addTaskInputContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-task-input-container').get;
    const taskNameInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('input', 'task-name-input','','','text').get;
    const taskDescInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('textarea','task-desc-input','Description').get;
    
    const inputButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div', 'input-buttons').get;
    const dateInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('input', 'task-due-date','','','date').get;
    inputButtons.appendChild(dateInput);
    //need to add dropdown to show existing projects

    [taskNameInput, taskDescInput, inputButtons].forEach(
        element => addTaskInputContainer.appendChild(element));

    return addTaskInputContainer;
}

function createAddTaskFormBtns(){
    const addTaskButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-task-buttons').get;
    const submitTaskBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button','submit-task','Add Task').get;
    const cancelTaskBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button', 'cancel-task', 'Cancel').get;
    [submitTaskBtn, cancelTaskBtn].forEach(element => addTaskButtons.appendChild(element));
    return addTaskButtons;
}

function createAddTaskForm(){
    const addTaskContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement("div","add-task-form-container").get;
    const addTaskInputContainer = createAddTaskFormInputs();
    const addTaskButtons = createAddTaskFormBtns();
    [addTaskInputContainer, addTaskButtons].forEach(element => addTaskContainer.appendChild(element));
    return addTaskContainer;
}

function addTaskFormEventListeners(){
    const cancelTaskBtn = document.querySelector('.cancel-task');
    const submitTaskBtn = document.querySelector('.submit-task');

    cancelTaskBtn.addEventListener('click', () => hideAddTaskForm());
    submitTaskBtn.addEventListener('click', () => submitTask());
}

function getTaskInputValues(){
    const taskName = document.querySelector('input[class="task-name-input"]');
    const taskDesc = document.querySelector('.task-desc-input');
    const dueDate = document.querySelector('.task-due-date');
    return [taskName.value, taskDesc.value, dueDate.value];
}

function hideAddTaskForm(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskFormContainer = document.querySelector('.add-task-form-container');

    const addTaskPopupBtn = createAddTaskBtn();
    addTaskFormContainer.remove();
    sectionContent.appendChild(addTaskPopupBtn);
    addTaskListener();
}

function submitTask(){
    const currentProject = document.querySelector('.section-title').id;
    let taskName;
    let taskDescription;
    let dueDate;
    [taskName, taskDescription, dueDate] = getTaskInputValues();
    
    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.task(taskName, taskDescription, dueDate, currentProject);
    projects[currentProject].addTask(newTask);

    clearTasks();
    loadTasks();
    hideAddTaskForm();
}

//
// Display tasks
//

function createTask(task){
    const userTaskContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','user-task-collapsed').get;
    const taskSymbol = document.createElement('i');
    const taskName = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','task-name-collapsed',task.taskName).get;
    taskSymbol.className = 'fa-regular fa-circle';
    taskSymbol.id = task.taskName;
    
    [taskSymbol, taskName].forEach(element => userTaskContainer.appendChild(element));
    return userTaskContainer;
}

function clearTasks(){
    const sectionContent = document.querySelector('.task-container');
    while (sectionContent.firstChild){
        sectionContent.removeChild(sectionContent.firstChild);
    }
}

function loadTasks(){
    const project = getProject()
    const tasks = project.tasks;
    const sectionContent = document.querySelector('.task-container');
    for (const task of tasks){
        const loadedTask = createTask(task);
        sectionContent.appendChild(loadedTask);
    }
}

function getProject(){
    const sectionTitle = document.querySelector('.section-title').id;
    return projects[sectionTitle];
}

function loadPage(){

    const inboxBtn = document.querySelector("#inbox")
    const todayBtn = document.querySelector("#today");
    const upcomingBtn = document.querySelector("#upcoming")

    inboxBtn.addEventListener("click", (event) => showProject(event));
    todayBtn.addEventListener("click", (event) => showProject(event));
    upcomingBtn.addEventListener("click", (event) => showProject(event));

    //Event listeners for addTask functionality
    const createTaskBtn = document.querySelector('.create-task');
    createTaskBtn.addEventListener('click', showAddTaskForm)//() => showAddTaskForm());

    //Event listeners for add Project functionality
    const createProjectBtn = document.querySelector('.create-project');
    createProjectBtn.addEventListener('click', () => showAddProjectForm());

}

/***/ }),

/***/ "./src/modules/pageelements.js":
/*!*************************************!*\
  !*** ./src/modules/pageelements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageElement": () => (/* binding */ pageElement)
/* harmony export */ });
class pageElement{
    constructor(tag, className ='', innerHTML ='', id = '', type = '', name=''){
        this.className = className;
        this.innerHTML = innerHTML;
        this.id = id;
        this.type = type;
        this.name = name;
        this.div = document.createElement(tag);
    }
    #setClassName(){
        this.className != '' ? this.div.classList.add(this.className) : null;
    }
    #setInnerHTML(){
        this.innerHTML != '' ? this.div.innerHTML = this.innerHTML : null;
    }
    #setId(){
        this.id != '' ? this.div.id = this.id : null;
    }
    #setType(){
        this.type != '' ? this.div.type = this.type : null;
    }
    #setName(){
        this.name != '' ? this.div.setAttribute('name', this.name) : null;
    }
    setInnerHTML(text){
        this.innerHTML = text;
    }
    get get(){
        this.#setClassName();
        this.#setInnerHTML();
        this.#setId();
        this.#setType();
        this.#setName();
        return this.div;
    }
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
class task{
    #taskName; #taskDescription; #dueDate; //#priority;
    constructor(taskName, taskDescription, dueDate, project='', priority=''){
        this.#taskName = taskName;
        this.#taskDescription= taskDescription;
        this.#dueDate = dueDate;
        //this.#priority = priority;
    }
    get taskName(){
        return this.#taskName;
    }
    get taskDescription(){
        return this.#taskDescription;
    }
    get dueDate(){
        return this.#dueDate;
    }
}

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });

class Project{
    #taskList; #projectName
    constructor(projectName, index=''){
        this.#projectName = projectName;
        this.#taskList = [];
        this.index = index;
    }
    addTask(task){
        this.#taskList.push(task);
    }
    removeTask(task){
        const index = this.#taskList.indexOf(task);
        this.#taskList.splice(index, 1);
    }
    get tasks(){
        return this.#taskList;
    }
    get projectName(){
        return this.#projectName;
    }
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");



_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__.loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0I7O0FBRXJDLG9EQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9wYWdlZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljLDMwMGl0YWxpYywzMDAsMTAwaXRhbGljLDEwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDYwLCA1MCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAtNXB4ICM5NGEzYjg7XFxufVxcblxcbi8qIFNpZGViYXIgU3R5bGVzKi9cXG5cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCAwcHggN3B4IC01cHggIzk0YTNiODtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5hdi1idXR0b24sXFxuLnVzZXItdGFzay1jb2xsYXBzZWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbi50YXNrcy1ieS1kYXRle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG4ubmF2LWljb257XFxuICAgIHdpZHRoOiAxOXB4O1xcbn1cXG5cXG4udGFza3MtYnktcHJvamVjdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyA+IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmd7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtcGx1c3tcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgc3R5bGVzICovXFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxle1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWN0aW9uLWNvbnRlbnQgLmZhLXBsdXN7XFxuICAgIGNvbG9yOiByZ2IoMjE5LCA2MCwgNTApO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250ZW50IC5jcmVhdGUtdGFza3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAuOTVlbTtcXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKVxcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIC8qXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICovXFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IC45OGVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmEtY2lyY2xle1xcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIEFkZCBUYXNrIElucHV0IFdpbmRvdyovXFxuXFxuLmFkZC10YXNrLWZvcm0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA1MDBweDsgLypVcGRhdGUgbGF0ZXIqL1xcbn1cXG5cXG4uYWRkLXRhc2staW5wdXQtY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFzay1uYW1lLWlucHV0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi50YXNrRGVzY0lucHV0e1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhe1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIGZvbnQtc2l6ZTogLjk1ZW07XFxufSAgICBcXG5cXG50ZXh0YXJlYXtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IC45MGVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnN1Ym1pdC10YXNrLFxcbi5zdWJtaXQtcHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b25zLFxcbi5hZGQtdGFzay1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTs7O0tBR0M7QUFDTDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxvQ0FBb0M7O0FBRXBDO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsWUFBWSxFQUFFLGVBQWU7QUFDakM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLFNBQVM7QUFDYjtBQUNBOztJQUVJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsUUFBUTtBQUNaOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwLDkwMGl0YWxpYywzMDBpdGFsaWMsMzAwLDEwMGl0YWxpYywxMDApO1xcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDYwLCA1MCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAtNXB4ICM5NGEzYjg7XFxufVxcblxcbi8qIFNpZGViYXIgU3R5bGVzKi9cXG5cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCAwcHggN3B4IC01cHggIzk0YTNiODtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5hdi1idXR0b24sXFxuLnVzZXItdGFzay1jb2xsYXBzZWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbi50YXNrcy1ieS1kYXRle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG4ubmF2LWljb257XFxuICAgIHdpZHRoOiAxOXB4O1xcbn1cXG5cXG4udGFza3MtYnktcHJvamVjdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyA+IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmd7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtcGx1c3tcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgc3R5bGVzICovXFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxle1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWN0aW9uLWNvbnRlbnQgLmZhLXBsdXN7XFxuICAgIGNvbG9yOiByZ2IoMjE5LCA2MCwgNTApO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250ZW50IC5jcmVhdGUtdGFza3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAuOTVlbTtcXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKVxcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIC8qXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICovXFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IC45OGVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmEtY2lyY2xle1xcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIEFkZCBUYXNrIElucHV0IFdpbmRvdyovXFxuXFxuLmFkZC10YXNrLWZvcm0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA1MDBweDsgLypVcGRhdGUgbGF0ZXIqL1xcbn1cXG5cXG4uYWRkLXRhc2staW5wdXQtY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFzay1uYW1lLWlucHV0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi50YXNrRGVzY0lucHV0e1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhe1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIGZvbnQtc2l6ZTogLjk1ZW07XFxufSAgICBcXG5cXG50ZXh0YXJlYXtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IC45MGVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnN1Ym1pdC10YXNrLFxcbi5zdWJtaXQtcHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b25zLFxcbi5hZGQtdGFzay1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHRvZG9saXN0IGZyb20gXCIuL3RvZG9saXN0LmpzXCJcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vcGFnZWVsZW1lbnRzLmpzXCI7XG5cbmNvbnN0IGluYm94ID0gbmV3IHRvZG9saXN0LlByb2plY3QoJ2luYm94Jyk7XG5cbmxldCBwcm9qZWN0cyA9IHsnaW5ib3gnOiBpbmJveH07XG5cblxuLy9cbi8vIEFkZCBQcm9qZWN0c1xuLy9cblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdEJ1dHRvbnMoKXtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9ucyA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnYWRkLXByb2plY3QtYnV0dG9ucycpLmdldDtcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdidXR0b24nLCAnc3VibWl0LXByb2plY3QnLCAnQWRkIFByb2plY3QnKS5nZXQ7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnYnV0dG9uJywgJ2NhbmNlbC1wcm9qZWN0JywnQ2FuY2VsJykuZ2V0O1xuXG4gICAgW3N1Ym1pdFByb2plY3RCdG4sIGNhbmNlbFByb2plY3RCdG5dLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0Rm9ybSgpe1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoXCJkaXZcIixcImFkZC1wcm9qZWN0LWNvbnRhaW5lclwiKS5nZXQ7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnaW5wdXQnLCAncHJvamVjdC1uYW1lLWlucHV0JywnJywnJywndGV4dCcpLmdldDtcbiAgICBjb25zdCBhZGRQcm9qZWN0YnV0dG9ucyA9IGNyZWF0ZUFkZFByb2plY3RCdXR0b25zKCk7XG4gICAgXG4gICAgW3Byb2plY3ROYW1lSW5wdXQsIGFkZFByb2plY3RidXR0b25zXS5mb3JFYWNoKGVsZW1lbnQgPT4gXG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBhZGRQcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FkZFByb2plY3RGb3JtKCl7XG4gICAgY29uc3QgcHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zaWRlYmFyJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUFkZFByb2plY3RGb3JtKCk7XG4gICAgcHJvamVjdFNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcik7XG4gICAgYWRkUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzKCl7XG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QnKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkUHJvamVjdCgpKTtcbiAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGlkZUFkZFByb2plY3RGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtjbGFzcz1cInByb2plY3QtbmFtZS1pbnB1dFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgdG9kb2xpc3QuUHJvamVjdChwcm9qZWN0TmFtZSkvLy8sIHByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdHNbcHJvamVjdE5hbWVdID0gbmV3UHJvamVjdFxuXG4gICAgY29uc3QgcHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdEJ0biA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywndXNlci1wcm9qZWN0Jyxwcm9qZWN0TmFtZSxwcm9qZWN0TmFtZSwnJyxwcm9qZWN0TmFtZSkuZ2V0O1xuICAgIHByb2plY3RTaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHNob3dQcm9qZWN0KGV2ZW50KSlcbiAgICBoaWRlQWRkUHJvamVjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFkZFByb2plY3RGb3JtKCl7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIC8vYWRkVGFza0xpc3RlbmVyKCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0KGV2ZW50KXtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi10aXRsZScpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIHNlY3Rpb25UaXRsZURpdi5pZCA9IHRhcmdldC5pZDtcbiAgICBzZWN0aW9uVGl0bGVEaXYuaW5uZXJIVE1MID0gc2VjdGlvblRpdGxlO1xuICAgIGNsZWFyVGFza3MoKVxuICAgIGlmIChzZWN0aW9uVGl0bGUgIT0gJ1RvZGF5JyB8fCBzZWN0aW9uVGl0bGUgIT0gJ1VwY29taW5nJyl7XG4gICAgICAgIGxvYWRUYXNrcygpO1xuICAgIH1cbiAgICBcbn1cblxuLy9cbi8vIFNob3cgQWRkIFRhc2sgRm9ybSBCdXR0b24gRnVuY3Rpb25hbGl0eVxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdG4oKXtcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdkaXYnLCAnY3JlYXRlLXRhc2snKS5nZXQ7XG4gICAgY29uc3QgYWRkU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGFkZFN5bWJvbC5jbGFzc05hbWUgPSAnZmEtdGhpbiBmYS1wbHVzJztcblxuICAgIGNvbnN0IGNyZWF0ZURlc2MgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJycsJ0FkZCBUYXNrJykuZ2V0O1xuICAgIFthZGRTeW1ib2wsIGNyZWF0ZURlc2NdLmZvckVhY2goZWxlbWVudCA9PiBjcmVhdGVUYXNrLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgICByZXR1cm4gY3JlYXRlVGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tY29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzaycpO1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBjcmVhdGVBZGRUYXNrRm9ybSgpO1xuICAgIFxuICAgIGFkZFRhc2tQb3B1cEJ0bi5yZW1vdmUoKTtcbiAgICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgICBhZGRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRhc2snKTtcbiAgICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FkZFRhc2tGb3JtKTtcbn1cblxuLy9cbi8vIEFkZCBUYXNrIEZvcm0gRnVuY3Rpb25hbGl0eVxuLy9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrRm9ybUlucHV0cygpe1xuICAgIGNvbnN0IGFkZFRhc2tJbnB1dENvbnRhaW5lciA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnYWRkLXRhc2staW5wdXQtY29udGFpbmVyJykuZ2V0O1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stbmFtZS1pbnB1dCcsJycsJycsJ3RleHQnKS5nZXQ7XG4gICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgndGV4dGFyZWEnLCd0YXNrLWRlc2MtaW5wdXQnLCdEZXNjcmlwdGlvbicpLmdldDtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ1dHRvbnMgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsICdpbnB1dC1idXR0b25zJykuZ2V0O1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnaW5wdXQnLCAndGFzay1kdWUtZGF0ZScsJycsJycsJ2RhdGUnKS5nZXQ7XG4gICAgaW5wdXRCdXR0b25zLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgLy9uZWVkIHRvIGFkZCBkcm9wZG93biB0byBzaG93IGV4aXN0aW5nIHByb2plY3RzXG5cbiAgICBbdGFza05hbWVJbnB1dCwgdGFza0Rlc2NJbnB1dCwgaW5wdXRCdXR0b25zXS5mb3JFYWNoKFxuICAgICAgICBlbGVtZW50ID0+IGFkZFRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0lucHV0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkVGFza0Zvcm1CdG5zKCl7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJ2FkZC10YXNrLWJ1dHRvbnMnKS5nZXQ7XG4gICAgY29uc3Qgc3VibWl0VGFza0J0biA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnYnV0dG9uJywnc3VibWl0LXRhc2snLCdBZGQgVGFzaycpLmdldDtcbiAgICBjb25zdCBjYW5jZWxUYXNrQnRuID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdidXR0b24nLCAnY2FuY2VsLXRhc2snLCAnQ2FuY2VsJykuZ2V0O1xuICAgIFtzdWJtaXRUYXNrQnRuLCBjYW5jZWxUYXNrQnRuXS5mb3JFYWNoKGVsZW1lbnQgPT4gYWRkVGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBhZGRUYXNrQnV0dG9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tGb3JtKCl7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudChcImRpdlwiLFwiYWRkLXRhc2stZm9ybS1jb250YWluZXJcIikuZ2V0O1xuICAgIGNvbnN0IGFkZFRhc2tJbnB1dENvbnRhaW5lciA9IGNyZWF0ZUFkZFRhc2tGb3JtSW5wdXRzKCk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBjcmVhdGVBZGRUYXNrRm9ybUJ0bnMoKTtcbiAgICBbYWRkVGFza0lucHV0Q29udGFpbmVyLCBhZGRUYXNrQnV0dG9uc10uZm9yRWFjaChlbGVtZW50ID0+IGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBhZGRUYXNrQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKCl7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzaycpO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2snKTtcblxuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlQWRkVGFza0Zvcm0oKSk7XG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdFRhc2soKSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tJbnB1dFZhbHVlcygpe1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbY2xhc3M9XCJ0YXNrLW5hbWUtaW5wdXRcIl0nKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MtaW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKTtcbiAgICByZXR1cm4gW3Rhc2tOYW1lLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSwgZHVlRGF0ZS52YWx1ZV07XG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tY29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhZGRUYXNrUG9wdXBCdG4gPSBjcmVhdGVBZGRUYXNrQnRuKCk7XG4gICAgYWRkVGFza0Zvcm1Db250YWluZXIucmVtb3ZlKCk7XG4gICAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza1BvcHVwQnRuKTtcbiAgICBhZGRUYXNrTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzaygpe1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tdGl0bGUnKS5pZDtcbiAgICBsZXQgdGFza05hbWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbjtcbiAgICBsZXQgZHVlRGF0ZTtcbiAgICBbdGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZV0gPSBnZXRUYXNrSW5wdXRWYWx1ZXMoKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sudGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCBkdWVEYXRlLCBjdXJyZW50UHJvamVjdCk7XG4gICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICBjbGVhclRhc2tzKCk7XG4gICAgbG9hZFRhc2tzKCk7XG4gICAgaGlkZUFkZFRhc2tGb3JtKCk7XG59XG5cbi8vXG4vLyBEaXNwbGF5IHRhc2tzXG4vL1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spe1xuICAgIGNvbnN0IHVzZXJUYXNrQ29udGFpbmVyID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdkaXYnLCd1c2VyLXRhc2stY29sbGFwc2VkJykuZ2V0O1xuICAgIGNvbnN0IHRhc2tTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgdGFza05hbWUgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJ3Rhc2stbmFtZS1jb2xsYXBzZWQnLHRhc2sudGFza05hbWUpLmdldDtcbiAgICB0YXNrU3ltYm9sLmNsYXNzTmFtZSA9ICdmYS1yZWd1bGFyIGZhLWNpcmNsZSc7XG4gICAgdGFza1N5bWJvbC5pZCA9IHRhc2sudGFza05hbWU7XG4gICAgXG4gICAgW3Rhc2tTeW1ib2wsIHRhc2tOYW1lXS5mb3JFYWNoKGVsZW1lbnQgPT4gdXNlclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiB1c2VyVGFza0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgd2hpbGUgKHNlY3Rpb25Db250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICBzZWN0aW9uQ29udGVudC5yZW1vdmVDaGlsZChzZWN0aW9uQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrcygpe1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KClcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG4gICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3Mpe1xuICAgICAgICBjb25zdCBsb2FkZWRUYXNrID0gY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZGVkVGFzayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCl7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tdGl0bGUnKS5pZDtcbiAgICByZXR1cm4gcHJvamVjdHNbc2VjdGlvblRpdGxlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCl7XG5cbiAgICBjb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIilcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG4gICAgY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwY29taW5nXCIpXG5cbiAgICBpbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBzaG93UHJvamVjdChldmVudCkpO1xuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHNob3dQcm9qZWN0KGV2ZW50KSk7XG4gICAgdXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gc2hvd1Byb2plY3QoZXZlbnQpKTtcblxuICAgIC8vRXZlbnQgbGlzdGVuZXJzIGZvciBhZGRUYXNrIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrJyk7XG4gICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBZGRUYXNrRm9ybSkvLygpID0+IHNob3dBZGRUYXNrRm9ybSgpKTtcblxuICAgIC8vRXZlbnQgbGlzdGVuZXJzIGZvciBhZGQgUHJvamVjdCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xuICAgIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93QWRkUHJvamVjdEZvcm0oKSk7XG5cbn0iLCJleHBvcnQgY2xhc3MgcGFnZUVsZW1lbnR7XG4gICAgY29uc3RydWN0b3IodGFnLCBjbGFzc05hbWUgPScnLCBpbm5lckhUTUwgPScnLCBpZCA9ICcnLCB0eXBlID0gJycsIG5hbWU9Jycpe1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgfVxuICAgICNzZXRDbGFzc05hbWUoKXtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgIT0gJycgPyB0aGlzLmRpdi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKSA6IG51bGw7XG4gICAgfVxuICAgICNzZXRJbm5lckhUTUwoKXtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgIT0gJycgPyB0aGlzLmRpdi5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTCA6IG51bGw7XG4gICAgfVxuICAgICNzZXRJZCgpe1xuICAgICAgICB0aGlzLmlkICE9ICcnID8gdGhpcy5kaXYuaWQgPSB0aGlzLmlkIDogbnVsbDtcbiAgICB9XG4gICAgI3NldFR5cGUoKXtcbiAgICAgICAgdGhpcy50eXBlICE9ICcnID8gdGhpcy5kaXYudHlwZSA9IHRoaXMudHlwZSA6IG51bGw7XG4gICAgfVxuICAgICNzZXROYW1lKCl7XG4gICAgICAgIHRoaXMubmFtZSAhPSAnJyA/IHRoaXMuZGl2LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSkgOiBudWxsO1xuICAgIH1cbiAgICBzZXRJbm5lckhUTUwodGV4dCl7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gICAgZ2V0IGdldCgpe1xuICAgICAgICB0aGlzLiNzZXRDbGFzc05hbWUoKTtcbiAgICAgICAgdGhpcy4jc2V0SW5uZXJIVE1MKCk7XG4gICAgICAgIHRoaXMuI3NldElkKCk7XG4gICAgICAgIHRoaXMuI3NldFR5cGUoKTtcbiAgICAgICAgdGhpcy4jc2V0TmFtZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kaXY7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyB0YXNre1xuICAgICN0YXNrTmFtZTsgI3Rhc2tEZXNjcmlwdGlvbjsgI2R1ZURhdGU7IC8vI3ByaW9yaXR5O1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3Q9JycsIHByaW9yaXR5PScnKXtcbiAgICAgICAgdGhpcy4jdGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGhpcy4jdGFza0Rlc2NyaXB0aW9uPSB0YXNrRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAvL3RoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICAgIGdldCB0YXNrTmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy4jdGFza05hbWU7XG4gICAgfVxuICAgIGdldCB0YXNrRGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rhc2tEZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gICAgfVxufSIsIlxuZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgI3Rhc2tMaXN0OyAjcHJvamVjdE5hbWVcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgaW5kZXg9Jycpe1xuICAgICAgICB0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLiN0YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMuI3Rhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2sodGFzayl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jdGFza0xpc3QuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgdGhpcy4jdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0IHRhc2tzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrTGlzdDtcbiAgICB9XG4gICAgZ2V0IHByb2plY3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0TmFtZTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSS5qc1wiXG5cblVJLmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9