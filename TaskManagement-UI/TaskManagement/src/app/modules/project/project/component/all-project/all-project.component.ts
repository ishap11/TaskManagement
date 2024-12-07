import { Component } from '@angular/core';
import { AllProjectService } from '../../../../../services/all-project.service';
import { Project } from '../../../../../core/model/project';
import { Router } from '@angular/router';

@Component({
  selector: 'TaskManagement-all-project',
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.scss'
})
export class AllProjectComponent {
  // projects: Project[] = [];
  projects !: Project[]; 
  searchText: string = '';
  filteredProjects: Project[] = [];
  isPopupOpen = false;
  newProject: Project = { id: 0, name: '', tasks: 0, members: 0, progress: 0 };
  lastProjectId: number = 0; // Track the last used project ID

  constructor(private allprojectservice : AllProjectService , private router : Router) {}
  
  ngOnInit(): void {
    this.projects = this.allprojectservice.getProjects();
    this.filteredProjects = [...this.projects];

    if (this.projects.length > 0) {
      this.lastProjectId = Math.max(...this.projects.map(project => project.id)); // Get the highest ID
    }
  }

  filterProjects(status: string): void {
    if (status === 'active') {
      this.filteredProjects = this.projects.filter((p) => p.progress > 0 && p.progress < 100);
    } else if (status === 'completed') {
      this.filteredProjects = this.projects.filter((p) => p.progress === 100);
    } else {
      this.filteredProjects = [...this.projects];
    }
    this.applySearchFilter();
  }
  
  applySearchFilter(): void {
    if (this.searchText) {
      this.filteredProjects = this.filteredProjects.filter((project) =>
        project.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  // Open the Add Task popup
  openTaskPopup() {
    this.newProject.id = this.lastProjectId + 1;
    this.isPopupOpen = true;
  }

  // Close the Add Task popup
  closePopup() {
    this.isPopupOpen = false;
  }

  // // Add new project
  addProject() {
    if (this.newProject.name && this.newProject.tasks && this.newProject.members !== undefined) {
      // Add the new project to the projects list
      this.projects.push({ ...this.newProject });
      this.filteredProjects = [...this.projects];
      
      // Update the last project ID
      this.lastProjectId = this.newProject.id;

      // Reset the new project form
      this.newProject = { id: 0, name: '', tasks: 0, members: 0, progress: 0 };
      
      // Close the popup
      this.closePopup();
    }
  }
  
  viewDetails() {
    this.router.navigate(['/project/view-project-details'])
  }

}
