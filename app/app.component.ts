import { Component, OnInit } from '@angular/core';
import { NgForm } from 		'@angular/common';

import { ProjectService } from './project.service';

import { ProjectList } from './project-list.component';
import { Project } from './project';

@Component({
  selector: 'my-app',
  directives: [ProjectList],
  templateUrl: 'app/app.component.html',
  providers: [ProjectService]
})

export class AppComponent implements OnInit {
	public projects = Project[];
	
	constructor(private projectService: ProjectService){ }
	
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
