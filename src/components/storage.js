export default class Storage {
  saveProject(data) {
    localStorage.setItem(data.name, JSON.stringify(data));
  }

  deleteProject(data) {
    localStorage.removeItem(data.name)
  }
}