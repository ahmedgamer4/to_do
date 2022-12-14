import { Task } from "./task";
import format from "date-fns/format";

export function makePage(project) {
  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add(project.name);  
  title.textContent = project.name;

  const tasksPlace = document.createElement('div');
  tasksPlace.classList.add('tasks-place');

  const add_btn = document.createElement('button');
  add_btn.classList.add('add-btn');
  add_btn.textContent = 'Add';

  const popup = document.querySelector('.popup');
  add_btn.onclick = () => {
    popup.classList.remove('hidden');
  }

  container.appendChild(title);
  container.appendChild(tasksPlace);
  container.appendChild(add_btn);

  return container;
}

export function addTask(project) {
  const taskTitle = document.getElementById('title').value;
  const taskDetails = document.getElementById('details').value;
  const dueDate = document.getElementById('date').value;

  let task = new Task(taskTitle, taskDetails, dueDate);

  project.tasksList.push(task);
}


