import { Task } from "./task";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasksList = [];
  }

  removeTask(task) {
    this.tasksList.splice(this.tasksList.indexOf(task), 1);
  }

  addTask(task) {
    this.tasksList.push(task);
  }
}

export class ProjectsList {
  constructor() {
    this.list = [];
  }

  removeProject(project) {
    this.list.splice(this.list.indexOf(project), 1);
  }

  addProject(project) {
    this.list.push(project);
  }
}