/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadAboutPage() {
    const div = document.createElement('div');
    div.textContent = 'about page';
    document.body.append(div);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutPage);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFooter": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");


function loadFooter() {
    const footer = document.createElement('footer');
    footer.class = 'footer';
    footer.append((0,_header__WEBPACK_IMPORTED_MODULE_0__.loadNav)(['Facebook', 'Instagram', 'Twitter']));
    document.body.append(footer);
    return footer;
}



/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
function loadPage() {
    return console.log(this.textContent);
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader),
/* harmony export */   "loadNav": () => (/* binding */ loadNav),
/* harmony export */   "loadNavItem": () => (/* binding */ loadNavItem),
/* harmony export */   "loadNavList": () => (/* binding */ loadNavList)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


function loadHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    let navList = ['About', 'Menu', 'Contact', 'Order'];
    header.class = 'header';
    logo.textContent = 'Ramen Shop';
    header.append(logo);
    header.append(loadNav(navList));
    document.body.append(header);
    return header;
}

function loadNav(navList) {
    const nav = document.createElement('nav');
    nav.class = 'nav';
    nav.append(loadNavList(navList));
    return nav;
}

function loadNavList(navList) {
    const ul = document.createElement('ul');
    navList.map(navItem => ul.append(loadNavItem(navItem)));
    return ul;
}

function loadNavItem(item) {
    const navItem = document.createElement('li');
    navItem.classList = 'nav-item';
    navItem.textContent = item;
    navItem.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_0__.loadPage)
    return navItem;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenu() {
    const div = document.createElement('div');
    div.textContent = 'menu';
    document.body.append(div);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





(0,_header__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
(0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_footer__WEBPACK_IMPORTED_MODULE_1__.loadFooter)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnREFBUTtBQUM5QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7VUNOdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNBO0FBQ0Y7QUFDVjtBQUMxQjtBQUNBLG1EQUFVO0FBQ1Ysa0RBQWE7QUFDYixtREFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQWJvdXRQYWdlKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnYWJvdXQgcGFnZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaXYpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXRQYWdlOyIsImltcG9ydCB7IGxvYWROYXYgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5jbGFzcyA9ICdmb290ZXInO1xyXG4gICAgZm9vdGVyLmFwcGVuZChsb2FkTmF2KFsnRmFjZWJvb2snLCAnSW5zdGFncmFtJywgJ1R3aXR0ZXInXSkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9vdGVyKTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRGb290ZXIgfTsiLCJmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLnRleHRDb250ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZFBhZ2UgfTsiLCJpbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbGV0IG5hdkxpc3QgPSBbJ0Fib3V0JywgJ01lbnUnLCAnQ29udGFjdCcsICdPcmRlciddO1xyXG4gICAgaGVhZGVyLmNsYXNzID0gJ2hlYWRlcic7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ1JhbWVuIFNob3AnO1xyXG4gICAgaGVhZGVyLmFwcGVuZChsb2dvKTtcclxuICAgIGhlYWRlci5hcHBlbmQobG9hZE5hdihuYXZMaXN0KSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE5hdihuYXZMaXN0KSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5jbGFzcyA9ICduYXYnO1xyXG4gICAgbmF2LmFwcGVuZChsb2FkTmF2TGlzdChuYXZMaXN0KSk7XHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTmF2TGlzdChuYXZMaXN0KSB7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZMaXN0Lm1hcChuYXZJdGVtID0+IHVsLmFwcGVuZChsb2FkTmF2SXRlbShuYXZJdGVtKSkpO1xyXG4gICAgcmV0dXJuIHVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTmF2SXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG5hdkl0ZW0uY2xhc3NMaXN0ID0gJ25hdi1pdGVtJztcclxuICAgIG5hdkl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQYWdlKVxyXG4gICAgcmV0dXJuIG5hdkl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRIZWFkZXIsIGxvYWROYXYsIGxvYWROYXZMaXN0LCBsb2FkTmF2SXRlbSB9OyIsImZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnbWVudSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaXYpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgbG9hZEZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgbG9hZEFib3V0UGFnZSBmcm9tIFwiLi9hYm91dFwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5sb2FkSGVhZGVyKCk7XHJcbmxvYWRBYm91dFBhZ2UoKTtcclxubG9hZEZvb3RlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==