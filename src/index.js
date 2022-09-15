import { ProjectsList } from "./components/project";
import { loadInbox } from './components/inbox';
import { Project } from './components/project';
import { makePage, addTask } from './components/helpers'

let projectsList = new ProjectsList();
let inbox = new Project('inbox');
let current_page;
projectsList.addProject(inbox);
const inbox_btn = document.getElementById('inbox-button');
const popup = document.querySelector('.popup');
const close = document.getElementById('close');
const main = document.getElementById('main');
const projectsPlace = document.querySelector('.project-place');
const projectBtn = document.querySelector('.add-project');
const add_btn = document.getElementById('submit');
const tasksPlace = document.querySelector('.tasks-place');

function load(project) {
  main.textContent = '';
  main.appendChild(makePage(project))
}

function handleTasks() {
  current_page.showTasks();
}

function projectToList() {
  let name = document.querySelector('.form-control').value;
  let projectItem = new Project(name);

  if (name == "" || projectsList.list.includes(projectItem)) {
    return;
  }
  projectsList.addProject(projectItem);

  const project = document.createElement('button');
  project.classList.add('project');
  project.textContent = name;

  project.addEventListener('click', e => {
    load(projectItem);
    current_page = projectItem;
    projectItem.showTasks();
  });

  projectsPlace.appendChild(project);
}

inbox_btn.onclick = () => {
  current_page = inbox;
  load(inbox); 
  inbox.showTasks();
}

close.addEventListener('click', () => {
  popup.classList.add('hidden');
});

projectBtn.onclick = projectToList;

add_btn.onclick = () => {
  addTask(current_page);
  handleTasks();
  popup.classList.add('hidden');
};