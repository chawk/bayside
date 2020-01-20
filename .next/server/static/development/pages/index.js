module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charset: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no"
}), __jsx("meta", {
  name: "description",
  content: "{{ meta_description }}"
}), __jsx("meta", {
  name: "author",
  content: "{{ author_name }}"
}), __jsx("title", null, "CodeHawke | ", props.title), __jsx("link", {
  href: "/public/css/bootstrap.min.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "/public/css/main.css",
  rel: "stylesheet"
}))));

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", null, __jsx("nav", {
  className: "navbar navbar-expand-lg navbar-light bg-light"
}, __jsx("div", {
  className: "container"
}, __jsx("a", {
  className: "navbar-brand",
  href: "/"
}, "CodeHawke"), __jsx("button", {
  className: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, __jsx("span", {
  className: "navbar-toggler-icon"
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "navbarSupportedContent"
}, __jsx("ul", {
  className: "navbar-nav mr-auto"
}, __jsx("li", {
  className: "nav-item dropdown"
}, __jsx("a", {
  className: "nav-link dropdown-toggle",
  href: "#",
  id: "navbarDropdown",
  role: "button",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, "Learn"), __jsx("div", {
  className: "dropdown-menu",
  "aria-labelledby": "navbarDropdown"
}, __jsx("a", {
  className: "dropdown-item",
  href: "#"
}, "Python"), __jsx("a", {
  className: "dropdown-item",
  href: "#"
}, "C#"), __jsx("a", {
  className: "dropdown-item",
  href: "#"
}, "JavaScript"))), __jsx("li", {
  className: "nav-item dropdown"
}, __jsx("a", {
  className: "nav-link",
  href: "/news",
  role: "button"
}, "News"))), __jsx("form", {
  className: "form-inline my-2 my-lg-0"
}, __jsx("input", {
  className: "form-control mr-sm-2",
  type: "search",
  placeholder: "Search",
  "aria-label": "Search"
}), __jsx("button", {
  id: "search",
  className: "btn btn-outline-secondary my-2 my-sm-0",
  type: "submit"
}, "Search")))))));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index({
  blogs
}) {
  return __jsx("div", null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "test"
  }), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-5"
  }, __jsx("div", {
    className: "primary-item"
  }, __jsx("a", {
    href: "/blog?title=" + blogs[0].filename
  }, __jsx("h2", null, blogs[0].title), __jsx("img", {
    src: "/public/img/blogs/" + blogs[0].image,
    alt: blogs[0].title
  })))), __jsx("div", {
    className: "col-md-7 sub-primary-item"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("a", {
    href: "/blog?title=" + blogs[1].filename
  }, __jsx("img", {
    src: "/public/img/blogs/" + blogs[1].image,
    width: "100",
    alt: blogs[1].title
  }), __jsx("h3", null, blogs[1].title)), __jsx("a", {
    href: "/blog?title=" + blogs[2].filename
  }, __jsx("img", {
    src: "/public/img/blogs/" + blogs[2].image,
    width: "100",
    alt: blogs[2].title
  }), __jsx("h3", null, blogs[2].title))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("a", {
    href: "/blog?title=" + blogs[3].filename
  }, __jsx("img", {
    src: "/public/img/blogs/" + blogs[3].image,
    width: "100",
    alt: blogs[3].title
  }), __jsx("h3", null, blogs[3].title)), __jsx("a", {
    href: "/blog?title=" + blogs[4].filename
  }, __jsx("img", {
    src: "/public/img/blogs/" + blogs[4].image,
    width: "100",
    alt: blogs[3].title
  }), __jsx("h3", null, blogs[4].title)))))));
}

Index.getInitialProps = async ctx => {
  const fs = __webpack_require__(/*! fs */ "fs");

  let blogs = [];
  let files = fs.readdirSync("./data", {
    withFileTypes: true
  });
  const filesNames = files.filter(files => !files.isDirectory()).map(files => files.name);
  filesNames.forEach(file => {
    let blog = {};
    let data = fs.readFileSync("./data/" + file).toString();
    data = data.split("|");
    blog.title = data[0];
    blog.filename = data[1];
    blog.content = data[2];
    blog.image = data[3];
    blog.author = data[4];
    blog.date = data[5];
    blogs.push(blog);
  }); // sort by the date of the blog

  blogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // need at least 5 to support the home page.

  while (blogs.length < 5) {
    blogs.push({});
  }

  return {
    blogs: blogs
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\projects\blogging_platform\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map