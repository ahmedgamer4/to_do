import { Project } from "./project";
import { Task, TasksList } from "./task";
import { makePage } from "./helpers"

let inbox = new Project('inbox');

export function loadInbox() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(makePage(inbox))
}

