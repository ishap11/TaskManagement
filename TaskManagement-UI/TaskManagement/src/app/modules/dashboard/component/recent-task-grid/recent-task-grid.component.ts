import { Component } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import { Task } from '../../../../core/model/task';
// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
@Component({
  selector: 'TaskManagement-recent-task-grid',
  templateUrl: './recent-task-grid.component.html',
  styleUrl: './recent-task-grid.component.scss'
})
export class RecentTaskGridComponent {
  tasks: Task[] = []; // Initialize tasks as an empty array
  searchText = '';
  filterStatus = '';
  isPopupOpen = false;
  newTask: Task = { name: '', dueDate: '', progress: 0, status: 'not-started' };

  constructor(private taskService: DashboardService) {}

  ngOnInit() {
    // Fetch the tasks from TaskService
    this.tasks = this.taskService.getTasks();
  }

  // Filter tasks based on search text and selected status
  filteredTasks(): Task[] {
    let filtered = this.tasks;

    if (this.searchText) {
      filtered = filtered.filter(task =>
        task.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.filterStatus) {
      filtered = filtered.filter(task =>
        task.status === this.filterStatus
      );
    }

    return filtered;
  }

  // Open the Add Task popup
  openTaskPopup() {
    this.isPopupOpen = true;
  }

  // Close the Add Task popup
  closePopup() {
    this.isPopupOpen = false;
  }

  // Add new task
  addTask() {
    if (this.newTask.name && this.newTask.dueDate) {
      this.taskService.addTask(this.newTask); // Add the task to the service
      this.newTask = { name: '', dueDate: '', progress: 0, status: 'not-started' }; // Reset new task form
      this.closePopup(); // Close the popup
    }
  }

}
