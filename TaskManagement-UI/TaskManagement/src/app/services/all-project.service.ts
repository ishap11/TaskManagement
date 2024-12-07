import { Injectable } from '@angular/core';
import { Project } from '../core/model/project';

@Injectable({
  providedIn: 'root'
})
export class AllProjectService {

  constructor() { }

  private projects: Project[] = [
    { id: 1, name: 'Project 1', tasks: 24, members: 5, progress: 70 },
    { id: 2, name: 'Project 2', tasks: 12, members: 3, progress: 40 },
    { id: 3, name: 'Project 3', tasks: 30, members: 8, progress: 90 },
    { id: 4, name: 'Project 4', tasks: 37, members: 10, progress: 20 },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
  
  // getProjectById(id: number): Project | undefined {
  //   return this.projects.find((project) => project.id === id);
  // }

  addProjects(project: Project): void {
    this.projects.push(project);
  }

}
