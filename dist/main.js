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

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/components/task.js\");\n\n\n\nfunction makePage(project) {\n  const container = document.createElement('div');\n  container.classList.add('container');\n\n  const title = document.createElement('h1');\n  title.classList.add(project.name);  \n  title.textContent = project.name;\n\n  const tasksPlace = document.createElement('div');\n  tasksPlace.classList.add('tasks-place');\n\n  const add_btn = document.createElement('button');\n  add_btn.classList.add('add-btn');\n  add_btn.textContent = 'Add';\n\n  const popup = document.querySelector('.popup');\n  add_btn.onclick = () => {\n    popup.classList.remove('hidden');\n  }\n\n  container.appendChild(title);\n  container.appendChild(tasksPlace);\n  container.appendChild(add_btn);\n\n  return container;\n}\n\nfunction addTask(project) {\n  const taskTitle = document.getElementById('title').value;\n  const taskDetails = document.getElementById('details').value;\n  const dueDate = document.getElementById('date').value;\n\n  let task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(taskTitle, taskDetails, dueDate);\n\n  project.tasksList.push(task);\n}\n\n\n\n\n//# sourceURL=webpack://to_do/./src/components/helpers.js?");

/***/ }),

/***/ "./src/components/inbox.js":
/*!*********************************!*\
  !*** ./src/components/inbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadInbox\": () => (/* binding */ loadInbox)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/components/task.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.js\");\n\n\n\n\nlet inbox = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('inbox');\n\nfunction loadInbox() {\n  \n}\n\n\n\n//# sourceURL=webpack://to_do/./src/components/inbox.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"ProjectsList\": () => (/* binding */ ProjectsList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/components/task.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.js\");\n\n\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasksList = [];\n  }\n\n  addTask(task) {\n    this.tasksList.push(task);\n  }\n\n  showTasks() {\n    const tasksPlace = document.querySelector('.tasks-place');\n    tasksPlace.textContent = '';\n\n    for (let item of this.tasksList) {\n      const task_container = document.createElement('div');\n      task_container.classList.add('task');\n  \n      const title = document.createElement('div');\n      title.classList.add('task-title');\n      title.textContent = item.title;\n  \n      const checkbox = document.createElement('input');\n      checkbox.type = 'checkbox';\n      checkbox.classList.add('form-check-input');\n  \n      const left = document.createElement('div');\n      left.classList.add('task-left');\n      left.appendChild(checkbox);\n      left.appendChild(title);\n  \n      const date = document.createElement('input');\n      date.type = 'date';\n      date.classList.add('dateInput');\n      date.value = item.dueDate;\n\n  \n      const details = document.createElement('div');\n      details.classList.add('task-details');\n      details.textContent = item.description;\n  \n      task_container.appendChild(left);\n      task_container.appendChild(date);\n  \n      tasksPlace.appendChild(task_container);\n  \n      checkbox.onchange = e => {\n        this.tasksList.splice(this.tasksList.indexOf(item), 1);\n        this.showTasks();\n      }\n    }\n  }\n}\n\nclass ProjectsList {\n  constructor() {\n    this.list = [];\n  }\n\n  removeProject(project) {\n    this.list.splice(this.list.indexOf(project), 1);\n  }\n\n  addProject(project) {\n    this.list.push(project);\n  }\n}\n\n\n\n//# sourceURL=webpack://to_do/./src/components/project.js?");

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, details='', dueDate='no date', priority='normal') {\n    this.title = title;\n    this.details = details;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n\n\n//# sourceURL=webpack://to_do/./src/components/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project */ \"./src/components/project.js\");\n/* harmony import */ var _components_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inbox */ \"./src/components/inbox.js\");\n/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/helpers */ \"./src/components/helpers.js\");\n\n\n\n\n\nlet projectsList = new _components_project__WEBPACK_IMPORTED_MODULE_0__.ProjectsList();\nlet inbox = new _components_project__WEBPACK_IMPORTED_MODULE_0__.Project('inbox');\nlet current_page;\nprojectsList.addProject(inbox);\nconst inbox_btn = document.getElementById('inbox-button');\nconst popup = document.querySelector('.popup');\nconst close = document.getElementById('close');\nconst main = document.getElementById('main');\nconst projectsPlace = document.querySelector('.project-place');\nconst projectBtn = document.querySelector('.add-project');\nconst add_btn = document.getElementById('submit');\nconst tasksPlace = document.querySelector('.tasks-place');\n\nfunction load(project) {\n  main.textContent = '';\n  main.appendChild((0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.makePage)(project))\n}\n\nfunction handleTasks() {\n  current_page.showTasks();\n}\n\nfunction projectToList() {\n  let name = document.querySelector('.form-control').value;\n  let projectItem = new _components_project__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n\n  if (name == \"\" || projectsList.list.includes(projectItem)) {\n    return;\n  }\n  projectsList.addProject(projectItem);\n\n  const project = document.createElement('button');\n  project.classList.add('project');\n  project.textContent = name;\n\n  project.addEventListener('click', e => {\n    load(projectItem);\n    current_page = projectItem;\n    projectItem.showTasks();\n  });\n\n  projectsPlace.appendChild(project);\n}\n\ninbox_btn.onclick = () => {\n  current_page = inbox;\n  load(inbox); \n  inbox.showTasks();\n}\n\nclose.addEventListener('click', () => {\n  popup.classList.add('hidden');\n});\n\nprojectBtn.onclick = projectToList;\n\nadd_btn.onclick = () => {\n  (0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.addTask)(current_page);\n  handleTasks();\n  popup.classList.add('hidden');\n};\n\n//# sourceURL=webpack://to_do/./src/index.js?");

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