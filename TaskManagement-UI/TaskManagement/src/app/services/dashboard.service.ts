import { Injectable } from '@angular/core';
import { Task } from '../core/model/task';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private tasks: Task[] = [ // specify the type of tasks array
    { name: 'Implement user authentication', dueDate: '2023-05-15', progress: 75, status: 'in-progress' },
    { name: 'Design landing page', dueDate: '2023-05-20', progress: 30, status: 'in-progress' },
    { name: 'Set up CI/CD pipeline', dueDate: '2023-05-25', progress: 0, status: 'not-started' },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}
