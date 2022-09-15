import { Task } from "./task";
import format from "date-fns/format";
import setDate from "./helpers";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasksList = [];
  }

  addTask(task) {
    this.tasksList.push(task);
  }

  showTasks() {
    const tasksPlace = document.querySelector('.tasks-place');
    tasksPlace.textContent = '';

    for (let item of this.tasksList) {
      const task_container = document.createElement('div');
      task_container.classList.add('task');
  
      const title = document.createElement('div');
      title.classList.add('task-title');
      title.textContent = item.title;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('form-check-input');
  
      const left = document.createElement('div');
      left.classList.add('task-left');
      left.appendChild(checkbox);
      left.appendChild(title);
  
      const date = document.createElement('input');
      date.type = 'date';
      date.classList.add('dateInput');
      date.value = item.dueDate;

  
      const details = document.createElement('div');
      details.classList.add('task-details');
      details.textContent = item.description;
  
      task_container.appendChild(left);
      task_container.appendChild(date);
  
      tasksPlace.appendChild(task_container);
  
      checkbox.onchange = e => {
        this.tasksList.splice(this.tasksList.indexOf(item), 1);
        this.showTasks();
      }
    }
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

