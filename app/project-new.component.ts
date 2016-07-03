import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-new',
  templateUrl: 'app/project-new.component.html'
})
export class ProjectNew implements OnInit {
  public projects: Project[];
  constructor(private projectService: ProjectService) { }

  getProjects(){
		this.projectService.getProjects().then(projects => this.projects = projects);
	}

	addProject(project: any): void{
		this.projects.push({name: project.name, hours: +project.hours});
		project.name = '';
		project.hours = 0;
	}

  ngOnInit() {
    this.getProjects();  
  }
}