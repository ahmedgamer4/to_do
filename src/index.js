import { ProjectsList } from "./components/project";
import { loadInbox } from './components/inbox'

let projectsList = new ProjectsList();
const inbox_btn = document.getElementById('inbox-button');

inbox_btn.onclick = loadInbox;