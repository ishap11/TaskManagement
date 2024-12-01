import { Component } from '@angular/core';
import { AllProjectService } from '../../../../../services/all-project.service';
import { Project } from '../../../../../core/model/project';

@Component({
  selector: 'TaskManagement-all-project',
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.scss'
})
export class AllProjectComponent {
  projects: Project[] = [];
  filteredProjects: Project[] = [];

  constructor(private allproject : AllProjectService) {}
  
  ngOnInit(): void {
    this.projects = this.allproject.getProjects();
    this.filteredProjects = [...this.projects];
  }

  filterProjects(status: string): void {
    if (status === 'active') {
      this.filteredProjects = this.projects.filter((p) => p.progress > 0 && p.progress < 100);
    } else if (status === 'completed') {
      this.filteredProjects = this.projects.filter((p) => p.progress === 100);
    } else {
      this.filteredProjects = [...this.projects];
    }
  }

}
