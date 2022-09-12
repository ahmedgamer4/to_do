export class Task {
  constructor(title, details='', dueDate='no date', priority='normal') {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
