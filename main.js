/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Task {\r\n    constructor(title, description, status, colorCode) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.status = status;\r\n        this.colorCode = colorCode;\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n    getDescription() {\r\n        return this.description;\r\n    }\r\n\r\n    getColorCode() {\r\n        return this.colorCode;\r\n    }\r\n}\r\n\r\nclass Project {\r\n    constructor(title, description, colorCode) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.tasks = [];\r\n        this.colorCode = colorCode;\r\n    }\r\n\r\n    addTask(title, description, status, colorCode) {\r\n        this.tasks.push(new Task(title, description, status, colorCode));\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    length() {\r\n        return this.tasks.length;\r\n    }\r\n\r\n    deleteTask(index) {\r\n        this.tasks.splice(index, 1);\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\nlet projectList = [];\r\nlet defaultProject = new Project(\r\n    \"Default Project\",\r\n    \"This is a default project\",\r\n    \"Blue\"\r\n);\r\nprojectList.push(defaultProject);\r\n\r\nlet defaultTask = new Task(\r\n    \"Default Task\",\r\n    \"This is a default task\",\r\n    \"In Progress\",\r\n    \"red\"\r\n);\r\ndefaultProject.addTask(defaultTask);\r\n\r\nfunction renderProjectlist() {\r\n    const listOfProjects = document.querySelector(\".project-list\");\r\n    listOfProjects.innerHTML = \"\";\r\n    for (let i = 0; i < projectList.length; i++) {\r\n        const projectCard = document.createElement(\"div\");\r\n        projectCard.classList.add(\"project-card\");\r\n        listOfProjects.appendChild(projectCard);\r\n        projectCard.innerHTML = `\r\n        <div class=\"project-card\" value=\"${i}\">\r\n        <p class=\"project-title\">${projectList[i].title}</p>\r\n    </div>`;\r\n        projectCard.addEventListener(\"click\", (e) => {\r\n            renderTasklist(projectList[i]);\r\n            currentProject = i;\r\n        });\r\n    }\r\n}\r\n\r\nfunction renderTasklist(project) {\r\n    const projectTitle = document.querySelector(\".tasks-title\");\r\n    const toDoTasks = document.querySelector(\".to-do\");\r\n    const inProgressTasks = document.querySelector(\".in-progress\");\r\n    const completedTasks = document.querySelector(\".completed\");\r\n    projectTitle.innerHTML = project.title;\r\n    toDoTasks.innerHTML = \"\";\r\n    inProgressTasks.innerHTML = \"\";\r\n    completedTasks.innerHTML = \"\";\r\n    for (let i = 0; i < project.length(); i++) {\r\n        const taskToAdd = `<div class=\"task-card\" id=\"${i}\"><p>${project.tasks[i].title}</p>\r\n        <p>${project.tasks[i].description}</p>\r\n        <p>${project.tasks[i].colorCode}</p>\r\n        </div>\r\n        </div>`;\r\n        if (project.tasks[i].status === \"To Do\") {\r\n            toDoTasks.innerHTML += taskToAdd;\r\n        } else if (project.tasks[i].status === \"In Progress\") {\r\n            inProgressTasks.innerHTML += taskToAdd;\r\n        } else if (project.tasks[i].status === \"Completed\") {\r\n            completedTasks.innerHTML += taskToAdd;\r\n        }\r\n        const taskCard = document.querySelector(`.task-card`);\r\n        taskCard.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            editTask(project.tasks[i]);\r\n            currentTaskIndex = i;\r\n        });\r\n    }\r\n}\r\n\r\nfunction initRender() {\r\n    renderProjectlist(projectList);\r\n    renderTasklist(defaultProject);\r\n}\r\n\r\nconst projectModal = document.querySelector(\"#project-modal\");\r\nconst taskModal = document.querySelector(\"#task-modal\");\r\nconst editTaskModal = document.querySelector(\"#task-modal-edit\");\r\n\r\nconst projectCloseBtn = document.querySelector(\"#project-close\");\r\nprojectCloseBtn.addEventListener(\"click\", () => {\r\n    projectModal.style.display = \"none\";\r\n});\r\n\r\nconst taskCloseBtn = document.querySelector(\"#task-close\");\r\ntaskCloseBtn.addEventListener(\"click\", () => {\r\n    taskModal.style.display = \"none\";\r\n});\r\n\r\nconst taskEditCloseBtn = document.querySelector(\"#task-edit-close\");\r\ntaskEditCloseBtn.addEventListener(\"click\", () => {\r\n    editTaskModal.style.display = \"none\";\r\n});\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project\");\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n    projectModal.style.display = \"block\";\r\n});\r\n\r\nconst addTaskBtn = document.querySelector(\".add-task\");\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n    taskModal.style.display = \"block\";\r\n});\r\n\r\nconst submitProjectBtn = document.querySelector(\".project-submit\");\r\nsubmitProjectBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#project-title\").value;\r\n    const description = document.querySelector(\"#project-description\").value;\r\n    const colorCode = document.querySelector(\"#project-color\").value;\r\n    e.preventDefault();\r\n    projectList.push(new Project(title, description, colorCode));\r\n    renderProjectlist();\r\n    projectModal.style.display = \"none\";\r\n    renderTasklist(projectList[projectList.length - 1]);\r\n    currentProject = projectList.length - 1;\r\n});\r\n\r\nconst submitTaskBtn = document.querySelector(\".task-submit\");\r\nsubmitTaskBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#task-title\").value;\r\n    const description = document.querySelector(\"#task-description\").value;\r\n    const status = document.querySelector(\"#task-status\").value;\r\n    const colorCode = document.querySelector(\"#task-color\").value;\r\n    e.preventDefault();\r\n    projectList[currentProject].tasks.push(\r\n        new Task(title, description, status, colorCode)\r\n    );\r\n    taskModal.style.display = \"none\";\r\n    renderTasklist(projectList[currentProject]);\r\n});\r\n\r\nconst submitTaskEditBtn = document.querySelector(\".task-submit-edit\");\r\nsubmitTaskEditBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#task-title-edit\").value;\r\n    const description = document.querySelector(\"#task-description-edit\").value;\r\n    const status = document.querySelector(\"#task-status-edit\").value;\r\n    const colorCode = document.querySelector(\"#task-color-edit\").value;\r\n    e.preventDefault();\r\n    projectList[currentProject].tasks[currentTaskIndex].title = title;\r\n    projectList[currentProject].tasks[currentTaskIndex].description =\r\n        description;\r\n    projectList[currentProject].tasks[currentTaskIndex].status = status;\r\n    projectList[currentProject].tasks[currentTaskIndex].colorCode = colorCode;\r\n    renderTasklist(projectList[currentProject]);\r\n    editTaskModal.style.display = \"none\";\r\n});\r\n\r\nconst deleteTaskBtn = document.querySelector(\".task-delete\");\r\ndeleteTaskBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    projectList[currentProject].tasks.splice(currentTaskIndex, 1);\r\n    renderTasklist(projectList[currentProject]);\r\n    editTaskModal.style.display = \"none\";\r\n});\r\n\r\nfunction editTask(task) {\r\n    editTaskModal.style.display = \"block\";\r\n    document.querySelector(\"#task-title-edit\").value = task.title;\r\n    document.querySelector(\"#task-description-edit\").value = task.description;\r\n    document.querySelector(\"#task-status-edit\").value = task.status;\r\n    document.querySelector(\"#task-color-edit\").selected = task.colorCode;\r\n    currentTask = task;\r\n}\r\n\r\n//webapp start\r\ninitRender();\r\nlet currentProject = 0;\r\nlet currentTask = 0;\r\nlet currentTaskIndex;\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;